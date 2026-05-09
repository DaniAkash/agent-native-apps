import { z } from '@hono/zod-openapi'

export const InvoiceStatusSchema = z
  .enum(['draft', 'sent', 'paid', 'overdue'])
  .openapi('InvoiceStatus')

export const InvoiceSchema = z
  .object({
    id: z.string().openapi({ example: 'inv_01HZX9' }),
    customerId: z.string().openapi({ example: 'cus_acme' }),
    customerName: z.string().openapi({ example: 'ACME Corp' }),
    amount: z
      .number()
      .nonnegative()
      .openapi({ example: 200, description: 'Amount in dollars (USD).' }),
    currency: z.literal('USD').openapi({ example: 'USD' }),
    status: InvoiceStatusSchema,
    note: z.string().optional().openapi({ example: 'Q2 retainer' }),
    createdAt: z.string().datetime().openapi({ example: '2026-05-08T17:00:00Z' }),
  })
  .openapi('Invoice')

export type Invoice = z.infer<typeof InvoiceSchema>

export const CreateInvoiceSchema = z
  .object({
    customerName: z.string().min(1).openapi({ example: 'ACME Corp' }),
    amount: z
      .number()
      .positive()
      .openapi({ example: 200, description: 'Amount in dollars (USD).' }),
    note: z.string().optional().openapi({ example: 'Q2 retainer' }),
  })
  .openapi('CreateInvoice')

export type CreateInvoice = z.infer<typeof CreateInvoiceSchema>

export const InvoiceListSchema = z
  .object({
    items: z.array(InvoiceSchema),
    total: z.number().int().nonnegative(),
  })
  .openapi('InvoiceList')

export const InvoiceIdParamSchema = z
  .object({
    id: z.string().openapi({
      param: { name: 'id', in: 'path' },
      example: 'inv_01HZX9',
    }),
  })
  .openapi('InvoiceIdParam')

export const ErrorSchema = z
  .object({
    error: z.string().openapi({ example: 'Invoice not found.' }),
  })
  .openapi('Error')
