<template>
  <div>
    <BannerV2
      title="Documentos Enero 2026"
      subtitle="Archivo Digital"
    />
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <ClientOnly>
          <div class="grid gap-6">
            <div 
              v-for="(doc, index) in documents" 
              :key="index"
              class="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div class="flex items-start gap-5 flex-1 w-full md:w-auto">
                <div class="bg-gray-50 p-4 rounded-xl text-gray-700 group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div class="min-w-0 flex-1 pt-1">
                  <h3 class="font-bold text-lg text-gray-900 break-words leading-tight group-hover:text-red-700 transition-colors">{{ doc.name }}</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                      PDF
                    </span>
                    <span class="text-xs text-gray-400">Lectura disponible</span>
                  </div>
                </div>
              </div>
              
              <a 
                :href="doc.path"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full md:w-auto px-6 py-2.5 bg-white text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-3 font-semibold group/btn whitespace-nowrap no-underline"
              >
                <span>Ver Documento</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-400 group-hover/btn:text-gray-900 group-hover/btn:translate-x-0.5 transition-all">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>

  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue';

useHead({
  title: 'Documentos Enero 2026',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const documents = [
  { 
    name: 'MPN 1629 - DIESEL AMERICA MAQUINARIA Y CONSTRUCCION SA DE CV', 
    path: '/files/enero2026/MPN 1629 DIESEL AMERICA MAQUINARIA Y CONSTRUCCION  SA DE CV_12192025_102235_opt-compressed.pdf' 
  },
  { 
    name: 'MPN 1634 - GREENLAND PRODUCTS SA DE CV', 
    path: '/files/enero2026/MPN 1634 GREENLAND PRODUCTS SA DE CV_12192025_102936_opt-compressed.pdf' 
  },
  { 
    name: 'MPN 1635 - LUCES FELIZ SA DE CV', 
    path: '/files/enero2026/MPN 1635 LUCES FELIZ SA DE CV_12192025_101702_opt-compressed.pdf' 
  },
  { 
    name: 'MPN 1637 - ASESORES EN LOGISTICA ECONOMICA EMPRESARIAL SA DE CV', 
    path: '/files/enero2026/MPN 1637 ASESORES EN LOGISTICA ECONOMICA EMPRESARIAL SA DE CV_12192025_103335_opt-compressed.pdf' 
  },
  { 
    name: 'MPN 1639 - ALION BUSINESS SUPPLY S DE RL DE CV', 
    path: '/files/enero2026/MPN 1639 ALION BUSINESS SUPPLY S DE RL DE CV_12192025_103723_opt_opt-compressed.pdf' 
  },
];
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
