<template>
  <div class="container mx-auto py-8 px-4">
    <h1 class="text-3xl font-bold mb-6">Actas Julio</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="file in files" :key="file" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <div class="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-lg">{{ formatFileName(file) }}</h3>
          </div>
        </div>
        <div class="mt-3">
          <a :href="`/files/actasv2/${file}`" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
            Ver documento
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// List of files in the actasv2 directory
const files = [
  'BLINDAJES URBANOS SA DE CV_05302025_113830_opt_compressed.pdf',
  'CHEVROLET DEL RIO SA DE CV_05302025_114515_opt-compressed.pdf',
  'DISTRIBUIDORA MOCTEZUMA DE PIEDRAS NEGRAS SA_05302025_114141_opt_compressed.pdf',
  'HORIZON INDUSTRIAL SA DE CV_05302025_113030_opt_compressed.pdf',
  'INDUSTRIAS+DE+ATRACCIONES+MECANICAS+SA+DE+CV_05302025_121041_opt-comprimido.pdf',
  'INGENIERIA Y CONSTRUCCION OBRAS Y TERRACERIAS SA DE CV_05302025_112455_opt_compressed.pdf',
  'MPN 1593 TEH INGENIERIA AMBIENTAL S DE RL DE CV _07032025_112255_compressed.pdf',
  'MPN 1596 MEDICIONES INDUSTRIALES EDWIN SA DE CV_07032025_095840_opt_compressed.pdf',
  'SEÑALES+Y+LINEAS+SA+DE+CV_05302025_111740_opt-comprimido.pdf',
  'THOUSAND INTERNATIONAL COMPANIES SA DE CV_05302025_114846_opt_compressed.pdf'
];

// Function to format file names for display
function formatFileName(fileName) {
  // Remove file extension
  let name = fileName.replace(/\.pdf$/i, '');
  
  // Replace '+' with spaces
  name = name.replace(/\+/g, ' ');
  
  // Remove date and time pattern (like _05302025_113830_opt_compressed)
  name = name.replace(/_(\d{8})_(\d{6})_opt(_compressed|-compressed|-comprimido)/i, '');
  
  // Convert to title case
  name = name.split(' ').map(word => {
    if (word === 'SA' || word === 'DE' || word === 'CV' || word === 'RL' || word === 'S') {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  
  return name;
}
</script>

<style scoped>
/* Add any specific styles here */
</style>
