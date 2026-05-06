import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore("game", () => {
  const lettersSent = ref(0);
  const money = ref(0);
  const love = ref(0);

  const showSavePopup = ref(false);

  interface Upgrade {
    id: string;
    name: string;
    level: number;
    baseCost: number;
    inc: number;
    multiplier: number;
    img: string;
  }

  const upgrades = ref([
    {
      id: "onFoot",
      name: "On Foot",
      level: 0,
      baseCost: 10,
      inc: 1.15,
      multiplier: 1.05,
      img: "01-on-foot.png",
    },
    {
      id: "bicycle",
      name: "Bicycle",
      level: 0,
      baseCost: 50,
      inc: 1.16,
      multiplier: 1.1,
      img: "02-bycicle.png",
    },
    {
      id: "horseCarriage",
      name: "Horse Carriage",
      level: 0,
      baseCost: 200,
      inc: 1.17,
      multiplier: 1.2,
      img: "03-horse.png",
    },
    {
      id: "automobile",
      name: "Automobile",
      level: 0,
      baseCost: 800,
      inc: 1.18,
      multiplier: 1.35,
      img: "04-automobile.png",
    },
    {
      id: "sailboat",
      name: "Sailboat",
      level: 0,
      baseCost: 3000,
      inc: 1.2,
      multiplier: 1.6,
      img: "05-sailboat.png",
    },
    {
      id: "steamTrain",
      name: "Steam Train",
      level: 0,
      baseCost: 12000,
      inc: 1.22,
      multiplier: 1.9,
      img: "06-steamtrain.png",
    },
    {
      id: "steamship",
      name: "Steamship",
      level: 0,
      baseCost: 50000,
      inc: 1.25,
      multiplier: 2.25,
      img: "07-steamship.png",
    },
    {
      id: "airplane",
      name: "Airplane",
      level: 0,
      baseCost: 250000,
      inc: 1.3,
      multiplier: 2.6,
      img: "08-airplane.png",
    },
    {
      id: "airship",
      name: "Airship",
      level: 0,
      baseCost: 1500000,
      inc: 1.35,
      multiplier: 3.0,
      img: "09-airship.png",
    },
  ]);

  const loveUpgrades = ref([
    {
      id: "carefulDelivery",
      name: "Careful Delivery",
      level: 0,
      baseCost: 1,
      inc: 1,
      multiplier: 0,
      img: "01-careful-delivery.png",
    },
    {
      id: "handwrittenLetters",
      name: "Handwritten Letters",
      level: 0,
      baseCost: 5,
      inc: 1,
      multiplier: 0,
      img: "02-handwritten-letters.png",
    },
    {
      id: "qualityPaper",
      name: "Quality Paper",
      level: 0,
      baseCost: 10,
      inc: 1,
      multiplier: 0,
      img: "03-quality-paper.png",
    },
    {
      id: "heartShapedStamps",
      name: "Heart-Shaped Stamps",
      level: 0,
      baseCost: 25,
      inc: 1,
      multiplier: 0,
      img: "04-heart-shaped-stamps.png",
    },
    {
      id: "emotionalText",
      name: "Emotional Text",
      level: 0,
      baseCost: 50,
      inc: 1,
      multiplier: 0,
      img: "05-emotional-text.png",
    },
    {
      id: "premiumInk",
      name: "Premium Ink",
      level: 0,
      baseCost: 100,
      inc: 1,
      multiplier: 0,
      img: "06-premium-ink.png",
    },
  ]);

  const getCost = (upgrade: Upgrade) => {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.inc, upgrade.level));
  };

  // check kvuli stylum
  const canBuyWithMoney = (upgrade: Upgrade) => {
    return money.value >= getCost(upgrade);
  };

  const canBuyWithLove = (upgrade: Upgrade) => {
    return love.value >= getCost(upgrade);
  };

  // hlavni math
  const lettersPerClick = computed(() => {
    return (
      1 +
      // reduce vezme pole a udela z nej hodnotu, u = upgrade
      upgrades.value.reduce((sum, u) => {
        return sum + u.level * u.multiplier;
      }, 0)
    );
  });

  const lettersPerSecond = computed(() => {
    return loveUpgrades.value.reduce((sum, u) => {
      return sum + u.level * u.multiplier;
    }, 0);
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

  const displayLettersPerClick = computed(() => {
    return Math.floor(lettersPerClick.value);
  });

  // herni logika
  function buyMoneyUpgrade(upgrade: Upgrade) {
    const cost = getCost(upgrade);
    if (money.value < cost) return;

    money.value -= cost;
    upgrade.level++;
  }

  function buyLoveUpgrade(upgrade: Upgrade) {
    const cost = getCost(upgrade);
    if (love.value < cost) return;

    love.value -= cost;
    upgrade.level++;
  }

  function sendLetters() {
    lettersSent.value += lettersPerClick.value;
    money.value += lettersPerClick.value * moneyPerLetter.value;
    love.value;
  }

  // ukladani
  function saveGame() {
    const data = {
      money: money.value,
      lettersSent: lettersSent.value,
      love: love.value,
      upgrades: upgrades.value,
      loveUpgrades: loveUpgrades.value,
    };

    localStorage.setItem("gameSave", JSON.stringify(data));
    triggerSavePopup();
  }

  function loadGame() {
    const saved = localStorage.getItem("gameSave");
    if (!saved) return;

    const data = JSON.parse(saved);

    money.value = data.money ?? 0;
    lettersSent.value = data.lettersSent ?? 0;
    love.value = data.love ?? 0;

    upgrades.value = data.upgrades ?? upgrades.value;
    loveUpgrades.value = data.loveUpgrades ?? loveUpgrades.value;
  }

  function triggerSavePopup() {
    showSavePopup.value = true;

    setTimeout(() => {
      showSavePopup.value = false;
    }, 2500);
  }

  // laska zvysuje jen lasku a penize zvysuji jen penize, ale oboje zvysuje pocet dopisu

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
    displayLettersPerClick,

    upgrades,
    loveUpgrades,

    // vypocty
    lettersPerClick,
    lettersPerSecond,
    moneyPerLetter,

    // kupovani
    getCost,
    buyMoneyUpgrade,
    buyLoveUpgrade,
    canBuyWithMoney,
    canBuyWithLove,

    // ukladani
    saveGame,
    loadGame,

    // UI
    showSavePopup,
    triggerSavePopup,
  };
});
