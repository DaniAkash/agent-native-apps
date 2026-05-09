# Shipped — invoice console

A tiny working example of an **agent-native** application.

One Zod schema is the source of truth. From it you get:

- runtime validation on every request (Hono),
- an inferred TypeScript type used by the React UI,
- a generated OpenAPI 3.0 spec at `/api/openapi.json`,
- and a browsable Scalar reference at `/api/docs`.

Built with **Bun + Hono + React 19 + Tailwind v4 + Zod**.

## Run it

```sh
cd app
bun install
bun run dev
```

That starts:

- Vite (UI) on `http://localhost:5173`
- Hono (API) on `http://localhost:3001`

The Vite dev server proxies `/api/*` to Hono, so the UI can hit the API without CORS.

## Build & start (production)

```sh
bun run build
bun run start
```

In production, Hono serves both the static React build and the API on `http://localhost:3001`.

## API surface

| Method | Path                       | Description |
| ------ | -------------------------- | ----------- |
| GET    | `/api/invoices`            | List all invoices |
| POST   | `/api/invoices`            | Create an invoice |
| GET    | `/api/invoices/{id}`       | Get one |
| POST   | `/api/invoices/{id}/send`  | Mark as sent |
| POST   | `/api/invoices/{id}/mark-paid` | Mark as paid |
| DELETE | `/api/invoices/{id}`       | Delete |
| GET    | `/api/openapi.json`        | OpenAPI 3.0 document |
| GET    | `/api/docs`                | Scalar API reference |

## Layout

```
app/
├── src/                 # React + Tailwind v4 frontend
│   ├── components/
│   ├── lib/api.ts       # tiny typed fetch wrapper
│   └── styles.css       # Tailwind tokens from /design.md
└── server/              # Bun + Hono backend
    ├── index.ts
    ├── routes/invoices.ts
    ├── schemas/invoice.ts
    └── db.ts            # in-memory store
```

## What's next

The same Zod schemas will drive a CLI and an MCP server in follow-ups, so an
agent can talk to this app from any of the three substrates without us
duplicating a single line of validation logic.
