<template>
  <nav class="bg-white fixed w-full z-50 top-0 shadow-sm">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">

      <NuxtLink to="/" class="text-xl font-semibold text-green-800">
        Medical Booking
      </NuxtLink>

      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Desktop -->
      <ul class="hidden md:flex space-x-8 font-medium text-gray-700">
        <li>
          <NuxtLink to="/" class="hover:text-green-800 transition">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/appointments" class="hover:text-green-800 transition">
            Appointments
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/mybooking" class="hover:text-green-800 transition">
            My Booking
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/history" class="hover:text-green-800 transition">
            History
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Mobile -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white border-t shadow-sm"
      >
        <ul class="flex flex-col space-y-3 p-4 text-gray-700 font-medium">
          <li>
            <NuxtLink @click="closeMenu" to="/"  class="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-800 transition">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/appointments"  class="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-800 transition">Appointments</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/mybooking"  class="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-800 transition">My Booking</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" to="/history"  class="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-800 transition">History</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
