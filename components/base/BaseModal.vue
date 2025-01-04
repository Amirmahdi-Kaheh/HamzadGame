<template>
       <Transition
              enter-active-class="transition-all duration-200 ease-in-out"
              enter-from-class="opacity-0 translate-y-6"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-300 ease-in-out"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-6"
       >
              <div v-if="model" class="flex lg:items-center items-end justify-center fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-70 backdrop-blur-sm" @click.self="$emit('close')" role="dialog" aria-labelledby="modal" aria-hidden="true">
                     <div class="lg:p-8 p-6 lg:pb-8 pb-12 rounded-2xl lg:rounded-b-2xl rounded-b-none bg-[#F5EFE7] z-10 lg:w-96 w-full">
                            <slot name="header"></slot>
                            <slot name="body">

                            </slot>
                            <slot name="footer"></slot>
                     </div>
              </div>
       </Transition>
</template>

<script setup lang="ts">
const emits = defineEmits(['close'])
const model = defineModel()
</script>

<style scoped>

</style>
