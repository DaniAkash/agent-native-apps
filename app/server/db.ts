import type { Invoice } from './schemas/invoice'

const data = new Map<string, Invoice>()

const seed: Invoice[] = [
  {
    id: 'inv_01HZX9',
    customerId: 'cus_acme',
    customerName: 'ACME Corp',
    amount: 1200,
    currency: 'USD',
    status: 'paid',
    note: 'Q1 retainer',
    createdAt: '2026-04-01T09:00:00Z',
  },
  {
    id: 'inv_02HZ4P',
    customerId: 'cus_globex',
    customerName: 'Globex',
    amount: 480,
    currency: 'USD',
    status: 'sent',
    note: 'May infra audit',
    createdAt: '2026-05-01T15:30:00Z',
  },
  {
    id: 'inv_03HZL2',
    customerId: 'cus_initech',
    customerName: 'Initech',
    amount: 900,
    currency: 'USD',
    status: 'overdue',
    note: 'TPS report system, phase II',
    createdAt: '2026-04-12T11:00:00Z',
  },
]

for (const inv of seed) data.set(inv.id, inv)

const slugify = (s: string) =>
  s.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toLowerCase() || 'cust'

let counter = data.size

export const db = {
  list(): Invoice[] {
    return [...data.values()].sort((a, b) =>
      a.createdAt < b.createdAt ? 1 : -1,
    )
  },

  get(id: string): Invoice | undefined {
    return data.get(id)
  },

  create(input: { customerName: string; amount: number; note?: string }): Invoice {
    counter += 1
    const id = `inv_${counter.toString().padStart(2, '0')}${Date.now().toString(36).toUpperCase().slice(-4)}`
    const invoice: Invoice = {
      id,
      customerId: `cus_${slugify(input.customerName)}`,
      customerName: input.customerName,
      amount: input.amount,
      currency: 'USD',
      status: 'draft',
      note: input.note,
      createdAt: new Date().toISOString(),
    }
    data.set(id, invoice)
    return invoice
  },

  send(id: string): Invoice | undefined {
    const inv = data.get(id)
    if (!inv) return undefined
    const updated: Invoice = { ...inv, status: 'sent' }
    data.set(id, updated)
    return updated
  },

  markPaid(id: string): Invoice | undefined {
    const inv = data.get(id)
    if (!inv) return undefined
    const updated: Invoice = { ...inv, status: 'paid' }
    data.set(id, updated)
    return updated
  },

  delete(id: string): boolean {
    return data.delete(id)
  },
}
