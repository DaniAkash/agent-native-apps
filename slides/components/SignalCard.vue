<template>
  <div class="sig">
    <div class="sig__head">
      <span class="sig__tag">{{ tag }}</span>
      <span class="sig__brand">{{ brand }}</span>
    </div>
    <div class="sig__title" v-html="title" />
    <p class="sig__body"><slot /></p>
  </div>
</template>

<script setup>
defineProps({
  tag: { type: String, default: '' },
  brand: { type: String, default: '' },
  title: { type: String, default: '' },
})
</script>

<style scoped>
.sig {
  background: #ffffff;
  border-radius: 16px;
  padding: 26px 26px 22px;
  box-shadow:
    rgba(32, 34, 55, 0.075) 0px 0px 0px 1px,
    rgba(32, 34, 55, 0.05) 0px 10px 15px -3px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;
}
.sig__head {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sig__tag {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 11px;
  font-weight: 575;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7c3aed;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(124, 58, 237, 0.08);
}
.sig__brand {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a39ac1;
  font-weight: 575;
}
.sig__title {
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.18;
  letter-spacing: -0.01em;
  color: #281950;
  margin: 0;
}
.sig__title :deep(em) {
  font-style: italic;
  color: #7c3aed;
}
.sig__body {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 15px;
  line-height: 1.55;
  color: #5e537c;
  margin: 0;
}
</style>
