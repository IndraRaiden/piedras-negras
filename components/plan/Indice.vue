<template>
  <div class="indice-component">
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-primary mb-6">Índice</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="space-y-4">
          <!-- Main sections -->
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('introduccion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Introducción</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">5</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('marco-juridico-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Marco Jurídico</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">8</span>
          </div>
          
          <!-- Subsections with indent -->
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('leyes-nacionales-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Leyes y Reglamentos Nacionales</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">8</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('leyes-estatales-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Leyes y Reglamentos Estatales</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">8</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('reglamentacion-municipal-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Reglamentación Municipal</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">9</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('foros-consulta-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Foros de Consulta Ciudadana "Tu nueva Historia"</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">13</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('fase-promocion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Fase de Promoción de los Foros de Consulta Ciudadana para el Plan Municipal de Desarrollo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">13</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('mecanismos-participacion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Mecanismos de Participación Ciudadana</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">14</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('logistica-foros-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Logística de los Foros de Consulta Ciudadana</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">14</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('desarrollo-hechos-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Desarrollo de los Hechos en Foros de Consulta Ciudadana</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">17</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('clasificacion-peticiones-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Clasificación de las Peticiones</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">24</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-gobernanza-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Gobernanza con Justicia y Participación Ciudadana</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">25</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-gobernanza-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Gobernanza con Justicia y Participación Ciudadana</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">31</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-desarrollo-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Desarrollo con Bienestar y Humanismo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">30</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-bienestar-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo General de Desarrollo con Bienestar y Humanismo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">36</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-economia-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Economía Moral y Trabajo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">41</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-economia-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo General en Economía Moral y Trabajo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">44</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-ciudad-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Ciudad Próspera y Conectada</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">47</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-ciudad-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo General en Ciudad Próspera y Conectada</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">50</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-desarrollo-sustentable-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Desarrollo Sustentable</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">52</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-desarrollo-sustentable-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Desarrollo Sustentable</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">54</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-derechos-humanos-migracion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Derechos Humanos y Migración</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">57</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-derechos-humanos-migracion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Derechos Humanos y Migración</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">61</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-igualdad-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Igualdad Sustantiva y Derechos de las Mujeres</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">64</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-igualdad-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Igualdad Sustantiva y Derechos de las Mujeres</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">67</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-tejido-social-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Tejido Social Fuerte</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">68</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('atencion-juventud-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Atención a la Juventud</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">68</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('desarrollo-rural-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Desarrollo Rural</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">69</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('educacion-arte-cultura-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Educación, Arte y Cultura</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">69</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('fomento-deportivo-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Fomento Deportivo y Centro Acuático de Piedras Negras</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">70</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-tejido-social-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Tejido Social Fuerte</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">72</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('atencion-juventud-objetivo-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Atención a la Juventud</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">72</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('desarrollo-rural-objetivo-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Desarrollo Rural</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">72</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('educacion-arte-cultura-objetivo-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Educación, Arte y Cultura</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">72</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <a @click.prevent="scrollToSection('fomento-deportivo-objetivo-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-medium text-lg group-hover:translate-x-1 transition-transform duration-300">Fomento Deportivo y Centro Acuático de Piedras Negras</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">73</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-inclusion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnostico Inclusión y Sanación Familiar</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">74</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-inclusion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Inclusión y Sanación Familiar</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">77</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-gobierno-digital-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Gobierno Digital</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">80</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('diagnostico-justicia-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Diagnóstico Justicia a Grupos Vulnerables</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">82</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-justicia-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivo Justicia a Grupos Vulnerables</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">83</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('objetivo-gobierno-digital-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Objetivos Gobierno Inteligente</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">83</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-gobernanza-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Gobernanza con Justicia y Participación Ciudadana</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">85</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.    Transparencia y Anticorrupción</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">85</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.2 Municipio Transparente</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">85</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.3 Gobierno Abierto y Digital</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">85</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.4 Gobierno Conectado</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">86</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.5 Participación Ciudadana y Democracia Local</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">86</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.6   Justicia Cívica y Proximidad</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">86</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.7     Innovación Tecnológica y Seguridad</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">87</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.8     Policías Profesionales y con una Mejor Calidad de Vida</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">87</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">1.9     Protección Civil y Cultura de Prevención</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">88</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-bienestar-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Desarrollo con Bienestar y Humanismo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">89</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">2. Programas Sociales</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">89</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">2.2 Salud Integral y Preventiva</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">89</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">2.4    Centros Comunitarios</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">92</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-economia-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Economía Moral y Trabajo</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">92</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">3.2    Turismo Cultural</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">93</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">3.3    Ruta Fiscal</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">94</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">3.4.    Apoyo a Pymes</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">95</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">3.5    Trabajo Digno</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">96</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-ciudad-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Ciudad Próspera y Conectada</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">97</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">4.2 Gestión de Proyectos y Obras de Infraestructura</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">98</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">4.3    Ingeniería Vial y Movilidad Urbana Sustentable</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">100</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">4.4    Alumbrado Público</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">101</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-sustentable-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Desarrollo Sustentable</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">102</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">5.1 Conservación de Ecosistemas y Áreas Naturales</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">102</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">5.2 Cuidado y Recuperación de la Calidad del Medio Ambiente</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">104</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">5.3 Uso Responsable y la Conservación del Agua</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">104</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">5.4 Bienestar Animal</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">105</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">5.5    Manejo Adecuado y Sostenible de Residuos</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">106</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-derechos-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Derechos Humanos y Migración</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">107</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">6. Derechos Humanos y Migración</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">107</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-igualdad-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Igualdad Sustantiva y Derechos de las Mujeres</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">108</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">7. Derechos Humanos y Migración</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">108</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-tejido-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Tejido Social Fuerte</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">110</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">8. 1 Atención a la Juventud</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">110</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">8.2 Desarrollo Rural</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">111</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">8.3 Educación, Arte y Cultura</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">112</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">8.4 Fomento Deportivo y Centro Acuático de Piedras Negras</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">116</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-inclusion-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Inclusión y Sanación Familiar</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">117</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">9.1 Coordinación del Adulto Mayor</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">117</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">9.2  Coordinación de Atención a Personas con Discapacidad</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">119</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">9.3 Procuraduría para Niños, Niñas y la Familia</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">120</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">9.4 Centro de Atención a Adolescentes</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">121</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">9.5 Centro de Atención Infantil</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">121</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-justicia-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Justicia a Grupos Vulnerables</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">122</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">10.1 Justicia a Grupos Vulnerables</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">122</span>
          </div>
          
          <div class="flex justify-between items-baseline">
            <a @click.prevent="scrollToSection('lineas-accion-gobierno-section')" href="#" class="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group">
              <h3 class="font-bold text-xl group-hover:translate-x-1 transition-transform duration-300">Líneas de Acción Gobierno Inteligente</h3>
            </a>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-bold">123</span>
          </div>
          
          <div class="flex justify-between items-baseline ml-8">
            <h3 class="font-medium text-lg">11.1 Gobierno Inteligente</h3>
            <div class="border-b border-dashed border-gray-400 flex-grow mx-2"></div>
            <span class="font-medium">123</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Add a small delay to ensure the animation works properly
    setTimeout(() => {
      // Calculate position with offset for better positioning
      const offset = 80; // Adjust this value based on your header height or desired spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 100);
  }
}
</script>

<style scoped>
.indice-component {
  /* Add any component-specific styles here */
}
</style>
