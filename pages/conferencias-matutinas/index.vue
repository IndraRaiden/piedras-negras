<template>
  <div>
    <BannerSection
      title="Conferencias Matutinas"
      subtitle="Mantente informado sobre las actividades y anuncios diarios del Gobierno Municipal"
      :cards="[
        {
          icon: 'fas fa-video',
          title: 'Transmisiones en Vivo',
          description: 'Sigue las conferencias en tiempo real'
        },
        {
          icon: 'fas fa-microphone',
          title: 'Temas Relevantes',
          description: 'Conoce los temas más importantes del día'
        },
        {
          icon: 'fas fa-calendar',
          title: 'Horarios',
          description: 'Lunes a Viernes • 8 am • Horario local'
        }
      ]"
    />

    <section class="py-8 sm:py-12 bg-gray-50">
      <div class="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#611232]">Conferencia Previa</h2>
          <div class="w-20 h-1 bg-[#611232] mx-auto mt-4"></div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-4 sm:p-8 mb-6 sm:mb-8">
          <div class="relative pb-[56.25%] h-0">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              :src="`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1`"
              title="Conferencia Matutina Livestream"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="text-center mb-8 sm:mb-12">
          <p class="text-base sm:text-xl text-gray-600 font-medium flex flex-wrap items-center justify-center gap-2 sm:gap-0">
            <Icon name="mingcute:time-line" class="w-5 h-5 sm:w-6 sm:h-6 sm:mr-2 text-[#611232]" />
            <span class="text-gray-700">Lunes a Viernes</span>
            <span class="hidden sm:inline mx-3 text-[#611232]">•</span>
            <span class="text-[#611232] font-semibold">8 am</span>
            <span class="hidden sm:inline mx-3 text-[#611232]">•</span>
            <span class="text-gray-500">Horario local</span>
          </p>
        </div>

        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#611232]">Conferencias Anteriores</h2>
          <div class="w-20 h-1 bg-[#611232] mx-auto mt-4"></div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-4 sm:p-8 mt-8">
          <div class="relative pb-[56.25%] h-0">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/videoseries?list=PLXAKjHw3s9dU5Thspp5RnAMtnGMg35wn9&autoplay=1&mute=1"
              title="Conferencias Matutinas Playlist"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BannerSection from '~/components/BannerSection.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentVideoId = ref('6Qo5F_Qy8zI')
let checkInterval: NodeJS.Timeout

const checkLiveStream = async () => {
  try {
    const response = await fetch('/api/youtube')
    const data = await response.json()
    if (data.videoId && data.videoId !== currentVideoId.value) {
      currentVideoId.value = data.videoId
      console.log('Updated to new live stream:', data.videoId)
    }
  } catch (error) {
    console.error('Error checking live stream:', error)
  }
}

onMounted(() => {
  checkLiveStream() // Initial check
  checkInterval = setInterval(checkLiveStream, 300000) // Check every 5 minutes (server caches for 5 min)
})

onBeforeUnmount(() => {
  if (checkInterval) {
    clearInterval(checkInterval)
  }
})

const conferences = ref([
  {
    id: 1,
    title: 'Conferencia Matutina - 2 de Enero 2025',
    description: 'Actualización sobre proyectos municipales y avances en obras públicas',
    thumbnail: '/img/conferencias/thumbnail1.jpg',
    date: '02/01/2025',
    duration: '45:30'
  },
  {
    id: 2,
    title: 'Conferencia Matutina - 1 de Enero 2025',
    description: 'Resumen de actividades y planes para el nuevo año',
    thumbnail: '/img/conferencias/thumbnail2.jpg',
    date: '01/01/2025',
    duration: '38:15'
  },
  // Agregar más conferencias según sea necesario
])

definePageMeta({
  title: 'Conferencias Matutinas'
})
</script>

<style scoped>
.conference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.conference-card {
  transition: transform 0.2s ease-in-out;
}

.conference-card:hover {
  transform: translateY(-5px);
}
</style>
