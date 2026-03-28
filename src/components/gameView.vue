<template>
  <article class="primary">
    <CurrenciesBar />

    <LetterButton />

    <UtilitiesPanel />
  </article>
</template>

<script lang="ts" setup>
import CurrenciesBar from "./CurrenciesBar.vue";
import LetterButton from "./LetterButton.vue";
import UtilitiesPanel from "./UtilitiesPanel.vue";
</script>

<style scoped>
.primary {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
