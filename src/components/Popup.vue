<template>
  <aside class="popup" v-if="game.showSavePopup">
    <h2>Game saved!</h2>
  </aside>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game.ts";
const game = useGameStore();
</script>

<style scoped>
.popup {
  position: fixed;
  z-index: 999;
  bottom: 12px;
  right: 12px;
  padding: 8px;

  background-color: #9a4a45;
  border-radius: 4px;
}

.popup h2 {
  font-size: 18px;
  color: white;
}
</style>
