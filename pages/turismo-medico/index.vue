<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col items-center mb-8">
      <img src="/images/turismo-medico/mainlogo.jpg" alt="Logo Turismo Médico" class="max-w-full h-auto mb-1 max-h-[120px]" />
      <h1 class="text-center font-bold text-2xl md:text-3xl lg:text-4xl max-w-[90%] mx-auto">
        <span class="block">RED OFICIAL DE PRESTADORES DE</span>
        <span class="block">SALUD DE EXCELENCIA EN TURISMO MÉDICO</span>
      </h1>
    </div>
    
    <section class="mb-12">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4">Iniciativa municipal diseñada para capacitar, certificar y promover a los consultorios médicos, clínicas, hospitales y prácticas médicas privadas de Piedras Negras que deseen incursionar o fortalecer su oferta en turismo médico.</h2>
      
      <div class="bg-red-900 text-white p-6 rounded-lg mb-4 inline-block">
        <p class="text-2xl font-bold mb-2">
          El programa se enfocará en dos áreas críticas:
        </p>
        <p class="text-xl font-semibold mb-2">
          La comunicación y mercadotecnia efectiva para atraer al paciente estadounidense.
        </p>
        <p class="text-xl font-semibold">
          El estricto cumplimiento normativo para garantizar la máxima seguridad y confianza.
        </p>
      </div>
      
      <div class="bg-red-900 text-white p-6 rounded-lg mb-8 inline-block">
        <p class="text-xl font-semibold">
          La finalidad del programa es crear un ecosistema médico de excelencia, validado por un distintivo de
        </p>
        <p class="text-xl font-semibold">
          acreditación municipal y promovido activamente a través de la plataforma oficial del programa.
        </p>
      </div>
    </section>

    <section class="mb-6">
      <div class="grid xl:grid-cols-3 gap-6 items-start">
        <div class="xl:col-span-2">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-2">
              <div class="flex-shrink-0">
                <img src="/images/turismo-medico/logos/1000.jpg" alt="Capacitación" class="w-24 h-24 rounded-full" />
              </div>
              <div>
                <p class="font-semibold text-lg mb-2">Capacitar al personal médico y administrativo</p>
                <p>Herramientas de comunicación y mercadotecnia para penetrar eficazmente en el mercado estadounidense.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-2">
              <div class="flex-shrink-0">
                <img src="/images/turismo-medico/logos/2000.jpg" alt="Estándares" class="w-24 h-24 rounded-full" />
              </div>
              <div>
                <p class="font-semibold text-lg mb-2">Asegurar estándares normativos</p>
                <p>Asegurar que los establecimientos participantes cumplan con los más altos estándares normativos de salud.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-2">
              <div class="flex-shrink-0">
                <img src="/images/turismo-medico/logos/3000.jpg" alt="Registro" class="w-24 h-24 rounded-full" />
              </div>
              <div>
                <p class="font-semibold text-lg mb-2">Registro público de proveedores</p>
                <p>Crear y mantener un registro público y confiable de proveedores acreditados para facilitar la elección informada de los pacientes extranjeros.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-2">
              <div class="flex-shrink-0">
                <img src="/images/turismo-medico/logos/4000.jpg" alt="Distintivo" class="w-24 h-24 rounded-full" />
              </div>
              <div>
                <p class="font-semibold text-lg mb-2">Distintivo de calidad</p>
                <p>Otorgar un distintivo físico y digital que acredite a los participantes, funcionando como un sello de calidad y confianza avalado por el R. Ayuntamiento.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-2">
              <div class="flex-shrink-0">
                <img src="/images/turismo-medico/logos/5000.jpg" alt="Flujo de pacientes" class="w-24 h-24 rounded-full" />
              </div>
              <div>
                <p class="font-semibold text-lg mb-2">Incremento económico</p>
                <p>Incrementar el flujo de pacientes provenientes de Estados Unidos y, con ello, la derrama económica en el sector salud y servicios conexos (hotelería, restaurantes, transporte).</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex self-start mt-8 md:mt-0 xl:justify-center 2xl:justify-end xl:col-span-3 2xl:col-span-1 2xl:-mt-64">
          <figure class="text-center">
            <img src="/images/turismo-medico/qr.jpg" alt="Código QR Turismo Médico" class="w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] max-w-full h-auto rounded-lg shadow-md mx-auto md:mx-0" />
            <div class="mt-4 text-center">
              <p class="text-2xl sm:text-3xl font-extrabold text-red-900 leading-tight">Escanea el QR</p>
              <p class="text-2xl sm:text-3xl font-extrabold text-red-900 leading-tight">y Regístrate</p>
              <a href="https://piedrasnegras.tumunicipio.mx/ev/67f13d5dea47da07ae3a72d2/67a2593a26e531b8f586911e" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-6 py-3 bg-red-900 text-white font-bold rounded-md shadow hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700">REGISTRARME</a>
            </div>
          </figure>
        </div>
      </div>
    </section>

    <div class="flex justify-center mt-12 mb-8">
      <NuxtLink to="/turismo-medico/medicos-registrados" class="inline-block px-8 py-4 bg-red-900 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-700">
        Ver Médicos Registrados
      </NuxtLink>
    </div>
  
  </div>
</template>

<script setup>
useHead({
  title: 'Turismo Médico | Piedras Negras',
  meta: [
    { name: 'description', content: 'Información sobre servicios de turismo médico en Piedras Negras, Coahuila. Encuentra profesionales de la salud, clínicas y hospitales que atienden a visitantes internacionales.' }
  ]
})
</script>

<style scoped>
/* Estilos adicionales específicos para esta página pueden agregarse aquí */
</style>
