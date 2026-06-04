<template>
  <div v-if="game.showSettings" class="overlay" @click="game.toggleSettings">
    <article class="settings" @click.stop>
      <h2>Settings</h2>

      <section class="sound">
        <h3>Sound</h3>

        <div class="sound-controls">
          <button @click="game.toggleMute" class="mute">
            {{ game.isMuted ? "Unmute" : "Mute" }}
          </button>

          <div class="slider">
            <Volume />
            <input
              id="volume-range"
              type="range"
              min="0"
              max="1"
              step="0.01"
              :value="game.isMuted ? 0 : game.volume"
              @input="
                (e) =>
                  game.handleVolumeChange(
                    parseFloat((e.target as HTMLInputElement).value),
                  )
              "
            />
            <VolumeFull class="full-volume" />
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/stores/game";
import { Volume, VolumeFull } from "@boxicons/vue";
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

.settings {
  width: 80%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

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

.sound {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

h3 {
  font-size: 28px;
  font-weight: 600;
}

.sound-controls {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 2rem;
}

.mute {
  width: 100px;
  height: 32px;

  padding: 0.5rem;
  color: white;
  background-color: rgba(var(--d-blue), 1);

  transition: 250ms ease;
}

.mute:hover {
  background-color: rgba(var(--l-blue), 1);
}

.full-volume {
  margin-left: 0.5rem;
}

.slider {
  display: flex;
  align-items: center;
}

.slider input {
  appearance: none;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  height: 16px;
  border-radius: 4px;
}

.slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: rgba(var(--l-blue), 1);
}

.slider input::-moz-range-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: rgba(var(--l-blue), 1);
  border: none;
  border-radius: 4px;
}
</style>
