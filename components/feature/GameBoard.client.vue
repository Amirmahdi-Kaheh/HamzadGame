<template>
  <div class="flex flex-col items-center justify-center">
    <div class="bg-[#D8C4B6] rounded-xl mt-8 w-full">
      <div class="border border-[#D8C4B6] bg-[#F5EFE7] w-full p-4 rounded-xl">
        <FeatureGameStatus :moves="moves" :time="timeLeft"></FeatureGameStatus>

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
      <div class="p-4 flex justify-center flex-wrap gap-x-2">
        <button class="text-sm px-4 py-1 rounded-full bg-[#F5EFE7] active:scale-95 transition-all" :class="{'pointer-events-none opacity-50': moves <= 6}">راهنما (6- حرکت)</button>
        <button class="text-sm px-4 py-1 rounded-full bg-[#F5EFE7] active:scale-95 transition-all" :class="{'pointer-events-none opacity-50': timeLeft <= 20}">۴ حرکت اضافه (20- ثانیه)</button>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 p-6 pb-6 w-full flex items-center justify-center transition-all duration-1000" :class="{'!-bottom-full': isRunning && !gameOver}">
      <!-- Restart Button -->
      <BaseButton v-if="!gameOver" @click="startGame" size="large" class="lg:w-96 w-full !bg-black !rounded-full">
        شروع بازی
      </BaseButton>
      <BaseButton v-else @click="restartGame" size="large" class="lg:w-96 w-full !bg-black !rounded-full">
        شروع مجدد
      </BaseButton>
    </div>


    <BaseModal v-model="gameOver" @close="initializeGame">
      <template #body>
        <div v-if="isUserWon" class="flex flex-col items-center justify-center gap-y-6 text-center">
          <img src="@/assets/images/errors/processing.svg" alt="">
          <h4 class="font-bold text-2xl text-green-600">بردی!</h4>
          <p>
            تونستی همه همزاد ها رو پیدا کنی! تبریک میگم
          </p>
          <BaseButton class="w-full" @click="initializeGame">
            امتیاز بیشتر
          </BaseButton>
        </div>
        <div v-else class="flex flex-col items-center justify-center gap-y-6 text-center">
          <img src="@/assets/images/errors/fail.svg" alt="">
          <h4 class="font-bold text-2xl">باختی!</h4>
          <p v-if="moves === 0">متاسفانه حرکت هات تموم شد. می تونی مجددا تلاش کنی تا امتیاز بدست بیاری</p>
          <p v-else-if="timeLeft === 0">متاسفانه زمانت تموم شد. می تونی مجددا تلاش کنی تا امتیاز بدست بیاری</p>

          <BaseButton class="w-full" @click="initializeGame">
            تلاش مجدد
          </BaseButton>
        </div>
      </template>
    </BaseModal>
  </div>
     </template>

     <script setup lang="ts">
import { useGame } from '@/composables/useGame';
const gameChallengeCookie = useCookie('GameChallenge');
const { cards, gameOver, moves, timeLeft, isRunning, isUserWon, startGame, restartGame, initializeGame, handleCardFlip } = useGame();
onMounted(() => initializeGame());
watch(gameChallengeCookie, ()=> {
  initializeGame()
})

     </script>

     <style></style>
