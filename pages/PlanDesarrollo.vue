<template>
  <div>
    <!-- Banner Section using BannerV2 component -->
    <BannerV2
      title="Plan Municipal de Desarrollo"
      subtitle="Nuestra visión y objetivos para el futuro de Piedras Negras"
      :cards="[]"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Componente de Formulario de Propuestas -->
      <FormularioPropuestas class="mb-16" />
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import FormularioPropuestas from '~/components/FormularioPropuestas.vue'

definePageMeta({
  title: 'Plan Municipal de Desarrollo',
  layout: 'default'
})
</script>

<style scoped>
/* Add your styles here */
</style>
