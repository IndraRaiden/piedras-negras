<template>
  <div class="pdf-viewer-container">
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
      <p>Cargando documento...</p>
    </div>
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
    <div v-if="!isLoading && !error" class="pdf-viewer">
      <div class="controls-top">
        <div class="page-nav">
          <button @click="prevPage()" :disabled="currentPage === 1" class="control-button">
            ← Anterior
          </button>
          <span class="page-indicator">
            {{ pageIndicatorText }}
          </span>
          <button @click="nextPage()" :disabled="currentPage >= totalPages" class="control-button">
            Siguiente →
          </button>
        </div>
        <div class="zoom-controls">
          <button @click="changeZoom(-0.2)" class="control-button">-</button>
          <span class="zoom-indicator">{{ Math.round(zoomLevel * 100) }}%</span>
          <button @click="changeZoom(0.2)" class="control-button">+</button>
        </div>
      </div>
      <div class="pages-container" ref="pagesContainer">
        <transition name="page-transition">
          <div v-if="isAnimating" class="transition-overlay">
            <div class="transition-spinner"></div>
          </div>
        </transition>
        <div class="book-spread" :class="{ 'page-turning': isAnimating }">
          <div
            v-if="currentPage > 1"
            class="page-wrapper left-page"
            :class="animationClass"
            :ref="makePageRef(currentPage - 1)"
            :key="'left-' + (currentPage - 1)"
          >
            <canvas :ref="makeCanvasRef(currentPage - 1)" class="page-canvas"></canvas>
          </div>
          <div v-else class="page-wrapper left-page empty-page" :key="'left-empty'"></div>
          
          <div
            class="page-wrapper right-page"
            :class="animationClass"
            :ref="makePageRef(currentPage)"
            :key="'right-' + currentPage"
          >
            <canvas :ref="makeCanvasRef(currentPage)" class="page-canvas"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick, onBeforeUnmount } from 'vue';

const props = defineProps({
  pdf: {
    type: String,
    required: true,
  },
});

let PDFJS = null;
let pdfDocument = null;

const isLoading = ref(true);
const error = ref(null);
const totalPages = ref(0);
const currentPage = ref(1);
const zoomLevel = ref(1.2);
const canvasRefs = ref({});
const pageRefs = ref({});
const pagesContainer = ref(null);
const renderedPages = new Set();
const isAnimating = ref(false);
const animationClass = ref('');

function makePageRef(pageNumber) {
  return (el) => {
    if (el) {
      pageRefs.value[pageNumber] = el;
    } else {
      delete pageRefs.value[pageNumber];
    }
  };
}

function makeCanvasRef(pageNumber) {
  return (el) => {
    if (el) {
      canvasRefs.value[pageNumber] = el;
    } else {
      delete canvasRefs.value[pageNumber];
    }
  };
}

async function renderPage(pageNumber) {
  if (!pdfDocument || pageNumber < 1 || pageNumber > totalPages.value) return;
  
  try {
    const page = await pdfDocument.getPage(pageNumber);
    const canvas = canvasRefs.value[pageNumber];
    if (!canvas) return;
    
    const viewport = page.getViewport({ scale: zoomLevel.value });
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;
  } catch (e) {
    console.error(`Error rendering page ${pageNumber}:`, e);
  }
}

const pageIndicatorText = computed(() => {
  if (currentPage.value === 1) {
    return `Página 1 de ${totalPages.value}`;
  }
  const leftPage = currentPage.value - 1;
  return `Páginas ${leftPage}-${currentPage.value} de ${totalPages.value}`;
});

async function renderCurrentSpread() {
  await nextTick();
  // Render current page (right side)
  await renderPage(currentPage.value);
  // Render previous page (left side) if not first page
  if (currentPage.value > 1) {
    await renderPage(currentPage.value - 1);
  }
}

async function loadPdf() {
  try {
    if (!process.client || !PDFJS) return;
    
    isLoading.value = true;
    error.value = null;
    renderedPages.clear();
    
    pdfDocument = await PDFJS.getDocument(props.pdf).promise;
    totalPages.value = pdfDocument.numPages;
    
    await nextTick();
    
    isLoading.value = false;
    
    // Render first page
    await nextTick();
    await renderPage(1);
  } catch (e) {
    console.error('Error loading PDF:', e);
    error.value = 'No se pudo cargar el archivo PDF.';
    isLoading.value = false;
  }
}

async function goToPage(pageNum) {
  if (pageNum < 1 || pageNum > totalPages.value) return;
  currentPage.value = pageNum;
  await nextTick();
  await renderCurrentSpread();
}

