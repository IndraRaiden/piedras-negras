<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Actas constitutivas de proveedores y contratistas</h1>
    <div class="bg-white shadow-lg rounded-lg p-6">
      <div class="mb-4">
        <input 
          v-model="searchTerm" 
          type="text" 
          placeholder="Buscar acta..." 
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div v-if="loading" class="py-8 text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-700"></div>
        <p class="mt-2 text-gray-600">Cargando actas...</p>
      </div>
      
      <div v-else-if="error" class="py-8 text-center text-red-600">
        <p>{{ error }}</p>
        <button @click="fetchFiles" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Reintentar
        </button>
      </div>
      
      <div v-else-if="filteredFiles.length > 0" class="space-y-4">
        <div v-for="file in filteredFiles" :key="file.name" class="border-b border-gray-200 pb-4 last:border-b-0">
          <NuxtLink 
            :to="`/actas/${encodeURIComponent(file.name)}`" 
            class="block p-4 hover:bg-gray-50 rounded transition duration-150"
          >
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-3">
                <span class="text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900">{{ formatFileName(file.name) }}</h3>
                <div class="flex flex-wrap gap-2 mt-1">
                  <span v-if="file.metadata?.date" class="text-sm text-gray-500">
                    <span class="font-medium">Fecha:</span> {{ file.metadata.date.formatted }}
                  </span>
                  <span v-if="file.metadata?.docType" class="text-sm text-gray-500">
                    <span class="font-medium">{{ file.metadata.docType.type }}:</span> {{ file.metadata.docType.number }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div v-else class="py-4 text-center text-gray-500">
        No se encontraron actas que coincidan con la búsqueda.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const files = ref([]);
const loading = ref(true);
const error = ref(null);
const searchTerm = ref('');

// Fetch files from the API
async function fetchFiles() {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch('/api/actas');
    const data = await response.json();
    
    if (data.error) {
      error.value = data.error;
      return;
    }
    
    files.value = data.files || [];
  } catch (err) {
    console.error('Error fetching actas:', err);
    error.value = 'Error al cargar las actas. Por favor intente de nuevo.';
  } finally {
    loading.value = false;
  }
}

// Filter files based on search term
const filteredFiles = computed(() => {
  if (!searchTerm.value) return files.value;
  
  const term = searchTerm.value.toLowerCase();
  return files.value.filter(file => {
    // Search in filename
    if (file.name.toLowerCase().includes(term)) return true;
    
    // Search in metadata if available
    if (file.metadata) {
      // Search in company name
      if (file.metadata.companyName && 
          file.metadata.companyName.toLowerCase().includes(term)) {
        return true;
      }
      
      // Search in document type
      if (file.metadata.docType && 
          (file.metadata.docType.type.toLowerCase().includes(term) || 
           file.metadata.docType.number.includes(term))) {
        return true;
      }
    }
    
    return false;
  });
});

// Load files when component is mounted
onMounted(() => {
  fetchFiles();
});

// Format the file name for display
function formatFileName(fileName) {
  // Remove the file extension and the optimization suffix
  return fileName
    .replace(/\.pdf$/, '')
    .replace(/_opt-compressed$/, '')
    .replace(/_/g, ' ');
}

// Extract and format the date from the filename
function formatDate(fileName) {
  // Try to extract date in format MM/DD/YYYY from the filename pattern
  const dateMatch = fileName.match(/(\d{2})(\d{2})(\d{4})_/);
  if (dateMatch) {
    const [_, month, day, year] = dateMatch;
    return `${month}/${day}/${year}`;
  }
  return '';
}

// Set the page title
useHead({
  title: 'Actas constitutivas de proveedores y contratistas - Municipio de Piedras Negras'
});
</script>
