<template>
    <div class="bg-[#FFFBED] min-h-screen">
        <Navbar class="fixed top-0 left-0 right-0 z-50 relative" />
        <div class="flex  items-center justify-center mt-5">
            <h class="text-xl font-medium  text-[#473D13] md:text-3xl  text-center">
                APPOINTMENT
            </h>
        </div>

        <Stepper :currentStep="currentStep" class="hidden md:block" />

        <div class=" flex flex-col items-center justify-center p-10 text-gray-500">
            <div class="w-full max-w-3xl  p-7 text-center bg-white rounded-xl shadow-md hidden md:block">
                <div v-if="currentStep === 1">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">

                        <div class="relative w-full mb-5 group">
                            <input type="text" v-model="name" id="floating_name" placeholder=" " class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer
           border-gray-300
           focus:border-brand" />

                            <label for="floating_name" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           peer-placeholder-shown:scale-100
           peer-placeholder-shown:translate-y-2
           peer-focus:scale-75
           peer-focus:-translate-y-4
           peer-focus:text-brand">
                                NAME
                            </label>

                            <p v-if="errors.name" class="text-red-600 text-sm mt-1">
                                {{ errors.name }}
                            </p>
                        </div>


                        <div class="relative w-full mb-5 group">
                            <input type="text" v-model="surname" id="floating_surname" placeholder=" " class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer
           border-gray-300
           focus:border-brand" />

                            <label for="floating_surname" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           peer-placeholder-shown:scale-100
           peer-placeholder-shown:translate-y-2
           peer-focus:scale-75
           peer-focus:-translate-y-4
           peer-focus:text-brand">
                                SURNAME
                            </label>

                            <p v-if="errors.surname" class="text-red-600 text-sm mt-1">
                                {{ errors.surname }}
                            </p>
                        </div>


                        <div class="relative w-full mb-5 group">
                            <input type="date" v-model="birthDate" id="floating_birth_date" class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer
           border-gray-300
           focus:border-brand" />

                            <label for="floating_birth_date" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           pointer-events-none
           peer-focus:text-brand">
                                DATE OF BIRTH
                            </label>

                            <p v-if="errors.birthDate" class="text-red-600 text-sm mt-1">
                                {{ errors.birthDate }}
                            </p>
                        </div>

                        <div class="relative w-full mb-5 group">
                            <select v-model="gender" id="floating_gender" class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer
           border-gray-300
           focus:border-brand">
                                <option value="" disabled hidden></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <label for="floating_gender" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           pointer-events-none
           peer-focus:text-brand">
                                GENDER
                            </label>

                            <p v-if="errors.gender" class="text-red-600 text-sm mt-1">
                                {{ errors.gender }}
                            </p>
                        </div>

                        <div class="relative w-full mb-5 group">
                            <select v-model="specialty" id="floating_specialty" class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer
           border-gray-300
           focus:border-brand">
                                <option value="" disabled hidden></option>
                                <option value="cardiology">Cardiology</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="pediatrics">Pediatrics</option>
                            </select>

                            <label for="floating_specialty" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           pointer-events-none
           peer-focus:text-brand">
                                SPECIALTY
                            </label>

                            <p v-if="errors.specialty" class="text-red-600 text-sm mt-1">
                                {{ errors.specialty }}
                            </p>
                        </div>


                        <div class="relative w-full mb-5 group">
                            <input type="text" v-model="phone" id="floating_phone" placeholder=" " class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer border-gray-300 focus:border-brand" />

                            <label for="floating_phone" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           peer-placeholder-shown:scale-100
           peer-placeholder-shown:translate-y-2
           peer-focus:scale-75
           peer-focus:-translate-y-4
           peer-focus:text-brand">
                                PHONE NUMBER
                            </label>

                            <p v-if="errors.phone" class="text-red-600 text-sm mt-1">
                                {{ errors.phone }}
                            </p>
                        </div>


                        <div class="relative w-full mb-5 group">
                            <input type="date" v-model="date" id="floating_date" class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-full
           appearance-none focus:outline-none focus:ring-0
           peer border-gray-300 focus:border-brand" />

                            <label for="floating_date" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1 pointer-events-none
           peer-focus:text-brand">
                                SELECT DATE
                            </label>

                            <p v-if="errors.date" class="text-red-600 text-sm mt-1">
                                {{ errors.date }}
                            </p>
                        </div>


                        <div class="relative w-full mb-5 group">
                            <label for="floating_time" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           pointer-events-none
           peer-focus:text-brand">SELECT TIME</label>
                            <select v-model="time" id="floating_time" class="block w-full px-4 py-3 text-sm bg-transparent
                           border rounded-full
                           appearance-none focus:outline-none focus:ring-0
                           peer border-gray-300 focus:border-brand">
                                >
                                <option value="" disabled>Select time</option>

  <option
    v-for="t in availableSlots"
    :key="t"
    :value="t"
  >
    {{ t }}
  </option>
                            </select>

                            <p v-if="errors.time" class="text-red-600 text-sm mt-1">
                                {{ errors.time }} </p>
                        </div>

                        <div class="md:col-span-2 relative w-full mb-5 group">
                            <textarea v-model="medicalConcern" id="floating_request" placeholder=" " rows="4" class="block w-full px-4 py-3 text-sm bg-transparent
           border rounded-xl resize-none
           appearance-none focus:outline-none focus:ring-0
           peer
           border-gray-300
           focus:border-brand"></textarea>

                            <label for="floating_request" class="absolute text-sm text-gray-500 duration-300 transform
           -translate-y-4 scale-75 top-2 left-4 z-10
           origin-[0] bg-white px-1
           peer-placeholder-shown:scale-100
           peer-placeholder-shown:translate-y-2
           peer-focus:scale-75
           peer-focus:-translate-y-4
           peer-focus:text-brand">
                                MEDICAL CONCERN OR REQUEST
                            </label>
                        </div>
                    </div>

              <div class="mt-8 space-y-3">

                        <button @click="goNext" class="w-full py-3 text-sm font-medium
               bg-green-800 text-white
               rounded-full
               hover:bg-green-700 transition">
                            NEXT
                        </button>

                        <NuxtLink to="/" class="block text-center text-green-800 text-sm underline">
                            < BACK
                        </NuxtLink>

                    </div>

                </div>


                <div v-if="currentStep === 2" class="text-left space-y-3">

                    <h2 class="text-xl font-semibold text-center mb-4">
                        Review Your Appointment
                    </h2>

                     <div class="bg-gray-50 rounded-xl p-4 text-md space-y-2">

                        <div class="flex justify-between">
                            <span class="text-gray-500">Name</span>
                            <span>{{ name }} {{ surname }}</span>
                        </div>

                        <div class="flex justify-between">
                            <span class="text-gray-500">Birthdate</span>
                            <span>{{ birthDate }}</span>
                        </div>

                          <div class="flex justify-between">
                            <span class="text-gray-500">Gender</span>
                            <span>{{ gender }}</span>
                        </div>

                          <div class="flex justify-between">
                            <span class="text-gray-500">Specialty</span>
                            <span>{{ specialty }}</span>
                        </div>

                          <div class="flex justify-between">
                            <span class="text-gray-500">Phone</span>
                            <span>{{ phone }}</span>
                        </div>

                        <div class="flex justify-between">
                            <span class="text-gray-500">Date</span>
                            <span>{{ date }}</span>
                        </div>

                        <div class="flex justify-between">
                            <span class="text-gray-500">Time</span>
                            <span>{{ time }}</span>
                        </div>

                          <div class="flex justify-between">
                            <span class="text-gray-500">Medical Concern</span>
                            <span>{{ medicalConcern }}</span>
                        </div>

                    </div>

                     <div class="space-y-3 pt-2">

                        <button @click="submitBooking" class="w-full py-3 text-sm font-medium
               bg-green-800 text-white
               rounded-full hover:bg-green-700 transition">
                            CONFIRM APPOINTMENT
                        </button>

                        <button @click="currentStep = 1" class="w-full text-sm text-green-800 underline">
                           < EDIT 
                        </button>

                    </div>
                </div>




            </div>

            <BookingSm />




        </div>
    </div>



