<template>
  <div class="grid grid-cols-2 w-full p-4 py-2 pb-6 border-b border-[#D8C4B6] mb-4">
    <div class="flex items-center justify-center gap-x-2">
      <span class="text-base">تعداد حرکات:</span> <span class="text-lg font-semibold w-6 text-center">{{ moves }}</span>
    </div>
    <div class="flex items-center justify-center gap-x-2">
      <span class="text-base">زمان باقی مانده:</span> <span class="text-lg font-semibold w-10 text-center">{{ getMinute }}:{{ getSecond }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  moves: {
    default: 0,
    type: Number
  },
  time: {
    default: 0,
    type: Number
  }
})

const getMinute = computed(()=>{
  return Math.floor(props.time / 60)
})
const getSecond = computed(()=>{
  return (props.time % 60).toString().padStart(2, '0')
})
</script>

<style lang="scss" scoped>

</style>
