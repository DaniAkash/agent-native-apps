<template>
  <div class="stat">
    <div class="stat__num">
      <slot name="num">{{ num }}</slot>
    </div>
    <div class="stat__label">
      <slot name="label">{{ label }}</slot>
    </div>
    <div class="stat__source" v-if="source || $slots.source">
      <slot name="source">{{ source }}</slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  num: { type: String, default: '' },
  label: { type: String, default: '' },
  source: { type: String, default: '' },
})
</script>

<style scoped>
.stat {
  background: #ffffff;
  border-radius: 16px;
  padding: 28px 24px 22px;
  box-shadow:
    rgba(32, 34, 55, 0.075) 0px 0px 0px 1px,
    rgba(32, 34, 55, 0.05) 0px 10px 15px -3px,
    rgba(32, 34, 55, 0.05) 0px 4px 6px -4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
}
.stat::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(165, 180, 252, 0.10), transparent 55%);
}
.stat__num {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 56px;
  line-height: 1.0;
  letter-spacing: -0.025em;
  color: #281950;
  position: relative;
  z-index: 1;
}
.stat__num :deep(em) {
  font-style: italic;
  color: #7c3aed;
}
.stat__label {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 575;
  font-size: 15px;
  line-height: 1.35;
  color: #281950;
  margin-top: 6px;
  position: relative;
  z-index: 1;
}
.stat__source {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 11px;
  font-weight: 450;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #a39ac1;
  margin-top: 8px;
  position: relative;
  z-index: 1;
}
</style>
