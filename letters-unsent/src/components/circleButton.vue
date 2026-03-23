<template>
  <button>
    <i
      class="fa-2x fa-solid"
      :class="icon"
      :style="{ '--hover-color': color }"
    ></i>
  </button>
</template>

<script lang="ts" setup>
const { color, icon } = defineProps<{ color: string; icon: string }>();
</script>

<style scoped>
i {
  width: 20px;
  height: 20px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  border: solid black 3px;
  border-radius: 50%;
  transition: all 150ms ease;
}

i:hover {
  cursor: pointer;
  border: solid var(--hover-color) 3px;
  color: var(--hover-color);
}
</style>
