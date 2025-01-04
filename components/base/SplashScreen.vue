<template>
  <div
    v-if="visible"
    class="fixed top-0 left-0 w-full h-full flex flex-col gap-y-10 items-center justify-center bg-primary text-white dark:text-dark z-50"
  >
    <div
      class="w-24 h-24 rounded-2xl bg-orange-50 dark:bg-dark flex items-center justify-center shadow-xl"
    >
      <h4 class="font-black text-2xl text-primary dark:text-white">همزاد</h4>
    </div>

    <Icon name="svg-spinners:3-dots-scale" size="32" />

    <div class="absolute bottom-4 text-sm opacity-70">نسخه {{ version }}</div>
  </div>
</template>

<script setup lang="ts">
import { version } from "../../package.json"

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false // Hide the splash screen after 2 seconds
  }, 2000)
})
</script>

<style scoped></style>
