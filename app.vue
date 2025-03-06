<!-- app.vue -->
<template>
  <div class="min-h-screen overflow-x-hidden">
    <EnConstruccion v-if="mostrarEnConstruccion" />
    <div v-else class="flex flex-col min-h-screen">
      <Navbar />
      <NuxtRouteAnnouncer />
      <main class="flex-grow">
        <NuxtLoadingIndicator color="#5e1210" height="3px" />
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Footer from '~/components/Footer.vue'

const route = useRoute()
const mostrarEnConstruccion = useConstruction()
const showFooter = ref(true)

// Add meta viewport tag
useHead({
  title: 'Piedras Negras',
  meta: [
    { 
      name: 'viewport', 
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' 
    }
  ],
  script: [
    {
      src: 'https://umami.2025.piedrasnegras.gob.mx/script.js',
      'data-website-id': '22513e67-94b8-4f11-ad99-0a11bc6a3e48',
      defer: true
    }
  ]
})

// Show footer after a delay
onMounted(() => {
  // Immediately show footer instead of delaying it
  showFooter.value = true
})
</script>

<style>
html, body {
  overflow-x: hidden;
  position: relative;
  width: 100%;
  -webkit-text-size-adjust: 100%;
  touch-action: manipulation;
}

/* Prevent pull-to-refresh on mobile */
body {
  overscroll-behavior-y: none;
}

/* Improve tap target sizes on mobile */
button, a {
  min-height: 44px;
  min-width: 44px;
}

/* Improve form elements on mobile */
input, select, textarea {
  font-size: 16px !important; /* Prevents zoom on focus in iOS */
}
</style>