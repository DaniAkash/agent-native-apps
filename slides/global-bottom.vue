<template>
  <div class="g-bottom">
    <span class="g-bottom__brand">agent-native-apps · D3 '26</span>
    <span class="g-bottom__page">{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</span>
  </div>
</template>

<style scoped>
.g-bottom {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a39ac1;
  z-index: 50;
  pointer-events: none;
}
.end-slide .g-bottom { color: rgba(255, 255, 255, 0.45); }
</style>
