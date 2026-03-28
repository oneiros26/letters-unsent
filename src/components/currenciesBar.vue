<template>
  <section class="currencies">
    <ul>
      <li>
        <Heart class="icon" pack="filled" fill="rgb(var(--red))" />
        <p>{{ game.love }}</p>
      </li>
      <li>
        <Envelope class="icon" pack="filled" fill="rgb(var(--beige))" />
        <p>{{ game.lettersSent }}</p>
      </li>
      <li>
        <Coin class="icon" pack="filled" fill="rgb(var(--green))" />
        <p>{{ game.money }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { Heart, Envelope, Coin } from "@boxicons/vue";
import { useGameStore } from "@/stores/game";

const game = useGameStore();
</script>

<style scoped>
.currencies {
  width: 70%;
  padding: 40px;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: rgba(var(--d-blue), 0.25);
  border-radius: 20px;
}

ul {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

li p {
  font-size: 28px;
}

li .icon {
  width: 28px;
  height: auto;
}
</style>
