<template>
  <main>
    <div class="desktop-layout">
      <LoveShop />
      <CenterBar />
      <MoneyShop />
    </div>

    <div class="compact-layout">
      <CenterBar />
      <DualShop />
    </div>

    <Popup />
    <Achievements />
    <Settings />
    <AudioPopup />
  </main>
</template>

<script lang="ts" setup>
import LoveShop from "./LoveShop.vue";
import CenterBar from "./GameView.vue";
import MoneyShop from "./MoneyShop.vue";
import DualShop from "./DualShop.vue";
import Popup from "./Popup.vue";
import Achievements from "./Achievements.vue";
import Settings from "./Settings.vue";
import AudioPopup from "./AudioPopup.vue";
</script>

<style scoped>
main {
  background-image: url("../assets/imgs/sky-bg.png");
  background-size: cover;
  background-position: top;
}
.desktop-layout {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
}
.compact-layout {
  display: none;

  width: 100%;
  height: 100vh;

  grid-template-columns: 2fr 1fr;
}

@media (max-width: 1250px) {
  .compact-layout {
    display: grid;
  }

  .desktop-layout {
    display: none;
  }
}
@media (max-width: 700px) {
  .compact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
