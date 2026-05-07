---
theme: default
title: Building Agent-Native Apps with JavaScript
author: Dani Akash
info: |
  Building Agent-Native Apps with JavaScript
  Talk delivered at the Digital Dreamers Den (D3) Anniversary Meetup.
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

  <h1 class="cover__title">
    Building<br/>
    <em>agent-native</em><br/>
    apps with JavaScript.
  </h1>

  <p class="cover__sub">
    A field guide for the next generation of apps —<br/>
    the ones built for software that thinks, acts, and adapts.
  </p>

  <div class="cover__sig">
    <span class="cover__name">Dani Akash</span>
    <span class="cover__dot">·</span>
    <span class="cover__role">Software Engineer · @dani_akash_</span>
  </div>
</div>

<style>
.cover {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 0 32px;
  max-width: 980px;
  margin: 0 auto;
}
.cover__title {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 92px;
  line-height: 0.98;
  letter-spacing: -0.035em;
  color: #281950;
  margin: 32px 0 24px 0;
}
.cover__title em {
  font-style: italic;
  color: #7c3aed;
}
.cover__sub {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 22px;
  line-height: 1.5;
  color: #5e537c;
  margin: 0 0 48px 0;
  max-width: 720px;
}
.cover__sig {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 14px;
  font-weight: 575;
  color: #281950;
  letter-spacing: 0.04em;
}
.cover__name { font-weight: 700; }
.cover__role { color: #5e537c; font-weight: 450; }
.cover__dot  { color: #a39ac1; }
</style>

<!--
Welcome — we're going to talk about a quiet shift happening underneath every
app you build: software is starting to use software. The interfaces we shipped
yesterday were built for humans. The interfaces we're shipping next have
agents on the other side.
-->

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="hello">
  <div class="hello__left">
    <span class="eyebrow">— hello, hi, namaste</span>
    <h2 class="hello__name">I'm Dani.</h2>
    <p>
      I build for the open web — apps, agents, devtools, and the
      occasional weekend rabbit hole.
    </p>
    <p class="hello__role">
      Currently shipping AI-native tooling at <strong>Felafax</strong> and
      writing <a href="https://daniakash.com">daniakash.com</a>.
    </p>
  </div>

  <div class="hello__right">
    <div class="hello__card">
      <span class="card-eyebrow">tonight, we're at</span>
      <div class="hello__event">
        <span class="hello__d3">D3</span>
        <div>
          <div class="hello__event-name">Digital Dreamers Den</div>
          <div class="hello__event-meta">Anniversary Meetup · AI × Full-stack</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style scoped>
.hello {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: center;
  height: 100%;
}
.hello__name {
  font-size: 72px;
  margin: 16px 0 28px 0;
}
.hello__role { color: #a39ac1; font-size: 17px; }
.hello__card {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow:
    rgba(32, 34, 55, 0.075) 0px 0px 0px 1px,
    rgba(32, 34, 55, 0.05) 0px 10px 15px -3px;
}
.hello__event {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
}
.hello__d3 {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 64px;
  line-height: 1;
  color: #7c3aed;
}
.hello__event-name {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 26px;
  color: #281950;
}
.hello__event-meta {
  font-size: 14px;
  color: #5e537c;
  letter-spacing: 0.04em;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="hook">
<span class="eyebrow">— a quiet shift</span>
<p class="display-xl">Most apps today<br/>are built <em>around users.</em></p>
</div>

<style scoped>
.hook {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.display-xl {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 100px;
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: #281950;
  margin-top: 24px;
}
.display-xl em {
  font-style: italic;
  color: #7c3aed;
}
</style>

<!--
For thirty years we have been designing for one user — a person, with eyes,
hands, and patience. Every button, every form, every loading spinner is
calibrated for human attention.
-->

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="hook">
<span class="eyebrow" style="color: #281950;">— but what if</span>
<p class="display-xl">the next ones are<br/>built <em>around agents?</em></p>
<p class="hook__sub">Software that thinks, acts, and interacts on your behalf.</p>
</div>

<style scoped>
.hook {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 1100px;
}
.display-xl {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 92px;
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: #281950;
  margin: 16px 0 28px 0;
}
.display-xl em {
  font-style: italic;
  color: #7c3aed;
}
.hook__sub {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 22px;
  line-height: 1.4;
  color: #281950;
  font-weight: 575;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="def">
  <div class="def__left">
    <span class="eyebrow">— working definition</span>
    <h2>What is an<br/><em>agent-native</em> app?</h2>
    <p>
      An app where intelligence isn't a feature you bolt on —
      it's the <strong>foundation</strong> the rest of the app
      stands on.
    </p>
    <p>
      The user is no longer the only consumer of the interface.
      Agents read it, navigate it, and operate it too.
    </p>
  </div>

  <div class="def__right">
    <AgentOrbit />
  </div>
</div>

<style scoped>
.def {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 64px;
  align-items: center;
  height: 100%;
}
.def__left h2 {
  font-size: 56px;
  line-height: 1.05;
  margin: 16px 0 28px 0;
}
.def__left h2 em {
  font-style: italic;
  color: #7c3aed;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="trinity">
<span class="eyebrow">— three pillars</span>
<h2>Apps that <em>think</em>, <em>act</em>, and <em>adapt</em>.</h2>
<div class="trinity__grid">
<div class="card trinity__card">
<div class="trinity__num">01</div>
<div class="card-eyebrow">Think</div>
<div class="card-title">Reason about goals</div>
<p class="card-body">The app holds context, plans steps, and chooses tools. Logic stops being a static if-tree and starts being a running deliberation.</p>
</div>
<div class="card trinity__card">
<div class="trinity__num">02</div>
<div class="card-eyebrow">Act</div>
<div class="card-title">Take real action</div>
<p class="card-body">Tools, side effects, side-quests. The agent can hit your APIs, write to your DB, send the email — guarded by the same permissions a user would have.</p>
</div>
<div class="card trinity__card">
<div class="trinity__num">03</div>
<div class="card-eyebrow">Adapt</div>
<div class="card-title">Learn the user</div>
<p class="card-body">Memory across turns and sessions. The interface morphs to what each user actually does, not what we guessed at design time.</p>
</div>
</div>
</div>

<style scoped>
.trinity {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.trinity h2 {
  font-size: 56px;
  line-height: 1.05;
  margin: 12px 0 48px 0;
}
.trinity h2 em {
  font-style: italic;
  color: #7c3aed;
}
.trinity__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.trinity__card { padding: 32px 28px; min-height: 260px; }
.trinity__num {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 44px;
  color: #e7e6f4;
  position: absolute;
  top: 18px;
  right: 22px;
  pointer-events: none;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="why">
  <div class="why__left">
    <span class="eyebrow">— and JavaScript?</span>
    <h2>JS is the lingua franca<br/>of <em>both sides</em>.</h2>
    <p>
      The web is where users live.<br/>
      Node is where servers live.<br/>
      And now, agents live in the same runtime.
    </p>
    <p class="muted">No context switch. One language for the UI, the API, the tool, the agent loop.</p>
  </div>

  <div class="why__right">
    <div class="why__stack">
      <div class="why__layer why__layer--ui">
        <span class="why__label">UI · React, Vue, Svelte</span>
      </div>
      <div class="why__layer why__layer--api">
        <span class="why__label">API · Hono, Express, Next</span>
      </div>
      <div class="why__layer why__layer--agent">
        <span class="why__label">AGENT · AI SDK, ACP, MCP</span>
      </div>
      <div class="why__layer why__layer--tools">
        <span class="why__label">TOOLS · the same TS modules</span>
      </div>
    </div>
  </div>
</div>

<style scoped>
.why {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 64px;
  align-items: center;
  height: 100%;
}
.why h2 {
  font-size: 52px;
  line-height: 1.05;
  margin: 16px 0 28px 0;
}
.why h2 em {
  font-style: italic;
  color: #7c3aed;
}
.why__stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.why__layer {
  padding: 22px 24px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow:
    rgba(32, 34, 55, 0.075) 0px 0px 0px 1px,
    rgba(32, 34, 55, 0.05) 0px 10px 15px -3px;
  position: relative;
  overflow: hidden;
}
.why__layer::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.18;
  pointer-events: none;
}
.why__layer--ui::before    { background: linear-gradient(120deg, rgba(125, 211, 252, 0.6), transparent 60%); }
.why__layer--api::before   { background: linear-gradient(120deg, rgba(165, 180, 252, 0.6), transparent 60%); }
.why__layer--agent::before { background: linear-gradient(120deg, rgba(249, 168, 212, 0.6), transparent 60%); }
.why__layer--tools::before { background: linear-gradient(120deg, rgba(124, 58, 237, 0.20), transparent 60%); }
.why__label {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 575;
  font-size: 14px;
  letter-spacing: 0.12em;
  color: #281950;
  position: relative;
  z-index: 1;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="patterns">
  <span class="eyebrow">— how to start</span>
  <h2>Three design patterns<br/>that change <em>everything</em>.</h2>
  <p class="muted patterns__intro">
    Pick one to ship next week. The rest will follow.
  </p>
</div>

<style scoped>
.patterns {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 1000px;
}
.patterns h2 {
  font-size: 72px;
  line-height: 1.0;
  margin: 16px 0 28px 0;
}
.patterns h2 em {
  font-style: italic;
  color: #7c3aed;
}
.patterns__intro {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-size: 24px;
  color: #5e537c;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="pattern">
  <div class="pattern__head">
    <div class="pattern__num">01</div>
    <div>
      <span class="eyebrow">— pattern one</span>
      <h2 class="pattern__title">Tools, not buttons.</h2>
    </div>
  </div>

  <div class="pattern__body">
    <p>
      Every meaningful capability in your app should exist as a
      <strong>typed tool</strong> the agent can call — not just a UI
      handler buried in a component.
    </p>

```ts
// the same function powers both the button AND the agent
export const sendInvoice = tool({
  description: 'Send an invoice to a customer',
  parameters: z.object({
    customerId: z.string(),
    amount: z.number(),
    dueDate: z.string().date(),
  }),
  execute: async ({ customerId, amount, dueDate }) => {
    return await invoices.send({ customerId, amount, dueDate })
  },
})
```

  </div>
</div>

<style scoped>
.pattern {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pattern__head {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 28px;
}
.pattern__num {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 96px;
  line-height: 1;
  color: #7c3aed;
  letter-spacing: -0.02em;
}
.pattern__title {
  font-size: 56px;
  line-height: 1.0;
  margin: 8px 0 0 0;
}
.pattern__body { max-width: 920px; }
.pattern__body p { font-size: 20px; margin-bottom: 16px; }
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="pattern">
  <div class="pattern__head">
    <div class="pattern__num">02</div>
    <div>
      <span class="eyebrow">— pattern two</span>
      <h2 class="pattern__title">UI as <em>protocol</em>,<br/>not paint.</h2>
    </div>
  </div>

<div class="pattern__body">
<p>Render structured intent — not just pixels. When the agent and the human both consume the same descriptive surface, one interface serves both.</p>
<div class="pattern__grid">
<div class="card">
<div class="card-eyebrow">For humans</div>
<div class="card-title">A polished React tree</div>
<p class="card-body">Buttons, lists, charts — what they always were.</p>
</div>
<div class="card">
<div class="card-eyebrow">For agents</div>
<div class="card-title">A semantic JSON manifest</div>
<p class="card-body">Same data, exposed via MCP / ACP / a <code>/.well-known/agents.json</code>.</p>
</div>
</div>
</div>
</div>

<style scoped>
.pattern {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pattern__head {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 28px;
}
.pattern__num {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 96px;
  line-height: 1;
  color: #7c3aed;
  letter-spacing: -0.02em;
}
.pattern__title {
  font-size: 56px;
  line-height: 1.0;
  margin: 8px 0 0 0;
}
.pattern__title em { font-style: italic; color: #7c3aed; }
.pattern__body { max-width: 1000px; }
.pattern__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 28px;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="pattern">
  <div class="pattern__head">
    <div class="pattern__num">03</div>
    <div>
      <span class="eyebrow">— pattern three</span>
      <h2 class="pattern__title">Memory is a<br/>first-class citizen.</h2>
    </div>
  </div>

<div class="pattern__body">
<p>Agent-native apps remember. Across turns, sessions, devices. Treat memory like you'd treat your database — schema, scope, eviction, audit.</p>
<div class="pattern__pills">
<span class="pill-row">SHORT-TERM · per turn</span>
<span class="pill-row">SESSION · the current task</span>
<span class="pill-row">LONG-TERM · the user, persisted</span>
<span class="pill-row pill-row--accent">SHARED · across agents</span>
</div>
</div>
</div>

<style scoped>
.pattern {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pattern__head {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 28px;
}
.pattern__num {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 96px;
  line-height: 1;
  color: #7c3aed;
  letter-spacing: -0.02em;
}
.pattern__title {
  font-size: 56px;
  line-height: 1.0;
  margin: 8px 0 0 0;
}
.pattern__body { max-width: 1000px; }
.pattern__body p { font-size: 20px; margin-bottom: 28px; }
.pattern__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.pill-row {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 13px;
  font-weight: 575;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 10px 18px;
  border-radius: 9999px;
  background: #ffffff;
  color: #281950;
  border: 1px solid #e7e6f4;
}
.pill-row--accent {
  background: #7c3aed;
  color: #ffffff;
  border-color: transparent;
  box-shadow: rgba(91, 33, 182, 0.25) 0px 8px 16px -4px;
}
</style>

---
layout: default
class: light-slide
---

<HeroGradient />

<div class="ecosystem">
  <span class="eyebrow" style="color: #281950;">— the JS toolkit, today</span>
  <h2 style="color: #281950;">You can ship one this weekend.</h2>

  <Marquee :items="[
    'Vercel AI SDK',
    'Mastra',
    'LangChain.js',
    'Claude Agent SDK',
    'OpenAI Agents SDK',
    'Inngest Agents',
    'Hono + tools',
    'Workers AI',
    'MCP / ACP',
    'tRPC + zod',
    'Drizzle + memory',
    'Auth.js scopes',
  ]" />

  <p class="ecosystem__note">
    None of these existed three years ago. All of them are JavaScript-first.
  </p>
</div>

<style scoped>
.ecosystem {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 28px;
}
.ecosystem h2 {
  font-size: 56px;
  line-height: 1.05;
  margin: 8px 0 12px 0;
}
.ecosystem__note {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-size: 22px;
  color: #281950;
  align-self: center;
}
</style>

---
layout: default
class: light-slide
---

<SoftHaze />

<div class="recap">
  <span class="eyebrow">— take this home</span>
  <h2>Three things to remember.</h2>

  <ol class="recap__list">
    <li>
      <strong>Build for two readers.</strong>
      Every screen will eventually be parsed by something
      that doesn't have eyes.
    </li>
    <li>
      <strong>Promote your handlers to tools.</strong>
      Typed, described, callable from the loop. Free upgrade.
    </li>
    <li>
      <strong>Memory ≠ chat history.</strong>
      Treat it like a database, not a transcript.
    </li>
  </ol>
</div>

<style scoped>
.recap {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 1000px;
}
.recap h2 {
  font-size: 64px;
  line-height: 1.0;
  margin: 12px 0 36px 0;
}
.recap__list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.recap__list li {
  font-size: 22px;
  line-height: 1.5;
  color: #5e537c;
  padding-left: 56px;
  position: relative;
  counter-increment: r;
}
.recap__list { counter-reset: r; }
.recap__list li::before {
  content: counter(r, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 2px;
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  color: #7c3aed;
}
.recap__list li strong {
  color: #281950;
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  display: block;
  margin-bottom: 4px;
}
</style>

---
layout: default
class: end-slide
---

<EndCard />
