<template>
  <article class="money-shop">
    <!-- MOVE SOMEWHERE ELSE -->
    <!-- <h2>Letters per click: {{ game.lettersPerClick }}</h2> -->
    <ul>
      <!-- hover gives more info -->

      <li
        v-for="(u, i) in game.upgrades"
        :key="u.id"
        @click="game.buyUpgrade(u)"
        :class="{ disabled: !game.canBuy(u) }"
      >
        <div>
          <img :src="imgUrl(u.img)" :alt="u.name" />
          <h3>{{ u.name }}</h3>
        </div>

        <p class="cost">{{ game.getCost(u) }} <Coin class="icon" /></p>

        <p class="amount">{{ u.amount }}</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game.ts";
import { Coin } from "@boxicons/vue";

const imgUrl = (file: string) =>
  new URL(`../assets/money-shop-imgs/${file}`, import.meta.url).href;

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

  display: flex;
  flex-direction: column;
  gap: 16px;

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
  border-top: solid 2px rgba(138, 151, 163, 0.25);
  border-bottom: solid 2px rgba(138, 151, 163, 0.25);
}

.money-shop li:hover {
  cursor: pointer;
  /* NECO */
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
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
</style>
