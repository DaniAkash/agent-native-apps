<template>
  <div class="marquee">
    <div class="marquee__track">
      <span v-for="(item, i) in repeated" :key="i" class="marquee__item">
        <span class="marquee__star">✦</span>
        <span>{{ item }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  items: { type: Array, default: () => [] }
})
const repeated = computed(() => [...props.items, ...props.items, ...props.items])
</script>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
.marquee__track {
  display: flex;
  gap: 56px;
  animation: scroll 40s linear infinite;
  width: max-content;
}
.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  font-family: "Fraunces", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  color: #281950;
  white-space: nowrap;
}
.marquee__star {
  color: #7c3aed;
  font-size: 20px;
}
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}
</style>
