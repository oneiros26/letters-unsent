<template>
  <div
    v-if="game.showAchievements"
    class="overlay"
    @click="game.toggleAchievements"
    :style="{ '--mouse-x': mouseX + 'px', '--mouse-y': mouseY + 'px' }"
  >
    <article class="achievements" @click.stop>
      <h2>Achievements</h2>

      <ul>
        <li
          v-for="achievement in game.achievements"
          :key="achievement.id"
          :class="{ unlocked: achievement.unlocked }"
        >
          <img :src="imgUrl(achievement.img)" :alt="achievement.name" />
          <p>{{ achievement.name }}</p>

          <aside>
            <p>{{ achievement.description }}</p>
          </aside>
        </li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game";
import { ref, onMounted, onUnmounted } from "vue";

const game = useGameStore();

const imgUrl = (file: string) =>
  new URL(`../assets/achievements-imgs/${file}`, import.meta.url).href;

// AI generated, pouzivam poprve
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 997;
  display: flex;
  justify-content: center;
  align-items: center;
}

.achievements {
  width: 80%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  background-color: rgba(var(--beige), 0.95);
  border-radius: 4px;
  padding: 24px;

  z-index: 998;
}

h2 {
  font-size: 32px;
  font-weight: 700;
}

.achievements ul {
  width: 90%;
  height: 90%;

  display: grid;
  /* od AI, hodne cool grid feature */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.achievements li {
  max-height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(var(--gold), 0.3);
  border-radius: 4px;
  padding: 0 2rem;
}
.achievements li.unlocked {
  background-color: rgba(var(--gold), 1);
  font-weight: 700;
}

.achievements img {
  width: 40px;
  height: auto;
}

aside {
  display: none;
}

li:hover aside {
  background-color: rgba(var(--l-gold), 1);
  border: solid black 1px;
  padding: 0.5rem;
  border-radius: 4px;

  display: block;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;

  font-weight: 400;

  transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px));

  transition: transform 0.05s linear;
}
</style>