async function nextPage() {
  if (currentPage.value >= totalPages.value || isAnimating.value) return;
  
  isAnimating.value = true;
  animationClass.value = 'slide-left';
  
  setTimeout(async () => {
    if (currentPage.value === 1) {
      // From first page, jump to page 3 (showing 2-3 spread)
      currentPage.value = Math.min(3, totalPages.value);
    } else {
      currentPage.value = Math.min(totalPages.value, currentPage.value + 2);
    }
    await renderCurrentSpread();
    
    setTimeout(() => {
      isAnimating.value = false;
      animationClass.value = '';
    }, 100);
  }, 300);
}

async function prevPage() {
  if (currentPage.value <= 1 || isAnimating.value) return;
  
  isAnimating.value = true;
  animationClass.value = 'slide-right';
  
  setTimeout(async () => {
    if (currentPage.value === 2 || currentPage.value === 3) {
      // Go back to first page
      currentPage.value = 1;
    } else {
      currentPage.value = Math.max(1, currentPage.value - 2);
    }
    await renderCurrentSpread();
    
    setTimeout(() => {
      isAnimating.value = false;
      animationClass.value = '';
    }, 100);
  }, 300);
}

async function changeZoom(delta) {
  const newZoom = Math.max(0.5, Math.min(2.5, zoomLevel.value + delta));
  if (newZoom === zoomLevel.value) return;
  
  zoomLevel.value = newZoom;
  renderedPages.clear();
  await renderCurrentSpread();
}

onMounted(async () => {
  try {
    if (!process.client) return;
    
    const pdfModule = await import('pdfjs-dist/build/pdf.mjs');
    PDFJS = pdfModule;

    const workerSrcModule = await import('pdfjs-dist/build/pdf.worker.mjs?url');
    const workerSrc = workerSrcModule.default || workerSrcModule;
    if (PDFJS && PDFJS.GlobalWorkerOptions) {
      PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;
    }

    await loadPdf();
  } catch (e) {
    console.error('Error initializing PDF viewer:', e);
    error.value = 'No se pudo inicializar el visor de PDF.';
    isLoading.value = false;
  }
});

onBeforeUnmount(() => {
  if (pdfDocument) {
    pdfDocument.destroy();
  }
});

watch(() => props.pdf, () => {
  if (process.client && PDFJS) {
    loadPdf();
  }
});
</script>

<style scoped>
.pdf-viewer-container {
  position: relative;
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(97, 18, 50, 0.95);
  z-index: 100;
  color: white;
  gap: 1rem;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.2);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left-color: #fff;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.pdf-viewer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.controls-top {
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(135deg, #611232 0%, #4D0E28 100%);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.page-nav,
.zoom-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.control-button {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.control-button:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.control-button:disabled {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  cursor: not-allowed;
  opacity: 0.5;
}

.page-indicator,
.zoom-indicator {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  min-width: 120px;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.pages-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1rem;
  min-height: calc(100vh - 150px);
  overflow: auto;
}

/* Transition overlay */
.transition-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(97, 18, 50, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  padding: 1.5rem;
}

.transition-spinner {
  border: 3px solid rgba(97, 18, 50, 0.2);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-top-color: #611232;
  animation: spin 0.6s linear infinite;
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.2s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
}

.book-spread {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;
  perspective: 1500px;
  animation: fadeIn 0.5s ease-out;
}

.book-spread.page-turning {
  pointer-events: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Page turning animations */
.slide-left {
  animation: slideOutLeft 0.3s ease-out;
}

.slide-right {
  animation: slideOutRight 0.3s ease-out;
}

@keyframes slideOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-30px) scale(0.95);
  }
  100% {
    opacity: 0;
    transform: translateX(-50px) scale(0.9);
  }
}

@keyframes slideOutRight {
  0% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translateX(30px) scale(0.95);
  }
  100% {
    opacity: 0;
    transform: translateX(50px) scale(0.9);
  }
}

.page-wrapper {
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(97, 18, 50, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: pageSlideIn 0.4s ease-out;
}

@keyframes pageSlideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.page-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(97, 18, 50, 0.15);
}

.left-page {
  border-radius: 8px 0 0 8px;
}

.right-page {
  border-radius: 0 8px 8px 0;
}

.empty-page {
  background: linear-gradient(135deg, #611232 0%, #4D0E28 100%);
  min-width: 200px;
  min-height: 400px;
}

.page-canvas {
  display: block;
  max-width: 100%;
  height: auto;
}

.error-message {
  color: #dc3545;
  text-align: center;
  padding: 2rem;
  background: white;
  margin: 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  border-left: 4px solid #dc3545;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
  .book-spread {
    flex-direction: column;
    gap: 2rem;
  }
  
  .left-page,
  .right-page {
    border-radius: 8px;
  }
  
  .empty-page {
    display: none;
  }
}

@media (max-width: 768px) {
  .controls-top {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .control-button {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .pages-container {
    padding: 1.5rem 0.5rem;
  }
}
</style>
