<template>
  <article class="primary">
    <CurrenciesBar :lettersSent="lettersSent" :money="money" />

    <LetterButton @send-letter="sendLetter" />

    <UtilitiesPanel />
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CurrenciesBar from "./CurrenciesBar.vue";
import LetterButton from "./LetterButton.vue";
import UtilitiesPanel from "./UtilitiesPanel.vue";

const lettersSent = ref(0);
const money = ref(0);

function sendLetter() {
  lettersSent.value++;
  money.value = money.value + 1;
}
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
