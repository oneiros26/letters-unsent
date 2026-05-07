<script setup lang="ts">
import MainPage from "./components/MainPage.vue";
import { useGameStore } from "./stores/game";

const game = useGameStore();

game.loadGame();
game.startGame();
game.autoSave();
</script>

<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<style></style>
