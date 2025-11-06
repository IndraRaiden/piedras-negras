<template>
  <div class="relative h-screen w-full">
    <img src="/Fondo informe.png" alt="Fondo Informe" class="w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="/Logo Primer informe de resultados-02.png" alt="Logo Informe" class="w-full h-auto transform scale-125 sm:scale-150" />
    </div>
  </div>
  <div>
    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Invitation Image -->
        <div class="mb-12">
          <img 
            src="/primer-informe.jpg" 
            alt="Primer Informe de Resultados - Jacobo Rodríguez"
            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Registration Form -->
        <div class="mt-12">
          <PrimerInformeForm />
        </div>

        <!-- Google Maps Location -->
        <div class="mt-12">
          <h4 class="text-2xl font-bold text-[#7d2d4a] mb-4 text-center">Ubicación del Evento</h4>
          <div class="rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.313958917142!2d-100.56908993227714!3d28.704288957596294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865f8bc6233b42d9%3A0x837c6f60ad4699a1!2sTeatro%20Jos%C3%A9%20Manuel%20Maldonado!5e1!3m2!1ses-419!2smx!4v1762372612680!5m2!1ses-419!2smx" class="w-full h-96" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="text-center mt-4">
            <p class="text-xl font-bold text-gray-800">TEATRO DE LA CIUDAD "JOSÉ MANUEL MALDONADO"</p>
            <p class="text-lg text-[#7d2d4a] mt-2">
              República, 26069 Piedras Negras, Coahuila de Zaragoza, Mexico
            </p>
          </div>
        </div>

        <!-- Dress Code -->
        <div class="mt-12">
          <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
            <h4 class="text-2xl font-bold text-[#7d2d4a] mb-4">Código de Vestimenta</h4>
            <img src="/images/tuxedo-svgrepo-com.svg" alt="Tuxedo Icon" class="mx-auto mb-4 w-16 h-16" />
            <p class="text-xl font-medium text-gray-800">Formal</p>
          </div>
        </div>

        <!-- Countdown Timer -->
        <div class="mt-12 text-center">
          <h4 class="text-2xl font-bold text-[#7d2d4a] mb-4">Tiempo restante para el evento</h4>
          <div v-if="timeRemaining.total > 0" class="flex justify-center items-start space-x-2 sm:space-x-4 text-lg">
            <div class="p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-md min-w-[70px] sm:min-w-[80px]">
              <span class="font-bold text-3xl sm:text-4xl text-[#7d2d4a]">{{ timeRemaining.weeks }}</span>
              <span class="block text-xs sm:text-sm text-gray-800">Semanas</span>
            </div>
            <div class="p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-md min-w-[70px] sm:min-w-[80px]">
              <span class="font-bold text-3xl sm:text-4xl text-[#7d2d4a]">{{ timeRemaining.days }}</span>
              <span class="block text-xs sm:text-sm text-gray-800">Días</span>
            </div>
            <div class="p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-md min-w-[70px] sm:min-w-[80px]">
              <span class="font-bold text-3xl sm:text-4xl text-[#7d2d4a]">{{ timeRemaining.hours }}</span>
              <span class="block text-xs sm:text-sm text-gray-800">Horas</span>
            </div>
            <div class="p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-md min-w-[70px] sm:min-w-[80px]">
              <span class="font-bold text-3xl sm:text-4xl text-[#7d2d4a]">{{ timeRemaining.minutes }}</span>
              <span class="block text-xs sm:text-sm text-gray-800">Minutos</span>
            </div>
            <div class="p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-lg shadow-md min-w-[70px] sm:min-w-[80px]">
              <span class="font-bold text-3xl sm:text-4xl text-[#7d2d4a]">{{ timeRemaining.seconds }}</span>
              <span class="block text-xs sm:text-sm text-gray-800">Segundos</span>
            </div>
          </div>
          <div v-else class="text-xl font-medium text-gray-700 mt-4">
            ¡El evento ha comenzado!
          </div>
        </div>

        <!-- WhatsApp Button -->
        <div class="mt-10 text-center">
          <a 
            href="https://wa.me/528781453465"
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg"
          >
            <i class="fab fa-whatsapp text-2xl mr-3"></i>
            <span>Contactar por WhatsApp</span>
          </a>
          <p class="mt-4 text-gray-700 text-lg">
            Para dudas, puede contactarnos a este número.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import PrimerInformeForm from '~/components/primer-informe-form.vue'

const timeRemaining = reactive({
  total: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

let timer

const calculateTimeRemaining = () => {
  const targetDate = new Date('2025-12-11T18:00:00')
  const now = new Date()
  const difference = targetDate - now

  timeRemaining.total = difference

  if (difference > 0) {
    const totalSeconds = Math.floor(difference / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)

    timeRemaining.weeks = Math.floor(totalDays / 7)
    timeRemaining.days = totalDays % 7
    timeRemaining.hours = totalHours % 24
    timeRemaining.minutes = totalMinutes % 60
    timeRemaining.seconds = totalSeconds % 60
  } else {
    timeRemaining.weeks = 0
    timeRemaining.days = 0
    timeRemaining.hours = 0
    timeRemaining.minutes = 0
    timeRemaining.seconds = 0
    clearInterval(timer)
  }
}

onMounted(() => {
  calculateTimeRemaining()
  timer = setInterval(calculateTimeRemaining, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
</style>

