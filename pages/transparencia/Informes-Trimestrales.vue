<template>
  <div>
    <BannerV2
      title="Informes Trimestrales"
      subtitle="Reportes periódicos detallados de la gestión financiera municipal"
      :cards="[
        {
          icon: 'fas fa-chart-line',
          title: 'Informes Financieros',
          description: 'Accede a todos los informes trimestrales del ejercicio actual'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Informe de Avance de Gestión Financiera 2T 2025 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:file-document-multiple" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Informe de Avance de Gestión Financiera 2T 2025</h3>
          <p class="text-gray-600 mb-4">
            Reportes financieros y presupuestarios correspondientes al segundo trimestre del año 2025.
          </p>
          <div class="relative dropdown-container">
            <button 
              @click="toggleDropdown" 
              class="text-[#611232] hover:text-[#4D0E28] font-medium focus:outline-none"
            >
              Ver más →
            </button>
            
            <div v-if="dropdownOpen" class="absolute z-10 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg py-1 left-0">
              <a 
                v-for="(acta, index) in actasV3" 
                :key="index"
                :href="acta.url" 
                target="_blank"
                class="block px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer flex items-center"
              >
                <Icon name="mdi:file-pdf-box" class="w-5 h-5 text-[#611232] mr-2" />
                {{ acta.nombre }}
              </a>
            </div>
          </div>
        </div>

        <!-- Informe de Avance de Gestion Financiera 2T 2025 IMPLAN -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:city" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Informe de Avance de Gestión Financiera 2T 2025 IMPLAN</h3>
          <p class="text-gray-600 mb-4">
            Informe de Avance de Gestión Financiera del Instituto Municipal de Planeación.
          </p>
          <a href="/files/outside/implan.pdf" target="_blank" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver documento →
          </a>
        </div>
      </div>
      
      <!-- Informes Anteriores -->
      <h2 class="text-2xl font-semibold text-gray-900 mt-12 mb-6">Informes Anteriores</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(informe, index) in informes" :key="index" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:file-pdf-box" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ informe.nombre }}</h3>
          <p class="text-gray-600 mb-4">
            {{ informe.descripcion }}
          </p>
          <a :href="informe.url" target="_blank" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver documento →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BannerV2 from '~/components/BannerV2.vue'

// Estado para el dropdown
const dropdownOpen = ref(false)

// Función para abrir/cerrar el dropdown
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Cerrar dropdown cuando se hace clic fuera
if (typeof window !== 'undefined') {
  window.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-container') && dropdownOpen.value) {
      dropdownOpen.value = false
    }
  })
}

// Archivos de actasv3
const actasV3 = ref([
  {
    nombre: 'Oficio de Presentación 2T2025',
    url: '/files/actasv3/0. Oficio de Presentación 2T2025_acuse.pdf'
  },
  {
    nombre: 'I. Información Contable 2T2025',
    url: '/files/actasv3/I. Información Contable 2T2025_compressed_compressed.pdf'
  },
  {
    nombre: 'II. Información Presupuestaria 2T2025',
    url: '/files/actasv3/II. Información Presupuestaria 2T2025.pdf'
  },
  {
    nombre: 'III. Información Programática',
    url: '/files/actasv3/III. Información Programática.pdf'
  },
  {
    nombre: 'IV. Información Adicional 2T2025',
    url: '/files/actasv3/IV. Información Adicional 2T2025.pdf'
  },
  {
    nombre: 'V. LDF 2T2025',
    url: '/files/actasv3/V. LDF 2T2025.pdf'
  }
])

// Informes anteriores
const informes = ref([
  {
    nombre: 'Oficio de Entrega',
    descripcion: 'Documento oficial de entrega del informe trimestral.',
    url: '/files/Reportes Trimestrales/2025/0. Oficio de Entrega.pdf'
  },
  {
    nombre: 'Información Contable',
    descripcion: 'Estados e informes contables del periodo.',
    url: '/files/Reportes Trimestrales/2025/I. INFORMACIÓN CONTABLE.pdf'
  },
  {
    nombre: 'Información Presupuestal',
    descripcion: 'Estados e informes presupuestarios del periodo.',
    url: '/files/Reportes Trimestrales/2025/II. INFORMACIÓN PRESUPUESTAL.PDF'
  },
  {
    nombre: 'Información Programática',
    descripcion: 'Avances y resultados de los programas y proyectos.',
    url: '/files/Reportes Trimestrales/2025/III. Información Programática.pdf'
  },
  {
    nombre: 'Información LDF',
    descripcion: 'Información relativa a la Ley de Disciplina Financiera.',
    url: '/files/Reportes Trimestrales/2025/V. INFORMACIÓN LDF.PDF'
  }
])
</script>

<style scoped>
/* Add any necessary styles here */
</style>