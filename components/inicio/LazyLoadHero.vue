<template>
  <section class="relative w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] bg-gradient-to-br from-[#611232] via-[#9D2449] to-[#9D2449]/70 overflow-hidden">
    <!-- Background pattern overlay -->
    <div class="absolute inset-0 opacity-5 bg-grid-pattern"></div>
    
    <!-- Loading state -->
    <div v-if="initialLoading" class="absolute inset-0 flex items-center justify-center">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-white p-4">
        <p class="text-lg">{{ error.statusCode === 404 ? 'No hay banner configurado' : error.message }}</p>
      </div>
    </div>
    
    <!-- First Banner (loads immediately) -->
    <div v-else-if="firstBanner" class="relative w-full h-full">
      <div class="absolute inset-0">
        <picture>
          <!-- Mobile devices -->
          <source
            media="(max-width: 639px)"
            :srcset="firstBanner.image.url + '?w=640'"
          >
          <!-- Tablets -->
          <source
            media="(min-width: 640px) and (max-width: 1023px)"
            :srcset="firstBanner.image.url + '?w=1024'"
          >
          <!-- Desktop -->
          <source
            media="(min-width: 1024px)"
            :srcset="firstBanner.image.url + '?w=1920'"
          >
          <!-- Fallback image -->
          <img 
            :src="firstBanner.image.url" 
            :alt="firstBanner.image.alt"
            class="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
      </div>
    </div>
    
    <!-- All Banners (lazy loaded) -->
    <div v-else-if="allBannersLoaded && banners.length > 0" class="relative w-full h-full">
      <TransitionGroup name="fade">
        <div 
          v-for="(banner, index) in banners" 
          :key="banner.id"
          v-show="currentIndex === index"
          class="absolute inset-0"
        >
          <picture>
            <!-- Mobile devices -->
            <source
              media="(max-width: 639px)"
              :srcset="banner.image.url + '?w=640'"
            >
            <!-- Tablets -->
            <source
              media="(min-width: 640px) and (max-width: 1023px)"
              :srcset="banner.image.url + '?w=1024'"
            >
            <!-- Desktop -->
            <source
              media="(min-width: 1024px)"
              :srcset="banner.image.url + '?w=1920'"
            >
            <!-- Fallback image -->
            <img 
              :src="banner.image.url" 
              :alt="banner.image.alt"
              class="w-full h-full object-cover object-center"
              :loading="index === 0 ? 'eager' : 'lazy'"
            />
          </picture>
        </div>
      </TransitionGroup>
      
      <!-- Navigation dots (only show if there's more than one banner) -->
      <div v-if="banners.length > 1" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        <button
          v-for="(_, index) in banners"
          :key="index"
          @click="currentIndex = index"
          class="w-1.5 h-1.5 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'"
          aria-label="Go to slide"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

// State for loading phases
const initialLoading = ref(true)
const allBannersLoaded = ref(false)
const firstBanner = ref(null)
const banners = ref([])
const currentIndex = ref(0)
let intervalId = null
let error = ref(null)

// First, load only the first banner with high priority
const loadFirstBanner = async () => {
  try {
    const { data, error: fetchError } = await useFetch('/api/banners/hero', {
      query: { limit: 1 }
    })
    
    if (fetchError.value) {
      error.value = fetchError.value
    } else if (data.value && data.value.length > 0) {
      firstBanner.value = data.value[0]
    }
  } catch (err) {
    console.error('Error loading first banner:', err)
    error.value = { message: 'Error al cargar el banner' }
  } finally {
    initialLoading.value = false
  }
}

// Then, load all banners after the page has loaded
const loadAllBanners = async () => {
  try {
    const { data, error: fetchError } = await useFetch('/api/banners/hero')
    
    if (fetchError.value) {
      error.value = fetchError.value
    } else if (data.value) {
      banners.value = data.value
      allBannersLoaded.value = true
      
      // Start rotation if we have multiple banners
      if (banners.value.length > 1) {
        startRotation()
      }
    }
  } catch (err) {
    console.error('Error loading all banners:', err)
  }
}

// Start rotation if we have multiple banners
const startRotation = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }

  if (banners.value.length > 1) {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % banners.value.length
    }, 7000)
  }
}

// Load the first banner immediately
loadFirstBanner()

// Load all banners after the component is mounted
onMounted(() => {
  // Use requestIdleCallback or setTimeout to defer loading until after the initial render
  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      loadAllBanners()
    })
  } else {
    setTimeout(() => {
      loadAllBanners()
    }, 200) // Small delay to ensure first banner is displayed first
  }
})

// Clean up interval when component is unmounted
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
