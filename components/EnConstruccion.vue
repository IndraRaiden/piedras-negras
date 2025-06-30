<!-- EnConstruccion.vue -->
<template>
  <!-- Sección de Video -->
  <!-- Fin de Sección de Video -->

  <!-- Sección en Construcción -->
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
    <!-- Elementos decorativos animados de fondo -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-for="n in 5"
        :key="n"
        class="absolute opacity-10 bg-[#611232] rounded-full animate-float"
        :style="{
          width: `${Math.random() * 200 + 50}px`,
          height: `${Math.random() * 200 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`
        }"
      ></div>
    </div>

    <!-- Barra decorativa superior -->
    <div class="w-full h-1 bg-gradient-to-r from-[#611232] via-pink-600 to-[#611232]"></div>

    <div class="max-w-4xl mx-auto px-4 py-12 relative">
      <div class="text-center space-y-8">
        <!-- Logo con animación de entrada -->
        <div class="mb-12 animate-fadeDown">
          <img
            src="/images/logo_footer.png"
            alt="Logo Piedras Negras"
            class="h-48 w-auto mx-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Card principal con animación -->
        <div
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-100 
                 transform animate-slideUp hover:shadow-xl transition-all duration-300"
        >
          <!-- Icono constructivo animado -->
          <div class="relative h-32 mb-6">
            <Icon
              name="material-symbols:construction"
              class="text-[#611232] w-24 h-24 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     animate-pulse"
            />
          </div>

          <h1 class="text-4xl font-bold text-[#611232] mb-6 animate-fadeIn">
            Sección en Construcción
          </h1>

          <p class="text-gray-700 text-xl mb-8 animate-fadeIn animation-delay-200">
            Estamos mejorando esta sección para brindarte una mejor experiencia pronto
          </p>

          <!-- Barra de progreso mejorada -->
          <div
            class="relative w-full h-3 bg-gray-100 rounded-full mb-8 overflow-hidden animate-fadeIn animation-delay-300"
          >
            <div
              class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#611232] to-pink-600 rounded-full animate-progress"
            ></div>
            <div
              class="absolute top-0 left-0 h-full w-full bg-white/20 rounded-full animate-shimmer"
            ></div>
          </div>

          <!-- Tiempo estimado -->
          <div
            class="flex items-center justify-center gap-3 text-gray-600 animate-fadeIn animation-delay-400"
          >
            <Icon
              name="material-symbols:timer-outline"
              class="w-6 h-6 text-[#611232]"
            />
            <span>Tiempo estimado: Próximamente</span>
          </div>

          <!-- Información de contacto -->
          <div class="mt-8 space-y-2 animate-fadeIn animation-delay-400">
            <div class="flex items-start gap-2 justify-center text-gray-600">
              <Icon
                name="material-symbols:phone-enabled"
                class="w-5 h-5 text-[#611232] mt-1"
              />
              <a href="tel:8787826666" class="hover:text-[#611232] transition-colors">
                878 782 6666
              </a>
            </div>

            <div class="flex items-start gap-2 justify-center text-gray-600">
              <Icon
                name="material-symbols:water-drop"
                class="w-5 h-5 text-[#611232] mt-1"
              />
              <a
                href="https://www.simaspiedrasnegras.gob.mx"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-[#611232] transition-colors"
              >
                SIMAS Piedras Negras
              </a>
            </div>

            <div class="flex items-start gap-2 justify-center text-gray-600">
              <Icon
                name="material-symbols:payments-outline"
                class="w-5 h-5 text-[#611232] mt-1"
              />
              <a
                href="https://contupago.gob.mx/PUCC/#/pago-linea/obligaciones-padron/2"
                target="_blank"
                class="hover:text-[#611232] transition-colors"
              >
                Paga Tu Predial
              </a>
            </div>

            <div class="flex items-start gap-2 justify-center text-gray-600">
              <Icon
                name="material-symbols:info"
                class="w-5 h-5 text-[#611232] mt-1"
              />
              <a
                href="http://www2.icai.org.mx/ipo/dependencia.php?dep=84"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-[#611232] transition-colors"
              >
                ICAI Información Pública de Oficio
              </a>
            </div>
          </div>
        </div>

        <!-- Footer info -->
        <div class="text-center mt-8 animate-fadeIn animation-delay-500">
          <p class="text-gray-500 text-sm">
            Copyright 2025 Ayuntamiento de Piedras Negras
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes progress {
  0% { width: 0; }
  50% { width: 70%; }
  100% { width: 90%; }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-progress {
  animation: progress 3s ease-out forwards;
}

.animate-spin-slow {
  animation: spin 6s linear infinite;
}

.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}

.animate-fadeDown {
  animation: fadeInDown 1s ease-out forwards;
}

.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
</style>
