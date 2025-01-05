<template>
  <div
    class="card relative w-full aspect-square perspective cursor-pointer"
    :class="{ 'pointer-events-none': card.flipped || card.matched }"
    @click="flipCard"
  >
    <div
      class="card-inner w-full h-full absolute transition-all duration-500"
      :class="{ 'rotate-x-180': !flipped }"
    >
      <!-- Card Front -->
      <div
        class="w-full h-full bg-orange-50 dark:bg-dark flex border border-transparent justify-center items-center text-xl font-bold text-gray-800 rounded-lg dark:shadow-2xl shadow-lg shadow-slate-300 dark:shadow-yellow-950 absolute backface-hidden"
        :class="{ '!border-primary': card.matched }"
      >
        <img
          v-if="userChallengeType === 'image'"
          class="w-full h-full rounded-lg object-cover"
          :src="card.value"
          alt=""
        />
        <span v-else>{{ card.value }}</span>
      </div>
      <!-- Card Back -->
      <div
        class="w-full h-full bg-primary flex border-2 border-transparent justify-center items-center text-3xl font-bold text-white rounded-lg shadow-lg dark:shadow-2xl shadow-slate-300 dark:shadow-yellow-950 absolute rotate-x-180 backface-hidden"
      >
        {{ card.id + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["card"])
const emits = defineEmits(["flip"])

const flipped = computed(() => props.card.flipped || props.card.matched)

const flipCard = () => {
  if (!flipped.value) emits("flip", props.card.id)
}

const gameChallengeCookie = useCookie("GameChallenge")
const userChallengeType = computed(() => {
  return gameChallengeCookie.value || "image"
})
</script>

<style>
.rotate-x-180 {
  transform: rotateX(-180deg);
}
.perspective {
  perspective: 1000px;
}

.card-inner {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}
</style>
