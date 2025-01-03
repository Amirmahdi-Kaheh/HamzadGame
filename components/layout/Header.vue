<template>
       <div class="w-full flex items-center justify-between gap-y-4 py-6">
              <div class="flex items-center gap-x-4">
                     <img src="@/assets/images/logo.png" class="w-8 h-8" alt="">
                      <h1 class="text-xl font-black">همزاد</h1>
              </div>

              <div class="flex items-center gap-x-2">
                <FeatureGameSetting></FeatureGameSetting>
                <button class="h-12 w-12 flex items-center justify-center rounded-lg border-2 border-[#D8C4B6] active:scale-90 transition-all">
                  <Icon name="ph:sun-fill" size="20"></Icon>
                </button>
              </div>
   </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
