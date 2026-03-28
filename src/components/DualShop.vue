<template>
  <article class="dual-shop">
    <MoneyShop />
    <LoveShop />
  </article>
</template>

<script lang="ts" setup>
import MoneyShop from "./MoneyShop.vue";
import LoveShop from "./LoveShop.vue";
</script>

<style scoped>
.dual-shop {
  display: flex;
  flex-direction: column;
}
</style>
