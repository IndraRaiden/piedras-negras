<template>
  <section class="bg-gradient-to-br from-[#f8e9ef] to-[#fdf5f8] rounded-2xl shadow-xl overflow-hidden">
    <!-- Decorative background elements -->
    <div class="relative">
      <!-- Subtle pattern background -->
      <div class="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="polka-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#611232"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
        </svg>
      </div>
      
      <!-- Header with improved visual appeal -->
      <div class="relative pt-10 pb-6 px-8 sm:px-12">
        <!-- Top color bar with shimmer effect -->
        <div class="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#611232] via-[#8B1C4C] to-[#611232] shimmer-bar"></div>
        
        <div class="max-w-2xl mx-auto text-center">
          <!-- Decorative icon with pulse animation -->
          <div class="mx-auto h-16 w-16 bg-gradient-to-br from-[#611232] to-[#8B1C4C] rounded-full flex items-center justify-center shadow-lg mb-5 pulse-slow transform hover:scale-105 transition-all duration-300">
            <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          
          <!-- Heading with improved typography -->
          <h2 class="text-3xl font-bold text-gray-900 mb-3 leading-tight">Tu voz importa</h2>
          <p class="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            Comparte tus propuestas para contribuir al desarrollo de Piedras Negras y construir juntos una mejor ciudad.
          </p>
        </div>
      </div>
      
      <!-- Improved form layout and styling -->
      <form action="https://formspree.io/f/xvgkpalk" method="POST" class="px-6 sm:px-10 pb-12 relative">
        <!-- Note: Replace 'xyyxxxxx' with your actual Formspree ID -->
        <!-- Hidden redirect field to return user to the site after submission -->
        <input type="hidden" name="_next" value="https://piedrasnegras.gob.mx/gracias" />
        <div class="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl border border-gray-100">
          <!-- Progress indicator dots -->
          <div class="flex justify-center mb-6 space-x-2">
            <span class="h-2 w-2 rounded-full bg-[#611232]"></span>
            <span class="h-2 w-2 rounded-full bg-[#611232] opacity-70"></span>
            <span class="h-2 w-2 rounded-full bg-[#611232] opacity-40"></span>
            <span class="h-2 w-2 rounded-full bg-[#611232] opacity-20"></span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name input with improved styling -->
            <div class="col-span-1 group">
              <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200 group-focus-within:text-[#611232]">
                Nombre completo <span class="text-[#611232]">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 group-focus-within:text-[#611232] transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre"
                  required
                  class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#611232]/30 focus:border-[#611232] outline-none transition-all duration-200 bg-white/50 hover:bg-white/80"
                  placeholder="Juan Pérez"
                >
              </div>
            </div>

            <!-- Phone input with improved styling -->
            <div class="col-span-1 group">
              <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200 group-focus-within:text-[#611232]">
                Teléfono <span class="text-[#611232]">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 group-focus-within:text-[#611232] transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono"
                  required
                  class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#611232]/30 focus:border-[#611232] outline-none transition-all duration-200 bg-white/50 hover:bg-white/80"
                  placeholder="(878) 123-4567"
                >
              </div>
            </div>

            <!-- Email input - full width -->
            <div class="col-span-1 md:col-span-2 group">
              <label for="correo" class="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200 group-focus-within:text-[#611232]">
                Correo electrónico <span class="text-[#611232]">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 group-focus-within:text-[#611232] transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  id="correo" 
                  name="email"
                  required
                  class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#611232]/30 focus:border-[#611232] outline-none transition-all duration-200 bg-white/50 hover:bg-white/80"
                  placeholder="ejemplo@correo.com"
                >
              </div>
            </div>

            <!-- Proposal textarea - full width with improved styling -->
            <div class="col-span-1 md:col-span-2 group">
              <label for="propuesta" class="block text-sm font-medium text-gray-700 mb-2 transition-all duration-200 group-focus-within:text-[#611232]">
                Propuesta o demanda social <span class="text-[#611232]">*</span>
              </label>
              <div class="relative">
                <div class="absolute top-3 left-3 flex items-start pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 group-focus-within:text-[#611232] transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <textarea 
                  id="propuesta" 
                  name="propuesta"
                  rows="5"
                  required
                  class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#611232]/30 focus:border-[#611232] outline-none transition-all duration-200 bg-white/50 hover:bg-white/80 resize-y"
                  placeholder="Describe tu propuesta o demanda para mejorar nuestra ciudad..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Hidden honeypot field to prevent spam -->
          <input type="text" name="_gotcha" style="display:none" />

          <!-- Submit button with enhanced styling and animation -->
          <div class="mt-8 flex justify-center">
            <button 
              type="submit" 
              class="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#611232] to-[#8B1C4C] text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden transform hover:-translate-y-1"
            >
              <span class="relative z-10 flex items-center">
                <span class="text-base">Enviar propuesta</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span class="absolute inset-0 bg-gradient-to-r from-[#8B1C4C] to-[#611232] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          <!-- Required fields note -->
          <p class="text-sm text-gray-500 mt-6 text-center">
            <span class="text-[#611232] font-bold">*</span> Campos obligatorios
          </p>
          
          <!-- Privacy notice -->
          <p class="text-xs text-gray-400 mt-4 text-center max-w-md mx-auto">
            La información proporcionada será utilizada únicamente para fines de mejorar nuestra ciudad y no será compartida con terceros.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Enhanced animation effects */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
}

.shimmer-bar {
  background-size: 200% 100%;
  animation: shimmer 3s infinite linear;
}

.pulse-slow {
  animation: pulse 3s infinite ease-in-out;
}

input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(97, 18, 50, 0.15);
}

/* Focus and hover states for form elements */
input, textarea {
  transition: all 0.3s ease;
}

input:hover, textarea:hover {
  border-color: #8B1C4C;
}

/* Group focus styling */
.group:focus-within label {
  color: #611232;
}
</style>
