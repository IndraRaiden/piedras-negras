<template>
  <div>
    <BannerV2
      title="Archivos de Noviembre"
      subtitle="Descargas de documentos del mes"
    />

    <div class="container mx-auto px-4 pt-4 pb-8">
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div v-if="pending" class="text-center mb-6">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e1210] mx-auto"></div>
        </div>
        <div v-else-if="error" class="text-red-600 text-center mb-6">
          No se pudieron cargar los archivos.
        </div>
        <ul v-else class="space-y-3">
          <li v-for="f in files" :key="f.url" class="flex items-center">
            <div class="text-[#611232] mr-3">
              <Icon name="mdi:file-pdf-box" class="w-6 h-6" />
            </div>
            <span class="text-gray-900 break-all">{{ formatName(f.name) }}</span>
            <a :href="f.url" target="_blank" rel="noopener noreferrer" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
              Ver documento →
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
 import { computed } from 'vue'
 import BannerV2 from '~/components/BannerV2.vue'
 const { data, pending, error } = useFetch('/api/noviembre', { server: false, lazy: true })
 const files = computed(() => (data.value?.files ?? []))
 useHead({
   title: 'Archivos Noviembre',
   meta: [{ name: 'robots', content: 'noindex, nofollow' }]
 })
 function formatName(name) {
   return name
     .replace(/-compressed/gi, '')
     .replace(/\.pdf$/i, '')
 }
 function formatSize(bytes) {
   if (!bytes && bytes !== 0) return ''
   const kb = bytes / 1024
   if (kb < 1024) return `${kb.toFixed(0)} KB`
   const mb = kb / 1024
   return `${mb.toFixed(2)} MB`
 }

</script>

<style scoped>

</style>
