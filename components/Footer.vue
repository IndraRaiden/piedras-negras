<template>
  <footer class="bg-[#712442] py-16">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Grilla: 3 columnas en desktop, 1 en móvil -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <!-- Columna 1: Solo logo (centrado) + Redes -->
        <div class="flex flex-col items-center space-y-6">
          <div class="bg-white p-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src="/images/logo_footer.png"
              alt="Logo Piedras Negras"
              class="h-40 w-auto hover:opacity-90 transition-all duration-300"
              width="160"
              height="160"
              loading="lazy"
            />
          </div>
          <!-- Íconos redes sociales -->
          <div class="flex items-center justify-center space-x-6">
            <a href="https://www.facebook.com/piedrasnegras/" target="_blank" rel="noopener noreferrer" 
               class="bg-white/10 w-12 h-12 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
              <Icon name="fa-brands:facebook-f" size="20" class="text-white" />
            </a>
            <a href="https://x.com/MpioPNegras" target="_blank" rel="noopener noreferrer" 
               class="bg-white/10 w-12 h-12 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
              <Icon name="simple-icons:x" size="20" class="text-white" />
            </a>
            <a href="https://www.instagram.com/mpiopnegras/" target="_blank" rel="noopener noreferrer" 
               class="bg-white/10 w-12 h-12 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
              <Icon name="fa-brands:instagram" size="20" class="text-white" />
            </a>
            <a href="https://www.youtube.com/@jacoborodriguezgzz" target="_blank" rel="noopener noreferrer" 
               class="bg-white/10 w-12 h-12 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
              <Icon name="fa-brands:youtube" size="20" class="text-white" />
            </a>
          </div>
        </div>
        
        <!-- Columna 2: Contacto -->
        <div class="text-center md:text-left">
          <h3 class="text-white font-bold text-2xl mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-white/30">
            Contacto
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
              <div class="bg-white/10 p-2 rounded-lg">
                <Icon name="material-symbols:location-on" size="24" class="text-white group-hover:scale-110 transition-transform" />
              </div>
              <a 
                href="https://www.google.com/maps/place/Presidencia+Municipal/@28.7072193,-100.5302036,17z/data=!4m15!1m8!3m7!1s0x865f8bf4f4851ee7:0x16cb2a5979f4ddfc!2sAv+16+de+Septiembre,+Piedras+Negras,+Coah.!3b1!8m2!3d28.7056852!4d-100.5332434!16s%2Fg%2F1tvq4k7d!3m5!1s0x865f8c0a695e3609:0xcc7480e495f51050!8m2!3d28.7080661!4d-100.5284742!16s%2Fg%2F11bbrpjy7b?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-white hover:text-white/80 transition-colors pt-1"
              >
                Av. 16 De Septiembre
              </a>
            </div>
            <div class="flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
              <div class="bg-white/10 p-2 rounded-lg">
                <Icon name="material-symbols:phone-enabled" size="24" class="text-white group-hover:scale-110 transition-transform" />
              </div>
              <a 
                href="tel:8787826666" 
                class="text-white hover:text-white/80 transition-colors pt-1"
              >
                878 782 6666
              </a>
            </div>
            <div class="flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
              <div class="bg-white/10 p-2 rounded-lg">
                <Icon name="material-symbols:calendar-month" size="24" class="text-white group-hover:scale-110 transition-transform" />
              </div>
              <div class="pt-1">
                <p class="font-medium text-white">Horario de Atención:</p>
                <p class="text-white/80">Lunes a Viernes</p>
                <p class="text-white/80">8:00 – 16:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Columna 3: Páginas Relacionadas -->
        <div class="text-center md:text-left">
          <h3 class="text-white font-bold text-2xl mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-white/30">
            Páginas Relacionadas
          </h3>
          <ul class="space-y-4">
            <li>
              <a href="https://www.simaspiedrasnegras.gob.mx/" target="_blank" rel="noopener noreferrer" 
                 class="text-white hover:text-white/80 transition-all duration-300 inline-flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:translate-x-2 w-full">
                <Icon name="material-symbols:arrow-right-alt" class="group-hover:translate-x-1 transition-transform" />
                Simas Piedras Negras
              </a>
            </li>
            <li>
              <a href="https://www.coahuilatransparente.gob.mx/obligaciones/obligaciones.cfm?dep=20060025" target="_blank" rel="noopener noreferrer" 
                 class="text-white hover:text-white/80 transition-all duration-300 inline-flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:translate-x-2 w-full">
                <Icon name="material-symbols:arrow-right-alt" class="group-hover:translate-x-1 transition-transform" />
                Coahulia Transparente
              </a>
            </li>
            <li>
              <a href="https://www.gob.mx/sre" target="_blank" rel="noopener noreferrer" 
                 class="text-white hover:text-white/80 transition-all duration-300 inline-flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:translate-x-2 w-full">
                <Icon name="material-symbols:arrow-right-alt" class="group-hover:translate-x-1 transition-transform" />
                Sre
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Separador y Copyright -->
      <div class="border-t border-white/20 mt-12 pt-6 text-center">
        <p class="text-white/80 text-sm">
          &copy; 2024 Municipio de Piedras Negras. Todos los derechos reservados. 
          <NuxtLink to="/aviso-de-privacidad" class="text-white hover:underline ml-2 transition-all duration-300">
            Aviso de Privacidad
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Prefetch the logo image when this component mounts
import { onMounted } from 'vue'

onMounted(() => {
  // Prefetch the logo
  const imgPreload = new Image();
  imgPreload.src = '/images/logo_footer.png';
})
</script>