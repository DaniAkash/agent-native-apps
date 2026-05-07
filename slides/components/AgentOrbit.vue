<template>
  <div class="orbit">
    <svg viewBox="0 0 600 600" class="orbit__svg" aria-hidden="true">
      <defs>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stop-color="#7dd3fc" />
          <stop offset="50%" stop-color="#a5b4fc" />
          <stop offset="100%" stop-color="#f9a8d4" />
        </linearGradient>
        <radialGradient id="core" cx="50%" cy="50%">
          <stop offset="0%"  stop-color="#7c3aed" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#281950" stop-opacity="1" />
        </radialGradient>
      </defs>

      <!-- outer rings -->
      <circle cx="300" cy="300" r="240"
              fill="none" stroke="url(#ring)" stroke-width="1.5" opacity="0.65" />
      <circle cx="300" cy="300" r="180"
              fill="none" stroke="#a39ac1" stroke-width="1" stroke-dasharray="2 6" opacity="0.55" />
      <circle cx="300" cy="300" r="120"
              fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.4" />

      <!-- core -->
      <circle cx="300" cy="300" r="58" fill="url(#core)" />
      <text x="300" y="308" text-anchor="middle"
            font-family="Fraunces, Georgia, serif" font-size="22" font-weight="500"
            fill="#ffffff" letter-spacing="-0.5">agent</text>

      <!-- satellite nodes -->
      <g class="sat sat--1">
        <circle cx="540" cy="300" r="14" fill="#7dd3fc" />
        <text x="540" y="338" text-anchor="middle"
              font-family="Bricolage Grotesque, sans-serif" font-size="13"
              font-weight="575" fill="#281950" letter-spacing="2">THINK</text>
      </g>
      <g class="sat sat--2">
        <circle cx="120" cy="420" r="14" fill="#a5b4fc" />
        <text x="120" y="458" text-anchor="middle"
              font-family="Bricolage Grotesque, sans-serif" font-size="13"
              font-weight="575" fill="#281950" letter-spacing="2">ACT</text>
      </g>
      <g class="sat sat--3">
        <circle cx="240" cy="100" r="14" fill="#f9a8d4" />
        <text x="240" y="80" text-anchor="middle"
              font-family="Bricolage Grotesque, sans-serif" font-size="13"
              font-weight="575" fill="#281950" letter-spacing="2">ADAPT</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.orbit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.orbit__svg {
  width: 100%;
  max-width: 520px;
  height: auto;
}
.sat {
  transform-origin: 300px 300px;
  animation: orbit 26s linear infinite;
}
.sat--1 { animation-duration: 30s; }
.sat--2 { animation-duration: 24s; animation-direction: reverse; }
.sat--3 { animation-duration: 38s; }

@keyframes orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>
