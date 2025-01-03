import { reactive, computed } from 'vue';

export const useGame = () => {
  const state = reactive({
    cards: [],
    flippedCards: [], // Temporarily holds up to two flipped cards
    matchedCards: [], // Stores matched card IDs
    isProcessing: false, // Prevents multiple flips during checks
    moves: 40,
    timer: null,
    timeLeft: 120, // Example: 60 seconds to finish the game
    gameOver: false,
  });

  // Initialize the game
  const initializeGame = () => {
    const cardValues = generateCardValues();
    state.cards = shuffle(cardValues).map((value: string, index: number) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }));
    state.flippedCards = [];
    state.matchedCards = [];
    state.isProcessing = false;
    state.moves = 40;
    state.timeLeft = 120;
    state.gameOver = false;

    if (state.timer) clearInterval(state.timer);
    startTimer();
  };

  // Generate card values (pairs of values)
  const generateCardValues = () => {
    const gameChallengeCookie = useCookie('GameChallenge');
    const userChallengeType = ref(gameChallengeCookie.value || 'image')
    
    const emojiList = ['🍔', '🍌', '🚀', '🍓', '🍍', '🥝', '👻', '🐈']; // Example emojis
    const imageList = ['/products/product-1.jpg', '/products/product-2.jpg', '/products/product-3.jpg', '/products/product-4.jpg', '/products/product-5.jpg', '/products/product-6.jpg', '/products/product-7.jpg', '/products/product-8.jpg']; // Example emojis
    return userChallengeType.value === 'image' ? [...imageList, ...imageList] : [...emojiList, ...emojiList] // Duplicate to create pairs
  };

  // Shuffle the cards
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Handle card flip
  const handleCardFlip = (cardId) => {
    if (state.isProcessing || state.matchedCards.includes(cardId)) return;

    const card = state.cards.find((c) => c.id === cardId);
    if (!card || card.flipped) return;

    card.flipped = true;
    state.flippedCards.push(card);
    state.moves--;

    if (state.flippedCards.length === 2) {
      checkForMatch();
    }
  };

  // Check for a match
  const checkForMatch = () => {
    state.isProcessing = true;

    const [card1, card2] = state.flippedCards;
    if (card1.value === card2.value) {
      state.matchedCards.push(card1.id, card2.id);
      card1.matched = true;
      card2.matched = true;
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
      }, 1000);
    }

    state.flippedCards = [];
    state.isProcessing = false;

    checkGameOver();
  };

  // Check if the game is over
  const checkGameOver = () => {
    if (state.matchedCards.length === state.cards.length) {
      state.gameOver = true;
      clearInterval(state.timer);
    }
  };

  // Start the game timer
  const startTimer = () => {
    state.timer = setInterval(() => {
      if (state.timeLeft > 0) {
        state.timeLeft--;
      } else {
        clearInterval(state.timer);
        state.gameOver = true;
      }
    }, 1000);
  };

  // Computed properties
  const moves = computed(() => state.moves);
  const timeLeft = computed(() => state.timeLeft);
  const cards = computed(() => state.cards);
  const gameOver = computed(() => state.gameOver);

  return {
    cards,
    moves,
    timeLeft,
    gameOver,
    initializeGame,
    handleCardFlip,
  };
};
