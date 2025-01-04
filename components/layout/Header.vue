<template>
  <div class="w-full flex items-center justify-between gap-y-4 py-6">
    <div class="flex items-center gap-x-4">
      <h1 class="text-xl font-black">همزاد</h1>
    </div>

    <div class="flex items-center gap-x-2">
      <div class="flex items-center justify-center gap-x-2 mx-4">
        <span class="font-bold text-base">{{
          formatPrice(scoreCookie ?? 0)
        }}</span>
        <img
          src="@/assets/images/logo.png"
          class="w-3 h-3"
          loading="lazy"
          alt=""
        />
      </div>
      <FeatureGameSetting />
      <FeatureGameTheme />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPrice } from "~/utils/numbers"
const scoreCookie = useCookie("Score")
</script>

<style scoped></style>
