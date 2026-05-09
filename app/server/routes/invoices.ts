import { OpenAPIHono, createRoute } from '@hono/zod-openapi'
import { db } from '../db'
import {
  CreateInvoiceSchema,
  ErrorSchema,
  InvoiceIdParamSchema,
  InvoiceListSchema,
  InvoiceSchema,
} from '../schemas/invoice'

const invoices = new OpenAPIHono()

const json = <T>(schema: T) => ({
  content: { 'application/json': { schema } },
})

invoices.openapi(
  createRoute({
    method: 'get',
    path: '/',
    summary: 'List all invoices',
    tags: ['Invoices'],
    responses: {
      200: { description: 'A list of invoices.', ...json(InvoiceListSchema) },
    },
  }),
  (c) => {
    const items = db.list()
    return c.json({ items, total: items.length }, 200)
  },
)

invoices.openapi(
  createRoute({
    method: 'post',
    path: '/',
    summary: 'Create a new invoice',
    tags: ['Invoices'],
    request: { body: { required: true, ...json(CreateInvoiceSchema) } },
    responses: {
      201: { description: 'The newly created invoice.', ...json(InvoiceSchema) },
    },
  }),
  (c) => {
    const body = c.req.valid('json')
    const invoice = db.create(body)
    return c.json(invoice, 201)
  },
)

invoices.openapi(
  createRoute({
    method: 'get',
    path: '/{id}',
    summary: 'Get an invoice by id',
    tags: ['Invoices'],
    request: { params: InvoiceIdParamSchema },
    responses: {
      200: { description: 'The invoice.', ...json(InvoiceSchema) },
      404: { description: 'Invoice not found.', ...json(ErrorSchema) },
    },
  }),
  (c) => {
    const { id } = c.req.valid('param')
    const invoice = db.get(id)
    if (!invoice) return c.json({ error: 'Invoice not found.' }, 404)
    return c.json(invoice, 200)
  },
)

invoices.openapi(
  createRoute({
    method: 'post',
    path: '/{id}/send',
    summary: 'Send an invoice to the customer',
    description:
      'Marks the invoice as sent. In a real app, this would dispatch an email; the demo just flips the status.',
    tags: ['Invoices'],
    request: { params: InvoiceIdParamSchema },
    responses: {
      200: { description: 'The updated invoice.', ...json(InvoiceSchema) },
      404: { description: 'Invoice not found.', ...json(ErrorSchema) },
    },
  }),
  (c) => {
    const { id } = c.req.valid('param')
    const invoice = db.send(id)
    if (!invoice) return c.json({ error: 'Invoice not found.' }, 404)
    return c.json(invoice, 200)
  },
)

invoices.openapi(
  createRoute({
    method: 'post',
    path: '/{id}/mark-paid',
    summary: 'Mark an invoice as paid',
    tags: ['Invoices'],
    request: { params: InvoiceIdParamSchema },
    responses: {
      200: { description: 'The updated invoice.', ...json(InvoiceSchema) },
      404: { description: 'Invoice not found.', ...json(ErrorSchema) },
    },
  }),
  (c) => {
    const { id } = c.req.valid('param')
    const invoice = db.markPaid(id)
    if (!invoice) return c.json({ error: 'Invoice not found.' }, 404)
    return c.json(invoice, 200)
  },
)

invoices.openapi(
  createRoute({
    method: 'delete',
    path: '/{id}',
    summary: 'Delete an invoice',
    tags: ['Invoices'],
    request: { params: InvoiceIdParamSchema },
    responses: {
      204: { description: 'Deleted.' },
      404: { description: 'Invoice not found.', ...json(ErrorSchema) },
    },
  }),
  (c) => {
    const { id } = c.req.valid('param')
    const ok = db.delete(id)
    if (!ok) return c.json({ error: 'Invoice not found.' }, 404)
    return c.body(null, 204)
  },
)

export default invoices
