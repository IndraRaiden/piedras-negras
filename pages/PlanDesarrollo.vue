<template>
  <div>
    <!-- Banner Section using BannerV2 component -->
    <BannerV2
      title="Plan de Desarrollo Municipal"
      subtitle="Nuestra visión y objetivos para el futuro de Piedras Negras"
      :cards="[
        {
          icon: 'fas fa-city',
          title: 'Desarrollo Social',
          description: 'Políticas para el bienestar de todos los ciudadanos',
          path: '#desarrollo-social'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Desarrollo Económico',
          description: 'Estrategias para fortalecer la economía local',
          path: '#desarrollo-economico'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Seguridad',
          description: 'Iniciativas para la seguridad y convivencia pacífica',
          path: '#seguridad'
        }
      ]"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Secciones del Plan -->
      <section class="mb-16" id="desarrollo-social">
        <h2 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Ejes Estratégicos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Eje 1 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Desarrollo Social Incluyente</h3>
            <p class="text-gray-600">Políticas y programas para garantizar el bienestar de todos los ciudadanos, con énfasis en grupos vulnerables.</p>
          </div>

          <!-- Eje 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow" id="desarrollo-economico">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Desarrollo Económico Sostenible</h3>
            <p class="text-gray-600">Estrategias para fortalecer la economía local, generar empleo y atraer inversiones de manera sostenible.</p>
          </div>

          <!-- Eje 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow" id="seguridad">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Seguridad y Paz Social</h3>
            <p class="text-gray-600">Iniciativas para garantizar la seguridad pública y la convivencia pacífica en nuestro municipio.</p>
          </div>

          <!-- Eje 4 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Infraestructura y Desarrollo Urbano</h3>
            <p class="text-gray-600">Proyectos de mejora de la infraestructura urbana y servicios públicos para una ciudad moderna.</p>
          </div>

          <!-- Eje 5 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Medio Ambiente y Sustentabilidad</h3>
            <p class="text-gray-600">Acciones para proteger nuestros recursos naturales y promover prácticas sustentables.</p>
          </div>

          <!-- Eje 6 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Gobierno Transparente y Eficiente</h3>
            <p class="text-gray-600">Prácticas de buen gobierno, transparencia y mejora continua de los servicios municipales.</p>
          </div>
        </div>
      </section>

      <!-- Componente de Formulario de Propuestas -->
      <FormularioPropuestas class="mb-16" />
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import FormularioPropuestas from '~/components/FormularioPropuestas.vue'

definePageMeta({
  title: 'Plan de Desarrollo Municipal',
  layout: 'default'
})
</script>

<style scoped>
/* Add your styles here */
</style>
