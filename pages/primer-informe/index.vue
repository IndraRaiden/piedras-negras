<template>
  <div>
    <!-- Banner Section -->
    <BannerSection
      title="Primer Informe de Resultados"
      subtitle="Jacobo Rodríguez - Administración 2025-2027"
      :cards="[
        {
          icon: 'fas fa-chart-line',
          title: 'Transparencia',
          description: 'Rendición de cuentas a la ciudadanía'
        },
        {
          icon: 'fas fa-users',
          title: 'Participación',
          description: 'Invitación a la comunidad'
        },
        {
          icon: 'fas fa-calendar-check',
          title: 'Compromiso',
          description: 'Resultados del primer año'
        }
      ]"
    />

    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Invitation Text -->
        <div class="text-center mb-8">
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            El R. Ayuntamiento de Piedras Negras, Coahuila, tiene el honor de invitarle al:
          </p>
        </div>

        <!-- Main Card -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto">
          <!-- Hero Section with Large 1 -->
          <div class="relative bg-[#7d2d4a] px-8 py-20 sm:px-16 sm:py-24">
            <div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
              <!-- Large Yellow Number 1 -->
              <div class="flex-shrink-0">
                <div class="text-[#f4b942] font-black text-[16rem] sm:text-[20rem] md:text-[24rem] leading-none" style="font-family: Arial, sans-serif; text-shadow: 4px 4px 8px rgba(0,0,0,0.3);">
                  1
                </div>
              </div>
              
              <!-- Text Stack -->
              <div class="text-center md:text-left">
                <h1 class="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-1">
                  PRIMER
                </h1>
                <h1 class="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
                  INFORME
                </h1>
                <p class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4b942] mb-8">
                  DE RESULTADOS
                </p>
                <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
                  JACOBO RODRÍGUEZ
                </p>
              </div>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-8 sm:p-12">
            <!-- Description -->
            <div class="mb-10 text-center">
              <p class="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Conforme a lo establecido en la <span class="font-semibold text-gray-900">Ley de Gobierno de los Municipios del Estado de Coahuila</span>, se presentarán los resultados y avances obtenidos durante el primer año de gestión al frente del Ayuntamiento.
              </p>
            </div>

            <!-- Date & Time Section -->
            <div class="bg-gray-50 rounded-lg p-8 sm:p-10 border border-gray-200">
              <div class="text-center space-y-6">
                <!-- Month -->
                <h3 class="text-3xl font-bold text-[#7d2d4a] uppercase tracking-wide">
                  Diciembre
                </h3>
                
                <!-- Date Info Grid -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                  <!-- Day of Week -->
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Día
                    </p>
                    <p class="text-2xl font-bold text-gray-900">
                      Jueves
                    </p>
                  </div>

                  <!-- Date Number - Large -->
                  <div class="bg-gradient-to-br from-[#7d2d4a] to-[#9d3d5a] rounded-xl shadow-xl p-8">
                    <p class="text-7xl sm:text-8xl font-black text-white">
                      11
                    </p>
                  </div>

                  <!-- Time -->
                  <div class="flex flex-col items-center">
                    <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Hora
                    </p>
                    <p class="text-2xl font-bold text-gray-900">
                      19:00 hrs
                    </p>
                  </div>
                </div>

                <!-- Year -->
                <p class="text-3xl font-light text-gray-600">
                  2025
                </p>
              </div>
            </div>

            <!-- Location (if needed) -->
            <div class="mt-8 text-center">
              <div class="inline-flex items-center gap-2 text-gray-600">
                <i class="fas fa-map-marker-alt text-[#7d2d4a]"></i>
                <p class="text-base font-medium">
                  Por confirmar
                </p>
              </div>
            </div>

            <!-- Footer Message -->
            <div class="mt-10 text-center border-t border-gray-200 pt-8">
              <p class="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Agradecemos contar con su distinguida presencia en este acto de transparencia y rendición de cuentas a la ciudadanía.
              </p>
            </div>
          </div>
        </div>

        <!-- Registration Form -->
        <div class="mt-12">
          <PrimerInformeForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerSection from '~/components/BannerSection.vue'
import PrimerInformeForm from '~/components/primer-informe-form.vue'
</script>

<style scoped>
</style>

