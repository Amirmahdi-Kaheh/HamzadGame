<template>
       <div v-if="visible" class="fixed top-0 left-0 w-full h-full flex flex-col gap-y-10 items-center justify-center bg-primary text-white z-50">
              <div class="w-24 h-24 rounded-2xl bg-[#F5EFE7] flex items-center justify-center shadow-xl">
                <h4 class="font-bold text-2xl text-primary">همزاد</h4>
              </div>
          
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4" cy="12" r="0" fill="current"><animate fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove0" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove1" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s" values="20;4"/></circle><circle cx="4" cy="12" r="3" fill="currentColor"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove2" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove3" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove4" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove5" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsMove6" fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove7" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/></circle></svg>
            </div>
</template>

<script setup lang="ts">
const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false; // Hide the splash screen after 2 seconds
  }, 2000);
});
</script>

<style scoped>

</style>