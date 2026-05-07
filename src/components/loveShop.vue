<template>
  <article class="love-shop">
    <h2>
      <!-- static -->
      <b> {{ game.displayLettersPerSecond }} </b>
      letters per second
    </h2>

    <ul>
      <li
        v-for="(u, i) in game.loveUpgrades"
        :key="u.id"
        @click="game.buyLoveUpgrade(u)"
        :class="{ disabled: !game.canBuyWithLove(u) }"
      >
        <div>
          <img :src="imgUrl(u.img)" :alt="u.name" />
          <h3>{{ u.name }}</h3>
        </div>

        <p class="cost">
          {{ game.getCost(u) }}
          <Heart class="icon" />
        </p>

        <p class="amount">{{ u.level }}</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game.ts";
import { Heart } from "@boxicons/vue";

const game = useGameStore();

const imgUrl = (file: string) =>
  new URL(`../assets/love-shop-imgs/${file}`, import.meta.url).href;
</script>

<style scoped>
.love-shop {
  position: relative;

  min-width: 330px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: solid 2px rgb(255, 182, 193);
}

.love-shop::before {
  content: "";
  position: absolute;
  inset: 0;

  background: url("../assets/imgs/love-bg.png");
  background-size: cover;
  background-position: center;

  opacity: 0.8;

  z-index: 0;
}

.love-shop::after {
  content: "";
  position: absolute;
  inset: 0;

  background: rgba(255, 182, 193, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  z-index: 1;
}

.love-shop h2 {
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

.love-shop ul {
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;

  position: relative;
  z-index: 2;

  border: black;
}

.love-shop li {
  width: 100%;

  padding: 8px 12px;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;

  background-image: url("../assets/love-shop-imgs/pink-paper.png");
  background-size: cover;

  transition: ease 150ms;

  font-size: 18px;
  border: outset 2px #f1c3c3;
}

.love-shop li:hover {
  cursor: pointer;
}

.love-shop div {
  display: flex;
  align-items: center;
  gap: 12px;
}

.love-shop li img {
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

/* ====== */

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 1250px) {
  .love-shop {
    border-left: solid 2px rgb(255, 182, 193);
    border-right: 0;
  }
}
</style>
