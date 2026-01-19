<template>
  <div>
    <BannerV2
      title="Proceso Presupuestario 2026"
      subtitle="Documentos relacionados con el proceso presupuestario del año 2026"
      :cards="[
        {
          icon: 'fas fa-file-invoice-dollar',
          title: 'Documentos Presupuestarios',
          description: 'Accede a todos los documentos del proceso presupuestario 2026'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Documentos del Proceso Presupuestario 2026</h2>
        
        <div v-if="documentos.length === 0" class="text-center py-12 text-gray-500">
          <Icon name="mdi:file-document-outline" class="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p class="text-lg">Próximamente se publicarán los documentos.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(documento, index) in documentos" :key="index" 
               class="flex flex-col p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-3">
              <Icon name="mdi:file-pdf-box" class="w-6 h-6 text-[#611232] mr-2" />
              <h3 class="text-lg font-medium text-gray-900">{{ documento.nombre }}</h3>
            </div>
            <p class="text-gray-600 mb-4 flex-grow">{{ documento.descripcion }}</p>
            <a :href="documento.url" 
               target="_blank"
               class="inline-flex items-center text-[#611232] hover:text-[#4D0E28] font-medium">
              Ver más
              <Icon name="mdi:chevron-right" class="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

import BannerV2 from '~/components/BannerV2.vue'

const documentos = ref([
  {
    nombre: 'Anteproyecto del Presupuesto de Egresos 2026',
    descripcion: 'Documento preliminar del Presupuesto de Egresos para el ejercicio fiscal 2026.',
    url: '/files/presupuesto2026/1. MPN_Anteproyecto PE 2026-compressed.pdf'
  },
  {
    nombre: 'Proyecto del Presupuesto de Egresos 2026',
    descripcion: 'Propuesta formal del Presupuesto de Egresos para el ejercicio fiscal 2026.',
    url: '/files/presupuesto2026/3. MPN_Proyecto PE 2026-compressed.pdf'
  },
  {
    nombre: 'Acta de Cabildo 018-2025',
    descripcion: 'Acta de la sesión de cabildo donde se trataron asuntos relacionados con el presupuesto.',
    url: '/files/presupuesto2026/4. ACTA 018-2025-compressed.pdf'
  },
  {
    nombre: 'Presupuesto de Egresos 2026',
    descripcion: 'Documento oficial del Presupuesto de Egresos para el ejercicio fiscal 2026.',
    url: '/files/presupuesto2026/5. MPN_Presupuesto de Egresos 2026-compressed.pdf'
  },
  {
    nombre: 'Presupuesto de Egresos 2026 (Datos Abiertos)',
    descripcion: 'Versión del presupuesto de egresos en formato de datos abiertos.',
    url: '/files/presupuesto2026/6. MPN_PE 2026 Datos Abiertos-compressed.pdf'
  },
  {
    nombre: 'Acta de Cabildo 024-2025 (Punto 7)',
    descripcion: 'Punto 7 del Acta 024-2025 referente a la aprobación presupuestaria.',
    url: '/files/presupuesto2026/7. ACTA 024-2025 PUNTO 7-compressed.pdf'
  },
  {
    nombre: 'Información Adicional al Proyecto de Presupuesto',
    descripcion: 'Información complementaria que sustenta el proyecto de presupuesto.',
    url: '/files/presupuesto2026/8. INF ADICIONAL AL PROYECTO DE PE-compressed.pdf'
  },
  {
    nombre: 'Calendario de Egresos Mensual',
    descripcion: 'Calendario mensual de egresos proyectados para el 2026.',
    url: '/files/presupuesto2026/9. CALENDARIO DE EGRESOS MENSUAL-compressed.pdf'
  },
  {
    nombre: 'Presupuesto Ciudadano 2026',
    descripcion: 'Versión ciudadana y accesible del presupuesto 2026.',
    url: '/files/presupuesto2026/10. Presupuesto Ciudadano_MPN 2026-compressed.pdf'
  },
  {
    nombre: 'Evaluación del Desempeño Más Reciente',
    descripcion: 'Evaluación del desempeño de la gestión financiera municipal.',
    url: '/files/presupuesto2026/11. EV DESEMPEÑO MAS RECIENTE-compressed.pdf'
  }
])
</script>
