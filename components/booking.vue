<template>
    <div class="bg-[#FFFBED] min-h-screen pt-10">
        <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />

        <div class="flex  items-center justify-center mt-10">

            <h class="text-xl font-bold  text-[#473D13] md:text-3xl ">
                APPOINTMENT BOOKING FORM
            </h>

        </div>

        <div class=" flex flex-col items-center justify-center p-4 text-gray-500">


            <div class="w-full max-w-5xl  p-10 text-center">



                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                    <div>
                        <label class="block mb-1 font-medium">NAME</label>
                        <input class="w-full p-2 border rounded" v-model="name" />
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">SURNAME</label>
                        <input class="w-full p-2 border rounded" v-model="surname" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">DATE OF BIRTH</label>
                        <input type="date" class="w-full p-2 border rounded" v-model="birthDate" />
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">GENDER</label>
                        <select class="w-full p-2 border rounded" v-model="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>



                    <div>
                        <label class="block mb-1 font-medium">SPECIALTY</label>
                        <select class="w-full p-2 border rounded" v-model="specialty">
                            <option value="cardiology">Cardiology</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="pediatrics">Pediatrics</option>
                        </select>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">PHONE NUMBER</label>
                        <input class="w-full p-2 border rounded" v-model="phone" placeholder="เบอร์โทร" />
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">SELECT DATE</label>
                        <input type="date" class="w-full p-2 border rounded" v-model="date" />
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">SELECT TIME</label>
                        <input type="time" class="w-full p-2 border rounded" v-model="time" />
                    </div>
                    <div class="md:col-span-2">
                        <label class="block mb-1 font-medium">MEDICAL CONCERN OR REQUEST</label>
                        <input type="text" class="w-full h-24 p-2 border rounded" v-model="medicalConcern" />
                    </div>
                </div>
                <div class="flex flex-col w-full items-center justify-center mt-6 space-y-4">
                    <NuxtLink to="/success"
                        class="inline-block mt-6 px-6 py-3 bg-green-800 text-white rounded hover:bg-green-700">
                        CONFIRM BOOKING
                    </NuxtLink>
                    <NuxtLink to="/" class="text-green-800 underline  inline-block">
                        < BACK </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import Navbar from './navbar.vue';

</script>