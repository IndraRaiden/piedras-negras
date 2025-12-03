<template>
  <div>
    <BannerV2
      title="Requisitos para Proveedores (Personas Físicas)"
      subtitle="Documentación necesaria"
    />
    <div class="container mx-auto px-4 py-8">
      <ClientOnly>
        <PdfFlipbook pdf="/files/PROVEEDOR PERSONAS FISICAS (Requisitos).pdf" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue';
import PdfFlipbook from '~/components/PdfFlipbook.vue';

useHead({
  title: 'Requisitos para Proveedores',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }]
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
