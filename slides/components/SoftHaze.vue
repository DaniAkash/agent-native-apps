<template>
  <div class="soft-haze">
    <div class="soft-haze__tint" />
    <div class="soft-haze__grain" />
  </div>
</template>

<style scoped>
.soft-haze {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.soft-haze__tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(125, 211, 252, 0.10),
    rgba(165, 180, 252, 0.10),
    rgba(249, 168, 212, 0.10)
  );
}

.soft-haze__grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
</style>
