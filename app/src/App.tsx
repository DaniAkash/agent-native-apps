import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CreateInvoiceForm } from '@/components/CreateInvoiceForm'
import { InvoiceList } from '@/components/InvoiceList'
import { api, type Invoice } from '@/lib/api'

export default function App() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [busyId, setBusyId] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const { items } = await api.list()
        if (!cancelled) setInvoices(items)
      } catch (err) {
        if (!cancelled) setError((err as Error).message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const handleCreate = (invoice: Invoice) => {
    setInvoices((prev) => [invoice, ...prev])
  }

  const handleSend = async (id: string) => {
    setBusyId(id)
    try {
      const updated = await api.send(id)
      setInvoices((prev) => prev.map((inv) => (inv.id === id ? updated : inv)))
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusyId(null)
    }
  }

  const handleMarkPaid = async (id: string) => {
    setBusyId(id)
    try {
      const updated = await api.markPaid(id)
      setInvoices((prev) => prev.map((inv) => (inv.id === id ? updated : inv)))
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusyId(null)
    }
  }

  const handleDelete = async (id: string) => {
    setBusyId(id)
    try {
      await api.delete(id)
      setInvoices((prev) => prev.filter((inv) => inv.id !== id))
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusyId(null)
    }
  }

  const total = invoices.length
  const outstanding = invoices
    .filter((i) => i.status !== 'paid')
    .reduce((sum, i) => sum + i.amount, 0)

  return (
    <div className="haze-bg min-h-screen">
      <div className="mx-auto max-w-[1100px] px-6 pb-24">
        <Header />

        <main className="flex flex-col gap-8 pt-4">
          <Hero total={total} outstanding={outstanding} />

          <CreateInvoiceForm onCreated={handleCreate} />

          {error && (
            <div
              className="rounded-xl px-4 py-3 text-sm"
              style={{
                background: 'rgba(245, 158, 11, 0.10)',
                color: '#b45309',
                border: '1px solid rgba(245, 158, 11, 0.25)',
              }}
            >
              {error}
            </div>
          )}

          {loading ? (
            <div className="card text-center text-muted-violet">
              Loading invoices…
            </div>
          ) : (
            <InvoiceList
              invoices={invoices}
              busyId={busyId}
              onSend={handleSend}
              onMarkPaid={handleMarkPaid}
              onDelete={handleDelete}
            />
          )}
        </main>

        <footer className="mt-16 text-xs uppercase tracking-[0.18em] text-lavender-bloom flex items-center justify-between">
          <span>shipped · invoice console</span>
          <span>
            built with hono + zod + react. spec at{' '}
            <a
              className="underline decoration-dashed underline-offset-4"
              href="/api/openapi.json"
              target="_blank"
              rel="noreferrer"
            >
              /api/openapi.json
            </a>
          </span>
        </footer>
      </div>
    </div>
  )
}
