<template>
  <div>
    <BannerV2
      title="Gestión Financiera"
      subtitle="Información detallada sobre el manejo y administración de los recursos públicos municipales"
      :cards="[
        {
          icon: 'fas fa-file-invoice-dollar',
          title: 'Presupuesto',
          description: 'Información sobre el presupuesto municipal y su ejercicio'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Estados Financieros',
          description: 'Reportes detallados del estado financiero municipal'
        },
        {
          icon: 'fas fa-clipboard-list',
          title: 'Informes Trimestrales',
          description: 'Reportes periódicos de la gestión financiera'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Sección de Presupuesto 2026 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:cash-plus" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Proceso Presupuestario 2026</h3>
          <p class="text-gray-600 mb-4">Información actualizada del presupuesto municipal 2026.</p>
          <NuxtLink to="/transparencia/proceso-presupuestario-2026" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver más →
          </NuxtLink>
        </div>

        <!-- Sección de Presupuesto -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:cash" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Proceso Presupuestario 2025</h3>
          <p class="text-gray-600 mb-4">Información sobre el presupuesto municipal y su ejercicio.</p>
          <NuxtLink to="presupuesto-2025" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver más →
          </NuxtLink>
        </div>

        <!-- Sección de Estados Financieros -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:chart-box" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Estados Financieros</h3>
          <p class="text-gray-600 mb-4">Consulta los estados financieros del municipio.</p>
          <div class="text-gray-400 font-medium cursor-not-allowed">
            Ver más →
          </div>
        </div>

        <!-- Sección de Informes -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:file-document-multiple" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Informes Trimestrales</h3>
          <p class="text-gray-600 mb-4">Accede a los informes trimestrales de la gestión financiera.</p>
          <NuxtLink to="/transparencia/informes-trimestrales" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver más →
          </NuxtLink>
        </div>
      </div>

      <!-- Sección de Documentos Importantes -->
      <div class="mt-12">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Documentos Importantes</h2>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <ul class="space-y-4">
            <li v-for="(doc, index) in documentos" :key="index" class="flex items-center">
              <div class="text-[#611232] mr-3">
                <Icon name="mdi:file-document" class="w-6 h-6" />
              </div>
              <span class="text-gray-900">{{ doc.nombre }}</span>
              <div class="ml-auto text-gray-400 font-medium cursor-not-allowed">
                Descargar →
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
    nombre: 'Anteproyecto de Ley de Ingresos 2025',
    url: '/files/Presupuesto 2025/ANTEPROYECTO DE LEY DE INGRESOS.pdf'
  },
  {
    nombre: 'Proyecto de Presupuesto de Ley de Ingresos 2025',
    url: '/files/Presupuesto 2025/PROYECTO DE PRESUPUESTO DE LEY DE INGRESOS.pdf'
  },
  {
    nombre: 'Acta de Aprobación Proyectos 2025',
    url: '/files/Presupuesto 2025/ACTA DE APROBACION PROYECTOS DE L.I. Y P.E..pdf'
  },
  {
    nombre: 'Iniciativa de Ley de Ingresos 2025',
    url: '/files/Presupuesto 2025/INICIATIVA DE LEY DE INGRESOS.pdf'
  },
  {
    nombre: 'Dictamen de la Comisión de Hacienda 2025',
    url: '/files/Presupuesto 2025/DICTAMEN DE LA COMISION DE HACIENDA, PATRIMONIO Y CUENTA PUB.pdf'
  },
  {
    nombre: 'Información Adicional Iniciativa Ley de Ingresos 2025',
    url: '/files/Presupuesto 2025/INFORMACION ADICIONAL INICIATIVA LEY DE INGRESOS.pdf'
  },
  {
    nombre: 'Calendario Ingresos Base Mensual 2025',
    url: '/files/Presupuesto 2025/CALENDARIO INGRESOS BASE MENSUAL.pdf'
  }
])
</script>

<style scoped>
  /* existing styles */
</style>
