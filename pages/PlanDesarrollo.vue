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
      
      <!-- Index Section -->
      <Indice class="mb-16" />
      
      <!-- Mensaje del Presidente -->
      <div id="introduccion-section">
        <Introduccion />
      </div>
      
      <!-- Marco Jurídico -->
      <div id="marco-juridico-section">
        <MarcoJuridico />
      </div>
      
      <!-- Foros de Consulta Ciudadana -->
      <div id="foros-consulta-section">
        <ForosConsultaCiudadana />
      </div>
      
      <!-- Ejes Temáticos de los Foros -->
      <div id="ejes-tematicos-section">
        <EjesForosTematicos />
      </div>
      
      <!-- Diagnóstico Gobernanza -->
      <div id="diagnostico-gobernanza-section">
        <DiagnosticoGobernanza />
      </div>
      
      <!-- Diagnóstico Desarrollo -->
      <div id="diagnostico-desarrollo-section">
        <DiagnosticoDesarrollo />
      </div>
      
      <!-- Objetivo Bienestar -->
      <div id="objetivo-bienestar-section">
        <ObjetivoBienestar />
      </div>
      
      <!-- Diagnóstico Economía -->
      <div id="diagnostico-economia-section">
        <DiagnosticoEconomia />
      </div>
      
      <!-- Diagnóstico Ciudad -->
      <div id="diagnostico-ciudad-section">
        <DiagnosticoCiudad />
      </div>
      
      <!-- Objetivo Ciudad -->
      <div id="objetivo-ciudad-section">
        <ObjetivoCiudad />
      </div>
      
      <!-- Diagnóstico Desarrollo Sustentable -->
      <div id="diagnostico-desarrollo-sustentable-section">
        <DiagnosticoDesarrolloSustentable />
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import FormularioPropuestas from '~/components/FormularioPropuestas.vue'
import Indice from '~/components/plan/Indice.vue'
import Introduccion from '~/components/plan/Introduccion.vue'
import MarcoJuridico from '~/components/plan/MarcoJuridico.vue'
import ForosConsultaCiudadana from '~/components/plan/ForosConsultaCiudadana.vue'
import EjesForosTematicos from '~/components/plan/EjesForosTematicos.vue'
import DiagnosticoGobernanza from '~/components/plan/DiagnosticoGobernanza.vue'
import DiagnosticoDesarrollo from '~/components/plan/DiagnosticoDesarrollo.vue'
import ObjetivoBienestar from '~/components/plan/ObjetivoBienestar.vue'
import DiagnosticoEconomia from '~/components/plan/DiagnosticoEconomia.vue'
import DiagnosticoCiudad from '~/components/plan/DiagnosticoCiudad.vue'
import ObjetivoCiudad from '~/components/plan/ObjetivoCiudad.vue'
import DiagnosticoDesarrolloSustentable from '~/components/plan/DiagnosticoDesarrolloSustentable.vue'

definePageMeta({
  title: 'Plan Municipal de Desarrollo',
  layout: 'default'
})
</script>

<style scoped>
/* Add your styles here */
</style>
