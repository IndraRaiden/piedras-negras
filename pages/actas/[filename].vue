<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Documento: {{ formattedTitle }}</h1>
    
    <div v-if="!loading && !error" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="pdf-container" style="min-height: 800px;">
        <iframe 
          v-if="useIframe"
          :src="pdfUrl"
          class="w-full h-screen"
          style="min-height: 800px;"
          @load="handleLoad"
          @error="handleError"
        ></iframe>
        <object
          v-else
          :data="pdfUrl"
          type="application/pdf"
          class="w-full h-screen"
          style="min-height: 800px;"
          ref="pdfObject"
        >
          <div class="p-4 text-center">
            <p>Tu navegador no puede mostrar el PDF directamente.</p>
            <a :href="pdfUrl" target="_blank" class="text-blue-600 hover:underline">Descargar PDF</a>
          </div>
        </object>
      </div>
    </div>
    
    <div v-else-if="loading" class="bg-white shadow-lg rounded-lg p-8 text-center">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-700 mb-4"></div>
      <p class="text-lg">Cargando documento...</p>
      <div class="mt-4">
        <button @click="forceLoad" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Forzar carga
        </button>
      </div>
    </div>
    
    <div v-else class="bg-white shadow-lg rounded-lg p-8 text-center">
      <p class="text-lg text-red-600">Error al cargar el documento. Por favor intenta de nuevo.</p>
      <div class="mt-4 space-y-2">
        <div>
          <button @click="retryLoad" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mr-2">
            Reintentar
          </button>
          <a :href="pdfUrl" target="_blank" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Descargar PDF
          </a>
        </div>
      </div>
    </div>
    
    <div class="mt-4">
      <NuxtLink to="/actas" class="text-blue-600 hover:underline flex items-center">
        <span class="mr-1">←</span> Volver a la lista de actas
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const route = useRoute();
const filename = route.params.filename;
const loading = ref(true);
const error = ref(false);
const pdfObject = ref(null);
const useIframe = ref(false);
const fileMetadata = ref(null);

// Compute the PDF URL
const pdfUrl = computed(() => {
  return `/api/actas/${encodeURIComponent(filename)}`;
});

// Format the title by removing the file extension and replacing underscores with spaces
const formattedTitle = computed(() => {
  if (fileMetadata.value?.docType) {
    return `${fileMetadata.value.docType.type} ${fileMetadata.value.docType.number} - ${fileMetadata.value.companyName || ''}`;
  }
  
  // Fallback to basic formatting if metadata is not available
  return decodeURIComponent(filename)
    .replace(/\.pdf$/, '')
    .replace(/_opt-compressed$/, '')
    .replace(/_/g, ' ');
});

// Set the page title
useHead({
  title: `Acta: ${formattedTitle.value} - Municipio de Piedras Negras`
});

// Handle successful load
function handleLoad() {
  loading.value = false;
  error.value = false;
}

// Handle load error
function handleError() {
  loading.value = false;
  error.value = true;
  console.error('Failed to load PDF file');
}

// Force load with iframe if object is not working
function forceLoad() {
  useIframe.value = true;
  loading.value = true;
  error.value = false;
  
  // Give iframe a chance to load
  setTimeout(() => {
    if (loading.value) {
      loading.value = false;
    }
  }, 2000);
}

// Retry loading the PDF
function retryLoad() {
  loading.value = true;
  error.value = false;
  
  // Toggle iframe mode to force a refresh
  useIframe.value = !useIframe.value;
  
  // Check if the PDF exists
  checkPdfExists();
}

// Check if the PDF exists by making a HEAD request
async function checkPdfExists() {
  try {
    const response = await fetch(pdfUrl.value, {
      method: 'HEAD',
      cache: 'no-cache'
    });
    
    if (!response.ok) {
      error.value = true;
      return false;
    }
    
    return true;
  } catch (err) {
    console.error('Error checking PDF existence:', err);
    error.value = true;
    return false;
  } finally {
    // Ensure loading state is cleared even if check fails
    setTimeout(() => {
      if (loading.value) {
        loading.value = false;
      }
    }, 1500);
  }
}

// Fetch file metadata from the API
async function fetchFileMetadata() {
  try {
    const response = await fetch('/api/actas');
    const data = await response.json();
    
    if (data.error) {
      console.error('Error fetching actas list:', data.error);
      return;
    }
    
    // Find the current file in the list
    const file = data.files?.find(f => f.name === filename);
    if (file) {
      fileMetadata.value = file.metadata;
    }
  } catch (err) {
    console.error('Error fetching file metadata:', err);
  }
}

onMounted(async () => {
  // Try to detect browser capabilities for PDF rendering
  const isChrome = navigator.userAgent.indexOf('Chrome') !== -1;
  const isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
  
  // Use iframe for Safari which has better PDF support through iframe
  if (isSafari) {
    useIframe.value = true;
  }
  
  // Fetch metadata for this file
  await fetchFileMetadata();
  
  // Check if the PDF actually exists
  await checkPdfExists();
  
  // Fallback timeout in case other methods fail
  setTimeout(() => {
    if (loading.value) {
      loading.value = false;
    }
  }, 5000);
});
</script>
