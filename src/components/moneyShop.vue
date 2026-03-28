<template>
  <article class="money-shop">
    <!-- MOVE SOMEWHERE ELSE -->
    <h2>Letters per click: {{ game.lettersPerClick }}</h2>
    <ul>
      <!-- ON HOVER ADD MORE INFO -->

      <li @click="game.buyOnFoot()">
        <div>
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          />
          <h3>On Foot</h3>
        </div>
        <p class="cost">{{ game.onFootCost }}<Coin class="icon" /></p>
        <p class="amount">{{ game.onFoot }}</p>
      </li>
      <li @click="game.buyBicycle()">
        <div>
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          />
          <h3>Bicycle</h3>
        </div>
        <p class="cost">{{ game.bicycleCost }}<Coin class="icon" /></p>
        <p class="amount">{{ game.bicycle }}</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game.ts";
import { Coin } from "@boxicons/vue";

const game = useGameStore();
</script>

<style scoped>
.money-shop {
  position: relative;

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

.money-shop ul {
  width: 100%;

  position: relative;
  z-index: 2;

  list-style: none;
}

.money-shop li {
  width: 100%;

  padding: 8px 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff3c9;
  transition: ease 150ms;

  font-size: 18px;
}

.money-shop li:hover {
  cursor: pointer;
  background-color: #ffeba2;
}

.money-shop div {
  display: flex;
  align-items: center;
  gap: 12px;
}

.money-shop li img {
  height: 40px;
  display: block;
}

.cost {
  display: flex;
  align-items: center;
  gap: 4px;
}

.cost .icon {
  width: 16px;
  height: auto;
}

.amount {
  font-weight: 700;
  font-size: 24px;
}
</style>
