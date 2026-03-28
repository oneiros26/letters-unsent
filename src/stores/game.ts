import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore("game", () => {
  const lettersSent = ref(0);
  const money = ref(0);
  const love = ref(0);

  // DELIVERY UPGRADES
  const onFoot = ref(1);
  const onFootBaseCost = 25;
  const onFootInc = 1.5;

  const bicycle = ref(0);
  const bicycleBaseCost = 200;
  const bicycleInc = 1.5;

  // LETTER UPGRADES
  // upgrades - bad paper, decent paper, good paper etc.

  const lettersPerClick = computed(() => {
    return onFoot.value * 1 + bicycle.value * 2;
  });
  const moneyPerLetter = computed(() => {
    return 1; // letter value
  });

  const onFootCost = computed(() => {
    return Math.floor(onFootBaseCost * Math.pow(onFootInc, onFoot.value - 1));
  });

  const bicycleCost = computed(() => {
    return Math.floor(bicycleBaseCost * Math.pow(bicycleInc, bicycle.value));
  });

  function buyOnFoot() {
    if (money.value < onFootCost.value) return;

    money.value -= onFootCost.value;
    onFoot.value++;
  }

  function buyBicycle() {
    if (money.value < bicycleCost.value) return;

    money.value -= bicycleCost.value;
    bicycle.value++;
  }

  function sendLetters(amount = 1) {
    lettersSent.value += lettersPerClick.value;
    money.value += amount;
    love.value += amount;
  }

  return {
    lettersSent,
    money,
    love,
    lettersPerClick,

    sendLetters,
    buyOnFoot,
    buyBicycle,

    onFoot,
    bicycle,

    onFootCost,
    bicycleCost,
  };
});
