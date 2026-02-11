<template>
  <div class="bg-[#FFFBED] min-h-screen">
    <Navbar class="fixed top-0 left-0 right-0 z-50" />

    <div class="min-h-screen flex items-center justify-center pt-24 px-4">
      <div
        class="w-full max-w-lg bg-white rounded-2xl shadow-xl
               p-10 text-center"
      >

        <div class="flex justify-center mb-6">
          <div
            class="w-16 h-16 rounded-full bg-green-100
                   flex items-center justify-center
                   text-green-700 text-3xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="lucide lucide-badge-check-icon lucide-badge-check">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
        </div>

        <h1 class="text-2xl md:text-3xl font-bold text-green-800 mb-2">
          BOOKING SUCCESSFUL!
        </h1>

        <p class="text-gray-500 mb-6">
          Your appointment has been successfully scheduled.
        </p>

        <div
          v-if="latestBooking"
          class="bg-gray-50 rounded-xl p-6 text-left space-y-3"
        >
          <div class="flex justify-between">
            <span class="text-gray-500">Booking ID</span>
            <span class="font-semibold">
              {{ latestBooking.booking_no }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Patient</span>
            <span class="font-semibold">
              {{ latestBooking.name }} {{ latestBooking.surname }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Specialty</span>
            <span class="font-semibold">
              {{ latestBooking.specialty }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Date</span>
            <span class="font-semibold">
              {{ new Date(latestBooking.appointment_date).toLocaleDateString('en-CA') }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500">Time</span>
            <span class="font-semibold">
              {{ latestBooking.appointment_time }}
            </span>
          </div>
        </div>

        <div v-else class="text-gray-400">
          No booking data found.
        </div>

        <NuxtLink
          to="/"
          class="mt-8 inline-block w-full py-3
                 bg-green-800 text-white rounded-full
                 hover:bg-green-700 transition"
        >
           BACK TO HOME
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'

const latestBooking = ref<any>(null)

onMounted(() => {
  const bookings = JSON.parse(
    localStorage.getItem('bookings') || '[]'
  )

  if (bookings.length > 0) {
    latestBooking.value = bookings[bookings.length - 1]
  }

  console.log(latestBooking.value)
})



</script>