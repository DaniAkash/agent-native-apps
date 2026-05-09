// Typed fetch wrapper around the Hono API.
// In a fuller demo this would be `openapi-fetch` against generated types
// from the live /api/openapi.json — kept hand-rolled here so the demo
// has no codegen step.

import type { Invoice } from '../../server/schemas/invoice'

const base = '/api'

async function http<T>(
  path: string,
  init: RequestInit = {},
  expectJson = true,
): Promise<T> {
  const res = await fetch(`${base}${path}`, {
    headers: { 'content-type': 'application/json', ...(init.headers ?? {}) },
    ...init,
  })
  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`${res.status} ${res.statusText}${detail ? ` — ${detail}` : ''}`)
  }
  if (!expectJson || res.status === 204) return undefined as T
  return (await res.json()) as T
}

export type { Invoice }

export type InvoiceList = { items: Invoice[]; total: number }

export const api = {
  list: () => http<InvoiceList>('/invoices'),
  get: (id: string) => http<Invoice>(`/invoices/${id}`),
  create: (body: { customerName: string; amount: number; note?: string }) =>
    http<Invoice>('/invoices', { method: 'POST', body: JSON.stringify(body) }),
  send: (id: string) =>
    http<Invoice>(`/invoices/${id}/send`, { method: 'POST' }),
  markPaid: (id: string) =>
    http<Invoice>(`/invoices/${id}/mark-paid`, { method: 'POST' }),
  delete: (id: string) =>
    http<void>(`/invoices/${id}`, { method: 'DELETE' }, false),
}
