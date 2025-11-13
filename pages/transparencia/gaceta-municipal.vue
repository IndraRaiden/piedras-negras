<template>
  <div>
    <BannerV2
      title="Gaceta Municipal"
      subtitle="Medio oficial de difusión del Gobierno Municipal de Piedras Negras"
    />

    <div class="container mx-auto px-4 py-8">
      
      <!-- Sección de Últimas Publicaciones -->
      <div class="mt-12">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Últimas Publicaciones</h2>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <ul class="space-y-4">
            <li v-for="(doc, index) in documentos" :key="index" class="flex items-center">
              <div class="text-[#611232] mr-3">
                <Icon name="mdi:file-document" class="w-6 h-6" />
              </div>
              <span class="text-gray-900">{{ doc.nombre }}</span>
              <NuxtLink v-if="!doc.external" :to="doc.url" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                Ver documento →
              </NuxtLink>
              <a v-else :href="doc.url" target="_blank" rel="noopener noreferrer" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                Ver documento →
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
    nombre: 'Gaceta Municipal 2025',
    url: '/files/news/GacetaMunicipal2025.pdf',
    external: true
  }
])
</script>

<style scoped>
/* Estilos adicionales específicos del componente si son necesarios */
</style>
