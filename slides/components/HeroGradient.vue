<template>
  <div class="hero-gradient">
    <div class="hero-gradient__bg" />
    <div class="hero-gradient__blob hero-gradient__blob--1" />
    <div class="hero-gradient__blob hero-gradient__blob--2" />
    <div class="hero-gradient__blob hero-gradient__blob--3" />
    <div class="hero-gradient__grain" />
  </div>
</template>

<style scoped>
.hero-gradient {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.hero-gradient__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgb(125, 211, 252),
    rgb(165, 180, 252),
    rgb(249, 168, 212)
  );
  opacity: 0.55;
}

.hero-gradient__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
}

.hero-gradient__blob--1 {
  width: 520px;
  height: 520px;
  background: rgb(125, 211, 252);
  top: -120px;
  left: -120px;
  animation: drift1 14s ease-in-out infinite alternate;
}

.hero-gradient__blob--2 {
  width: 600px;
  height: 600px;
  background: rgb(249, 168, 212);
  bottom: -160px;
  right: -160px;
  animation: drift2 18s ease-in-out infinite alternate;
}

.hero-gradient__blob--3 {
  width: 420px;
  height: 420px;
  background: rgb(165, 180, 252);
  top: 30%;
  right: 25%;
  animation: drift3 22s ease-in-out infinite alternate;
}

.hero-gradient__grain {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@keyframes drift1 {
  0%   { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 60px) scale(1.08); }
}
@keyframes drift2 {
  0%   { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-50px, -30px) scale(1.05); }
}
@keyframes drift3 {
  0%   { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-30px, 40px) scale(0.95); }
}
</style>
