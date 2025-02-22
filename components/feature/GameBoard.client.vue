<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="border border-stone-300 dark:border-stone-800 w-full p-4 rounded-xl mt-8"
    >
      <FeatureGameStatus :moves="moves" :time="timeLeft" />

      <!-- Game Board -->
      <div class="grid grid-cols-4 gap-4 w-full">
        <FeatureCard
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @flip="handleCardFlip"
        />
      </div>
    </div>

    <div
      class="fixed bottom-0 left-0 p-6 pb-6 w-full flex items-center justify-center transition-all duration-1000"
      :class="{ '!-bottom-full': isRunning && !gameOver }"
    >
      <!-- Restart Button -->
      <BaseButton
        v-if="!gameOver"
        size="large"
        variant="secondary"
        class="lg:w-96 w-full !rounded-full"
        @click="startGame"
      >
        شروع بازی
      </BaseButton>
      <BaseButton
        v-else
        size="large"
        variant="secondary"
        class="lg:w-96 w-full !rounded-full"
        @click="restartGame"
      >
        شروع مجدد
      </BaseButton>
    </div>

    <div
      class="fixed -bottom-full left-0 p-6 pb-6 w-full flex items-center justify-center transition-all duration-1000"
      :class="{ '!bottom-0': isRunning && !gameOver }"
    >
      <div class="lg:w-96 w-full grid grid-cols-2 gap-x-4">
        <!-- Boost Button -->
        <BaseButton
          size="medium"
          variant="secondary"
          class="!rounded-xl flex flex-col gap-y-1"
          :class="{ 'pointer-events-none opacity-50': timeLeft <= 30 }"
          @click="handleBoostMove"
        >
          <Icon name="ph:sneaker-move-fill" size="24" />
          <span class="text-base font-semibold">۴ حرکت اضافه</span>
          <span class="py-1 px-4 rounded-full bg-primary">۲۰ ثانیه</span>
        </BaseButton>
        <BaseButton
          size="medium"
          variant="secondary"
          class="!rounded-xl flex flex-col gap-y-1"
          :class="{ 'pointer-events-none opacity-50': moves <= 6 }"
          @click="handleBoostTime"
        >
          <Icon name="ph:clock-countdown-fill" size="24" />
          <span class="text-base font-semibold">۱۵ ثانیه اضافه</span>
          <span class="py-1 px-4 rounded-full bg-primary">۴ حرکت</span>
        </BaseButton>
      </div>
    </div>

    <BaseModal v-model="gameOver" @close="initializeGame">
      <template #body>
        <div
          v-if="isPlayerWon"
          class="flex flex-col items-center justify-center gap-y-6 text-center"
        >
          <img src="@/assets/images/success.svg" class="dark:invert" alt="" />
          <h4 class="font-bold text-2xl text-green-600">بردی!</h4>
          <p>تونستی همه همزاد ها رو پیدا کنی! تبریک میگم</p>
          <div class="flex flex-col items-center gap-y-4 my-6">
            <span> امتیاز کسب شده: </span>
            <div class="flex items-center justify-center gap-x-4">
              <span class="font-bold text-xl">{{
                formatPrice(calculateReward())
              }}</span>
              <img
                src="@/assets/images/logo.png"
                class="w-5 h-5"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <BaseButton class="w-full" @click="initializeGame">
            امتیاز بیشتر
          </BaseButton>
        </div>
        <div
          v-else
          class="flex flex-col items-center justify-center gap-y-6 text-center"
        >
          <img src="@/assets/images/fail.svg" class="dark:invert" alt="" />
          <h4 class="font-bold text-2xl">باختی!</h4>
          <p v-if="moves === 0">
            متاسفانه حرکاتت تموم شد. می تونی مجددا تلاش کنی تا امتیاز بدست بیاری
          </p>
          <p v-else-if="timeLeft === 0">
            متاسفانه زمانت تموم شد. می تونی مجددا تلاش کنی تا امتیاز بدست بیاری
          </p>

          <BaseButton class="w-full" @click="initializeGame">
            تلاش مجدد
          </BaseButton>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { useGame } from "@/composables/useGame"
import { formatPrice } from "~/utils/numbers"
const gameChallengeCookie = useCookie("GameChallenge")
const {
  cards,
  gameOver,
  moves,
  timeLeft,
  isRunning,
  isPlayerWon,
  startGame,
  restartGame,
  initializeGame,
  handleCardFlip,
  calculateReward,
  handleBoostMove,
  handleBoostTime,
} = useGame()
onMounted(() => initializeGame())
watch(gameChallengeCookie, () => {
  initializeGame()
})
</script>

<style></style>