</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './navbar.vue'
import Stepper from './Stepper.vue'

const currentStep = ref(1)


const router = useRouter()

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



const submitBooking = async () => {

    const bookingPayload = {
        name: name.value,
        surname: surname.value,
        birth_date: birthDate.value,
        gender: gender.value,
        specialty: specialty.value,
        phone: phone.value,
        appointment_date: date.value,
        appointment_time: time.value,
        medical_concern: medicalConcern.value
    }

    try {
        // PostgreSQL 
        const result = await $fetch('/api/appointments', {
            method: 'POST',
            body: bookingPayload
        })

        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        bookings.push(result)
        localStorage.setItem('bookings', JSON.stringify(bookings))

        // router.push(`/success?bookingId=${result.id}`)
        router.push(`/mybooking?bookingNo=${result.booking_no}`)
    } catch (err) {
        console.error(err)
        alert('Booking failed. Please try again.')
    }
}


const validateStep1 = () => {
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

    return Object.keys(errors.value).length === 0
}

const goNext = () => {
    if (!validateStep1()) return
    currentStep.value = 2
}


const availableSlots = ref<string[]>([])

const timeSlots = [
  '09:00','09:30','10:00','10:30',
  '11:00','11:30','12:00','12:30',
  '13:00','13:30','14:00','14:30',
  '15:00','15:30','16:00','16:30','17:00'
]

watch(date, async (newDate) => {
  if (!newDate) return

  const bookedTimes = await $fetch('/api/available', {
    query: { date: newDate }
  })

  availableSlots.value = timeSlots.filter(
  t => !bookedTimes.map(b => b.slice(0,5)).includes(t)
)

    console.log("Booked from DB:", bookedTimes)
})



</script>
