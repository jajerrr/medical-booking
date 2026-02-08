<template>
  <div class="bg-[#FFFBED] min-h-screen ">
    <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />

    <div class="flex items-center justify-center p-4 mt-[5%] ">

      <div class="w-full max-w-5xl  p-6  text-center ">
        <div class="p-6 text-center gap-10 flex flex-col items-center justify-center">

          <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-[#473D13]">Online Medical Appointment Booking System
</h1>
          <p class="mb-6 text-lg font-normal text-body lg:text-xl sm:px-16 xl:px-25 text-gray-700">This is a demo Medical Booking web application.
Users can select a medical specialty, choose an appointment date and time,
and submit booking information through a simple and intuitive interface.</p>

          <NuxtLink to="/booking" class="mt-4 px-8 py-4 bg-green-800 text-white text-white text-lg rounded hover:bg-green-700">BOOK AN APPOINTMENT</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from './navbar.vue';

</script>
<style scoped></style>
