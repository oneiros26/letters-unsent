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

    lettersPerClick: number;
    lettersPerSecond: number;

    lovePerClick: number;
    lovePerSecond: number;

    img: string;
  }

  const upgrades = ref([
    {
      id: "onFoot",
      name: "On Foot",

      level: 0,

      baseCost: 10,
      inc: 1.15,

      lettersPerClick: 1.05,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "01-on-foot.png",
    },
    {
      id: "bicycle",
      name: "Bicycle",

      level: 0,

      baseCost: 50,
      inc: 1.16,

      lettersPerClick: 1.1,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "02-bycicle.png",
    },
    {
      id: "horseCarriage",
      name: "Horse Carriage",

      level: 0,

      baseCost: 200,
      inc: 1.17,

      lettersPerClick: 1.2,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "03-horse.png",
    },
    {
      id: "automobile",
      name: "Automobile",

      level: 0,

      baseCost: 800,
      inc: 1.18,

      lettersPerClick: 1.35,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "04-automobile.png",
    },
    {
      id: "sailboat",
      name: "Sailboat",

      level: 0,

      baseCost: 3000,
      inc: 1.2,

      lettersPerClick: 1.6,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "05-sailboat.png",
    },
    {
      id: "steamTrain",
      name: "Steam Train",

      level: 0,

      baseCost: 12000,
      inc: 1.22,

      lettersPerClick: 1.9,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "06-steamtrain.png",
    },
    {
      id: "steamship",
      name: "Steamship",

      level: 0,

      baseCost: 50000,
      inc: 1.25,

      lettersPerClick: 2.25,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "07-steamship.png",
    },
    {
      id: "airplane",
      name: "Airplane",

      level: 0,

      baseCost: 250000,
      inc: 1.3,

      lettersPerClick: 2.6,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "08-airplane.png",
    },
    {
      id: "airship",
      name: "Airship",

      level: 0,

      baseCost: 1500000,
      inc: 1.35,

      lettersPerClick: 3.0,
      lettersPerSecond: 0,

      lovePerClick: 0,
      lovePerSecond: 0,

      img: "09-airship.png",
    },
  ]);

  const loveUpgrades = ref([
    {
      id: "carefulDelivery",
      name: "Careful Delivery",

      level: 0,

      baseCost: 5,
      inc: 1.12,

      lettersPerClick: 0,
      lettersPerSecond: 0.05,

      lovePerClick: 0.01,
      lovePerSecond: 0.02,

      img: "01-careful-delivery.png",
    },
    {
      id: "handwrittenLetters",
      name: "Handwritten Letters",

      level: 0,

      baseCost: 25,
      inc: 1.13,

      lettersPerClick: 0,
      lettersPerSecond: 0.15,

      lovePerClick: 0.05,
      lovePerSecond: 0.1,

      img: "02-handwritten-letters.png",
    },
    {
      id: "qualityPaper",
      name: "Quality Paper",

      level: 0,

      baseCost: 100,
      inc: 1.14,

      lettersPerClick: 0,
      lettersPerSecond: 0.4,

      lovePerClick: 0.2,
      lovePerSecond: 0.25,

      img: "03-quality-paper.png",
    },
    {
      id: "heartShapedStamps",
      name: "Heart-Shaped Stamps",

      level: 0,

      baseCost: 400,
      inc: 1.15,

      lettersPerClick: 0,
      lettersPerSecond: 1.2,

      lovePerClick: 0.8,
      lovePerSecond: 0.6,

      img: "04-heart-shaped-stamps.png",
    },
    {
      id: "emotionalText",
      name: "Emotional Text",

      level: 0,

      baseCost: 1500,
      inc: 1.16,

      lettersPerClick: 0,
      lettersPerSecond: 3,

      lovePerClick: 2.5,
      lovePerSecond: 1.5,

      img: "05-emotional-text.png",
    },
    {
      id: "premiumInk",
      name: "Premium Ink",

      level: 0,

      baseCost: 6000,
      inc: 1.18,

      lettersPerClick: 0,
      lettersPerSecond: 8,

      lovePerClick: 6,
      lovePerSecond: 4,

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
        return sum + u.level * u.lettersPerClick;
      }, 0)
    );
  });

  const lovePerClick = computed(() => {
    return (
      0.1 +
      loveUpgrades.value.reduce((sum, u) => {
        return sum + u.level * u.lovePerClick;
      }, 0)
    );
  });

  const lettersPerSecond = computed(() => {
    return loveUpgrades.value.reduce((sum, u) => {
      return sum + u.level * u.lettersPerSecond;
    }, 0);
  });

  const lovePerSecond = computed(() => {
    return loveUpgrades.value.reduce((sum, u) => {
      return sum + u.level * u.lovePerSecond;
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

  const displayLove = computed(() => {
    return Math.floor(love.value);
  });

  const displayLettersPerClick = computed(() => {
    return lettersPerClick.value.toFixed(1);
  });

  const displayLettersPerSecond = computed(() => {
    return lettersPerSecond.value.toFixed(1);
  });

  const displayLovePerClick = computed(() => {
    return lovePerClick.value.toFixed(1);
  });

  const displayLovePerSecond = computed(() => {
    return lovePerSecond.value.toFixed(1);
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
    love.value += lovePerClick.value;
  }

  // ukladani
  function saveGame() {
    const data = {
      money: money.value,
      lettersSent: lettersSent.value,
      love: love.value,
      upgrades: upgrades.value,
      loveUpgrades: loveUpgrades.value,

      lastSavedAt: Date.now(),
    };

    localStorage.setItem("gameSave", JSON.stringify(data));
    triggerSavePopup();
  }

  function autoSave() {
    setInterval(() => {
      saveGame();
    }, 300000);
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

    // uzivatel pryc
    const now = Date.now();
    const offlineSeconds = (now - (data.lastSavedAt ?? now)) / 1000;

    // max 4h offline
    const cappedOfflineSeconds = Math.min(offlineSeconds, 60 * 60 * 4);

    lettersSent.value += lettersPerSecond.value * cappedOfflineSeconds;
    love.value += lovePerSecond.value * cappedOfflineSeconds;

    saveGame();
  }

  function triggerSavePopup() {
    showSavePopup.value = true;

    setTimeout(() => {
      showSavePopup.value = false;
    }, 2500);
  }

  let lastUpdate = Date.now();
  let gameStarted = false;

  function startGame() {
    lastUpdate = Date.now();
    if (gameStarted) return;
    gameStarted = true;

    function update() {
      const now = Date.now();
      const delta = (now - lastUpdate) / 1000;
      lastUpdate = now;

      lettersSent.value += lettersPerSecond.value * delta;

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  return {
    // hlavni akce
    startGame,
    sendLetters,

    // currencies
    lettersSent,
    money,
    love,

    // zaokrouhleny zobrazeni
    displayMoney,
    displayLettersSent,
    displayLettersPerClick,
    displayLettersPerSecond,
    displayLove,
    displayLovePerClick,
    displayLovePerSecond,
    upgrades,
    loveUpgrades,

    // vypocty
    lettersPerClick,
    lettersPerSecond,
    lovePerClick,
    lovePerSecond,
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
    autoSave,

    // UI
    showSavePopup,
    triggerSavePopup,
  };
});
