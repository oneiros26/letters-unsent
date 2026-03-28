<template>
  <article class="money-shop">
    <h2>Letters per click: {{ game.lettersPerClick }}</h2>
    <ul>
      <li @click="game.buyOnFoot()">
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>On Foot: {{ game.onFoot }}</p>
        <p>{{ game.onFootCost }}</p>
      </li>
      <li @click="game.buyBicycle()">
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Bicycles: {{ game.bicycle }}</p>
        <p>{{ game.bicycleCost }}</p>
      </li>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Delivery upgrade 3</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game.ts";

const game = useGameStore();
</script>

<style scoped>
.money-shop {
  position: relative;
  overflow: hidden;

  min-width: 330px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-left: solid 2px rgb(138, 151, 163);
}

.money-shop::before {
  content: "";
  position: absolute;
  inset: 0;

  background: url("../assets/imgs/money-bg.png");
  background-size: cover;
  background-position: center;

  opacity: 0.8;
  z-index: 0;
}

.money-shop::after {
  content: "";
  position: absolute;
  inset: 0;

  background: rgba(138, 151, 163, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  z-index: 1;
}

.money-shop > * {
  position: relative;
  z-index: 2;
}

.money-shop ul {
  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;
}

.money-shop li {
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: #fff3c9;
  transition: ease 150ms;
}

.money-shop li:hover {
  cursor: pointer;
  background-color: #ffeba2;
}

.money-shop li img {
  height: 40px;
  display: block;
}
</style>
