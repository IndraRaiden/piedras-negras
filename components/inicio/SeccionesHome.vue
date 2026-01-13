<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <!-- Header with decorative elements -->
            <div class="relative mb-16 text-center">
                <div class="relative">
                    <!-- Ajuste el tamaño de la fuente a text-2xl -->
                    <span class="bg-white px-6 text-2xl text-[#611232] font-semibold tracking-wider uppercase">
                        Servicios Municipales
                    </span>
                </div>
                <!-- Se eliminó la línea de "Secciones" -->
                <div class="relative mt-4">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-200"></div>
                    </div>
                </div>
                <p class="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
                    Accede a todos los servicios que el municipio tiene para ti
                </p>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="i in 6" :key="i" class="animate-pulse">
                    <div class="bg-gray-100 rounded-2xl p-8">
                        <div class="h-16 w-16 bg-gray-200 rounded-lg mb-8"></div>
                        <div class="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(section, index) in sections" 
                     :key="index"
                     class="group relative"
                     :class="{'opacity-0 animate-slide-up': !loading}"
                     :style="{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }">
                    <template v-if="section.link === '/sections/obras-servicios-publicos' || section.link === '/sections/dispensario-medico'">
                        <div class="block relative overflow-hidden cursor-pointer"
                             :aria-label="section.title">
                            <!-- Card Container -->
                            <div class="bg-gray-50 rounded-2xl p-8 transition-all duration-300 
                                        group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1
                                        focus-within:ring-2 focus-within:ring-[#611232]">
                                <!-- Icon -->
                                <div class="relative w-20 h-20 mb-6">
                                    <div class="absolute inset-0 bg-[#611232]/10 rounded-xl transform 
                                                rotate-6 transition-transform group-hover:rotate-12"></div>
                                    <div class="absolute inset-0 bg-white rounded-xl transform 
                                                -rotate-3 transition-transform group-hover:rotate-0">
                                        <img v-if="section.image" :src="section.image" 
                                             :alt="section.title"
                                             class="w-full h-full object-contain p-3"
                                             loading="lazy"
                                             decoding="async" />
                                        <Icon v-else :name="section.icon" class="text-[#611232] w-12 h-12 m-auto flex items-center justify-center h-full" />
                                    </div>
                                </div>

                                <!-- Content -->
                                <h2 class="text-xl font-bold text-gray-900 mb-2 
                                           group-hover:text-[#611232] transition-colors">
                                    {{ section.title }}
                                </h2>
                                <p class="text-gray-600 mb-4">{{ section.description }}</p>

                                <!-- Action indicator -->
                                <div class="flex items-center text-[#611232] text-sm font-medium">
                                    <span class="mr-2">Explorar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         class="h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                                         fill="none" 
                                         viewBox="0 0 24 24" 
                                         stroke="currentColor">
                                        <path stroke-linecap="round" 
                                              stroke-linejoin="round" 
                                              stroke-width="2" 
                                              d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>

                            <!-- Decorative corner pattern -->
                            <div class="absolute top-0 right-0 w-24 h-24 transform translate-x-1/2 -translate-y-1/2
                                        bg-gradient-to-br from-[#611232]/20 to-[#611232]/5 rounded-full opacity-0
                                        group-hover:opacity-50 transition-opacity"></div>
                        </div>
                    </template>
                    <NuxtLink v-else :to="section.link" 
                             class="block relative overflow-hidden"
                             :aria-label="section.title">
                        <!-- Card Container -->
                        <div class="bg-gray-50 rounded-2xl p-8 transition-all duration-300 
                                    group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1
                                    focus-within:ring-2 focus-within:ring-[#611232]">
                            <!-- Icon -->
                            <div class="relative w-20 h-20 mb-6">
                                <div class="absolute inset-0 bg-[#611232]/10 rounded-xl transform 
                                            rotate-6 transition-transform group-hover:rotate-12"></div>
                                <div class="absolute inset-0 bg-white rounded-xl transform 
                                            -rotate-3 transition-transform group-hover:rotate-0">
                                    <img v-if="section.image" :src="section.image" 
                                         :alt="section.title"
                                         class="w-full h-full object-contain p-3"
                                         loading="lazy"
                                         decoding="async" />
                                    <Icon v-else :name="section.icon" class="text-[#611232] w-12 h-12 m-auto flex items-center justify-center h-full" />
                                </div>
                            </div>

                            <!-- Content -->
                            <h2 class="text-xl font-bold text-gray-900 mb-2 
                                       group-hover:text-[#611232] transition-colors">
                                {{ section.title }}
                            </h2>
                            <p class="text-gray-600 mb-4">{{ section.description }}</p>

                            <!-- Action indicator -->
                            <div class="flex items-center text-[#611232] text-sm font-medium">
                                <span class="mr-2">Explorar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     class="h-4 w-4 transform transition-transform group-hover:translate-x-1" 
                                     fill="none" 
                                     viewBox="0 0 24 24" 
                                     stroke="currentColor">
                                    <path stroke-linecap="round" 
                                          stroke-linejoin="round" 
                                          stroke-width="2" 
                                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>

                        <!-- Decorative corner pattern -->
                        <div class="absolute top-0 right-0 w-24 h-24 transform translate-x-1/2 -translate-y-1/2
                                    bg-gradient-to-br from-[#611232]/20 to-[#611232]/5 rounded-full opacity-0
                                    group-hover:opacity-50 transition-opacity"></div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)

const sections = ref([
    {
        title: 'DIF Municipal',
        description: 'Servicios y programas de asistencia social',
        image: '/images/iconos_secciones/Dif_guindo.png',
        link: '/dif-municipal'
    },
    {
        title: 'Paga Tu Predial',
        description: 'Realiza tu pago de manera fácil y segura',
        image: '/images/iconos_secciones/Predial_guindo.png',
        link: 'https://contupago.gob.mx/PUCC/#/pago-linea/obligaciones-padron/2'
    },
    {
        title: 'Dispensario Medico',
        description: 'Atención médica accesible',
        image: '/images/iconos_secciones/Dispensario_medico_guindo.png',
        link: '/sections/dispensario-medico'
    },
    {
        title: 'Obras y Servicios Públicos',
        description: 'Información sobre obras y servicios en tu ciudad',
        image: '/images/iconos_secciones/Obras_publicas_guindo.png',
        link: '/sections/obras-servicios-publicos'
    },
    {
        title: 'Ver Puentes Internacionales',
        description: 'Estado y tiempos de espera en cruces fronterizos',
        image: '/images/iconos_secciones/Puentes_guindo.png',
        link: '/sections/puentes-internacionales'
    },
    {
        title: 'Denuncia a Funcionario Público',
        description: 'Realiza denuncias sobre funcionarios públicos',
        link: '/sections/denuncia-funcionario',
        icon: 'lucide:shield-alert'
    }
])

onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 1000)
})
</script>

<style scoped>
.animate-slide-up {
    animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
