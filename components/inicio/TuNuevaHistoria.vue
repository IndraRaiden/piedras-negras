<template>
  <div class="bg-gray-50">
    <div class="relative">
      <section class="py-12 px-4">
        <div class="container mx-auto">
          <!-- Encabezado con efecto de resaltado -->
          <h2 class="text-5xl font-bold text-center mb-16 relative">
            <span class="bg-gradient-to-r from-[#611232] to-[#8B1C4C] bg-clip-text text-transparent">
              Tu Nueva Historia
            </span>
            <div
              class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 
                     bg-gradient-to-r from-[#611232] to-[#8B1C4C] rounded-full"
            ></div>
          </h2>

          <!-- Contenedor de tarjetas -->
          <div class="flex flex-wrap justify-center items-center gap-14">
            <!-- Tarjeta izquierda -->
            <div class="flex flex-col items-center">
              <div
                class="w-64 h-64 rounded-xl bg-white shadow-lg 
                       border border-[#611232]/10 mb-6 
                       flex items-center justify-center relative overflow-hidden group
                       hover:border-[#611232]/30 transition-all duration-500"
              >
                <!-- Círculos decorativos con contorno -->
                <div
                  class="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#611232]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#611232]/30 border border-[#611232]/40"
                ></div>
                
                <img
                  src="~/public/images/iconos_secciones/Atencion_ciudadana_guindo.png"
                  alt="Atención Ciudadana"
                  class="block w-48 h-48 object-contain group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <!-- Botón de la tarjeta izquierda -->
              <NuxtLink
                to="/atencion-ciudadana"
                class="px-8 py-3 bg-gradient-to-r from-[#611232] to-[#8B1C4C]
                       text-white text-base font-medium rounded-lg
                       shadow-lg hover:shadow-xl hover:shadow-[#611232]/20 
                       transition-all duration-300 transform hover:-translate-y-0.5
                       relative overflow-hidden group"
              >
                <span class="relative z-10">Atencion Ciudadana</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                         translate-x-[-100%] group-hover:translate-x-[100%]
                         transition-transform duration-1000"
                ></div>
              </NuxtLink>
            </div>

            <!-- Separador elegante -->
            <div class="h-64 hidden md:flex items-center">
              <div
                class="w-[1px] h-full bg-gradient-to-b from-transparent via-[#611232]/20 to-transparent"
              ></div>
            </div>

            <!-- Tarjeta derecha -->
            <div class="flex flex-col items-center">
              <div
                class="w-64 h-64 rounded-xl bg-white shadow-lg 
                       border border-[#611232]/10 mb-6 
                       flex items-center justify-center relative overflow-hidden group
                       hover:border-[#611232]/30 transition-all duration-500"
              >
                <!-- Círculos decorativos con contorno -->
                <div
                  class="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#611232]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#611232]/30 border border-[#611232]/40"
                ></div>

                <!-- Imagen más grande y centrada -->
                <img
                  src="/images/iconos_secciones/Bienestar_guindo.png"
                  alt="Bienestar"
                  class="block w-48 h-48 object-contain 
                         group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <!-- Botón de la tarjeta derecha -->
              <div
                class="px-8 py-3 bg-gradient-to-r from-[#611232] to-[#8B1C4C]
                       text-white text-base font-medium rounded-lg
                       shadow-lg hover:shadow-xl hover:shadow-[#611232]/20 
                       transition-all duration-300 transform hover:-translate-y-0.5
                       relative overflow-hidden group cursor-pointer"
              >
                <span class="relative z-10">Bienestar</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                         translate-x-[-100%] group-hover:translate-x-[100%]
                         transition-transform duration-1000"
                ></div>
              </div>
            </div>

            <!-- Separador elegante -->
            <div class="h-64 hidden md:flex items-center">
              <div
                class="w-[1px] h-full bg-gradient-to-b from-transparent via-[#611232]/20 to-transparent"
              ></div>
            </div>

            <!-- Tarjeta Plan de Desarrollo -->
            <div class="flex flex-col items-center">
              <div
                class="w-64 h-64 rounded-xl bg-white shadow-lg 
                       border border-[#611232]/10 mb-6 
                       flex items-center justify-center relative overflow-hidden group
                       hover:border-[#611232]/30 transition-all duration-500"
              >
                <!-- Círculos decorativos con contorno -->
                <div
                  class="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#611232]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"
                ></div>
                <div
                  class="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#611232]/30 border border-[#611232]/40"
                ></div>
                
                <img
                  src="~/public/images/iconos_secciones/Obras_publicas_guindo.png"
                  alt="Plan Municipal de Desarrollo"
                  class="block w-48 h-48 object-contain group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <!-- Botón de la tarjeta Plan de Desarrollo -->
              <NuxtLink
                to="/plandesarrollo"
                class="px-8 py-3 bg-gradient-to-r from-[#611232] to-[#8B1C4C]
                       text-white text-base font-medium rounded-lg
                       shadow-lg hover:shadow-xl hover:shadow-[#611232]/20 
                       transition-all duration-300 transform hover:-translate-y-0.5
                       relative overflow-hidden group"
              >
                <span class="relative z-10">Plan Municipal de Desarrollo</span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                         translate-x-[-100%] group-hover:translate-x-[100%]
                         transition-transform duration-1000"
                ></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Icon from '~/components/inicio/Icon.vue';
</script>

<style scoped>
@keyframes draw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>