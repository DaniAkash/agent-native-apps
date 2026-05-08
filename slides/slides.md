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
<div class="me__proj"><div class="me__proj-name">acpx-tools</div><div class="me__proj-desc">Tools for one agent to control another.</div></div>
<a class="me__link" href="https://github.com/DaniAkash" target="_blank" rel="noreferrer">github.com/DaniAkash</a>
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
.me__link { font-family: "Bricolage Grotesque", sans-serif; font-size: 12px; font-weight: 575; letter-spacing: 0.08em; color: #7c3aed; text-decoration: none; border-bottom: 1px dashed currentColor; padding-bottom: 1px; align-self: flex-start; margin-top: 4px; }
.me__link:hover { color: #281950; }
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
<p class="welcome__caption" v-click>Every developer tool, in the same direction.</p>
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
<SignalCard v-click tag="RFS" brand="Y Combinator" title="Company Brain.">A unified context layer for every business, so agents can act on it.</SignalCard>
<SignalCard v-click tag="RFS" brand="Y Combinator" title="Software for agents.">Apps whose first user is an agent, not a person.</SignalCard>
<SignalCard v-click tag="GA" brand="Salesforce" title="Headless 360.">Every Salesforce capability via API, MCP, and CLI. No browser needed.</SignalCard>
</div>
<p class="signals__pin" v-click>Plus <a href="https://entire.io">entire.io</a>: agent coding sessions, stored alongside commits, so the next agent has context.</p>
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
<p class="ctx__quote">It's not who has the<br/>best <em v-click>model.</em></p>
<p class="ctx__quote ctx__quote--accent"><span v-click>It's who has the<br/>best </span><em v-click>context.</em></p>
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
<h2><span class="lever__line">Better context in,</span><br/><span class="lever__line"><em>better output</em> out.</span></h2>
<p>The model is mostly fixed week-to-week. The context is yours to shape.</p>
<p>Every product has the same job now: <strong>be the best source of context for the agent that's about to use it.</strong></p>
</div>
<div class="lever__right">
<div class="lever__flow">
<div class="lever__node lever__node--in" v-click="1"><span class="lever__label">your product</span></div>
<div class="lever__arrow" v-click="2">↓</div>
<div class="lever__node lever__node--ctx" v-click="2"><span class="lever__label">context</span></div>
<div class="lever__arrow" v-click="3">↓</div>
<div class="lever__node lever__node--out" v-click="3"><span class="lever__label">agent output</span></div>
</div>
</div>
</div>

<style scoped>
.lever { position: relative; z-index: 2; display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: center; height: 100%; }
.lever h2 { font-size: 42px; line-height: 1.1; margin: 12px 0 24px 0; }
.lever h2 em { font-style: italic; color: #7c3aed; }
.lever__line { display: inline-block; white-space: nowrap; }
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
<p class="muted">Every agent substrate (MCP server, CLI binary, typed API) has a first-class JS path.</p>
</div>
<div class="why__right">
<div class="why__stack">
<div class="why__layer why__layer--ui" v-click><span class="why__label">RUNTIMES · Node · Bun · Deno</span></div>
<div class="why__layer why__layer--api" v-click><span class="why__label">TYPES · TypeScript · Zod</span></div>
<div class="why__layer why__layer--agent" v-click><span class="why__label">FRAMEWORKS · Hono · Express · Fastify</span></div>
<div class="why__layer why__layer--tools" v-click><span class="why__label">DELIVERY · npx · the registry · single binaries</span></div>
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
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">You ship to many clients.</div><p class="card-body">Claude, ChatGPT, Cursor, Copilot. Write the server once, every MCP client gets it.</p></div>
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">Auth has to survive.</div><p class="card-body">OAuth 2.1 with PKCE, scoped tokens, audience-bound. Refresh handled for you.</p></div>
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">Output must be typed.</div><p class="card-body">Structured tool outputs and resource links. Parseable, not just printable.</p></div>
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

<div class="build__step" v-click>
<span class="build__step-label">1. spin up the server</span>

```ts
import { Hono } from 'hono'
import { McpServer } from '@hono/mcp'

const mcp = new McpServer({ name: 'my-app', version: '1.0.0' })
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">2. expose a tool</span>

```ts
mcp.tool(
  'create_invoice',
  'Send an invoice to a customer.',
  { customerId: z.string(), amount: z.number() },
  async ({ customerId, amount }) => invoices.send({ customerId, amount }),
)
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">3. mount and ship</span>

```ts
const app = new Hono().route('/mcp', mcp.handler())
```

</div>

<p class="build__pin" v-click>Tools are functions. Descriptions are docstrings. Auth is a middleware. Same shape as a REST handler. Different interface for a different reader.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 8px 0 32px; }
.build h2 { font-size: 28px; line-height: 1.1; margin: 0 0 2px 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__step { display: flex; flex-direction: column; gap: 2px; }
.build__step-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 10px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 14px; line-height: 1.4; color: #5e537c; margin: 2px 0 0 0; }
.build :deep(pre) { padding: 10px 16px !important; margin: 0 !important; }
.build :deep(pre code) { font-size: 11.5px !important; line-height: 1.4 !important; }
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
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">Token budget is tight.</div><p class="card-body">A CLI's surface is paid for in pretraining. <code>tools/list</code> ships every session.</p></div>
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">The agent has a shell.</div><p class="card-body">Claude Code and Codex thrive on <code>gh pr list --json … | jq</code>. Pipes are still the best protocol.</p></div>
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">You need 100+ operations.</div><p class="card-body"><code>gh</code> exposes hundreds of subcommands. No MCP will match that breadth.</p></div>
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
<div class="card" v-click><div class="card-eyebrow">oclif</div><div class="card-title">Salesforce-grade.</div><p class="card-body">Plugins, autocomplete, multi-command apps.</p></div>
<div class="card" v-click><div class="card-eyebrow">yargs</div><div class="card-title">Ergonomic default.</div><p class="card-body">Rich parsing, generated help, sane errors.</p></div>
<div class="card" v-click><div class="card-eyebrow">commander.js</div><div class="card-title">The minimalist.</div><p class="card-body">Tiny, declarative, no surprises.</p></div>
</div>
<p class="build__pin" v-click>Bonus: a wave of new tools auto-convert MCP servers into CLIs for shell-equipped agents.</p>
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

<div class="build">
<span class="eyebrow">build it in JS</span>
<h2>A CLI is even <em>shorter.</em></h2>

<div class="build__step" v-click>
<span class="build__step-label">1. start the program</span>

```ts
import { Command } from 'commander'

const program = new Command()
  .name('ship')
  .description('Ship and inspect deployments')
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">2. define a command</span>

```ts
program
  .command('deploy <branch>')
  .description('Spin up a preview for a branch')
  .option('--region <region>', 'target region', 'iad1')
  .action(async (branch, opts) => {
    const url = await deployments.preview(branch, opts)
    console.log(url)
  })
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">3. publish + run</span>

```bash
$ npx ship deploy feat/login --region=fra1
https://feat-login.preview.shipped.dev
```

</div>

<p class="build__pin" v-click>Now Claude Code or Codex can ship your branch from the same shell it runs <code>git push</code> in.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 8px 0 32px; }
.build h2 { font-size: 28px; line-height: 1.1; margin: 0 0 2px 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__step { display: flex; flex-direction: column; gap: 2px; }
.build__step-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 10px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 14px; line-height: 1.4; color: #5e537c; margin: 2px 0 0 0; }
.build :deep(pre) { padding: 10px 16px !important; margin: 0 !important; }
.build :deep(pre code) { font-size: 11.5px !important; line-height: 1.4 !important; }
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
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">Other people's code calls you.</div><p class="card-body">A typed schema = correct code generation in any language, on the first try.</p></div>
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">You're building infra.</div><p class="card-body">Devtools that get embedded into other software live or die by their API spec.</p></div>
<div class="card" v-click><div class="card-eyebrow">Wins when</div><div class="card-title">Reliability matters.</div><p class="card-body">OpenAPI / gRPC / GraphQL = the agent gets the contract before it writes the call.</p></div>
</div>
</div>
</div>

<style scoped>
.sub { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 18px; padding: 24px 0; }
.sub__head { display: flex; align-items: center; gap: 24px; }
.sub__num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 72px; line-height: 1; color: #7c3aed; letter-spacing: -0.02em; }
.sub__title { font-size: 64px; line-height: 1.0; margin: 6px 0 0 0; letter-spacing: -0.02em; }
.sub__lead { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 20px; color: #281950; margin: 0 0 8px 0; }
.sub__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.sub__grid .card { padding: 22px 22px; }
.sub__grid .card-title { font-size: 22px; line-height: 1.15; }
.sub__grid .card-body { font-size: 14px; line-height: 1.45; }
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
<div class="build__row" v-click><span class="build__name">Hono RPC</span><span class="build__desc">End-to-end types between server and client.</span></div>
<div class="build__row" v-click><span class="build__name">Zod OpenAPI · Hono</span><span class="build__desc">One Zod schema → validated input + OpenAPI spec.</span></div>
<div class="build__row" v-click><span class="build__name">create-t3-app</span><span class="build__desc">Next + tRPC + Zod, ready to ship.</span></div>
<div class="build__row" v-click><span class="build__name">Connect RPC</span><span class="build__desc">Protobuf-typed RPC, browser- and gRPC-compatible.</span></div>
<div class="build__row" v-click><span class="build__name">GraphQL Yoga</span><span class="build__desc">Schema-first GraphQL with batteries included.</span></div>
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

<SoftHaze />

<div class="build">
<span class="eyebrow">how it works</span>
<h2>One Zod schema, one <em>typed</em> Hono route.</h2>

<div class="build__step" v-click>
<span class="build__step-label">1. define the schema once</span>

```ts
const Invoice = z.object({
  customerId: z.string(),
  amount: z.number(),
})
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">2. plug it into a typed Hono route</span>

```ts
app.openapi(createRoute({
  method: 'post',
  path: '/invoices',
  request:   { body: jsonContent(Invoice) },
  responses: { 200: jsonContent(InvoiceCreated) },
}), async (c) => {
  const data = c.req.valid('json')        // fully typed
  return c.json(await invoices.send(data))
})
```

</div>

<p class="build__pin" v-click>Same Zod schema: validated input at runtime, inferred types at compile time. Two jobs, one definition.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 10px; padding: 24px 0; }
.build h2 { font-size: 30px; line-height: 1.1; margin: 0 0 4px 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__step { display: flex; flex-direction: column; gap: 4px; }
.build__step-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 11px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 16px; line-height: 1.4; color: #5e537c; margin: 6px 0 0 0; }
.build :deep(pre) { padding: 14px 18px !important; margin: 0 !important; }
.build :deep(pre code) { font-size: 13px !important; line-height: 1.5 !important; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="build">
<span class="eyebrow">the payoff</span>
<h2>Then Hono ships your <em>OpenAPI spec</em> for free.</h2>

<div class="build__step" v-click>
<span class="build__step-label">1. mount the spec endpoint</span>

```ts
app.doc('/openapi.json', {
  openapi: '3.0.0',
  info: { title: 'Shipping API', version: '1.0' },
})
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">2. and this is what gets served</span>

```json
{
  "openapi": "3.0.0",
  "info":    { "title": "Shipping API", "version": "1.0" },
  "paths": {
    "/invoices": {
      "post": {
        "requestBody": { "content": { "application/json": {
          "schema": { "$ref": "#/components/schemas/Invoice" }
        }}},
        "responses": { "200": { "$ref": "#/components/responses/InvoiceCreated" } }
      }
    }
  }
}
```

</div>

<p class="build__pin" v-click>No hand-written spec. The schema, the validator, and the public contract never drift, because there's only one source.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 8px 0 32px; }
.build h2 { font-size: 28px; line-height: 1.1; margin: 0 0 2px 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__step { display: flex; flex-direction: column; gap: 2px; }
.build__step-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 10px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 14px; line-height: 1.4; color: #5e537c; margin: 2px 0 0 0; }
.build :deep(pre) { padding: 10px 16px !important; margin: 0 !important; }
.build :deep(pre code) { font-size: 11.5px !important; line-height: 1.4 !important; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="build">
<span class="eyebrow">on the other side</span>
<h2>That spec becomes a <em>typesafe client</em> for free.</h2>

<div class="build__step" v-click>
<span class="build__step-label">1. generate types from the spec</span>

```bash
$ npx openapi-typescript https://api.shipped.dev/openapi.json -o api.d.ts
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">2. wrap it in openapi-fetch</span>

```ts
import createClient from 'openapi-fetch'
import type { paths } from './api'

const api = createClient<paths>({ baseUrl: 'https://api.shipped.dev' })
```

</div>

<div class="build__step" v-click>
<span class="build__step-label">3. every call is typed end-to-end</span>

```ts
const { data, error } = await api.POST('/invoices', {
  body: { customerId: 'cus_123', amount: 200 },
})
// wrong path → type error.  wrong body → type error.  no docs needed.
```

</div>

<p class="build__pin" v-click>The coding agent gets autocomplete, validation, and inline types straight from your server. No prompt engineering, no docs scraping.</p>
</div>

<style scoped>
.build { position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 8px 0 32px; }
.build h2 { font-size: 26px; line-height: 1.1; margin: 0 0 2px 0; }
.build h2 em { font-style: italic; color: #7c3aed; }
.build__step { display: flex; flex-direction: column; gap: 2px; }
.build__step-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 10px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.build__pin { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 14px; line-height: 1.4; color: #5e537c; margin: 2px 0 0 0; }
.build :deep(pre) { padding: 10px 16px !important; margin: 0 !important; }
.build :deep(pre code) { font-size: 11.5px !important; line-height: 1.4 !important; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="pivot">
<span class="eyebrow">act V</span>
<p class="pivot__title">Building it is the easy part.</p>
<p class="pivot__title pivot__title--accent" v-click>Designing it for an <em>agent</em> is the hard one.</p>
<p class="pivot__sub" v-click>Here's what production teams learned, the slow way.</p>
</div>

<style scoped>
.pivot { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 18px; max-width: 1100px; }
.pivot__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 64px; line-height: 1.05; letter-spacing: -0.03em; color: #281950; margin: 0; }
.pivot__title em { font-style: italic; color: #7c3aed; }
.pivot__title--accent { color: #281950; }
.pivot__sub { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #5e537c; margin: 16px 0 0 0; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="problems">
<span class="eyebrow">three things break at scale</span>
<h2>The same mistakes, every team.</h2>
<div class="problems__grid">
<div class="card" v-click>
<div class="card-eyebrow">01 · context tax</div>
<div class="card-title">Schemas eat the prompt.</div>
<p class="card-body">Five connected MCPs can spend ~55K tokens describing tools before the user types a word. The agent pays for surface area you never use.</p>
</div>
<div class="card" v-click>
<div class="card-eyebrow">02 · selection collapse</div>
<div class="card-title">Too many tools, no clear pick.</div>
<p class="card-body">Past ~20–30 tools, accuracy drops non-linearly. The agent guesses. Then it guesses wrong. Then it retries.</p>
</div>
<div class="card" v-click>
<div class="card-eyebrow">03 · REST shape</div>
<div class="card-title">CRUD ≠ a goal.</div>
<p class="card-body">An agent wants <em>"close the ticket with evidence"</em>, not <code>tickets.update</code>. Atomic endpoints force the agent to plan around your data model.</p>
</div>
</div>
</div>

<style scoped>
.problems { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 22px; padding: 24px 0; }
.problems h2 { font-size: 44px; line-height: 1.05; margin: 4px 0 0 0; }
.problems__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.problems__grid .card { padding: 24px 22px; }
.problems__grid .card-title { font-size: 22px; line-height: 1.15; }
.problems__grid .card-body { font-size: 14px; line-height: 1.5; }
.problems__grid .card-body code { font-size: 0.85em; }
.problems__grid .card-body em { font-style: italic; color: #7c3aed; }
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
<StatCard v-click num="40 → 13" label="GitHub Copilot's MCP toolset, after a curation pass." source="2-5pt benchmark gain · 400ms latency win" />
<StatCard v-click num="30 → 2" label="Block's Linear MCP, rebuilt three times." source="ended at: search · execute" />
<StatCard v-click num="2,500 → 2" label="Cloudflare's full API surface, via Code Mode." source="~1,000 tokens of context · 99.9% reduction" />
</div>
<p class="cliff__pin" v-click>Past ~20–30 tools, accuracy collapses non-linearly. Curate ruthlessly. Or expose two tools: <em>search</em> and <em>execute.</em></p>
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

<div class="case">
<div class="case__head">
<span class="case__brand">GITHUB COPILOT</span>
<h2 class="case__title">From <em>40 tools</em> down to <em>13.</em></h2>
</div>
<div class="case__body">
<div class="case__col">
<span class="case__col-label">what changed</span>
<ul class="case__list">
<li v-click><strong>Merged atomic reads</strong> into one. Eight <code>get_*</code> calls became one <code>search</code>.</li>
<li v-click><strong>Outcome-shaped tools.</strong> "Open a PR with these changes" replaced six setup steps.</li>
<li v-click><strong>Dynamic toolsets.</strong> Tools load only when the repo or context calls for them.</li>
<li v-click><strong>Imperative descriptions.</strong> Every line rewritten until Claude Code itself stopped misusing them.</li>
</ul>
</div>
<div class="case__col case__col--result" v-click>
<span class="case__col-label">the result</span>
<div class="case__num">+2–5 pt</div>
<div class="case__num-label">benchmark accuracy</div>
<div class="case__num case__num--alt">−400 ms</div>
<div class="case__num-label">tool-call latency</div>
</div>
</div>
</div>

<style scoped>
.case { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 22px; padding: 24px 0; }
.case__head { display: flex; flex-direction: column; gap: 6px; }
.case__brand { font-family: "Bricolage Grotesque", sans-serif; font-size: 11px; font-weight: 575; letter-spacing: 0.22em; color: #7c3aed; }
.case__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 44px; line-height: 1.05; letter-spacing: -0.02em; color: #281950; margin: 0; }
.case__title em { font-style: italic; color: #7c3aed; }
.case__body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; }
.case__col { background: #ffffff; border-radius: 16px; padding: 24px 26px; box-shadow: rgba(32, 34, 55, 0.075) 0px 0px 0px 1px, rgba(32, 34, 55, 0.05) 0px 10px 15px -3px; }
.case__col-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 10px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.case__list { list-style: none; padding: 0; margin: 14px 0 0 0; display: flex; flex-direction: column; gap: 10px; }
.case__list li { font-family: "Bricolage Grotesque", sans-serif; font-size: 15px; line-height: 1.5; color: #5e537c; padding-left: 18px; position: relative; }
.case__list li::before { content: ""; position: absolute; left: 0; top: 0.7em; width: 6px; height: 6px; border-radius: 50%; background: #7c3aed; }
.case__list strong { color: #281950; font-weight: 575; }
.case__col--result { display: flex; flex-direction: column; justify-content: center; gap: 4px; background: linear-gradient(135deg, rgba(125, 211, 252, 0.18), rgba(249, 168, 212, 0.18)); }
.case__num { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 56px; line-height: 1; letter-spacing: -0.025em; color: #281950; margin-top: 14px; }
.case__num--alt { color: #7c3aed; font-style: italic; }
.case__num-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 13px; font-weight: 575; letter-spacing: 0.05em; color: #5e537c; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="case">
<div class="case__head">
<span class="case__brand">BLOCK · LINEAR MCP</span>
<h2 class="case__title">Same surface. <em>Two doors.</em></h2>
</div>
<div class="ba">
<div class="ba__col ba__col--before">
<span class="ba__label">before · ~30 atomic tools</span>
<div class="ba__chips">
<span class="ba__chip" v-click>issue.create</span>
<span class="ba__chip" v-click>issue.list</span>
<span class="ba__chip" v-click>issue.update</span>
<span class="ba__chip" v-click>issue.archive</span>
<span class="ba__chip" v-click>comment.create</span>
<span class="ba__chip" v-click>project.list</span>
<span class="ba__chip" v-click>project.get</span>
<span class="ba__chip" v-click>team.list</span>
<span class="ba__chip" v-click>label.list</span>
<span class="ba__chip" v-click>cycle.get</span>
<span class="ba__chip ba__chip--ghost">+20 more…</span>
</div>
</div>
<div class="ba__arrow">→</div>
<div class="ba__col ba__col--after">
<span class="ba__label">after · two tools</span>
<div class="ba__chips ba__chips--big">
<span class="ba__chip ba__chip--big" v-click>search(query)</span>
<span class="ba__chip ba__chip--big" v-click>execute(graphql)</span>
</div>
<p class="ba__note" v-click>The agent describes intent. <code>search</code> finds relevant entities. <code>execute</code> runs the actual GraphQL.</p>
</div>
</div>
</div>

<style scoped>
.case { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 22px; padding: 24px 0; }
.case__head { display: flex; flex-direction: column; gap: 6px; }
.case__brand { font-family: "Bricolage Grotesque", sans-serif; font-size: 11px; font-weight: 575; letter-spacing: 0.22em; color: #7c3aed; }
.case__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 48px; line-height: 1.05; letter-spacing: -0.02em; color: #281950; margin: 0; }
.case__title em { font-style: italic; color: #7c3aed; }
.ba { display: grid; grid-template-columns: 1fr auto 1fr; gap: 20px; align-items: stretch; }
.ba__col { background: #ffffff; border-radius: 16px; padding: 22px 24px; box-shadow: rgba(32, 34, 55, 0.075) 0px 0px 0px 1px, rgba(32, 34, 55, 0.05) 0px 10px 15px -3px; display: flex; flex-direction: column; gap: 14px; }
.ba__col--after { background: linear-gradient(135deg, rgba(125, 211, 252, 0.18), rgba(249, 168, 212, 0.18)); }
.ba__label { font-family: "Bricolage Grotesque", sans-serif; font-size: 10px; font-weight: 575; letter-spacing: 0.18em; text-transform: uppercase; color: #7c3aed; }
.ba__chips { display: flex; flex-wrap: wrap; gap: 8px; }
.ba__chips--big { gap: 12px; flex-direction: column; }
.ba__chip { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 12px; padding: 6px 12px; border-radius: 9999px; background: #f1f2f9; color: #281950; border: 1px solid #e7e6f4; }
.ba__chip--ghost { color: #a39ac1; background: transparent; border-style: dashed; font-style: italic; }
.ba__chip--big { font-size: 16px; padding: 12px 18px; background: #ffffff; color: #7c3aed; font-weight: 700; box-shadow: rgba(91, 33, 182, 0.12) 0px 6px 12px -4px; align-self: flex-start; }
.ba__arrow { font-family: "Fraunces", Georgia, serif; font-size: 36px; color: #7c3aed; align-self: center; }
.ba__note { font-family: "Bricolage Grotesque", sans-serif; font-size: 14px; color: #5e537c; line-height: 1.5; margin: 4px 0 0 0; }
</style>

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="cf">
<span class="eyebrow" style="color: #281950;">CLOUDFLARE</span>
<h2 class="cf__title">2,500 endpoints. <em>One context window.</em></h2>
<p class="cf__sub" v-click>If every endpoint were a tool, the schema alone would be:</p>
<div class="cf__big" v-click>
<span class="cf__num">~1.17M</span>
<span class="cf__unit">tokens</span>
</div>
<p class="cf__caption" v-click>before the user types <em>"hello."</em></p>
<p class="cf__pin" v-click>No frontier model can fit it. Most can't fit a tenth of it.</p>
</div>

<style scoped>
.cf { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 14px; max-width: 1100px; }
.cf__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 56px; line-height: 1.05; letter-spacing: -0.025em; color: #281950; margin: 6px 0 12px 0; }
.cf__title em { font-style: italic; color: #7c3aed; }
.cf__sub { font-family: "Bricolage Grotesque", sans-serif; font-size: 20px; color: #281950; font-weight: 575; margin: 0; }
.cf__big { display: flex; align-items: baseline; gap: 18px; margin: 8px 0; }
.cf__num { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 144px; line-height: 1; letter-spacing: -0.04em; color: #7c3aed; font-style: italic; }
.cf__unit { font-family: "Bricolage Grotesque", sans-serif; font-size: 22px; font-weight: 575; letter-spacing: 0.08em; text-transform: uppercase; color: #281950; }
.cf__caption { font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 22px; color: #281950; margin: 0; }
.cf__caption em { color: #7c3aed; }
.cf__pin { font-family: "Bricolage Grotesque", sans-serif; font-size: 16px; color: #281950; font-weight: 575; margin: 12px 0 0 0; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="cm">
<span class="eyebrow">CODE MODE</span>
<h2 class="cm__title">So Cloudflare exposed <em>two tools.</em></h2>
<div class="cm__flow">
<div class="cm__step cm__step--1" v-click>
<span class="cm__step-num">01</span>
<div class="cm__step-name"><code>search(query)</code></div>
<p class="cm__step-desc">Runs JS over the OpenAPI spec. Finds the right endpoints. Returns small.</p>
</div>
<div class="cm__step cm__step--2" v-click>
<span class="cm__step-num">02</span>
<div class="cm__step-name"><code>execute(code)</code></div>
<p class="cm__step-desc">Runs the agent's TypeScript against a typed SDK in a sandboxed Worker.</p>
</div>
</div>
<div class="cm__result" v-click>
<div class="cm__before"><span class="cm__before-num">~1.17M</span><span class="cm__before-label">tokens, naive</span></div>
<div class="cm__arrow">→</div>
<div class="cm__after"><span class="cm__after-num">~1,000</span><span class="cm__after-label">tokens, Code Mode</span></div>
<div class="cm__pct" v-click>99.9% reduction. Full coverage.</div>
</div>
</div>

<style scoped>
.cm { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; gap: 18px; padding: 24px 0; }
.cm__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 44px; line-height: 1.05; letter-spacing: -0.02em; color: #281950; margin: 4px 0 8px 0; }
.cm__title em { font-style: italic; color: #7c3aed; }
.cm__flow { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.cm__step { background: #ffffff; border-radius: 16px; padding: 22px 24px; box-shadow: rgba(32, 34, 55, 0.075) 0px 0px 0px 1px, rgba(32, 34, 55, 0.05) 0px 10px 15px -3px; display: flex; flex-direction: column; gap: 10px; position: relative; overflow: hidden; }
.cm__step::before { content: ""; position: absolute; inset: 0; opacity: 0.18; pointer-events: none; }
.cm__step--1::before { background: linear-gradient(120deg, rgba(125, 211, 252, 0.6), transparent 60%); }
.cm__step--2::before { background: linear-gradient(120deg, rgba(249, 168, 212, 0.6), transparent 60%); }
.cm__step-num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 32px; color: #7c3aed; position: relative; z-index: 1; }
.cm__step-name { font-family: "JetBrains Mono", ui-monospace, monospace; font-size: 18px; font-weight: 700; color: #281950; position: relative; z-index: 1; }
.cm__step-name code { background: transparent; padding: 0; color: inherit; font-family: inherit; }
.cm__step-desc { font-family: "Bricolage Grotesque", sans-serif; font-size: 14px; line-height: 1.5; color: #5e537c; margin: 0; position: relative; z-index: 1; }
.cm__result { display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: center; padding: 18px 24px; background: #ffffff; border-radius: 16px; box-shadow: rgba(32, 34, 55, 0.05) 0px 0px 0px 1px; }
.cm__before, .cm__after { display: flex; flex-direction: column; gap: 2px; align-items: center; }
.cm__before-num, .cm__after-num { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 36px; line-height: 1; letter-spacing: -0.02em; }
.cm__before-num { color: #a39ac1; text-decoration: line-through; }
.cm__after-num { color: #7c3aed; font-style: italic; }
.cm__before-label, .cm__after-label { font-family: "Bricolage Grotesque", sans-serif; font-size: 11px; font-weight: 575; letter-spacing: 0.14em; text-transform: uppercase; color: #5e537c; }
.cm__arrow { font-family: "Fraunces", Georgia, serif; font-size: 28px; color: #7c3aed; }
.cm__pct { grid-column: 1 / -1; text-align: center; font-family: "Fraunces", Georgia, serif; font-style: italic; font-size: 16px; color: #281950; margin-top: 4px; }
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
<div class="card" v-click><div class="card-eyebrow">01</div><div class="card-title">Outcome-oriented tools.</div><p class="card-body">"Close the ticket with evidence." Not <code>tickets.update</code>.</p></div>
<div class="card" v-click><div class="card-eyebrow">02</div><div class="card-title">Structured outputs.</div><p class="card-body">JSON Schema in. JSON Schema out. No guessing.</p></div>
<div class="card" v-click><div class="card-eyebrow">03</div><div class="card-title">Idempotency keys.</div><p class="card-body">Agents retry. Without a key, they double-charge.</p></div>
<div class="card" v-click><div class="card-eyebrow">04</div><div class="card-title">Executable errors.</div><p class="card-body">Missing scope. Conflict id. Next step. Make failure actionable.</p></div>
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
<div class="legacy__step" v-click><span class="legacy__num">01</span><span class="legacy__txt">Wrap your most-used endpoint as an MCP tool.</span></div>
<div class="legacy__step" v-click><span class="legacy__num">02</span><span class="legacy__txt">Or expose your three most-common workflows as a CLI.</span></div>
<div class="legacy__step" v-click><span class="legacy__num">03</span><span class="legacy__txt">Or publish an OpenAPI spec and let the agent write the client.</span></div>
</div>
</div>

<style scoped>
.legacy { position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: center; height: 100%; max-width: 1100px; gap: 12px; padding: 24px 0 40px; }
.legacy__title { font-family: "Fraunces", Georgia, serif; font-weight: 500; font-size: 60px; line-height: 1.02; letter-spacing: -0.035em; color: #281950; margin: 4px 0 4px 0; }
.legacy__title em { font-style: italic; color: #7c3aed; }
.legacy__sub { font-family: "Bricolage Grotesque", sans-serif; font-size: 19px; color: #281950; font-weight: 575; margin: 0 0 8px 0; }
.legacy__steps { display: flex; flex-direction: column; gap: 10px; }
.legacy__step { display: grid; grid-template-columns: 48px 1fr; gap: 16px; align-items: baseline; padding: 12px 20px; border-radius: 12px; background: rgba(255, 255, 255, 0.9); box-shadow: rgba(32, 34, 55, 0.05) 0px 0px 0px 1px; }
.legacy__num { font-family: "Fraunces", Georgia, serif; font-style: italic; font-weight: 500; font-size: 22px; color: #7c3aed; }
.legacy__txt { font-family: "Bricolage Grotesque", sans-serif; font-size: 17px; color: #281950; font-weight: 575; }
</style>

---
layout: default
class: end-slide
---

<EndCard />
