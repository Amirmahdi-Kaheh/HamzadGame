<script setup lang="ts">
const colorMode = useColorMode()
const getIcon = (): string => {
  return colorMode.preference === "light" ? "ph:moon-stars-fill" : "ph:sun-fill"
}
</script>

<template>
  <div>
    <button
      class="h-12 w-12 flex items-center justify-center rounded-lg border-2 border-stone-300 dark:border-stone-800 active:scale-90 transition-all"
      @click="
        $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
      "
    >
      <Icon :name="getIcon()" size="20" />
    </button>
  </div>
</template>

<style scoped></style>
