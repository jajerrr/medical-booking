<template>

  <div class="bg-[#FFFBED] min-h-screen pt-10">
    <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />

  <div class=" flex items-center justify-center p-4">
    <h2 class="text-2xl font-bold text-green-600">จองสำเร็จ 🎉</h2>
    <p>Booking ID: {{ route.query.id }}</p>
  </div>
  </div>
</template>

<script setup>
import Navbar from './navbar.vue';

const route = useRoute()
</script>
