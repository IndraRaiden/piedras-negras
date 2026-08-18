<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Documentos Agosto 2026</h1>
      <p class="text-sm text-gray-500 mb-8">Archivo Digital</p>
      <div class="grid gap-4">
        <div
          v-for="(doc, index) in documents"
          :key="index"
          class="group bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <div class="flex items-start gap-4 flex-1 w-full md:w-auto">
            <div class="bg-gray-50 p-3 rounded-xl text-gray-600 group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-300 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <div class="min-w-0 flex-1 pt-1">
              <h3 class="font-semibold text-gray-900 break-words leading-snug group-hover:text-red-700 transition-colors">{{ doc.name }}</h3>
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500 mt-1">PDF</span>
            </div>
          </div>
          <a
            :href="doc.path"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full md:w-auto px-5 py-2 bg-white text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 font-semibold whitespace-nowrap no-underline"
          >
            Ver Documento
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });

useHead({
  title: 'Documentos Agosto 2026',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const documents = [
  {
    name: 'BOMBAS SUAREZ, S.A. DE C.V.',
    path: '/filesago2026/BOMBAS SUAREZ, S.A. DE C.V._opt_compressed.pdf'
  },
  {
    name: 'CORPORATIVO NUCLEO RADIO TELEVISION SA DE CV',
    path: '/filesago2026/CORPORATIVO NUCLEO RADIO TELEVISION SA DE CB_07072026_031954_opt_compressed.pdf'
  },
  {
    name: 'ELECTROMECANICOS MONTERREY, S.A. DE C.V.',
    path: '/filesago2026/ELECTROMECANICOS MONTERREY, S.A. DE C.V._opt_compressed.pdf'
  },
  {
    name: 'INGENIERIA Y SERVICIOS BECERRA SA DE CV',
    path: '/filesago2026/INGENIERIA Y SERVICIOS BECERRA SA DE CV_08142026_111237_opt_compressed.pdf'
  },
  {
    name: 'LABORATORIOS ABC QUIMICA INVESTIGACION Y ANALISIS SA DE CV',
    path: '/filesago2026/LABORATORIOS ABC QUIMICA INVESTIGACION Y ANALISIS SA DE CV_07072026_032713_opt_compressed.pdf'
  },
  {
    name: 'RIVTO HOLDINGS SAPI DE CV',
    path: '/filesago2026/RIVTO HOLDINGS SAPI DE CV_07072026_033010_opt_compressed.pdf'
  },
  {
    name: 'SISTEMA EN PREVENCION ALARMAS SA DE CV',
    path: '/filesago2026/SISTEMA EN PREVENCION ALARMAS SA DE CV_08142026_112146_opt_compressed.pdf'
  },
  {
    name: 'Publicación de Participaciones 2024',
    path: '/filesago2026/PUBLICACION PARTICIPACIONES 2024_compressed.pdf'
  },
  {
    name: 'Publicación de Participaciones 2025',
    path: '/filesago2026/PUBLICACION PARTICIPACIONES 2025_compressed.pdf'
  },
];
</script>
