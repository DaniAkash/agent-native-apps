# Building Agent-Native Apps with JavaScript

Slides for the talk delivered at the **Digital Dreamers Den (D3) Anniversary Meetup**.

> The user of the next generation of software is not a human. Let's build for the new one.

**Event:** [Digital Dreamers Den — Anniversary Meetup (Luma)](https://luma.com/event/evt-bBejtIHiuOOGaq1)

**Recording:** [Watch on YouTube](https://www.youtube.com/live/Un4SmWPMH5Y?t=14538) (jumps to the talk start)

**Speaker:** Dani Akash — Founding Engineer at [BrowserOS](https://browseros.com) (YC W24).

---

## Run the deck locally

```sh
cd slides
bun install
bun run dev
```

Built with [Slidev](https://sli.dev). Design tokens live in [`design.md`](./design.md).

---

## The demo app — `app/`

A working invoice console that demonstrates the talk's thesis: one Zod schema fans out into a REST API, an MCP server, and a CLI, all consuming the same in-memory store.

```sh
cd app
bun install
bun run dev
```

That starts:

- **UI** (Vite + React 19 + Tailwind v4) at http://localhost:5173
- **API + MCP** (Bun + Hono) at http://localhost:3001

### What's exposed

- **REST + OpenAPI** — Zod schemas drive runtime validation, the React client's types, and the spec at [`/api/openapi.json`](http://localhost:3001/api/openapi.json). Browseable Scalar reference at [`/api/docs`](http://localhost:3001/api/docs).
- **MCP** — Streamable HTTP server at [`/mcp`](http://localhost:3001/mcp) via [`@hono/mcp`](https://honohub.dev/docs/hono-mcp). Six tools (`list_invoices`, `get_invoice`, `create_invoice`, `send_invoice`, `mark_paid`, `delete_invoice`), each with a Zod input schema. **Excluded from the OpenAPI document on purpose** — MCP has its own discovery via `tools/list`.
- **CLI** — `ship` command built on commander.js. Calls the same REST API.

```sh
bun run ship list
bun run ship create "ACME Corp" 200 --note "Q2 retainer"
bun run ship send inv_01HZX9
bun run ship mark-paid inv_01HZX9
```

### Why it matters for the talk

Three substrates. One Zod schema. One in-memory store. Add a new endpoint and the UI types, the OpenAPI spec, the MCP tool surface, and the CLI all stay in lockstep without duplicate validation logic. That's the whole point of "agent-native."

See [`app/README.md`](./app/README.md) for the deeper tour.

---

## What the talk covers

1. **The shift.** Developer tools are turning into agent runtimes (VS Code, Zed, JetBrains).
2. **The bottleneck.** It's not who has the best model — it's who has the best context.
3. **Three substrates** for shipping context to an agent: **MCP**, **CLI**, and a **typed API**.
4. **Why JavaScript** is uniquely positioned to ship all three.
5. **What production teams learned** the slow way: the tool-count cliff, schema bloat, and four habits that actually ship.

---

## Sources & references

### The shift / agent-native signals

- [Y Combinator RFS — Company Brain](https://www.ycombinator.com/rfs#company-brain)
- [Y Combinator RFS — Software for Agents](https://www.ycombinator.com/rfs#software-for-agents)
- [Salesforce Headless 360](https://www.salesforce.com/news/stories/salesforce-headless-360-announcement/)
- [entire.io](https://entire.io/) — agent coding sessions stored alongside commits

### The new dev-tool runtimes

- [VS Code](https://code.visualstudio.com/)
- [Zed](https://zed.dev/)
- [JetBrains AI](https://www.jetbrains.com/ai/)

### MCP — Model Context Protocol

- [MCP specification](https://modelcontextprotocol.io/)
- [`@hono/mcp`](https://github.com/honojs/mcp) — build MCP servers on Hono
- [Hono MCP guide (Honohub)](https://honohub.dev/docs/hono-mcp)
- [GitHub remote MCP — GA announcement](https://github.blog/changelog/2025-09-04-the-github-mcp-server-is-now-generally-available/) (the 40 → 13 curation pass)
- [Cloudflare Code Mode](https://blog.cloudflare.com/code-mode/) — the 2,500 → 2 tools collapse
- [Anthropic — Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents)
- [Anthropic — Tool Search Tool](https://www.anthropic.com/news/tool-search-tool)

### CLI ecosystem (JavaScript)

- [oclif](https://oclif.io/)
- [yargs](https://yargs.js.org/)
- [commander.js](https://github.com/tj/commander.js)

### Typed APIs in JS

- [Hono RPC](https://hono.dev/docs/guides/rpc)
- [Zod OpenAPI for Hono](https://hono.dev/examples/zod-openapi)
- [create-t3-app](https://create.t3.gg)
- [Connect RPC for Node](https://connectrpc.com/docs/node/getting-started)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- [openapi-typescript](https://openapi-ts.dev/) — generate a typesafe fetch client from any OpenAPI spec

### Speaker's open source

- [Agent Terminal](https://github.com/DaniAkash) — a terminal designed for coding agents
- [acpx-tools](https://github.com/DaniAkash) — tools for one agent to control another

---

## License

The slide content and design are © Dani Akash. Code samples in the deck are illustrative and free to reuse.
