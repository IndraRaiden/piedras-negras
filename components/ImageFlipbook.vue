<template>
  <div class="pdf-flipbook-container">
    <div v-if="!pages || !pages.length" class="loading-overlay">
      <p>No hay páginas para mostrar.</p>
    </div>
    <div v-else class="flipbook-wrapper">
      <flipbook
        class="flipbook"
        :pages="pages"
        :start-page="0"
        v-slot="flipbook"
      >
        <div class="flipbook-controls">
          <button @click="flipbook.flipLeft()" class="control-button prev-button">
            &lt; Anterior
          </button>
          <span class="page-indicator">
            Página {{ flipbook.page }} de {{ flipbook.numPages }}
          </span>
          <button @click="flipbook.flipRight()" class="control-button next-button">
            Siguiente &gt;
          </button>
        </div>
      </flipbook>
    </div>
  </div>
</template>

<script setup>
import Flipbook from 'flipbook-vue'

const props = defineProps({
  pages: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.pdf-flipbook-container {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
}

.flipbook-wrapper {
  width: 90%;
  height: 90%;
}

.flipbook {
  width: 100%;
  height: 100%;
}

.flipbook-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.control-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: background-color 0.3s;
}

.control-button:hover {
  background-color: #0056b3;
}

.page-indicator {
  font-size: 1rem;
  color: #333;
}
</style>
