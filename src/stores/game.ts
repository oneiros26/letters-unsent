import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore("game", () => {
  const lettersSent = ref(0);
  const money = ref(0);
  const love = ref(0);

  interface Upgrade {
    id: string;
    name: string;
    amount: number;
    baseCost: number;
    inc: number;
    multiplier: number;
    img: string;
  }

  // mel jsem to roztristeny na jednotlivy funkce pro kazdy upgrade (viz minule odevzdani) ale chatko reklo ze je to bad
  const upgrades = ref([
    {
      id: "onFoot",
      name: "On Foot",
      amount: 0,
      baseCost: 10,
      inc: 1.15,
      multiplier: 1.05,
      img: "01-on-foot.png",
    },
    {
      id: "bicycle",
      name: "Bicycle",
      amount: 0,
      baseCost: 50,
      inc: 1.16,
      multiplier: 1.1,
      img: "02-bycicle.png",
    },
    {
      id: "horseCarriage",
      name: "Horse Carriage",
      amount: 0,
      baseCost: 200,
      inc: 1.17,
      multiplier: 1.2,
      img: "03-horse.png",
    },
    {
      id: "automobile",
      name: "Automobile",
      amount: 0,
      baseCost: 800,
      inc: 1.18,
      multiplier: 1.35,
      img: "04-automobile.png",
    },
    {
      id: "sailboat",
      name: "Sailboat",
      amount: 0,
      baseCost: 3000,
      inc: 1.2,
      multiplier: 1.6,
      img: "05-sailboat.png",
    },
    {
      id: "steamTrain",
      name: "Steam Train",
      amount: 0,
      baseCost: 12000,
      inc: 1.22,
      multiplier: 1.9,
      img: "06-steamtrain.png",
    },
    {
      id: "steamship",
      name: "Steamship",
      amount: 0,
      baseCost: 50000,
      inc: 1.25,
      multiplier: 2.25,
      img: "07-steamship.png",
    },
    {
      id: "airplane",
      name: "Airplane",
      amount: 0,
      baseCost: 250000,
      inc: 1.3,
      multiplier: 2.6,
      img: "08-airplane.png",
    },
    {
      id: "airship",
      name: "Airship",
      amount: 0,
      baseCost: 1500000,
      inc: 1.35,
      multiplier: 3.0,
      img: "09-airship.png",
    },
  ]);

  const getCost = (upgrade: Upgrade) => {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.inc, upgrade.amount));
  };

  // check kvuli stylum
  const canBuy = (upgrade: Upgrade) => {
    return money.value >= getCost(upgrade);
  };

  function buyUpgrade(upgrade: Upgrade) {
    const cost = getCost(upgrade);
    if (money.value < cost) return;

    money.value -= cost;
    upgrade.amount++;
  }

  const lettersPerClick = computed(() => {
    return (
      1 +
      // reduce vezme pole a udela z nej hodnotu, u = upgrade
      upgrades.value.reduce((sum, u) => {
        return sum + u.amount * u.multiplier;
      }, 0)
    );
  });

  const moneyPerLetter = computed(() => {
    return 1;
  });

  const displayLettersSent = computed(() => {
    return Math.floor(lettersSent.value);
  });

  const displayMoney = computed(() => {
    return Math.floor(money.value);
  });

  function sendLetters() {
    lettersSent.value += lettersPerClick.value;
    money.value += lettersPerClick.value * moneyPerLetter.value;
    love.value;
  }

  return {
    // hlavni akce
    sendLetters,

    // currencies
    lettersSent,
    money,
    love,

    // zaokrouhleny zobrazeni
    displayMoney,
    displayLettersSent,

    upgrades,

    // vypocty
    lettersPerClick,
    moneyPerLetter,

    // kupovani
    getCost,
    buyUpgrade,
    canBuy,
  };
});
