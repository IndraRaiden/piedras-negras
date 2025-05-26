<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Hidden content - will be redirected to download -->
    <div class="text-center p-8">
      <h1 class="text-2xl font-bold mb-4">Plan Municipal de Desarrollo</h1>
      <p class="mb-4">Descargando el Plan Municipal de Desarrollo...</p>
      <p>Si la descarga no comienza automáticamente, <a :href="pdfPath" download class="text-blue-600 hover:underline">haga clic aquí</a>.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const pdfPath = ref('/files/plandesarrollo/Plan Municipal de Desarrollo Piedras Negras 2025-2027.pdf')

definePageMeta({
  title: 'Plan Municipal de Desarrollo',
  layout: 'default'
})

onMounted(() => {
  // Create a temporary link element
  const link = document.createElement('a')
  link.href = pdfPath.value
  link.setAttribute('download', 'Plan Municipal de Desarrollo Piedras Negras 2025-2027.pdf')
  
  // Append to the document body
  document.body.appendChild(link)
  
  // Trigger the download
  link.click()
  
  // Clean up
  document.body.removeChild(link)
})
</script>

<style scoped>
/* Add your styles here */
</style>
