<template>
  <section class="utilities">
    <ul>
      <li class="language">
        <CircleButton :icon="Translate" color="#7da2c7" />
      </li>
      <li class="achievements">
        <CircleButton :icon="Trophy" color="#c9a86a" />
      </li>
      <li class="settings">
        <CircleButton :icon="Cog" color="#6e6a67" />
      </li>
    </ul>

    <aside @click="game.saveGame" class="save-progress">
      <CircleButton :icon="Save" color="#6fa3a3" />
    </aside>
  </section>
</template>

<script lang="ts" setup>
import CircleButton from "./CircleButton.vue";
import { Translate, Trophy, Cog, Save } from "@boxicons/vue";
import { useGameStore } from "@/stores/game.ts";

const game = useGameStore();
</script>

<style scoped>
.utilities {
  width: 95%;
  margin: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  gap: 20px;
}
</style>
