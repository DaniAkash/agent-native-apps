# Building Agent-Native Apps with JavaScript

Slides for the talk delivered at the **Digital Dreamers Den (D3) Anniversary Meetup**.

> The user of the next generation of software is not a human. Let's build for the new one.

**Event:** [Digital Dreamers Den — Anniversary Meetup (Luma)](https://luma.com/event/evt-bBejtIHiuOOGaq1)

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
