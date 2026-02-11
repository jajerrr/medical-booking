<template>

    <footer class="bg-green-900 text-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 py-16">
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

      <div>
        <h3 class="text-xl font-bold mb-3">Medical Booking</h3>
        <p class="text-sm text-green-100">
          Online Medical Appointment Booking System
          designed for fast and convenient healthcare access.
        </p>
      </div>

      <div>
        <h4 class="mb-3 font-semibold">Services</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li>Medical Specialty</li>
          <li>Online Booking</li>
          <li>Consultation</li>
          <li>Secure Data</li>
        </ul>
      </div>

      <div>
        <h4 class="mb-3 font-semibold">Quick Links</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li>
            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/appointments" class="hover:underline">Book Appointment</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="mb-3 font-semibold">Contact</h4>
        <ul class="space-y-2 text-sm text-green-100">
          <li>Email: support@medicalbooking.com</li>
          <li>Phone: +66 123 4567</li>
        </ul>
      </div>

    </div>

    <div class="mt-12 border-t border-green-800 pt-6 text-center text-sm text-green-200">
      © 2026 Medical Booking System. All rights reserved.
    </div>
  </div>
</footer>
</template>