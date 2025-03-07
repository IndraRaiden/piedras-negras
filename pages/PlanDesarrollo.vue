<template>
  <div>
    <!-- Banner Section using BannerV2 component -->
    <BannerV2
      title="Plan Municipal de Desarrollo"
      subtitle="Nuestra visión y objetivos para el futuro de Piedras Negras"
      :cards="[
        {
          icon: 'fas fa-balance-scale',
          title: 'Gobernanza con Justicia',
          description: 'Promoviendo la participación ciudadana y el acceso a la justicia',
          path: '#gobernanza'
        },
        {
          icon: 'fas fa-heart',
          title: 'Bienestar y Humanismo',
          description: 'Desarrollo centrado en el bienestar de las personas',
          path: '#bienestar'
        },
        {
          icon: 'fas fa-briefcase',
          title: 'Economía Moral y Trabajo',
          description: 'Impulsando una economía justa y oportunidades laborales',
          path: '#economia'
        }
      ]"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Componente de Formulario de Propuestas -->
      <FormularioPropuestas class="mb-16" />
      
      <!-- Secciones del Plan -->
      <section class="mb-16" id="gobernanza">
        <h2 class="text-2xl font-semibold text-gray-900 mb-8 text-center">7 Ejes Estratégicos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Eje 1 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Gobernanza con Justicia y Participación Ciudadana</h3>
            <p class="text-gray-600">Promoviendo la transparencia gubernamental y el involucramiento activo de la ciudadanía en la toma de decisiones.</p>
          </div>

          <!-- Eje 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow" id="bienestar">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Desarrollo con Bienestar y Humanismo</h3>
            <p class="text-gray-600">Políticas y programas centrados en mejorar la calidad de vida y el desarrollo humano de todos los ciudadanos.</p>
          </div>

          <!-- Eje 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow" id="economia">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Economía Moral y Trabajo</h3>
            <p class="text-gray-600">Impulsando un desarrollo económico justo, ético y con oportunidades laborales para todos los sectores.</p>
          </div>

          <!-- Eje 4 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">4</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Desarrollo Sustentable</h3>
            <p class="text-gray-600">Estrategias para garantizar un crecimiento urbano en armonía con el medio ambiente y los recursos naturales.</p>
          </div>

          <!-- Eje 5 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">5</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Igualdad Sustantiva y Derechos de las Mujeres</h3>
            <p class="text-gray-600">Acciones para promover la equidad de género y garantizar los derechos plenos de las mujeres en todos los ámbitos.</p>
          </div>

          <!-- Eje 6 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">6</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Ciudad Próspera y Conectada</h3>
            <p class="text-gray-600">Iniciativas para el desarrollo de infraestructura moderna y la conectividad urbana que impulse el progreso.</p>
          </div>
          
          <!-- Eje 7 -->
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
              <div class="rounded-full bg-[#611232] w-8 h-8 flex items-center justify-center text-white font-bold">7</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Derechos Humanos y Migración</h3>
            <p class="text-gray-600">Políticas de protección de los derechos humanos y gestión adecuada de los procesos migratorios en la región.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import FormularioPropuestas from '~/components/FormularioPropuestas.vue'

definePageMeta({
  title: 'Plan Municipal de Desarrollo',
  layout: 'default'
})
</script>

<style scoped>
/* Add your styles here */
</style>
