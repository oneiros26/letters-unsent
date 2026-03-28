<template>
  <button class="circle-btn" :style="{ '--hover-color': color }">
    <component :is="icon" class="icon" />
  </button>
</template>

<script lang="ts" setup>
import type { Component } from "vue";
const { color, icon } = defineProps<{ color: string; icon: Component }>();
</script>

<style scoped>
.circle-btn {
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* jina barva */
  color: #3a3532;

  border: solid #3a3532 3px;
  border-radius: 50%;

  transition: all 150ms ease;
}

.circle-btn:hover {
  cursor: pointer;

  color: var(--hover-color);
  border-color: var(--hover-color);
}

.icon {
  pointer-events: none;

  width: 28px;
  height: 28px;
}
</style>
