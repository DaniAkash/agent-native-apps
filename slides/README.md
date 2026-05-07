# Building Agent-Native Apps with JavaScript — Slides

Slidev deck for the talk delivered at the **Digital Dreamers Den (D3) Anniversary Meetup**.

Design tokens follow [`/design.md`](../design.md) — light theme, Fraunces (display) + Bricolage Grotesque (body), Electric Violet primary, soft pastel hero gradient.

## Local dev

```sh
bun install
bun run dev
```

Then open the URL Slidev prints. Hot reload is on.

## Build

```sh
bun run build      # static site → ./dist
bun run export     # PDF
```

## Layout

```
slides/
├── slides.md            # the deck
├── styles/index.css     # design tokens applied to .slidev-layout
├── components/          # custom Vue components used in slides.md
│   ├── HeroGradient.vue
│   ├── SoftHaze.vue
│   ├── PillTag.vue
│   ├── AgentOrbit.vue
│   ├── Marquee.vue
│   └── EndCard.vue
└── global-bottom.vue    # page number + brand strip
```
