import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore("game", () => {
  const audio = ref<HTMLAudioElement | null>(null);
  const isMuted = ref(false);
  const volume = ref(0.3);
  const isAudioInitialized = ref(false);
  const lettersSent = ref(0);
  const money = ref(0);
  const love = ref(0);
  const showSavePopup = ref(false);
  const songs = [
    "/songs/0-the-voice-in-my-heart.mp3",
    "/songs/1-theme-of-violet-evergarden.mp3",
    "/songs/2-a-dolls-beginning.mp3",
    "/songs/3-one-last-message.mp3",
    "/songs/4-unspoken-words.mp3",
    "/songs/5-a-simple-message.mp3",
    "/songs/6-another-sunny-day.mp3",
  ];
  const currentSongIndex = ref(0);

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

  interface Achievement {
    id: string;
    name: string;
    description: string;
    img: string;
    unlocked: boolean;

    condition: () => boolean;
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

  const achievements = ref([
    {
      id: "hundredLetters",
      name: "Busy Courier",
      description: "Send 100 letters",
      img: "100-letters.png",
      unlocked: false,

      condition: () => lettersSent.value >= 100,
    },
    {
      id: "thousandLetters",
      name: "Thousand Letters", // better name
      description: "Send 1,000 letters",
      img: "100-letters.png",
      unlocked: false,

      condition: () => lettersSent.value >= 1000,
    },
    {
      id: "tenThousandLetters",
      name: "Ten Thousand Letters", // better name
      description: "Send 10,000 letters",
      img: "100-letters.png",
      unlocked: false,

      condition: () => lettersSent.value >= 10000,
    },
    {
      id: "hundredThousandLetters",
      name: "Hundred Thousand Letters", // better name
      description: "Send 100,000 letters",
      img: "100-letters.png",
      unlocked: false,

      condition: () => lettersSent.value >= 100000,
    },
    {
      id: "millionLetters",
      name: "Million Letters", // better name
      description: "Send 1,000,000 letters",
      img: "100-letters.png",
      unlocked: false,

      condition: () => lettersSent.value >= 1000000,
    },
    {
      id: "hundredGuilder",
      name: "Are we getting rich?",
      description: "Get 100 guilder",
      img: "100-money.png",
      unlocked: false,

      condition: () => money.value >= 100,
    },
    {
      id: "thousandGuilder",
      name: "Thousand Guilder",
      description: "Get 1,000 guilder",
      img: "100-money.png",
      unlocked: false,

      condition: () => money.value >= 1000,
    },
    {
      id: "tenThousandGuilder",
      name: "Ten Thousand Guilder",
      description: "Get 10,000 guilder",
      img: "100-money.png",
      unlocked: false,

      condition: () => money.value >= 10000,
    },
    {
      id: "hundredThousandGuilder",
      name: "Hundred Thousand Guilder",
      description: "Get 100,000 guilder",
      img: "100-money.png",
      unlocked: false,

      condition: () => money.value >= 100000,
    },
    {
      id: "millionGuilder",
      name: "Million Guilder",
      description: "Get 1,000,000 guilder",
      img: "100-money.png",
      unlocked: false,

      condition: () => money.value >= 1000000,
    },
    {
      id: "hundredLove",
      name: "Spread the love",
      description: "Raise love to 100",
      img: "100-love.png",
      unlocked: false,

      condition: () => love.value >= 100,
    },
    {
      id: "thousandLove",
      name: "Thousand Love",
      description: "Raise love to 1,000",
      img: "100-love.png",
      unlocked: false,

      condition: () => love.value >= 1000,
    },
    {
      id: "tenThousandLove",
      name: "Ten Thousand Love",
      description: "Raise love to 10,000",
      img: "100-love.png",
      unlocked: false,

      condition: () => love.value >= 10000,
    },
    {
      id: "hundredThousandLove",
      name: "Hundred Thousand Love",
      description: "Raise love to 100,000",
      img: "100-love.png",
      unlocked: false,

      condition: () => love.value >= 100000,
    },
    {
      id: "millionLove",
      name: "Million Love",
      description: "Raise love to 1,000,000",
      img: "100-love.png",
      unlocked: false,

      condition: () => love.value >= 1000000,
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

  function initAudio() {
    if (isAudioInitialized.value) return;

    audio.value = new Audio(songs[currentSongIndex.value]);

    audio.value.loop = true;

    audio.value.addEventListener("ended", () => {
      if (!audio.value) return;

      currentSongIndex.value = (currentSongIndex.value + 1) % songs.length;
      audio.value.src = songs[currentSongIndex.value]!;
      audio.value.volume = isMuted.value ? 0 : volume.value;
      audio.value.play().catch((err) => console.log("Audio play failed:", err));
    });
    isAudioInitialized.value = true;
  }

  function userAllowedAudio(permission: boolean) {
    if (!audio.value) initAudio();

    if (permission) {
      isMuted.value = false;
      audio.value!.volume = volume.value;
    } else {
      isMuted.value = true;
      audio.value!.volume = 0;
    }

    audio.value!.play().catch((err) => console.log("Audio play failed:", err));
  }

  function toggleMute() {
    isMuted.value = !isMuted.value;
    if (audio.value) {
      audio.value.volume = isMuted.value ? 0 : volume.value;
    }
  }

  function handleVolumeChange(newVolume: number) {
    volume.value = newVolume;

    // user posunet slider, instant unmute
    if (newVolume > 0 && isMuted.value) {
      isMuted.value = false;
    }

    if (audio.value) {
      audio.value.volume = isMuted.value ? 0 : newVolume;
    }
  }

  // herni logika
  function buyMoneyUpgrade(upgrade: Upgrade) {
    const cost = getCost(upgrade);
    if (money.value < cost) return;

    money.value -= cost;
    upgrade.level++;

    checkAchievements();
  }

  function buyLoveUpgrade(upgrade: Upgrade) {
    const cost = getCost(upgrade);
    if (love.value < cost) return;

    love.value -= cost;
    upgrade.level++;

    checkAchievements();
  }

  function sendLetters() {
    lettersSent.value += lettersPerClick.value;
    money.value += lettersPerClick.value * moneyPerLetter.value;
    love.value += lovePerClick.value;

    checkAchievements();
  }

  // ukladani
  function saveGame() {
    const data = {
      money: money.value,
      lettersSent: lettersSent.value,
      love: love.value,

      upgrades: upgrades.value.map((u) => ({ id: u.id, level: u.level })),
      loveUpgrades: loveUpgrades.value.map((u) => ({
        id: u.id,
        level: u.level,
      })),
      achievements: achievements.value.map((a) => ({
        id: a.id,
        unlocked: a.unlocked,
      })),

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

    if (data.upgrades) {
      upgrades.value.forEach((u) => {
        const saved = data.upgrades.find((su: any) => su.id === u.id);
        if (saved) u.level = saved.level;
      });
    }
    if (data.loveUpgrades) {
      loveUpgrades.value.forEach((u) => {
        const saved = data.loveUpgrades.find((su: any) => su.id === u.id);
        if (saved) u.level = saved.level;
      });
    }

    // uzivatel pryc
    const now = Date.now();
    const offlineSeconds = (now - (data.lastSavedAt ?? now)) / 1000;

    // max 4h offline
    const cappedOfflineSeconds = Math.min(offlineSeconds, 60 * 60 * 4);

    lettersSent.value += lettersPerSecond.value * cappedOfflineSeconds;
    love.value += lovePerSecond.value * cappedOfflineSeconds;

    interface SavedAchievement {
      id: string;
      unlocked: boolean;
    }

    data.achievements?.forEach((savedAchievement: SavedAchievement) => {
      const achievement = achievements.value.find(
        (a) => a.id === savedAchievement.id,
      );

      if (achievement) {
        achievement.unlocked = savedAchievement.unlocked;
      }
    });

    checkAchievements();
    saveGame();
  }

  function triggerSavePopup() {
    showSavePopup.value = true;

    setTimeout(() => {
      showSavePopup.value = false;
    }, 2500);
  }

  // popup screeny
  const showAchievements = ref(false);
  const showSettings = ref(false);
  const showAudioPopup = ref(true);

  function toggleAchievements() {
    showAchievements.value = !showAchievements.value;
  }

  function toggleSettings() {
    showSettings.value = !showSettings.value;
  }

  function toggleAudioPopup() {
    showAudioPopup.value = !showAudioPopup.value;
  }

  function checkAchievements() {
    achievements.value.forEach((achievement) => {
      if (!achievement.unlocked && achievement.condition()) {
        achievement.unlocked = true;
      }
    });
  }

  let lastUpdate = Date.now();
  let gameStarted = false;

  function startGame() {
    lastUpdate = Date.now();
    if (gameStarted) return;
    gameStarted = true;

    initAudio();

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

    // data
    upgrades,
    loveUpgrades,
    achievements,

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
    showAchievements,
    toggleAchievements,
    showSettings,
    toggleSettings,
    showAudioPopup,
    toggleAudioPopup,

    // audio
    isMuted,
    volume,
    toggleMute,
    handleVolumeChange,
    userAllowedAudio,
  };
});
