<template>
  <div>
    <BannerV2
      title="Distribución de Participaciones Federales o Municipales"
      subtitle="Información sobre la distribución de recursos federales y municipales"
    />

    <div class="container mx-auto px-4 py-8">
      <!-- Documentos -->
      <div class="mt-12">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Documentos</h2>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <ul class="space-y-4">
            <li v-for="(doc, index) in documentos" :key="index" class="flex items-center">
              <div class="text-[#611232] mr-3">
                <Icon name="mdi:file-document" class="w-6 h-6" />
              </div>
              <span class="text-gray-900">{{ doc.nombre }}</span>
              <a :href="doc.url" target="_blank" rel="noopener noreferrer" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                Descargar →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'

const documentos = ref([
  {
    nombre: 'Publicación Participaciones 2024',
    url: '/files/news/PublicacionParticipaciones2024.pdf',
  }
])
</script>
