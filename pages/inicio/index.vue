<template>
  <div class="w-full">
    <!-- Componente separado: LazyLoadHero (carga optimizada) -->
    <LazyLoadHero />

    <!-- Componente separado: TuNuevaHistoria -->
    <TuNuevaHistoria />

    <!-- Componente separado: SeccionesHome -->
    <SeccionesHome />

    <!-- Componente NUEVO: UltimasNoticias -->
    <UltimasNoticias />
  </div>
</template>

<script setup>
/**
 * Importamos los componentes separados.
 * Ajusta las rutas según la ubicación real de tus archivos .vue
 */
import LazyLoadHero from '~/components/inicio/LazyLoadHero.vue'
import TuNuevaHistoria from '~/components/inicio/TuNuevaHistoria.vue'
import SeccionesHome from '~/components/inicio/SeccionesHome.vue'
import UltimasNoticias from '~/components/inicio/UltimasNoticias.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
