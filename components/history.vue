<template>
  <div class="bg-[#FFFBED] min-h-screen">
    <Navbar class="fixed top-0 left-0 right-0 z-50" />

    <div class="pt-28 px-4 max-w-6xl mx-auto">

      <h1 class="text-xl md:text-3xl font-medium text-[#473D13] mb-10 text-center">
        BOOKING HISTORY
      </h1>

      <div v-if="bookings.length === 0" class="bg-white rounded-2xl shadow p-10 text-center text-gray-500">
        No booking history found.
      </div>

      <!-- Desktop -->
      <div v-else class="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-green-800 text-white">
            <tr>
              <th class="p-4 text-left">Booking ID</th>
              <th class="p-4 text-left">Name</th>
              <th class="p-4 text-left">Specialty</th>
              <th class="p-4 text-left">Date</th>
              <th class="p-4 text-left">Time</th> 
              <th class="p-4 text-left">Phone</th>
              <th class="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="booking in bookings" :key="booking.id" class="hover:bg-gray-50 transition">
              <td class="p-4 font-medium">
                #{{ booking.booking_no }}
              </td>

              <td class="p-4">
                {{ booking.name }} {{ booking.surname }}
              </td>

              <td class="p-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {{ booking.specialty }}
                </span>
              </td>

              <td class="p-4">
                {{ new Date(booking.appointment_date).toLocaleDateString('en-CA') }}
              </td>

              <td class="p-4">
                {{ booking.appointment_time }}
              </td>

              <td class="p-4">
                {{ booking.phone }}
              </td>



              <td class="p-4 text-center">
                <button v-if="booking.status !== 'canceled'" @click="cancelBooking(booking.booking_no)" class="px-4 py-1 text-sm rounded-full
         bg-red-100 text-red-700
         hover:bg-red-200 transition">
                  Cancel
                </button>
                <span v-else class="text-gray-400">
                  Canceled
                </span>
              </td>


            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile -->
      <div class="md:hidden space-y-6">
        <div v-for="booking in bookings" :key="booking.id" class="bg-white rounded-2xl shadow p-6 space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Booking ID</span>
            <span class="font-semibold">
              #{{ booking.booking_no }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Patient</span>
            <span>
              {{ booking.name }} {{ booking.surname }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Specialty</span>
            <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {{ booking.specialty }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Date</span>
            <span>
              {{ new Date(booking.appointment_date).toLocaleDateString('en-CA') }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Time</span>
            <span>{{ booking.appointment_time }}</span>
          </div>

          <div class="flex justify-between">
            <span class="text-gray-500 text-sm">Phone</span>
            <span>{{ booking.phone }}</span>
          </div>

          <button v-if="booking.status !== 'canceled'" @click="cancelBooking(booking.booking_no)" class="w-full mt-4 py-2 rounded-full
                   bg-red-100 text-red-700
                   hover:bg-red-200 transition">
            Cancel Booking
          </button>
          <span v-else class="text-red-400">
            Canceled
          </span>
        </div>
      </div>



    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './navbar.vue'

const bookings = ref<any[]>([])
const loading = ref(false)

const loadBookings = async () => {
  try {
    loading.value = true
    bookings.value = await $fetch('/api/history')
  } catch (err) {
    console.error('Failed to load history:', err)
  } finally {
    loading.value = false
  }
}

onMounted(loadBookings)



const cancelBooking = async (bookingNo: string) => {
  if (!confirm('Are you sure you want to cancel this booking?')) return

  try {
    await $fetch('/api/cancel', {
      method: 'POST',
      body: { booking_no: bookingNo }
    })

    // reload จาก DB ใหม่
    await loadBookings()

  } catch (err) {
    console.error(err)
    alert('Cancel failed')
  }
}

</script>
