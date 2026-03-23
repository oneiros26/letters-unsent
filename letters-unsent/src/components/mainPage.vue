<template>
  <main>
    <LoveShop />
    <CenterBar />
    <MoneyShop />
  </main>
</template>

<script lang="ts" setup>
import LoveShop from "./loveShop.vue";
import CenterBar from "./centerBar.vue";
import MoneyShop from "./moneyShop.vue";
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
}
</style>
