<script setup lang="ts">
const gameChallengeCookie = useCookie("GameChallenge")
const userChallengeType = ref(gameChallengeCookie.value || "image")
const isOpen = ref<boolean>(false)

function setUserChallengeType(type: string): void {
  gameChallengeCookie.value = type
  userChallengeType.value = type
  refreshCookie("GameChallenge")
}
</script>

<template>
  <div>
    <button
      class="h-12 w-12 flex items-center justify-center rounded-lg border-2 border-stone-300 dark:border-stone-800 active:scale-90 transition-all"
      @click="isOpen = true"
    >
      <Icon name="ph:gear-six-bold" size="20" />
    </button>
    <BaseModal v-model="isOpen" @close="isOpen = false">
      <template #header>
        <h4 class="text-xl font-semibold">تنظیمات بازی</h4>
      </template>
      <template #body>
        <div class="mt-8">
          <h4 class="text-lg font-medium">نوع چالش</h4>
          <div class="grid grid-cols-2 gap-x-3 mt-4">
            <div
              class="p-4 relative rounded-xl transition-all border-2 border-stone-300 dark:border-stone-800 flex flex-col gap-y-2 items-center justify-center hover:border-primary cursor-pointer"
              :class="{
                '!border-primary pointer-events-none':
                  userChallengeType === 'emoji',
              }"
              @click="setUserChallengeType('emoji')"
            >
              <Icon
                v-if="userChallengeType === 'emoji'"
                name="ph:check-circle-fill"
                class="absolute right-2 top-2 text-primary"
                size="24"
              />
              <span class="text-3xl">🐈</span>
              <span class="font-medium">ایموجی</span>
            </div>
            <div
              class="p-4 relative rounded-xl transition-all border-2 border-stone-300 dark:border-stone-800 flex flex-col gap-y-2 items-center justify-center hover:border-primary cursor-pointer"
              :class="{
                '!border-primary pointer-events-none':
                  userChallengeType === 'image',
              }"
              @click="setUserChallengeType('image')"
            >
              <Icon
                v-if="userChallengeType === 'image'"
                name="ph:check-circle-fill"
                class="absolute right-2 top-2 text-primary"
                size="24"
              />
              <img src="@/assets/images/product.png" class="h-10" alt="" />
              <span class="font-medium">تصویر</span>
            </div>
          </div>

          <div
            class="pt-4 mt-4 border-t border-stone-300 dark:border-stone-800 flex items-center justify-between"
          >
            <span class="text-sm">پیاده سازی توسط مهدیار با ☕️ و ❤️</span>

            <nuxt-link
              to="https://github.com/Amirmahdi-Kaheh/HamzadGame"
              external
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped></style>
