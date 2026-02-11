<template>
  <section class="bg-image-home relative flex items-center">
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative z-10 w-full px-4 sm:px-8 lg:px-16">
      <div class="max-w-5xl py-10">
        <div class="flex flex-col items-start gap-6 text-left">
          <h1
            class="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl
                   font-bold font-sans leading-tight text-white"
          >
            Online Medical Appointment<br class="hidden sm:block" />
            Booking System
          </h1>

          <p
            class="max-w-3xl text-sm sm:text-base lg:text-lg text-white"
          >
            Online Medical Appointment Booking System designed for fast and convenient healthcare access
          </p>

          <NuxtLink
            to="/appointments"
            class="mt-4 inline-flex items-center
                   rounded-full bg-green-800 px-8 py-4
                   text-base sm:text-lg font-semibold text-white
                   transition hover:bg-green-700
                   focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            BOOK AN APPOINTMENT
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
<section class="bg-gray-50 py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
    <!-- Header -->
    <div class="mb-14 text-left">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading">
        Our Services
      </h2>
      <p class="mt-2 max-w-2xl text-body">
        We provide comprehensive online medical appointment services
        designed for convenience and efficiency.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
      <div class="service-card">
        <div class="icon bg-green-100 text-green-700">🩺</div>
        <h3>Choose Medical Specialty</h3>
        <p>Select from various specialties including cardiology and pediatrics.</p>
      </div>

      <div class="service-card">
        <div class="icon bg-blue-100 text-blue-700">📅</div>
        <h3>Book Appointment</h3>
        <p>Pick your preferred date and time with real-time availability.</p>
      </div>

      <div class="service-card">
        <div class="icon bg-purple-100 text-purple-700">💬</div>
        <h3>Online Consultation</h3>
        <p>Submit medical concerns through an easy-to-use online form.</p>
      </div>

      <div class="service-card">
        <div class="icon bg-red-100 text-red-700">👨‍⚕️</div>
        <h3>Expert Doctors</h3>
        <p>Connect with experienced and trusted medical professionals.</p>
      </div>

      <div class="service-card">
        <div class="icon bg-yellow-100 text-yellow-700">⏱️</div>
        <h3>Time Saving</h3>
        <p>Reduce waiting time with fast and efficient appointment booking.</p>
      </div>

      <div class="service-card">
        <div class="icon bg-indigo-100 text-indigo-700">🔒</div>
        <h3>Secure Data</h3>
        <p>Your personal and medical information is kept private and secure.</p>
      </div>

    </div>
  </div>
</section>





</template>


<script setup lang="ts">

</script>

<style scoped>
.bg-image-home {
  background-image: url('/assets/css/image/dcgroup.jpg');
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 64px);
}


</style>
