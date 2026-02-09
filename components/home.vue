<template>
  <div class="bg-image-home bg-cover bg-center bg-no-repeat  flex items-center justify-center">
    
    <div class="flex items-center justify-center p-4 a">

      <div class="w-full max-w-5xl   p-6  text-center bg-[#ffffff4a] rounded-lg shadow-lg">
        <div class="p-6 text-center gap-10 flex flex-col items-center justify-center">

          <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl text-white font-serif ">Online Medical Appointment Booking System
</h1>
          <p class="mb-6 text-lg font-normal text-body lg:text-xl sm:px-16 xl:px-25 text-white">This is a demo Medical Booking web application.
Users can select a medical specialty, choose an appointment date and time,
and submit booking information through a simple and intuitive interface.</p>

          <NuxtLink to="/booking" class="mt-4 px-8 py-4 bg-green-800 text-white text-white text-lg rounded rounded-full hover:bg-green-700">BOOK AN APPOINTMENT</NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center w-screen z-10 absolute bottom-0 left-0 right-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,42.7C384,32,480,64,576,74.7C672,85,768,75,864,101.3C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.bg-image-home {
  background-image: url('/assets/css/image/dcgroup.jpg');
  z-index: 50;
  width: 100vw;
  height: calc(100vh - 64px);
}
</style>
