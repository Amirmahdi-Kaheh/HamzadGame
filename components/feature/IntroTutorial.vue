<script setup lang="ts">
const introCookie = useCookie('DisableTutorial')
const showIntroModal = ref<boolean>(!introCookie.value)
function closeIntroModal() :void {
  showIntroModal.value = false;
  introCookie.value = '1';
}
</script>

<template>
  <BaseModal v-model="showIntroModal" @close="closeIntroModal">
    <template #body>
      <img src="@/assets/gif/tutorial.gif" alt="game tutorial" loading="lazy" class="w-full h-36 object-cover rounded-2xl border-2 border-gray-200 mb-4 grayscale">
      <h3 class="font-bold text-lg">
        سلام، به بازی خوش اومدی
      </h3>
      <p class="mt-1">
        کارت های یکسان رو پیدا کن و انتخابشون کن تا امتیاز بگیری
      </p>
    </template>
    <template #footer>
      <BaseButton class="w-full mt-10" @click="closeIntroModal">
        شروع بازی!
      </BaseButton>
    </template>
  </BaseModal>
</template>

<style scoped>

</style>
