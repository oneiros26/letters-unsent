<script setup lang="ts">
import MainPage from "./components/MainPage.vue";
import { useGameStore } from "./stores/game";

const game = useGameStore();

game.loadGame();
</script>

<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<style></style>
