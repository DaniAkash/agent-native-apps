<template>
  <div class="dt">
    <div class="dt__col" v-for="(item, i) in items" :key="i">
      <div class="dt__name">
        <span class="dt__sq" :style="{ background: item.color }" />
        {{ item.name }}
      </div>
      <p class="dt__tag">{{ item.tagline }}</p>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    name: 'VS Code',
    color: '#7dd3fc',
    tagline: 'Your home for multi-agent development.',
  },
  {
    name: 'Zed',
    color: '#a5b4fc',
    tagline: 'Crafted for collaboration with humans and AI.',
  },
  {
    name: 'JetBrains',
    color: '#f9a8d4',
    tagline: 'Top AI agents in the industry, built in.',
  },
]
</script>

<style scoped>
.dt {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  position: relative;
  z-index: 2;
}
.dt__col {
  background: #ffffff;
  border-radius: 16px;
  padding: 26px 24px;
  box-shadow:
    rgba(32, 34, 55, 0.075) 0px 0px 0px 1px,
    rgba(32, 34, 55, 0.05) 0px 10px 15px -3px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.dt__name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Fraunces", Georgia, serif;
  font-weight: 500;
  font-size: 24px;
  color: #281950;
  letter-spacing: -0.01em;
}
.dt__sq {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: rgba(91, 33, 182, 0.1) 0px 4px 8px -2px;
}
.dt__tag {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 450;
  font-size: 16px;
  line-height: 1.45;
  color: #5e537c;
  margin: 0;
}
</style>
