<template>
  <div>
    <BannerV2
      title="Libro de Diciembre"
      subtitle="Descargas de documentos del mes"
    />

    <div class="container mx-auto px-4 pt-4 pb-8">
      <!-- PDF Viewer Card -->
      <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <ClientOnly>
          <PdfFlipbook pdf="/files/test2/INFORME V2-compressed.pdf" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
 import BannerV2 from '~/components/BannerV2.vue'
 import PdfFlipbook from '~/components/PdfFlipbook.vue'
 useHead({
   title: 'Libro Diciembre',
   meta: [{ name: 'robots', content: 'noindex, nofollow' }]
 })

</script>

<style scoped>

</style>
