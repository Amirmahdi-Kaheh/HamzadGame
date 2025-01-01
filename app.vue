<template>
  <div class="w-96 mx-auto h-dvh flex flex-col justify-between">
    <LayoutHeader></LayoutHeader>

    <nuxt-page/>

    <!-- <BaseModal v-model="isOpen" @close="isOpen = false">
      <template #header>
        <img src="@/assets/gif/tutorial.gif" alt="game tutorial" loading="lazy" class="w-full h-32 object-cover rounded-2xl border border-gray-200 mb-4">
      </template>
      <template #body>
        <h3 class="font-bold text-lg">
          سلام، به بازی خوش اومدی
        </h3>
        <p class="mt-1">
          کارت های یکسان رو پیدا کن و انتخابشون کن تا برنده بشی
        </p>
      </template>
    </BaseModal>
    
    <button @click="isOpen = true">open </button> -->
    <BaseSplashScreen></BaseSplashScreen>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<script setup lang="ts">

const isOpen = ref(false)
</script>
