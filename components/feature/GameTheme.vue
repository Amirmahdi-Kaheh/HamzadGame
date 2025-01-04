<script setup lang="ts"></script>

<template>
  <div>
    <button
      class="h-12 w-12 flex items-center justify-center rounded-lg border-2 border-stone-300 dark:border-stone-800 active:scale-90 transition-all"
      @click="
        $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
      "
    >
      <Icon name="ph:sun-fill" size="20" />
    </button>
  </div>
</template>

<style scoped></style>
