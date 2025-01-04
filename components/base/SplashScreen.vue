<template>
  <div
    v-if="visible"
    class="fixed top-0 left-0 w-full h-full flex flex-col gap-y-10 items-center justify-center bg-primary text-white z-50"
  >
    <div
      class="w-24 h-24 rounded-2xl bg-orange-50 flex items-center justify-center shadow-xl"
    >
      <h4 class="font-black text-2xl text-primary">همزاد</h4>
    </div>

    <Icon name="svg-spinners:3-dots-scale" size="32" />
  </div>
</template>

<script setup lang="ts">
const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false // Hide the splash screen after 2 seconds
  }, 2000)
})
</script>

<style scoped></style>
