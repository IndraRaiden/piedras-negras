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
            <li v-for="(doc, index) in documentos" :key="index">
              <div class="flex items-center">
                <div class="text-[#611232] mr-3">
                  <Icon name="mdi:file-document" class="w-6 h-6" />
                </div>
                <span class="text-gray-900">{{ doc.nombre }}</span>
                <button
                  v-if="doc.inline"
                  @click="toggleViewer(index)"
                  class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium"
                >
                  {{ openedViewer === index ? 'Cerrar documento ×' : 'Ver documento →' }}
                </button>
                <NuxtLink v-else-if="!doc.external" :to="doc.url" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                  Ver documento →
                </NuxtLink>
                <a v-else :href="doc.url" target="_blank" rel="noopener noreferrer" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                  Ver documento →
                </a>
              </div>
              <!-- El iframe solo se monta al abrir, para no descargar el PDF al cargar la página -->
              <div v-if="doc.inline && openedViewer === index" class="mt-4">
                <iframe
                  :src="doc.url"
                  class="w-full rounded-lg border border-gray-200"
                  style="height: 80vh;"
                  :title="doc.nombre"
                ></iframe>
                <div class="mt-2 text-right">
                  <a :href="doc.url" target="_blank" rel="noopener noreferrer" class="text-sm text-[#611232] hover:text-[#4D0E28] font-medium">
                    Abrir en una pestaña nueva ↗
                  </a>
                </div>
              </div>
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
    nombre: 'Gaceta Edición 2025',
    url: '/files/newgazeta/gaceta-edicion-2025.pdf',
    inline: true
  },
  {
    nombre: 'Gaceta Municipal 2025',
    url: '/files/news/GacetaMunicipal2025.pdf',
    external: true
  },
  {
    nombre: 'CECI ACOROS',
    url: '/files/news/CECI ACOROS.pdf',
    external: true
  }
])

const openedViewer = ref(null)

const toggleViewer = (index) => {
  openedViewer.value = openedViewer.value === index ? null : index
}
</script>

<style scoped>
/* Estilos adicionales específicos del componente si son necesarios */
</style>
