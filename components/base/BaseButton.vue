<script setup lang="ts">
defineProps({
  type: { type: String, default: 'button' }, // Supports 'button', 'submit', 'reset'
  variant: { type: String, default: 'primary' }, // Variants: primary, secondary, danger, etc.
  size: { type: String, default: 'medium' }, // Sizes: small, medium, large
  disabled: { type: Boolean, default: false },
});
</script>

<template>
  <button
      :type="type"
      :class="['base-button', variant, size, { 'base-button--disabled': disabled }]"
      :disabled="disabled"
      @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  @apply flex items-center justify-center outline-none border-none font-medium transition-all rounded-lg active:scale-95;
}

.base-button.primary {
  @apply bg-primary text-white
}

.base-button.secondary {
  @apply bg-secondary text-white;
}

.base-button.danger {
  @apply bg-red-600;
}

.base-button.small {
  @apply px-4 py-1.5 text-sm
}

.base-button.medium {
  @apply px-6 py-3 text-base;
}

.base-button.large {
  @apply px-10 py-5 text-lg;
}

.base-button--disabled {
  @apply opacity-35 cursor-not-allowed pointer-events-none;
}
</style>
