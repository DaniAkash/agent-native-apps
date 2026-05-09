# Shipped — invoice console

A tiny working example of an **agent-native** application.

One Zod schema is the source of truth. From it you get:

- runtime validation on every request (Hono),
- an inferred TypeScript type used by the React UI,
- a generated OpenAPI 3.0 spec at `/api/openapi.json`,
- a browsable Scalar reference at `/api/docs`,
- an **MCP server** at `/mcp` (Streamable HTTP, via [`@hono/mcp`](https://honohub.dev/docs/hono-mcp)),
- and a **`ship` CLI** (commander.js) that calls the same REST API.

Built with **Bun + Hono + React 19 + Tailwind v4 + Zod**.

## Run it

```sh
cd app
bun install
bun run dev
```

That starts:

- Vite (UI) on `http://localhost:5173`
- Hono (API + MCP) on `http://localhost:3001`

The Vite dev server proxies `/api/*` and `/mcp` to Hono, so the UI can hit both without CORS.

## Build & start (production)

```sh
bun run build
bun run start
```

In production, Hono serves the static React build, the REST API, and the MCP endpoint from `http://localhost:3001`.

## REST surface

| Method | Path                              | Description |
| ------ | --------------------------------- | ----------- |
| GET    | `/api/invoices`                   | List all invoices |
| POST   | `/api/invoices`                   | Create an invoice |
| GET    | `/api/invoices/{id}`              | Get one |
| POST   | `/api/invoices/{id}/send`         | Mark as sent |
| POST   | `/api/invoices/{id}/mark-paid`    | Mark as paid |
| DELETE | `/api/invoices/{id}`              | Delete |
| GET    | `/api/openapi.json`               | OpenAPI 3.0 document |
| GET    | `/api/docs`                       | Scalar API reference |

## MCP surface

The MCP server is mounted on `POST /mcp` using Streamable HTTP transport. It is **deliberately excluded** from the OpenAPI document — MCP has its own discovery via `tools/list`, and the two protocols shouldn't shadow each other.

Tools exposed:

| Tool             | Args                                                  |
| ---------------- | ----------------------------------------------------- |
| `list_invoices`  | _(none)_                                              |
| `get_invoice`    | `{ id }`                                              |
| `create_invoice` | `{ customerName, amount, note? }`                     |
| `send_invoice`   | `{ id }`                                              |
| `mark_paid`      | `{ id }`                                              |
| `delete_invoice` | `{ id }`                                              |

Quick smoke test:

```sh
curl -s -X POST http://localhost:3001/mcp \
  -H 'content-type: application/json' \
  -H 'accept: application/json, text/event-stream' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

## CLI surface

The `ship` CLI talks to the same REST API. Set `SHIPPED_API` to point at a different host if needed (defaults to `http://localhost:3001/api`).

```sh
bun run ship list
bun run ship create "ACME Corp" 200 --note "Q2 retainer"
bun run ship send inv_01HZX9
bun run ship mark-paid inv_01HZX9
bun run ship delete inv_01HZX9
```

## Layout

```
app/
├── src/                       # React + Tailwind v4 frontend
│   ├── components/
│   ├── lib/api.ts             # tiny typed fetch wrapper
│   └── styles.css             # Tailwind tokens from /design.md
├── server/                    # Bun + Hono backend
│   ├── index.ts               # mounts /api (OpenAPI) and /mcp
│   ├── routes/invoices.ts
│   ├── schemas/invoice.ts
│   ├── mcp/index.ts           # @hono/mcp + @modelcontextprotocol/sdk tools
│   └── db.ts                  # in-memory store, shared by REST + MCP
└── cli/
    └── index.ts               # `ship` CLI (commander.js)
```
