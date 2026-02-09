<template>
    <div class="bg-[#FFFBED] min-h-screen">
        <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />

        <div class="flex  items-center justify-center mt-10">

            <h class="text-xl font-bold  text-[#473D13] md:text-3xl  text-center">
                APPOINTMENT BOOKING FORM
            </h>

        </div>

        <div class=" flex flex-col items-center justify-center p-10 text-gray-500">


            <div class="w-full max-w-3xl  p-10 text-center">



                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                    <div>
                        <label class="block mb-1 font-medium">NAME</label>
                        <input class="w-full p-2 border rounded" v-model="name" />
                        <p v-if="errors.name" class="text-red-600 text-sm mt-1">
                            {{ errors.name }}
                        </p>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">SURNAME</label>
                        <input class="w-full p-2 border rounded" v-model="surname" />
                        <p v-if="errors.surname" class="text-red-600 text-sm mt-1">
                            {{ errors.name }}
                        </p>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">DATE OF BIRTH</label>
                        <input type="date" class="w-full p-2 border rounded" v-model="birthDate" />
                        <p v-if="errors.birthDate" class="text-red-600 text-sm mt-1">
                            {{ errors.birthDate }}
                        </p>
                    </div>
                    <div>
                        <label class="block mb-1 font-medium">GENDER</label>
                        <select class="w-full p-2 border rounded" v-model="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <p v-if="errors.gender" class="text-red-600 text-sm mt-1">
                            {{ errors.gender }}
                        </p>
                    </div>



                    <div>
                        <label class="block mb-1 font-medium">SPECIALTY</label>
                        <select class="w-full p-2 border rounded" v-model="specialty">
                            <option value="cardiology">Cardiology</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="pediatrics">Pediatrics</option>
                        </select>
                        <p v-if="errors.specialty" class="text-red-600 text-sm mt-1">
                            {{ errors.specialty }} </p>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">PHONE NUMBER</label>
                        <input class="w-full p-2 border rounded" v-model="phone" />
                        <p v-if="errors.phone" class="text-red-600 text-sm mt-1">
                            {{ errors.phone }} </p>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">SELECT DATE</label>
                        <input type="date" class="w-full p-2 border rounded" v-model="date" />
                        <p v-if="errors.date" class="text-red-600 text-sm mt-1">
                            {{ errors.date }} </p>
                    </div>

                    <div>
                        <label class="block mb-1 font-medium">SELECT TIME</label>
                        <input type="time" class="w-full p-2 border rounded" v-model="time" />
                        <p v-if="errors.time" class="text-red-600 text-sm mt-1">
                            {{ errors.time }} </p>
                    </div>
                    <div class="md:col-span-2">
                        <label class="block mb-1 font-medium">MEDICAL CONCERN OR REQUEST</label>
                        <input type="text" class="w-full h-24 p-2 border rounded" v-model="medicalConcern" />

                    </div>
                </div>
                <div class="flex flex-col w-full items-center justify-center mt-6 space-y-4">
                    <button @click="submitBooking"
                        class="inline-block mt-6 px-6 py-3 bg-green-800 text-white rounded hover:bg-green-700">
                        CONFIRM BOOKING
                    </button>
                    <NuxtLink to="/" class="text-green-800 underline  inline-block hover:text-green-600">
                        < BACK </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './navbar.vue'

const router = useRouter()

// form state
const name = ref('')
const surname = ref('')
const birthDate = ref('')
const gender = ref('')
const specialty = ref('')
const phone = ref('')
const date = ref('')
const time = ref('')
const medicalConcern = ref('')
const errors = ref<Record<string, string>>({})

// form validation
const validateForm = () => {
    errors.value = {}

    if (!name.value) errors.value.name = 'Name is required'
    if (!surname.value) errors.value.surname = 'Surname is required'
    if (!birthDate.value) errors.value.birthDate = 'Date of birth is required'
    if (!gender.value) errors.value.gender = 'Gender is required'
    if (!specialty.value) errors.value.specialty = 'Specialty is required'
    if (!phone.value) {
        errors.value.phone = 'Phone number is required'
    } else if (!/^[0-9]{9,10}$/.test(phone.value)) {
        errors.value.phone = 'Invalid phone number'
    }
    if (!date.value) errors.value.date = 'Appointment date is required'
    if (!time.value) errors.value.time = 'Appointment time is required'

    return Object.keys(errors.value).length === 0
}




// submit function
const submitBooking = () => {
    if (!validateForm()) return

    const booking = {
        id: Date.now(),
        name: name.value,
        surname: surname.value,
        birthDate: birthDate.value,
        gender: gender.value,
        specialty: specialty.value,
        phone: phone.value,
        date: date.value,
        time: time.value,
        medicalConcern: medicalConcern.value
    }

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    bookings.push(booking)
    localStorage.setItem('bookings', JSON.stringify(bookings))

    router.push(`/success?bookingId=${booking.id}`)
}

</script>
