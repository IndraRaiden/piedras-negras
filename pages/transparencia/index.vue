<template>
  <div>
    <BannerSection
      title="Transparencia"
      subtitle="Comprometidos con la rendición de cuentas y el acceso a la información pública"
      :cards="[
        {
          icon: 'fas fa-file-alt',
          title: 'Información Pública',
          description: 'Accede a documentos e informes oficiales'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Indicadores de Gestión',
          description: 'Resultados y métricas de desempeño'
        },
        {
          icon: 'fas fa-coins',
          title: 'Recursos Públicos',
          description: 'Información sobre el ejercicio del gasto'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Plataforma de Transparencia -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:web" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Plataforma de Transparencia</h3>
          <p class="text-gray-600 mb-4">
            Accede a la plataforma oficial de transparencia del municipio.
          </p>
          <a href="https://www.plataformadetransparencia.org.mx/Inicio" target="_blank" rel="noopener noreferrer" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Acceder a la plataforma →
          </a>
        </div>

        <!-- Informes Trimestrales -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:chart-line" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Informes Trimestrales</h3>
          <p class="text-gray-600 mb-4">
            Reportes periódicos detallados de la gestión financiera municipal.
          </p>
          <NuxtLink to="/transparencia/Informes-Trimestrales" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver informes →
          </NuxtLink>
        </div>

        <!-- Gestion Financiera -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:finance" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Gestión Financiera</h3>
          <p class="text-gray-600 mb-4">
            Información sobre la gestión financiera del municipio.
          </p>
          <NuxtLink to="/transparencia/gestion-financiera" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver información →
          </NuxtLink>
        </div>

        <!-- Gaceta Municipal -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:newspaper-variant" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Gaceta Municipal</h3>
          <p class="text-gray-600 mb-4">
            Consulta las publicaciones oficiales del municipio.
          </p>
          <div class="text-gray-400 font-medium cursor-not-allowed">
            Ver gaceta →
          </div>
        </div>

        <!-- Programa Anual de Adquisiciones -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:cart" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Programa Anual de Adquisiciones</h3>
          <p class="text-gray-600 mb-4">
            Plan anual de compras y adquisiciones municipales.
          </p>
          <div class="text-gray-400 font-medium cursor-not-allowed">
            Ver programa →
          </div>
        </div>

        <!-- Distribucion de Participaciones -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:chart-pie" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Distribución de Participaciones Federales o Municipales</h3>
          <p class="text-gray-600 mb-4">
            Información sobre la distribución de recursos federales y municipales.
          </p>
          <div class="text-gray-400 font-medium cursor-not-allowed">
            Ver distribución →
          </div>
        </div>
      </div>
    </div>
  </div>
</template>