import { reactive, computed } from "vue"

export const useGame = () => {
  const config = useRuntimeConfig()
  const state = reactive({
    score: 0,
    cards: [],
    flippedCards: [], // Temporarily holds up to two flipped cards
    matchedCards: [], // Stores matched card IDs
    isProcessing: false, // Prevents multiple flips during checks
    moves: +config.public.gameMoves,
    timer: null,
    timeLeft: +config.public.gameTime, // Example: 60 seconds to finish the game
    gameOver: false,
    isRunning: false,
  })

  // Initialize the game
  const initializeGame = () => {
    setScoreByStorage()
    const cardValues = generateCardValues()
    state.cards = shuffle(cardValues).map((value: string, index: number) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }))
    resetGame()
  }

  const resetGame = () => {
    state.flippedCards = []
    state.matchedCards = []
    state.isProcessing = false
    state.moves = +config.public.gameMoves
    state.timeLeft = +config.public.gameTime
    state.gameOver = false
    state.isRunning = false
    clearInterval(state.timer)
  }

  const restartGame = () => {
    initializeGame()
    startGame()
  }

  const startGame = () => {
    state.isRunning = true
    if (state.timer) clearInterval(state.timer)
    startTimer()
  }

  // Generate card values (pairs of values)
  const generateCardValues = () => {
    const gameChallengeCookie = useCookie("GameChallenge")
    const userChallengeType = ref(gameChallengeCookie.value || "image")

    const emojiList = ["🍔", "🍌", "🚀", "🍓", "🍍", "🥝", "👻", "🐈"] // Example emojis
    const imageList = [
      "/products/product-1.jpg",
      "/products/product-2.jpg",
      "/products/product-3.jpg",
      "/products/product-4.jpg",
      "/products/product-5.jpg",
      "/products/product-6.jpg",
      "/products/product-7.jpg",
      "/products/product-8.jpg",
    ] // Example emojis
    return userChallengeType.value === "image"
      ? [...imageList, ...imageList]
      : [...emojiList, ...emojiList] // Duplicate to create pairs
  }

  // Shuffle the cards
  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5)
  }

  // Handle card flip
  const handleCardFlip = cardId => {
    if (!state.isRunning && !state.gameOver) {
      startGame()
    }

    if (state.gameOver) return
    if (state.isProcessing || state.matchedCards.includes(cardId)) return

    const card = state.cards.find(c => c.id === cardId)
    if (!card || card.flipped) return

    card.flipped = true
    state.flippedCards.push(card)
    state.moves--

    if (state.flippedCards.length === 2) {
      checkForMatch()
    }
    if (state.moves === 0) {
      state.gameOver = true
      clearInterval(state.timer)
    }
  }

  // Check for a match
  const checkForMatch = () => {
    state.isProcessing = true

    const [card1, card2] = state.flippedCards
    if (card1.value === card2.value) {
      state.matchedCards.push(card1.id, card2.id)
      card1.matched = true
      card2.matched = true
    } else {
      setTimeout(() => {
        card1.flipped = false
        card2.flipped = false
      }, 600)
    }

    state.flippedCards = []
    state.isProcessing = false

    checkGameOver()
  }

  // Check if the game is over
  const checkGameOver = () => {
    if (state.matchedCards.length === state.cards.length) {
      updateScoreStorage()
      state.gameOver = true
      clearInterval(state.timer)
    }
  }

  // Start the game timer
  const startTimer = () => {
    state.timer = setInterval(() => {
      if (state.timeLeft > 0) {
        state.timeLeft--
      } else {
        clearInterval(state.timer)
        state.gameOver = true
      }
    }, 1000)
  }

  const calculateReward = () => {
    // calculate by timeLeft and moveLeft
    return (state.timeLeft || 1) * (state.moves || 1)
  }

  const setScoreByStorage = () => {
    const scoreCookie = useCookie("Score")
    state.score = scoreCookie.value || 0
  }

  const updateScoreStorage = () => {
    const scoreCookie = useCookie("Score")
    scoreCookie.value = state.score + calculateReward()
  }

  const handleBoostMove = () => {
    if (state.timeLeft <= 30) return
    state.timeLeft -= 20
    state.moves += 4
  }

  const handleBoostTime = () => {
    if (state.moves <= 6) return
    state.timeLeft += 15
    state.moves -= 4
  }

  // Computed properties
  const moves = computed(() => state.moves)
  const score = computed(() => state.score)
  const timeLeft = computed(() => state.timeLeft)
  const cards = computed(() => state.cards)
  const gameOver = computed(() => state.gameOver)
  const isRunning = computed(() => state.isRunning)
  const isUserWon = computed(
    () => state.matchedCards.length === state.cards.length,
  )

  return {
    score,
    cards,
    moves,
    timeLeft,
    gameOver,
    isRunning,
    isUserWon,
    initializeGame,
    startGame,
    handleCardFlip,
    calculateReward,
    restartGame,
    handleBoostMove,
    handleBoostTime,
  }
}
