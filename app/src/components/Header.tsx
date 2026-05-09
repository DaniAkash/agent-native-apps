export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div
          className="grid place-items-center size-10 rounded-2xl text-white font-display"
          style={{
            background:
              'linear-gradient(135deg, #7c3aed 0%, #a78bfa 60%, #f9a8d4 100%)',
            boxShadow: 'var(--shadow-pill)',
          }}
        >
          <span className="text-lg font-semibold italic">S</span>
        </div>
        <div className="leading-tight">
          <div className="font-display text-grape-vine text-xl font-semibold tracking-tight">
            Shipped
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-lavender-bloom">
            invoice console
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-2">
        <a
          href="/api/docs"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          API docs
        </a>
        <a
          href="/api/openapi.json"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          OpenAPI spec
        </a>
      </nav>
    </header>
  )
}
