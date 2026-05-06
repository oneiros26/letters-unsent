<template>
  <article class="money-shop">
    <h2>
      <b>{{ game.displayLettersPerClick }}</b>
      letters per click
    </h2>

    <ul>
      <!-- hover gives more info -->

      <li
        v-for="(u, i) in game.upgrades"
        :key="u.id"
        @click="game.buyMoneyUpgrade(u)"
        :class="{ disabled: !game.canBuyWithMoney(u) }"
      >
        <div>
          <img :src="imgUrl(u.img)" :alt="u.name" />
          <h3>{{ u.name }}</h3>
        </div>

        <p class="cost">
          {{ game.getCost(u) }}
          <Coin class="icon" />
        </p>

        <p class="amount">{{ u.level }}</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game.ts";
import { Coin } from "@boxicons/vue";

const game = useGameStore();

const imgUrl = (file: string) =>
  new URL(`../assets/money-shop-imgs/${file}`, import.meta.url).href;
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

.money-shop h2 {
  display: flex;
  align-items: center;
  gap: 4px;

  margin: 24px 0;

  font-size: 20px;
  z-index: 3;
}

h2 b {
  font-weight: 900;
}

.money-shop ul {
  width: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 2;

  list-style: none;
}

.money-shop li {
  width: 100%;

  padding: 8px 12px;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;

  background-image: url("../assets/money-shop-imgs/old-paper.png");
  background-size: cover;

  transition: ease 150ms;

  font-size: 18px;
  border: outset 2px #cba569;
}

.money-shop li:hover {
  cursor: pointer;
  /* NECO */
}

.money-shop div {
  display: flex;
  align-items: center;
  gap: 12px;

  justify-self: flex-start;
}

.money-shop li img {
  height: 40px;
  display: block;
}

.cost {
  display: flex;
  align-items: center;
  gap: 4px;

  justify-self: flex-end;
}

.cost .icon {
  width: 16px;
  height: auto;
}

.amount {
  font-weight: 700;
  font-size: 24px;

  justify-self: flex-end;
}

/* ======*/

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
