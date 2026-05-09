#!/usr/bin/env bun
import { Command } from 'commander'
import type { Invoice } from '../server/schemas/invoice'

const API_BASE = process.env.SHIPPED_API ?? 'http://localhost:3001/api'

const c = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  italic: '\x1b[3m',
  violet: '\x1b[38;5;141m',
  plum: '\x1b[38;5;91m',
  green: '\x1b[38;5;78m',
  blue: '\x1b[38;5;75m',
  amber: '\x1b[38;5;215m',
  pink: '\x1b[38;5;218m',
  gray: '\x1b[38;5;245m',
}

function statusColor(status: Invoice['status']) {
  switch (status) {
    case 'draft': return c.gray
    case 'sent': return c.blue
    case 'paid': return c.green
    case 'overdue': return c.amber
  }
}

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'content-type': 'application/json', ...(init?.headers ?? {}) },
    ...init,
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.error(`${c.amber}✗${c.reset} ${res.status} ${res.statusText}${body ? `\n  ${body}` : ''}`)
    process.exit(1)
  }
  if (res.status === 204) return undefined as T
  return (await res.json()) as T
}

function printInvoice(inv: Invoice) {
  const sc = statusColor(inv.status)
  const status = `${sc}${inv.status.padEnd(7)}${c.reset}`
  const id = `${c.dim}${inv.id}${c.reset}`
  const customer = `${c.bold}${inv.customerName}${c.reset}`
  const amount = `${c.violet}$${inv.amount.toLocaleString().padStart(7)}${c.reset}`
  const note = inv.note ? `  ${c.italic}${c.gray}${inv.note}${c.reset}` : ''
  console.log(`${id}  ${status}  ${amount}  ${customer}${note}`)
}

const program = new Command()
  .name('ship')
  .description(`${c.violet}${c.italic}Shipped${c.reset} — invoice CLI for the same Hono API the web UI uses.`)
  .version('1.0.0')

program
  .command('list')
  .alias('ls')
  .description('List every invoice')
  .action(async () => {
    const { items, total } = await call<{ items: Invoice[]; total: number }>('/invoices')
    if (total === 0) {
      console.log(`${c.gray}No invoices yet. Try:${c.reset} ${c.violet}ship create "ACME" 200${c.reset}`)
      return
    }
    console.log(`${c.dim}${total} invoice${total === 1 ? '' : 's'} on the books${c.reset}\n`)
    for (const inv of items) printInvoice(inv)
  })

program
  .command('get <id>')
  .description('Look up an invoice by id')
  .action(async (id: string) => {
    const inv = await call<Invoice>(`/invoices/${id}`)
    printInvoice(inv)
    console.log()
    console.log(`${c.gray}created${c.reset}  ${inv.createdAt}`)
    console.log(`${c.gray}cust id${c.reset}  ${inv.customerId}`)
  })

program
  .command('create <customer> <amount>')
  .description('Draft a new invoice')
  .option('-n, --note <note>', 'optional internal note')
  .action(async (customer: string, amountRaw: string, opts: { note?: string }) => {
    const amount = Number(amountRaw)
    if (!Number.isFinite(amount) || amount <= 0) {
      console.error(`${c.amber}✗${c.reset} amount must be a positive number`)
      process.exit(1)
    }
    const inv = await call<Invoice>('/invoices', {
      method: 'POST',
      body: JSON.stringify({ customerName: customer, amount, note: opts.note }),
    })
    console.log(`${c.green}✓${c.reset} drafted ${c.bold}${inv.id}${c.reset}`)
    printInvoice(inv)
  })

program
  .command('send <id>')
  .description('Send a draft invoice to its customer')
  .action(async (id: string) => {
    const inv = await call<Invoice>(`/invoices/${id}/send`, { method: 'POST' })
    console.log(`${c.green}✓${c.reset} sent ${c.bold}${inv.id}${c.reset}`)
    printInvoice(inv)
  })

program
  .command('mark-paid <id>')
  .description('Mark an invoice as paid')
  .action(async (id: string) => {
    const inv = await call<Invoice>(`/invoices/${id}/mark-paid`, { method: 'POST' })
    console.log(`${c.green}✓${c.reset} paid ${c.bold}${inv.id}${c.reset}`)
    printInvoice(inv)
  })

program
  .command('delete <id>')
  .alias('rm')
  .description('Delete an invoice permanently')
  .action(async (id: string) => {
    await call<void>(`/invoices/${id}`, { method: 'DELETE' })
    console.log(`${c.green}✓${c.reset} deleted ${c.bold}${id}${c.reset}`)
  })

program.parseAsync()
