<template>
  <span class="pill-tag">
    <span class="pill-tag__dot" />
    <slot />
  </span>
</template>

<style scoped>
.pill-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 9999px;
  background: #ffffff;
  color: #281950;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 12px;
  font-weight: 575;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  box-shadow:
    rgba(91, 33, 182, 0.1) 0px 5px 5px -2px,
    rgba(91, 33, 182, 0.1) 0px 2px 4px -2px;
  position: relative;
  z-index: 2;
}

.pill-tag__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7c3aed;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.18);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.18); }
  50%      { box-shadow: 0 0 0 9px rgba(124, 58, 237, 0.04); }
}
</style>
