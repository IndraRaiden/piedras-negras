<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Documentos Abril 2026</h1>
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
  title: 'Documentos Abril 2026',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});

const documents = [
  {
    name: 'MPN 1642 - PACHAMAMA SYM SA DE CV',
    path: '/files/documentosabril2026/MPN 1642 PACHAMAMA SYM SA DE CV_03102026_015708_opt-compressed.pdf'
  },
  {
    name: 'MPN 1645 - GESTION PUBLICA Y GESTION EMPRESARIAL SA DE CV',
    path: '/files/documentosabril2026/MPN 1645 GESTION PUBLKCA Y GESTION EMPRESARIAL SA DE CV_03102026_020538_opt-compressed.pdf'
  },
  {
    name: 'MPN 1646 - DISTRIBUIDORA DE EQUIPO DE PROTECCION PERSONAL SA DE CV',
    path: '/files/documentosabril2026/MPN 1646 DISTRIBUIDORA DE EQUIPO DE PROTECCION PERSONAL SA DE CV_03102026_104437_opt-compressed.pdf'
  },
  {
    name: 'MPN 1650 - JETPATCHER MEXICO SA DE CV',
    path: '/files/documentosabril2026/MPN 1650 JETPATCHER MEXICO SA DE CV_03102026_021206_opt-compressed.pdf'
  },
  {
    name: 'MPN 1651 - INDUSTRIAS ROVEC SA DE CV',
    path: '/files/documentosabril2026/MPN 1651 INDUSTRIAS ROVEC SA DE CV_03102026_022115_opt-compressed.pdf'
  },
  {
    name: 'MPN 1653 - ENRIQUEZ STACPOOLE Y ASOCIADOS SC',
    path: '/files/documentosabril2026/MPN 1653 ENRIQUEZ STACPOOLE Y ASOCIADOS SC_03102026_020916 (Recuperado)_opt-compressed.pdf'
  },
  {
    name: 'MPN 1654 - SERVIMED DEL NORTE SA DE CV',
    path: '/files/documentosabril2026/MPN 1654 SERVIMED DEL NORTE SA DE CV_04062026_114759_opt-compressed.pdf'
  },
  {
    name: 'MPN 1655 - FLETES Y MAQUINADOS 3UM SA DE CV',
    path: '/files/documentosabril2026/MPN 1655 FLETES Y MAQUINADOS 3UM SA DE CV_04062026_114535_opt-compressed.pdf'
  },
  {
    name: 'OP 374 - PROYECTOS E INSTALACIONES ELECTRICAS PIELSA SA DE CV',
    path: '/files/documentosabril2026/OP 374 PROYECTOS E INSTALCIONES ELECTRICAS PIELSA SA DE CV_03102026_021527_opt-compressed.pdf'
  },
];
</script>
