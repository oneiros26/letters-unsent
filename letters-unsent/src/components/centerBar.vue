<template>
  <article class="primary">
    <section class="currencies">
      <ul>
        <li>
          <i class="heart-icon fa-solid fa-heart fa-2x"></i>
          <p>0</p>
        </li>
        <li>
          <i class="envelope-icon fa-regular fa-envelope fa-2x"></i>
          <p>{{ lettersSent }}</p>
        </li>
        <li>
          <i class="money-icon fa-regular fa-money-bill-1 fa-2x"></i>
          <!-- lepsi ikonku -->
          <p>0</p>
        </li>
      </ul>
    </section>
    <section class="main-letter">
      <button @click="increment">
        <img src="../assets/imgs/love_letter_v1-2.png" draggable="false" />
      </button>
    </section>
    <section class="utilities">
      <ul>
        <li class="language">
          <CircleButton icon="fa-language" color="lightblue" />
        </li>
        <li class="achievements">
          <CircleButton icon="fa-trophy" color="gold" />
        </li>
        <li class="settings"><CircleButton icon="fa-gears" color="gray" /></li>
      </ul>
      <aside class="save-progress">
        <CircleButton icon="fa-floppy-disk" color="lightblue" />
      </aside>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CircleButton from "./circleButton.vue";

const lettersSent = ref(0);

function increment() {
  lettersSent.value++;
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
.primary .currencies {
  width: 70%;
  padding: 40px;
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: var(--d-blue);
  border-radius: 20px;
}
.currencies ul {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.currencies li {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
.currencies .heart-icon {
  color: var(--red);
}
.currencies .envelope-icon {
  color: var(--beige);
}
.currencies .money-icon {
  color: var(--green);
}
.currencies li p {
  font-size: 28px;
}
.main-letter {
  display: flex;
  justify-content: center;
}
.main-letter img {
  width: 580px;

  transition: ease-out 250ms;
}
.main-letter img:hover {
  cursor: pointer;
}
.main-letter img:active {
  transform: scale(0.95);
  transition: none;
}
.primary .utilities {
  width: 95%;
  margin: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.utilities ul {
  display: flex;
  gap: 20px;
}
</style>
