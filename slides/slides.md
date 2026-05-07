---
theme: default
title: Building Agent-Native Apps with JavaScript
author: Dani Akash
info: |
  Building Agent-Native Apps with JavaScript. Talk for the
  Digital Dreamers Den (D3) Anniversary Meetup.
colorSchema: light
transition: fade
fonts:
  sans: Bricolage Grotesque
  serif: Fraunces
  mono: JetBrains Mono
  weights: '300,400,500,575,700'
drawings:
  persist: false
mdc: true
duration: 30min
---

<HeroGradient />

<div class="cover">
<PillTag>D3 ANNIVERSARY MEETUP · 2026</PillTag>
<h1 class="cover__title">Building<br/><em>agent-native</em><br/>apps with JavaScript.</h1>
<p class="cover__sub">The user of the next generation of software<br/>is not a human. Let's build for the new one.</p>
<div class="cover__sig"><span class="cover__name">Dani Akash</span><span class="cover__dot">·</span><span class="cover__role">Founding Engineer · BrowserOS (YC W24)</span></div>
</div>

<style>
.cover { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; height: 100%; padding: 0 32px; max-width: 980px; margin: 0 auto; }
.cover__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 92px; line-height: 0.98; letter-spacing: -0.035em; color: #281950; margin: 32px 0 24px 0; }
.cover__title em { font-style: italic; color: #7c3aed; }
.cover__sub { font-family: "Bricolage Grotesque", sans-serif; font-size: 22px; line-height: 1.5; color: #5e537c; margin: 0 0 48px 0; max-width: 720px; }
.cover__sig { display: flex; align-items: center; gap: 14px; font-family: "Bricolage Grotesque", sans-serif; font-size: 14px; font-weight: 575; color: #281950; letter-spacing: 0.04em; }
.cover__name { font-weight: 700; }
.cover__role { color: #5e537c; font-weight: 450; }
.cover__dot { color: #a39ac1; }
</style>

<!--
Hi, I'm Dani. We're going to talk about a quiet shift happening
underneath every app you build: the user is changing.
-->

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="me">
<div class="me__left">
<span class="eyebrow">hello, hi, namaste</span>
<h2 class="me__name">I'm Dani.</h2>
<p>Founding Engineer at <strong>BrowserOS</strong> (YC W24).</p>
<p>I build browsers, terminals, and AI assistants. The seams where humans and agents meet.</p>
</div>
<div class="me__right">
<div class="me__card" v-click>
<span class="card-eyebrow">open source</span>
<div class="me__proj"><div class="me__proj-name">Agent Terminal</div><div class="me__proj-desc">A terminal designed for coding agents.</div></div>
<div class="me__proj"><div class="me__proj-name">acpx</div><div class="me__proj-desc">Tools for one agent to control another.</div></div>
</div>
</div>
</div>

<style scoped>
.me { position: relative; z-index: 2; display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; align-items: center; height: 100%; }
.me__name { font-size: 72px; margin: 16px 0 28px 0; }
.me__card { background: #ffffff; border-radius: 16px; padding: 32px; box-shadow: rgba(32, 34, 55, 0.075) 0px 0px 0px 1px, rgba(32, 34, 55, 0.05) 0px 10px 15px -3px; display: flex; flex-direction: column; gap: 18px; }
.me__proj { display: flex; flex-direction: column; gap: 4px; }
.me__proj-name { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 22px; color: #7c3aed; font-style: italic; }
.me__proj-desc { font-family: "Bricolage Grotesque", sans-serif; font-size: 14px; color: #5e537c; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="welcome">
<span class="eyebrow">welcome to</span>
<h2>the <em>AI-native</em> world.</h2>
<p class="welcome__sub">What used to be plain text editors are turning into something else.</p>
<DevtoolPanel />
<p class="welcome__caption">Every developer tool, in the same direction.</p>
</div>

<style scoped>
.welcome { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 18px; }
.welcome h2 { font-size: 56px; line-height: 1.05; margin: 8px 0 4px 0; }
.welcome h2 em { font-style: italic; color: #7c3aed; }
.welcome__sub { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #5e537c; margin: 0 0 16px 0; }
.welcome__caption { font-family: "Bricolage Grotesque", sans-serif; font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase; color: #a39ac1; align-self: center; margin-top: 8px; }
</style>

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="shift">
<span class="eyebrow" style="color: #281950;">the shift</span>
<p class="shift__title">The user of the next<br/>generation of software<br/><em>is not a human.</em></p>
<p class="shift__sub">It's an AI agent on the other side of the keyboard.</p>
</div>

<style scoped>
.shift { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; max-width: 1100px; }
.shift__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 84px; line-height: 1.02; letter-spacing: -0.035em; color: #281950; margin: 16px 0 28px 0; }
.shift__title em { font-style: italic; color: #7c3aed; }
.shift__sub { font-family: "Bricolage Grotesque", sans-serif; font-size: 22px; line-height: 1.4; color: #281950; font-weight: 575; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="signals">
<span class="eyebrow">three signals</span>
<h2>Y Combinator already wrote it down.</h2>
<div class="signals__grid">
<SignalCard tag="RFS" brand="Y Combinator" title="Company Brain.">A unified context layer for every business, so agents can act on it.</SignalCard>
<SignalCard tag="RFS" brand="Y Combinator" title="Software for agents.">Apps whose first user is an agent, not a person.</SignalCard>
<SignalCard tag="GA" brand="Salesforce" title="Headless 360.">Every Salesforce capability via API, MCP, and CLI. No browser needed.</SignalCard>
</div>
<p class="signals__pin">Plus <a href="https://entire.io">entire.io</a>: agent coding sessions, stored alongside commits, so the next agent has context.</p>
</div>

<style scoped>
.signals { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 18px; }
.signals h2 { font-size: 44px; line-height: 1.1; margin: 4px 0 8px 0; }
.signals__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.signals__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 18px; color: #5e537c; align-self: center; margin: 8px 0 0 0; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="ctx">
<span class="eyebrow">the real bottleneck</span>
<p class="ctx__quote">It's not who has the<br/>best <em>model.</em></p>
<p class="ctx__quote ctx__quote--accent">It's who has the<br/>best <em>context.</em></p>
</div>

<style scoped>
.ctx { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 16px; max-width: 1000px; }
.ctx__quote { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 76px; line-height: 1.0; letter-spacing: -0.035em; color: #281950; margin: 0; }
.ctx__quote em { font-style: italic; color: #7c3aed; }
.ctx__quote--accent { color: #281950; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="lever">
<div class="lever__left">
<span class="eyebrow">the lever</span>
<h2>Better context in,<br/><em>better output</em> out.</h2>
<p>The model is mostly fixed week-to-week. The context is yours to shape.</p>
<p>Every product has the same job now: <strong>be the best source of context for the agent that's about to use it.</strong></p>
</div>
<div class="lever__right">
<div class="lever__flow">
<div class="lever__node lever__node--in"><span class="lever__label">your product</span></div>
<div class="lever__arrow">→</div>
<div class="lever__node lever__node--ctx"><span class="lever__label">context</span></div>
<div class="lever__arrow">→</div>
<div class="lever__node lever__node--out"><span class="lever__label">agent output</span></div>
</div>
</div>
</div>

<style scoped>
.lever { position: relative; z-index: 2; display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: center; height: 100%; }
.lever h2 { font-size: 48px; line-height: 1.1; margin: 12px 0 24px 0; }
.lever h2 em { font-style: italic; color: #7c3aed; }
.lever__flow { display: flex; flex-direction: column; gap: 14px; align-items: stretch; }
.lever__node { background: #ffffff; border-radius: 16px; padding: 22px 24px; box-shadow: rgba(32, 34, 55, 0.075) 0px 0px 0px 1px, rgba(32, 34, 55, 0.05) 0px 10px 15px -3px; position: relative; overflow: hidden; }
.lever__node::before { content: ""; position: absolute; inset: 0; opacity: 0.18; pointer-events: none; }
.lever__node--in::before { background: linear-gradient(120deg, rgba(125, 211, 252, 0.6), transparent 60%); }
.lever__node--ctx::before { background: linear-gradient(120deg, rgba(165, 180, 252, 0.6), transparent 60%); }
.lever__node--out::before { background: linear-gradient(120deg, rgba(249, 168, 212, 0.6), transparent 60%); }
.lever__label { position: relative; z-index: 1; font-family: "Bricolage Grotesque", sans-serif; font-weight: 575; font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase; color: #281950; }
.lever__arrow { font-family: "Fraunces", Georgia, serif; font-size: 28px; color: #7c3aed; align-self: center; }
</style>

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="three">
<span class="eyebrow" style="color: #281950;">the three substrates</span>
<p class="three__title">How do you ship<br/>context to an agent?</p>
<div class="three__pills">
<span class="three__pill">MCP</span>
<span class="three__sep">·</span>
<span class="three__pill">CLI</span>
<span class="three__sep">·</span>
<span class="three__pill">API</span>
</div>
<p class="three__sub">Three doors into your product. Each wins in a different room.</p>
</div>

<style scoped>
.three { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; }
.three__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 76px; line-height: 1.02; letter-spacing: -0.035em; color: #281950; margin: 16px 0 36px 0; }
.three__pills { display: flex; align-items: center; gap: 18px; margin-bottom: 32px; }
.three__pill { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 64px; color: #7c3aed; letter-spacing: -0.02em; padding: 0; }
.three__sep { font-family: "Fraunces", Georgia, serif; font-size: 48px; color: #281950; opacity: 0.5; }
.three__sub { font-family: "Bricolage Grotesque", sans-serif; font-size: 22px; color: #281950; font-weight: 575; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="why">
<div class="why__left">
<span class="eyebrow">and why JavaScript?</span>
<h2>Because the<br/><em>ecosystem</em> is here.</h2>
<p>Node, Bun, and TypeScript. Hono and Express. The npm registry.</p>
<p class="muted">Every agent substrate (MCP server, CLI binary, typed API) has a first-class JS path.</p>
</div>
<div class="why__right">
<div class="why__stack">
<div class="why__layer why__layer--ui"><span class="why__label">RUNTIMES · Node · Bun · Deno</span></div>
<div class="why__layer why__layer--api"><span class="why__label">TYPES · TypeScript · Zod</span></div>
<div class="why__layer why__layer--agent"><span class="why__label">FRAMEWORKS · Hono · Express · Fastify</span></div>
<div class="why__layer why__layer--tools"><span class="why__label">DELIVERY · npx · the registry · single binaries</span></div>
</div>
</div>
</div>

<style scoped>
.why { position: relative; z-index: 2; display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; height: 100%; }
.why h2 { font-size: 52px; line-height: 1.05; margin: 16px 0 28px 0; }
.why h2 em { font-style: italic; color: #7c3aed; }
.why__stack { display: flex; flex-direction: column; gap: 12px; }
.why__layer { padding: 22px 24px; border-radius: 16px; background: #ffffff; box-shadow: rgba(32, 34, 55, 0.075) 0px 0px 0px 1px, rgba(32, 34, 55, 0.05) 0px 10px 15px -3px; position: relative; overflow: hidden; }
.why__layer::before { content: ""; position: absolute; inset: 0; opacity: 0.18; pointer-events: none; }
.why__layer--ui::before { background: linear-gradient(120deg, rgba(125, 211, 252, 0.6), transparent 60%); }
.why__layer--api::before { background: linear-gradient(120deg, rgba(165, 180, 252, 0.6), transparent 60%); }
.why__layer--agent::before { background: linear-gradient(120deg, rgba(249, 168, 212, 0.6), transparent 60%); }
.why__layer--tools::before { background: linear-gradient(120deg, rgba(124, 58, 237, 0.20), transparent 60%); }
.why__label { font-family: "Bricolage Grotesque", sans-serif; font-weight: 575; font-size: 14px; letter-spacing: 0.12em; color: #281950; position: relative; z-index: 1; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="sub">
<div class="sub__head"><div class="sub__num">01</div><div><span class="eyebrow">substrate one</span><h2 class="sub__title">MCP.</h2></div></div>
<div class="sub__body">
<p class="sub__lead">A protocol for agents to discover and call your tools, over JSON-RPC.</p>
<div class="sub__grid">
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">You ship to many clients.</div><p class="card-body">Claude, ChatGPT, Cursor, Copilot. Write the server once, every MCP client gets it.</p></div>
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">Auth has to survive.</div><p class="card-body">OAuth 2.1 with PKCE, scoped tokens, audience-bound. Refresh handled for you.</p></div>
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">Output must be typed.</div><p class="card-body">Structured tool outputs and resource links. Parseable, not just printable.</p></div>
</div>
</div>
</div>

<style scoped>
.sub { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 24px; }
.sub__head { display: flex; align-items: center; gap: 28px; }
.sub__num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 96px; line-height: 1; color: #7c3aed; letter-spacing: -0.02em; }
.sub__title { font-size: 80px; line-height: 1.0; margin: 8px 0 0 0; letter-spacing: -0.02em; }
.sub__lead { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #281950; margin: 0 0 12px 0; }
.sub__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="build">
<span class="eyebrow">build it in JS</span>
<h2>An MCP server is just a <em>middleware.</em></h2>

```ts
import { Hono } from 'hono'
import { McpServer } from '@hono/mcp'

const mcp = new McpServer({ name: 'my-app', version: '1.0.0' })

mcp.tool(
  'create_invoice',
  'Send an invoice to a customer.',
  { customerId: z.string(), amount: z.number() },
  async ({ customerId, amount }) => invoices.send({ customerId, amount }),
)

const app = new Hono().route('/mcp', mcp.handler())
```

<p class="build__pin">Tools are functions. Descriptions are docstrings. Auth is a middleware. Same shape as a REST handler. Different interface for a different reader.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 12px; padding: 32px 0; }
.build h2 { font-size: 38px; line-height: 1.1; margin: 4px 0 0 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 16px; color: #5e537c; margin: 4px 0 0 0; }
.build :deep(pre) { padding: 16px 20px !important; margin: 0 !important; }
.build :deep(pre code) { font-size: 13px !important; line-height: 1.5 !important; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="sub">
<div class="sub__head"><div class="sub__num">02</div><div><span class="eyebrow">substrate two</span><h2 class="sub__title">CLI.</h2></div></div>
<div class="sub__body">
<p class="sub__lead">Your whole app, accessible from a shell. <code>gh</code>. <code>kubectl</code>. <code>git</code>.</p>
<div class="sub__grid">
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">Token budget is tight.</div><p class="card-body">A CLI's surface is paid for in pretraining. <code>tools/list</code> ships every session.</p></div>
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">The agent has a shell.</div><p class="card-body">Claude Code and Codex thrive on <code>gh pr list --json … | jq</code>. Pipes are still the best protocol.</p></div>
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">You need 100+ operations.</div><p class="card-body"><code>gh</code> exposes hundreds of subcommands. No MCP will match that breadth.</p></div>
</div>
</div>
</div>

<style scoped>
.sub { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 24px; }
.sub__head { display: flex; align-items: center; gap: 28px; }
.sub__num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 96px; line-height: 1; color: #7c3aed; letter-spacing: -0.02em; }
.sub__title { font-size: 80px; line-height: 1.0; margin: 8px 0 0 0; letter-spacing: -0.02em; }
.sub__lead { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #281950; margin: 0 0 12px 0; }
.sub__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="build">
<span class="eyebrow">build it in JS</span>
<h2><em>npx</em> your way to a CLI.</h2>
<p class="build__lede">npm already taught the world to run binaries by name. The agent ecosystem inherited it.</p>
<div class="build__grid">
<div class="card"><div class="card-eyebrow">oclif</div><div class="card-title">Salesforce-grade.</div><p class="card-body">Plugins, autocomplete, multi-command apps.</p></div>
<div class="card"><div class="card-eyebrow">yargs</div><div class="card-title">Ergonomic default.</div><p class="card-body">Rich parsing, generated help, sane errors.</p></div>
<div class="card"><div class="card-eyebrow">commander.js</div><div class="card-title">The minimalist.</div><p class="card-body">Tiny, declarative, no surprises.</p></div>
</div>
<p class="build__pin">Bonus: a wave of new tools auto-convert MCP servers into CLIs for shell-equipped agents.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 12px; padding: 32px 0; }
.build h2 { font-size: 48px; line-height: 1.05; margin: 4px 0 0 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__lede { font-family: "Bricolage Grotesque", sans-serif; font-size: 17px; color: #5e537c; margin: 0 0 8px 0; }
.build__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.build__grid .card { padding: 22px 22px; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 16px; color: #5e537c; margin: 4px 0 0 0; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="sub">
<div class="sub__head"><div class="sub__num">03</div><div><span class="eyebrow">substrate three</span><h2 class="sub__title">API.</h2></div></div>
<div class="sub__body">
<p class="sub__lead">A well-typed API is the highest-leverage thing you can ship for agents you don't control.</p>
<div class="sub__grid">
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">Other people's code calls you.</div><p class="card-body">A typed schema = correct code generation in any language, on the first try.</p></div>
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">You're building infra.</div><p class="card-body">Devtools that get embedded into other software live or die by their API spec.</p></div>
<div class="card"><div class="card-eyebrow">Wins when</div><div class="card-title">Reliability matters.</div><p class="card-body">OpenAPI / gRPC / GraphQL = the agent gets the contract before it writes the call.</p></div>
</div>
</div>
</div>

<style scoped>
.sub { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 24px; }
.sub__head { display: flex; align-items: center; gap: 28px; }
.sub__num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 96px; line-height: 1; color: #7c3aed; letter-spacing: -0.02em; }
.sub__title { font-size: 80px; line-height: 1.0; margin: 8px 0 0 0; letter-spacing: -0.02em; }
.sub__lead { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #281950; margin: 0 0 12px 0; }
.sub__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="build">
<span class="eyebrow">build it in JS</span>
<h2>Typed APIs are <em>almost free</em> in JS.</h2>
<p class="build__lede">Schemas at the door, types at the call site. Pick your shape.</p>
<div class="build__list">
<div class="build__row"><span class="build__name">Hono RPC</span><span class="build__desc">End-to-end types between server and client.</span></div>
<div class="build__row"><span class="build__name">Zod OpenAPI · Hono</span><span class="build__desc">One Zod schema → validated input + OpenAPI spec.</span></div>
<div class="build__row"><span class="build__name">create-t3-app</span><span class="build__desc">Next + tRPC + Zod, ready to ship.</span></div>
<div class="build__row"><span class="build__name">Connect RPC</span><span class="build__desc">Protobuf-typed RPC, browser- and gRPC-compatible.</span></div>
<div class="build__row"><span class="build__name">GraphQL Yoga</span><span class="build__desc">Schema-first GraphQL with batteries included.</span></div>
</div>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 10px; padding: 32px 0; }
.build h2 { font-size: 48px; line-height: 1.05; margin: 4px 0 0 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__lede { font-family: "Bricolage Grotesque", sans-serif; font-size: 17px; color: #5e537c; margin: 0 0 6px 0; }
.build__list { display: flex; flex-direction: column; gap: 6px; }
.build__row { display: grid; grid-template-columns: 220px 1fr; gap: 24px; align-items: baseline; padding: 12px 20px; border-radius: 12px; background: #ffffff; box-shadow: rgba(32, 34, 55, 0.05) 0px 0px 0px 1px; }
.build__name { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 20px; color: #7c3aed; }
.build__desc { font-family: "Bricolage Grotesque", sans-serif; font-size: 15px; line-height: 1.4; color: #5e537c; }
</style>

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="cliff">
<span class="eyebrow" style="color: #281950;">what production teams learned</span>
<h2>The tool-count cliff is <em>real.</em></h2>
<div class="cliff__grid">
<StatCard num="40 → 13" label="GitHub Copilot's MCP toolset, after a curation pass." source="2-5pt benchmark gain · 400ms latency win" />
<StatCard num="30 → 2" label="Block's Linear MCP, rebuilt three times." source="ended at: search · execute" />
<StatCard num="2,500 → 2" label="Cloudflare's full API surface, via Code Mode." source="~1,000 tokens of context · 99.9% reduction" />
</div>
<p class="cliff__pin">Past ~20–30 tools, accuracy collapses non-linearly. Curate ruthlessly. Or expose two tools: <em>search</em> and <em>execute.</em></p>
</div>

<style scoped>
.cliff { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 22px; }
.cliff h2 { font-size: 56px; line-height: 1.05; margin: 4px 0 0 0; }
.cliff h2 em { font-style: italic; color: #7c3aed; }
.cliff__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.cliff__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #281950; align-self: center; max-width: 880px; text-align: center; margin: 8px 0 0 0; }
.cliff__pin em { color: #7c3aed; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="patterns">
<span class="eyebrow">what makes a tool good</span>
<h2>Four habits that actually ship.</h2>
<div class="patterns__grid">
<div class="card"><div class="card-eyebrow">01</div><div class="card-title">Outcome-oriented tools.</div><p class="card-body">"Close the ticket with evidence." Not <code>tickets.update</code>.</p></div>
<div class="card"><div class="card-eyebrow">02</div><div class="card-title">Structured outputs.</div><p class="card-body">JSON Schema in. JSON Schema out. No guessing.</p></div>
<div class="card"><div class="card-eyebrow">03</div><div class="card-title">Idempotency keys.</div><p class="card-body">Agents retry. Without a key, they double-charge.</p></div>
<div class="card"><div class="card-eyebrow">04</div><div class="card-title">Executable errors.</div><p class="card-body">Missing scope. Conflict id. Next step. Make failure actionable.</p></div>
</div>
</div>

<style scoped>
.patterns { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 18px; padding: 32px 0; }
.patterns h2 { font-size: 44px; line-height: 1.05; margin: 0; }
.patterns__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.patterns__grid .card { padding: 20px 22px; }
.patterns__grid .card-title { font-size: 24px; }
.patterns__grid .card-body { font-size: 15px; }
</style>

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="legacy">
<span class="eyebrow" style="color: #281950;">what to do tomorrow</span>
<p class="legacy__title">Bring your old app<br/>into the <em>AI-native</em> era.</p>
<p class="legacy__sub">Pick one substrate. Ship one tool. Watch what an agent does with it.</p>
<div class="legacy__steps">
<div class="legacy__step"><span class="legacy__num">01</span><span class="legacy__txt">Wrap your most-used endpoint as an MCP tool.</span></div>
<div class="legacy__step"><span class="legacy__num">02</span><span class="legacy__txt">Or expose your three most-common workflows as a CLI.</span></div>
<div class="legacy__step"><span class="legacy__num">03</span><span class="legacy__txt">Or publish an OpenAPI spec and let the agent write the client.</span></div>
</div>
</div>

<style scoped>
.legacy { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; max-width: 1100px; gap: 18px; }
.legacy__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 76px; line-height: 1.02; letter-spacing: -0.035em; color: #281950; margin: 12px 0 8px 0; }
.legacy__title em { font-style: italic; color: #7c3aed; }
.legacy__sub { font-family: "Bricolage Grotesque", sans-serif; font-size: 22px; color: #281950; font-weight: 575; margin: 0 0 16px 0; }
.legacy__steps { display: flex; flex-direction: column; gap: 12px; }
.legacy__step { display: grid; grid-template-columns: 56px 1fr; gap: 18px; align-items: baseline; padding: 14px 22px; border-radius: 12px; background: rgba(255, 255, 255, 0.85); box-shadow: rgba(32, 34, 55, 0.05) 0px 0px 0px 1px; }
.legacy__num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 24px; color: #7c3aed; }
.legacy__txt { font-family: "Bricolage Grotesque", sans-serif; font-size: 18px; color: #281950; font-weight: 575; }
</style>

---
layout: default
class: end-slide
---

<EndCard />
