<template>
  <div class="end">
    <div class="end__bg" />
    <div class="end__inner">
      <p class="end__eyebrow">end of transmission</p>
      <h2 class="end__title">build apps the<br/>agent can use.</h2>
      <div class="end__links">
        <a class="end__link" href="https://github.com/DaniAkash">
          <span class="end__link-label">GITHUB</span>
          <span class="end__link-value">@DaniAkash</span>
        </a>
        <a class="end__link" href="https://twitter.com/dani_akash_">
          <span class="end__link-label">X</span>
          <span class="end__link-value">@dani_akash_</span>
        </a>
        <a class="end__link" href="https://daniakash.com">
          <span class="end__link-label">WEB</span>
          <span class="end__link-value">daniakash.com</span>
        </a>
      </div>
      <p class="end__sign">Dani Akash · D3 Anniversary Meetup</p>
    </div>
  </div>
</template>

<style scoped>
.end {
  position: absolute;
  inset: 0;
  background: #191034;
  overflow: hidden;
  color: #ffffff;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
}

.end__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 80% 20%, rgba(125, 211, 252, 0.25), transparent 55%),
    radial-gradient(ellipse at 15% 85%, rgba(249, 168, 212, 0.20), transparent 55%),
    radial-gradient(ellipse at 50% 50%, rgba(165, 180, 252, 0.15), transparent 60%);
  pointer-events: none;
}

.end__inner {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 96px 96px;
  max-width: 1100px;
  margin: 0 auto;
}

.end__eyebrow {
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-size: 22px;
  color: #a39ac1;
  margin-bottom: 24px;
}

.end__title {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 96px;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0 0 64px 0;
}

.end__links {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 56px;
}

.end__link {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 22px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;
  color: inherit;
  transition: background 0.2s ease;
}

.end__link:hover {
  background: rgba(255, 255, 255, 0.12);
}

.end__link-label {
  font-size: 11px;
  font-weight: 575;
  letter-spacing: 0.22em;
  color: #a39ac1;
}

.end__link-value {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
}

.end__sign {
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a39ac1;
}
</style>
