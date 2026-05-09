import { useState } from 'react'
import { api, type Invoice } from '@/lib/api'

type Props = {
  onCreated: (invoice: Invoice) => void
}

export function CreateInvoiceForm({ onCreated }: Props) {
  const [customerName, setCustomerName] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reset = () => {
    setCustomerName('')
    setAmount('')
    setNote('')
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const numericAmount = Number(amount)
    if (!customerName.trim()) return setError('Customer name is required.')
    if (!numericAmount || numericAmount <= 0)
      return setError('Amount must be greater than zero.')
    setBusy(true)
    try {
      const invoice = await api.create({
        customerName: customerName.trim(),
        amount: numericAmount,
        note: note.trim() || undefined,
      })
      onCreated(invoice)
      reset()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="card flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="eyebrow">draft a new invoice</span>
          <h2 className="font-display text-grape-vine text-2xl tracking-tight mt-1">
            Bill someone.
          </h2>
        </div>
        <code className="font-mono text-xs text-lavender-bloom hidden sm:inline">
          POST /api/invoices
        </code>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4">
        <Field label="Customer">
          <input
            className="input"
            placeholder="ACME Corp"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            disabled={busy}
            autoFocus
          />
        </Field>
        <Field label="Amount (USD)">
          <input
            className="input"
            placeholder="200"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={busy}
          />
        </Field>
      </div>

      <Field label="Note (optional)">
        <input
          className="input"
          placeholder="Q2 retainer"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          disabled={busy}
        />
      </Field>

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

      <div className="flex items-center justify-end gap-3">
        <button type="button" className="btn-ghost" onClick={reset} disabled={busy}>
          Clear
        </button>
        <button type="submit" className="btn-primary" disabled={busy}>
          {busy ? 'Creating…' : 'Create invoice'}
        </button>
      </div>
    </form>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-violet">
        {label}
      </span>
      {children}
    </label>
  )
}
