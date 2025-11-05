<template>
  <div class="relative h-screen w-full">
    <img src="/Fondo informe.png" alt="Fondo Informe" class="w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-center">
      <img src="/Logo Primer informe de resultados-02.png" alt="Logo Informe" class="w-2/3 h-auto max-w-3xl" />
    </div>
  </div>
  <div>
    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Invitation Image -->
        <div class="mb-12">
          <img 
            src="/primer-informe.jpg" 
            alt="Primer Informe de Resultados - Jacobo Rodríguez"
            class="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <!-- Registration Form -->
        <div class="mt-12">
          <PrimerInformeForm />
        </div>

        <!-- WhatsApp Button -->
        <div class="mt-10 text-center">
          <a 
            href="https://wa.me/528781453465"
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg"
          >
            <i class="fab fa-whatsapp text-2xl mr-3"></i>
            <span>Contactar por WhatsApp</span>
          </a>
          <p class="mt-4 text-gray-700 text-lg">
            Para dudas, puede contactarnos a este número.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PrimerInformeForm from '~/components/primer-informe-form.vue'
</script>

<style scoped>
</style>

