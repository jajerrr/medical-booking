<template>
  <div class="bg-[#FFFBED] min-h-screen">
    <Navbar class="fixed top-0 left-0 right-0 z-50" />

    <div class="pt-24 px-4 max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold text-[#473D13] mb-6 text-center">
        BOOKING HISTORY
      </h1>

      <!-- ไม่มีข้อมูล -->
      <div
        v-if="bookings.length === 0"
        class="text-center text-gray-500"
      >
        No booking history found.
      </div>

      <!-- TABLE -->
      <div v-else class="overflow-x-auto">
        <table class="w-full border border-gray-300 bg-white rounded-lg shadow">
          
          <!-- Desktop Header -->
          <thead class="bg-green-800 text-white hidden md:table-header-group">
            <tr>
              <th class="p-3 text-left">Booking ID</th>
              <th class="p-3 text-left">Name</th>
              <th class="p-3 text-left">Specialty</th>
              <th class="p-3 text-left">Date</th>
              <th class="p-3 text-left">Time</th>
              <th class="p-3 text-left">Phone</th>
              <th class="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="booking in bookings"
              :key="booking.id"
              class="border-t block md:table-row mb-4 md:mb-0"
            >
              <!-- Booking ID -->
              <td class="p-3 block md:table-cell">
                <span class="font-semibold md:hidden">Booking ID: </span>
                {{ booking.booking_no }}
              </td>

              <!-- Name -->
              <td class="p-3 block md:table-cell">
                <span class="font-semibold md:hidden">Name: </span>
                {{ booking.name }} {{ booking.surname }}
              </td>

              <!-- Specialty -->
              <td class="p-3 block md:table-cell">
                <span class="font-semibold md:hidden">Specialty: </span>
                {{ booking.specialty }}
              </td>

              <!-- Date -->
              <td class="p-3 block md:table-cell">
                <span class="font-semibold md:hidden">Date: </span>
                {{ booking.appointment_date.split('T')[0] }}
              </td>

              <!-- Time -->
              <td class="p-3 block md:table-cell">
                <span class="font-semibold md:hidden">Time: </span>
                {{ booking.appointment_time }}
              </td>

              <!-- Phone -->
              <td class="p-3 block md:table-cell">
                <span class="font-semibold md:hidden">Phone: </span>
                {{ booking.phone }}
              </td>

              <!-- Action -->
              <td class="p-3 block md:table-cell text-center">
                <button
                  @click="cancelBooking(booking.id)"
                  class="text-red-600 hover:underline"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './navbar.vue'

const bookings = ref<any[]>([])

const loadBookings = () => {
  bookings.value = JSON.parse(
    localStorage.getItem('bookings') || '[]'
  )
}

const cancelBooking = (id: number) => {
  if (!confirm('Are you sure you want to cancel this booking?')) return

  const updated = bookings.value.filter(b => b.id !== id)
  bookings.value = updated
  localStorage.setItem('bookings', JSON.stringify(updated))
}

onMounted(loadBookings)
</script>
