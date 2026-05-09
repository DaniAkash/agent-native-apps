import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPTransport } from '@hono/mcp'
import type { Context } from 'hono'
import { z } from 'zod'
import { db } from '../db'

const text = (data: unknown) => ({
  content: [
    {
      type: 'text' as const,
      text: typeof data === 'string' ? data : JSON.stringify(data, null, 2),
    },
  ],
})

const error = (msg: string) => ({
  content: [{ type: 'text' as const, text: msg }],
  isError: true,
})

function buildServer() {
  const mcp = new McpServer({
    name: 'shipped-invoices',
    version: '1.0.0',
  })

  mcp.registerTool(
    'list_invoices',
    {
      title: 'List invoices',
      description: 'List every invoice on the books, newest first.',
    },
    async () => {
      const items = db.list()
      return text({ items, total: items.length })
    },
  )

  mcp.registerTool(
    'get_invoice',
    {
      title: 'Get invoice',
      description: 'Look up a single invoice by id.',
      inputSchema: {
        id: z
          .string()
          .describe('The invoice id, for example "inv_01HZX9".'),
      },
    },
    async ({ id }) => {
      const invoice = db.get(id)
      if (!invoice) return error(`Invoice ${id} not found.`)
      return text(invoice)
    },
  )

  mcp.registerTool(
    'create_invoice',
    {
      title: 'Create invoice',
      description:
        'Draft a new invoice for a customer. Returns the created invoice in `draft` status.',
      inputSchema: {
        customerName: z
          .string()
          .min(1)
          .describe('Name of the customer being billed.'),
        amount: z
          .number()
          .positive()
          .describe('Amount in USD dollars.'),
        note: z
          .string()
          .optional()
          .describe('Optional internal note.'),
      },
    },
    async ({ customerName, amount, note }) => {
      const invoice = db.create({ customerName, amount, note })
      return text(invoice)
    },
  )

  mcp.registerTool(
    'send_invoice',
    {
      title: 'Send invoice',
      description:
        'Send a draft invoice to its customer. Flips the status from `draft` to `sent`.',
      inputSchema: { id: z.string() },
    },
    async ({ id }) => {
      const invoice = db.send(id)
      if (!invoice) return error(`Invoice ${id} not found.`)
      return text(invoice)
    },
  )

  mcp.registerTool(
    'mark_paid',
    {
      title: 'Mark invoice paid',
      description: 'Mark an existing invoice as paid.',
      inputSchema: { id: z.string() },
    },
    async ({ id }) => {
      const invoice = db.markPaid(id)
      if (!invoice) return error(`Invoice ${id} not found.`)
      return text(invoice)
    },
  )

  mcp.registerTool(
    'delete_invoice',
    {
      title: 'Delete invoice',
      description: 'Delete an invoice permanently.',
      inputSchema: { id: z.string() },
    },
    async ({ id }) => {
      const ok = db.delete(id)
      if (!ok) return error(`Invoice ${id} not found.`)
      return text({ deleted: id })
    },
  )

  return mcp
}

export async function mcpHandler(c: Context) {
  const mcp = buildServer()
  const transport = new StreamableHTTPTransport()
  await mcp.connect(transport)
  return transport.handleRequest(c)
}
