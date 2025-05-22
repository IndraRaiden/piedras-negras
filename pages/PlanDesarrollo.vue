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
      
      <!-- Diagnóstico Derechos Humanos y Migración -->
      <div id="diagnostico-derechos-humanos-migracion-section">
        <DiagnosticoDerechosHumanosYMigracion />
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
      
      <!-- Objetivo Desarrollo Sustentable -->
      <div id="objetivo-desarrollo-sustentable-section" class="mb-16">
        <ObjetivoDesarrolloSustentable />
      </div>
      
      <!-- Objetivo Derechos Humanos y Migración -->
      <div id="objetivo-derechos-humanos-migracion-section" class="mb-16">
        <ObjetivoDerechosHumanosYMigracion />
      </div>
      
      <!-- Diagnóstico Igualdad Sustantiva y Derechos de las Mujeres -->
      <div id="diagnostico-igualdad-section" class="mb-16">
        <DiagnosticoIgualdad />
      </div>
      
      <!-- Objetivo Igualdad Sustantiva y Derechos de las Mujeres -->
      <div id="objetivo-igualdad-section" class="mb-16">
        <ObjetivoIgualdad />
      </div>
      
      <!-- Diagnóstico Tejido Social Fuerte -->
      <div id="diagnostico-tejido-social-section" class="mb-16">
        <DiagnosticoTejidoSocial />
      </div>
      
      <!-- Diagnóstico Inclusión y Sanación Familiar -->
      <div id="diagnostico-inclusion-section" class="mb-16">
        <DiagnosticoInclusion />
      </div>
      
      <!-- Objetivo Inclusión y Sanación Familiar -->
      <div id="objetivo-inclusion-section" class="mb-16">
        <ObjetivoInclusion />
      </div>
      
      <!-- Diagnóstico Gobierno Digital -->
      <div id="diagnostico-gobierno-digital-section" class="mb-16">
        <DiagnosticoGobiernoDigital />
      </div>
      
      <!-- Diagnóstico Justicia a Grupos Vulnerables -->
      <div id="diagnostico-justicia-section" class="mb-16">
        <DiagnosticoJusticia />
      </div>
      
      <!-- Objetivo Justicia a Grupos Vulnerables -->
      <div id="objetivo-justicia-section" class="mb-16">
        <ObjetivoJusticia />
      </div>
      
      <!-- Objetivos de Gobierno Inteligente -->
      <div id="objetivo-gobierno-digital-section" class="mb-16">
        <ObjetivoGobiernoDigital />
      </div>
      
      <!-- Líneas de Acción Gobernanza con Justicia y Participación Ciudadana -->
      <div id="lineas-accion-gobernanza-section" class="mb-16">
        <LineasAccionGobernanza />
      </div>
      
      <!-- Líneas de Acción Desarrollo con Bienestar y Humanismo -->
      <div id="lineas-accion-bienestar-section" class="mb-16">
        <LineasAccionBienestar />
      </div>
      
      <!-- Líneas de Acción Economía Moral y Trabajo -->
      <div id="lineas-accion-economia-section" class="mb-16">
        <LineasAccionEconomia />
      </div>
      
      <!-- Líneas de Acción Ciudad Próspera y Conectada -->
      <div id="lineas-accion-ciudad-section" class="mb-16">
        <LineasAccionCiudad />
      </div>
      
      <!-- Líneas de Acción Desarrollo Sustentable -->
      <div id="lineas-accion-sustentable-section" class="mb-16">
        <LineasAccionSustentable />
      </div>
      
      <!-- Líneas de Acción Derechos Humanos y Migración -->
      <div id="lineas-accion-derechos-section" class="mb-16">
        <LineasAccionDerechos />
      </div>
      
      <!-- Líneas de Acción Igualdad Sustantiva y Derechos de las Mujeres -->
      <div id="lineas-accion-igualdad-section" class="mb-16">
        <LineasAccionIgualdad />
      </div>
      
      <!-- Líneas de Acción Tejido Social Fuerte -->
      <div id="lineas-accion-tejido-section" class="mb-16">
        <LineasAccionTejido />
      </div>
      
      <!-- Líneas de Acción Inclusión y Sanación Familiar -->
      <div id="lineas-accion-inclusion-section" class="mb-16">
        <LineasAccionInclusion />
      </div>
      
      <!-- Líneas de Acción Justicia a Grupos Vulnerables -->
      <div id="lineas-accion-justicia-section" class="mb-16">
        <LineasAccionJusticia />
      </div>
      
      <!-- Líneas de Acción Gobierno Inteligente -->
      <div id="lineas-accion-gobierno-section" class="mb-16">
        <LineasAccionGobierno />
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
import ObjetivoDesarrolloSustentable from '~/components/plan/ObjetivoDesarrolloSustentable.vue'
import DiagnosticoDerechosHumanosYMigracion from '~/components/plan/DiagnosticoDerechosHumanosYMigracion.vue'
import ObjetivoDerechosHumanosYMigracion from '~/components/plan/ObjetivoDerechosHumanosYMigracion.vue'
import DiagnosticoIgualdad from '~/components/plan/DiagnosticoIgualdad.vue'
import ObjetivoIgualdad from '~/components/plan/ObjetivoIgualdad.vue'
import DiagnosticoTejidoSocial from '~/components/plan/DiagnosticoTejidoSocial.vue'
import DiagnosticoInclusion from '~/components/plan/DiagnosticoInclusion.vue'
import ObjetivoInclusion from '~/components/plan/ObjetivoInclusion.vue'
import DiagnosticoGobiernoDigital from '~/components/plan/DiagnosticoGobiernoDigital.vue'
import ObjetivoGobiernoDigital from '~/components/plan/ObjetivoGobiernoDigital.vue'
import TestComponent from '~/components/plan/TestComponent.vue'
import DiagnosticoJusticia from '~/components/plan/DiagnosticoJusticia.vue'
import ObjetivoJusticia from '~/components/plan/ObjetivoJusticia.vue'
import LineasAccionGobernanza from '~/components/plan/LineasAccionGobernanza.vue'
import LineasAccionEconomia from '~/components/plan/LineasAccionEconomia.vue'
import LineasAccionBienestar from '~/components/plan/LineasAccionBienestar.vue'
import LineasAccionCiudad from '~/components/plan/LineasAccionCiudad.vue'
import LineasAccionSustentable from '~/components/plan/LineasAccionSustentable.vue'
import LineasAccionDerechos from '~/components/plan/LineasAccionDerechos.vue'
import LineasAccionIgualdad from '~/components/plan/LineasAccionIgualdad.vue'
import LineasAccionTejido from '~/components/plan/LineasAccionTejido.vue'
import LineasAccionInclusion from '~/components/plan/LineasAccionInclusion.vue'
import LineasAccionJusticia from '~/components/plan/LineasAccionJusticia.vue'
import LineasAccionGobierno from '~/components/plan/LineasAccionGobierno.vue'

definePageMeta({
  title: 'Plan Municipal de Desarrollo',
  layout: 'default'
})
</script>

<style scoped>
/* Add your styles here */
</style>
