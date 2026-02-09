<!-- <template>

  <div class="bg-[#FFFBED] min-h-screen ">
    <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />

  
    <div class="flex flex-col items-center justify-center p-4 mt-[5%]">
    <h1 class="text-3xl font-bold text-green-800 mb-4">
      Booking Confirmed
    </h1>

    <p class="text-xl mb-4  text-center">
      Your Booking ID:{{ bookingId }}
     
    </p>
    <NuxtLink to="/" class=" text-center text-green-800 underline  inline-block">
                        < BACK HOME </NuxtLink>
 
  </div>
   
  </div>
</template>

<script setup>
const route = useRoute()
const bookingId = route.query.bookingId
</script> -->



<template>
  <div class="bg-[#FFFBED] min-h-screen">
    <Navbar class="fixed top-0 left-0 right-0 z-50" />

    <div class="min-h-screen flex items-center justify-center pt-20 px-4">
      <div class="bg-white  rounded-xl shadow p-8 w-full max-w-md text-center">
        
      

        <div v-if="latestBooking">  
        <h1 class="text-2xl font-bold text-green-800 mb-4">
          Booking Confirmed ✅
        </h1>
          <p class="mb-2">
            <strong>Booking ID:</strong>
            {{ latestBooking.booking_no }}
          </p>

          <p class="mb-2">
            <strong>Name:</strong>
            {{ latestBooking.name }} {{ latestBooking.surname }}
          </p>

          <p class="mb-2">
            <strong>Specialty:</strong>
            {{ latestBooking.specialty }}
          </p>

          <p class="mb-2">
            <strong>Date:</strong>
            {{ latestBooking.appointment_date.split('T')[0] }}
          </p>

          <p class="mb-4">
            <strong>Time:</strong>
            {{ latestBooking.appointment_time }}
          </p>
        </div>

        <p v-else class="text-gray-500">
          No booking data found.
        </p>

        <NuxtLink
          to="/"
          class="inline-block mt-4 text-green-800 underline"
        >
          < BACK TO HOME
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
})
</script>