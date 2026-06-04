<template>
  <div class="overlay" v-if="game.showAudioPopup">
    <article class="audio-popup">
      <h2>This website has background music!</h2>
      <p>
        If you wish to enable it, click the button below. You can always mute or
        adjust volume in the settings.
      </p>
      <section>
        <button
          class="yes"
          @click="
            game.userAllowedAudio(true);
            game.toggleAudioPopup();
          "
        >
          Enable music (recommended)
        </button>
        <button
          class="no"
          @click="
            game.userAllowedAudio(false);
            game.toggleAudioPopup();
          "
        >
          No, I don't want background music
        </button>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game";
const game = useGameStore();
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

.audio-popup {
  width: 65%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;

  background-color: rgba(var(--beige), 0.95);
  border-radius: 4px;
  padding: 2rem;

  z-index: 998;
}

h2 {
  font-size: 32px;
  font-weight: 700;
}

p {
}

section {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

button {
  padding: 0.5rem;
  color: white;

  transition: 250ms ease;
}

button:hover {
  color: black;
}

button.yes {
  background-color: rgba(var(--green), 1);
}

button.no {
  background-color: rgba(var(--red), 1);
}
</style>
