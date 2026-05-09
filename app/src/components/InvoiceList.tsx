import type { Invoice } from '@/lib/api'

type Status = Invoice['status']

const statusStyle: Record<Status, { label: string; bg: string; fg: string }> = {
  draft: { label: 'Draft', bg: 'rgba(163, 154, 193, 0.18)', fg: '#5e537c' },
  sent: { label: 'Sent', bg: 'rgba(59, 130, 246, 0.14)', fg: '#1d4ed8' },
  paid: { label: 'Paid', bg: 'rgba(16, 185, 129, 0.14)', fg: '#047857' },
  overdue: { label: 'Overdue', bg: 'rgba(245, 158, 11, 0.18)', fg: '#92400e' },
}

type Props = {
  invoices: Invoice[]
  busyId: string | null
  onSend: (id: string) => void
  onMarkPaid: (id: string) => void
  onDelete: (id: string) => void
}

export function InvoiceList({
  invoices,
  busyId,
  onSend,
  onMarkPaid,
  onDelete,
}: Props) {
  if (invoices.length === 0) {
    return (
      <div className="card text-center text-muted-violet">
        No invoices yet. Draft one above ↑
      </div>
    )
  }

  return (
    <section className="card p-0 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-ghost-gray">
        <div>
          <span className="eyebrow">all invoices</span>
          <div className="font-display text-grape-vine text-2xl tracking-tight mt-1">
            {invoices.length} on the books.
          </div>
        </div>
        <code className="font-mono text-xs text-lavender-bloom hidden sm:inline">
          GET /api/invoices
        </code>
      </div>

      <ul className="divide-y divide-ghost-gray">
        {invoices.map((inv) => {
          const s = statusStyle[inv.status]
          const busy = busyId === inv.id
          return (
            <li
              key={inv.id}
              className="px-6 py-5 flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-display text-grape-vine text-lg tracking-tight">
                    {inv.customerName}
                  </span>
                  <span
                    className="rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase px-2.5 py-1"
                    style={{ background: s.bg, color: s.fg }}
                  >
                    {s.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-lavender-bloom">
                  <code className="font-mono">{inv.id}</code>
                  <span>•</span>
                  <span>{new Date(inv.createdAt).toLocaleDateString()}</span>
                  {inv.note && (
                    <>
                      <span>•</span>
                      <span className="italic font-display text-muted-violet truncate max-w-xs">
                        {inv.note}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="font-display text-grape-vine text-2xl tracking-tight tabular-nums">
                ${inv.amount.toLocaleString()}
                <span className="text-xs font-sans tracking-[0.18em] text-lavender-bloom ml-2">
                  {inv.currency}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {inv.status === 'draft' && (
                  <button
                    className="btn-ghost"
                    onClick={() => onSend(inv.id)}
                    disabled={busy}
                  >
                    {busy ? '…' : 'Send'}
                  </button>
                )}
                {inv.status !== 'paid' && inv.status !== 'draft' && (
                  <button
                    className="btn-ghost"
                    onClick={() => onMarkPaid(inv.id)}
                    disabled={busy}
                  >
                    {busy ? '…' : 'Mark paid'}
                  </button>
                )}
                <button
                  className="btn-ghost"
                  onClick={() => onDelete(inv.id)}
                  disabled={busy}
                  title="Delete"
                  style={{ color: '#b45309' }}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
