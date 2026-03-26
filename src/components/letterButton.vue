<template>
  <section class="main-letter">
    <button @click="handleClick">
      <img src="../assets/imgs/love-letter.png" draggable="false" />
    </button>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: "send-letter"): void;
}>();

function handleClick() {
  emit("send-letter");
}
</script>

<style scoped>
.main-letter {
  display: flex;
  justify-content: center;
}

img {
  width: 550px;
  transition: ease-out 250ms;
}

img:hover {
  cursor: pointer;
}

img:active {
  transform: scale(0.95);
  transition: none;
}
</style>
