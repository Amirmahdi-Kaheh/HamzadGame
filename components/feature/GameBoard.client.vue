<template>
  <div class="flex flex-col items-center justify-center space-y-6">
    <div class="border border-[#D8C4B6] mt-8 w-full p-4 rounded-xl">
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

    <div class="fixed bottom-0 left-0 p-6 pb-6 w-full flex items-center justify-center">
      <!-- Restart Button -->
      <BaseButton @click="initializeGame" size="large" class="lg:w-96 w-full !bg-black !rounded-full">
        شروع مجدد
      </BaseButton>
    </div>
  </div>
     </template>

     <script setup lang="ts">
import { useGame } from '@/composables/useGame';

const { cards, gameOver, moves, timeLeft, initializeGame, handleCardFlip } = useGame();
onMounted(() => initializeGame());
     </script>

     <style></style>
