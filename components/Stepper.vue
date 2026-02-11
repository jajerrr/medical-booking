<template>
   <div class="max-w-3xl mx-auto mt-10">
            <div class="absolute top-5 left-0 h-1 bg-green-700 transition-all duration-500"
                :style="{ width: ((currentStep - 1) / 1) * 100 + '%' }"></div>

            <div class="flex items-center justify-between relative">

                <div v-for="step in 2" :key="step" class="flex-1 flex flex-col items-center">
                    <div :class="[
                        'w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300',
                        currentStep > step
                            ? 'bg-green-700 text-white'
                            : currentStep === step
                                ? 'bg-green-600 text-white scale-110 shadow-lg'
                                : 'bg-gray-200 text-gray-600'
                    ]">
                        <span v-if="currentStep > step">1</span>
                        <span v-else>{{ step }}</span>
                    </div>

                    <span class="text-sm mt-2 transition-colors duration-300"
                        :class="currentStep >= step ? 'text-green-700 font-medium' : 'text-gray-600'">
                        {{ step === 1 ? 'Information' : 'Review' }}
                    </span>
                </div>


            </div>
        </div>
</template>

<script setup lang="ts">
defineProps<{ currentStep: number }>()
</script>
