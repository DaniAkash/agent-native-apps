type Props = {
  total: number
  outstanding: number
}

export function Hero({ total, outstanding }: Props) {
  return (
    <section className="card relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            'linear-gradient(120deg, rgba(125,211,252,0.18), rgba(165,180,252,0.18) 50%, rgba(249,168,212,0.18))',
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center">
        <div className="flex flex-col gap-3">
          <span className="eyebrow">a tiny demo</span>
          <h1 className="display text-[44px] leading-[1.05]">
            One Zod schema <em>everywhere.</em>
          </h1>
          <p className="text-muted-violet text-[17px] leading-relaxed max-w-[52ch]">
            Every API on this page is defined once with{' '}
            <span className="text-grape-vine font-semibold">Zod + Hono</span>.
            That single definition powers the runtime validator, the typed React
            client, and the generated{' '}
            <a
              href="/api/openapi.json"
              target="_blank"
              rel="noreferrer"
              className="text-electric-violet underline decoration-dashed underline-offset-4"
            >
              OpenAPI spec
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Stat label="Invoices" value={total.toString()} />
          <Stat label="Outstanding" value={`$${outstanding.toLocaleString()}`} accent />
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-1"
      style={{
        background: 'var(--color-cloud-white)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-violet">
        {label}
      </span>
      <span
        className="font-display text-3xl leading-none mt-1"
        style={{
          color: accent ? 'var(--color-electric-violet)' : 'var(--color-grape-vine)',
          fontStyle: accent ? 'italic' : 'normal',
        }}
      >
        {value}
      </span>
    </div>
  )
}
