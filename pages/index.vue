<template>
    <div class="bg-[#FFFBED] min-h-screen ">
        <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />
        <Home />

    </div>
    <Footer />
</template>

<script setup lang="ts">
import Home from '../components/home.vue';
import Footer from '../components/footer.vue';


</script>