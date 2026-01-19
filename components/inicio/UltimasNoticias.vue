<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-4">
      <!-- Título centrado -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-black">Últimas Noticias</h1>
      </div>

      <!-- Si hay un error, lo mostramos -->
      <div v-if="error" class="text-center text-red-500 mb-4">
        Error al cargar noticias: {{ error.message }}
      </div>

      <!-- Si está cargando, mostramos un mensaje (opcional) -->
      <div v-else-if="pending" class="text-center text-gray-600 mb-4">
        Cargando las noticias más recientes...
      </div>

      <!-- Grid de noticias (sólo si ya hay data) -->
      <!-- Contenedor con max-w-[60%], como antes -->
      <div v-else class="max-w-[60%] mx-auto">
        <div class="grid md:grid-cols-2 gap-4">
          
          <!-- Noticia principal (izquierda) -->
          <article
            v-if="paginatedNews[0]"
            class="bg-[#611232] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <!-- p-3 para padding interno -->
            <NuxtLink :to="`/noticias/${paginatedNews[0].id}`" class="block group h-full">
              <div class="p-3 flex flex-col h-full">
                <!-- AHORA la altura del banner es h-48 SOLO en la izquierda -->
                <div class="mb-3">
                  <div class="w-full h-48 rounded-lg overflow-hidden">
                    <img
                      :src="paginatedNews[0].banner?.url"
                      :alt="paginatedNews[0].title"
                      class="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onerror="this.src='/img/placeholder.jpg'"
                    />
                  </div>
                </div>

                <!-- Contenido principal -->
                <div class="flex-grow">
                  <h2 class="text-lg font-semibold text-white mb-2">
                    {{ paginatedNews[0].title }}
                  </h2>
                  <p class="text-gray-200 mb-4 text-sm line-clamp-2">
                    {{ paginatedNews[0].summary }}
                  </p>
                </div>

                <!-- Leer más -->
                <div class="flex items-center text-white text-sm mt-auto">
                  <span class="mr-2">Leer más</span>
                  <Icon 
                    name="ri:arrow-right-line" 
                    class="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </NuxtLink>
          </article>
          
          <!-- Noticias secundarias (derecha) -->
          <!-- Mantiene el h-24 que ya tenías, sin cambios -->
          <div class="flex flex-col gap-4">
            <article
              v-for="news in paginatedNews.slice(1)"
              :key="news.id"
              class="bg-[#611232] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <NuxtLink :to="`/noticias/${news.id}`" class="block group h-full">
                <div class="p-3 flex flex-col h-full">
                  <div class="mb-3">
                    <div class="w-full h-24 rounded-lg overflow-hidden">
                      <img
                        :src="news.banner?.url"
                        :alt="news.title"
                        class="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        onerror="this.src='/img/placeholder.jpg'"
                      />
                    </div>
                  </div>

                  <div class="flex-grow">
                    <h2 class="text-base font-semibold text-white mb-2">
                      {{ news.title }}
                    </h2>
                    <p class="text-gray-200 mb-2 text-sm line-clamp-2">
                      {{ news.summary }}
                    </p>
                  </div>

                  <div class="flex items-center text-white text-sm mt-auto">
                    <span class="mr-2">Leer más</span>
                    <Icon 
                      name="ri:arrow-right-line" 
                      class="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </div>

      <!-- Botón Ver Más Noticias -->
      <div class="text-center mt-8">
        <NuxtLink 
          to="/noticias" 
          class="inline-flex items-center px-6 py-2 bg-[#611232] text-white font-medium rounded-lg hover:bg-[#4d0f28] transition-colors duration-300"
        >
          Ver Más Noticias
          <Icon 
            name="ri:arrow-right-line" 
            class="ml-2 w-4 h-4"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '#app'

interface NewsImage {
  url: string
  [key: string]: any
}

interface NewsDoc {
  id: string
  title: string
  summary: string
  content: string
  category: string
  createdAt: string
  banner?: NewsImage
}

interface NewsResponse {
  docs: NewsDoc[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

// Fetch de noticias
const { data: newsData, pending, error } = useFetch<NewsResponse>('/api/news', { lazy: true, server: false })

// Mapeamos la data
const mappedNews = computed(() => {
  return newsData.value?.docs || []
})

// Paginación
const newsPerPage = 3
const currentPage = ref(0)

const totalPages = computed(() => Math.ceil(mappedNews.value.length / newsPerPage))

const paginatedNews = computed(() => {
  const start = currentPage.value * newsPerPage
  const end = start + newsPerPage
  return mappedNews.value.slice(start, end)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
</style>
