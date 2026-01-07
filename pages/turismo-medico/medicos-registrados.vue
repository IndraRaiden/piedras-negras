<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex flex-col items-center mb-6">
          <img src="/images/turismo-medico/mainlogo.jpg" alt="Logo Turismo Médico" class="max-w-full h-auto mb-4 max-h-[100px]" />
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
              Médicos Registrados
            </span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Directorio oficial de profesionales de la salud acreditados en el programa de Turismo Médico de Piedras Negras
          </p>
        </div>

        <!-- Back Button -->
        <div class="mb-8">
          <NuxtLink to="/turismo-medico" class="inline-flex items-center px-4 py-2 text-red-900 hover:text-red-700 font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Turismo Médico
          </NuxtLink>
        </div>
      </div>

      <!-- Search and Filter Section -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label for="search" class="block text-sm font-medium text-gray-700 mb-2">Buscar por nombre</label>
            <input 
              id="search"
              v-model="searchQuery" 
              type="text" 
              placeholder="Nombre del médico o clínica..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent"
            />
          </div>
          <div>
            <label for="specialty" class="block text-sm font-medium text-gray-700 mb-2">Especialidad</label>
            <select 
              id="specialty"
              v-model="selectedSpecialty"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900 focus:border-transparent"
            >
              <option value="">Todas las especialidades</option>
              <option value="Análisis de Laboratorio">Análisis de Laboratorio</option>
              <option value="Cirugía Bariátrica">Cirugía Bariátrica</option>
              <option value="Cirugía General">Cirugía General</option>
              <option value="Cirugía Maxilofacial">Cirugía Maxilofacial</option>
              <option value="Ginecología">Ginecología</option>
              <option value="Hospital">Hospital</option>
              <option value="Intervencionismo Vascular">Intervencionismo Vascular</option>
              <option value="Medicina Estética">Medicina Estética</option>
              <option value="Medicina General">Medicina General</option>
              <option value="Medicina Interna">Medicina Interna</option>
              <option value="Nutrición">Nutrición</option>
              <option value="Odontología">Odontología</option>
              <option value="Oncología">Oncología</option>
              <option value="Ortodoncia">Ortodoncia</option>
              <option value="Psicología Clínica">Psicología Clínica</option>
              <option value="Traumatología">Traumatología</option>
              <option value="Urología">Urología</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-6">
        <p class="text-gray-600">
          Mostrando <span class="font-semibold text-red-900">{{ filteredDoctors.length }}</span> 
          {{ filteredDoctors.length === 1 ? 'profesional' : 'profesionales' }} de la salud
        </p>
      </div>

      <!-- Doctors Grid -->
      <div v-if="filteredDoctors.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="doctor in filteredDoctors" 
          :key="doctor.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <!-- Doctor Image -->
          <div class="h-64 md:h-80 lg:h-[500px] bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center overflow-hidden">
            <img 
              v-if="doctor.image" 
              :src="doctor.image" 
              :alt="doctor.name"
              :class="[
                'w-full h-full object-cover',
                (doctor.id === 2 || doctor.id === 12) ? 'object-[center_20%]' : '',
                doctor.id === 23 ? 'object-[center_65%]' : ''
              ]"
            />
            <div v-else class="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <!-- Doctor Info -->
          <div class="p-6">
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900 mb-1">{{ doctor.name }}</h3>
              <p class="text-red-900 font-semibold">{{ doctor.specialty }}</p>
            </div>

            <div class="space-y-2 mb-4">
              <div class="flex items-start text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-900 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{{ doctor.clinic }}</span>
              </div>

              <div class="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ doctor.phone }}</span>
              </div>

              <div v-if="doctor.specialtyEn" class="flex items-start text-xs text-gray-500 italic">
                <span>{{ doctor.specialtyEn }}</span>
              </div>
            </div>

            <!-- Accreditation Badge -->
            <div class="flex items-center justify-center bg-red-50 rounded-lg p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm font-semibold text-red-900">Acreditado por el Municipio</span>
            </div>

            <!-- Website Button -->
            <a v-if="doctor.website" :href="doctor.website" target="_blank" rel="noopener noreferrer" class="block w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition-colors font-medium text-center">
              Visitar Sitio Web
            </a>
            <div v-else class="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded-lg font-medium text-center cursor-not-allowed">
              Sin sitio web
            </div>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <div v-else class="bg-white rounded-xl shadow-lg p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No se encontraron resultados</h3>
        <p class="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
      </div>

      <!-- Information Section -->
      <div class="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">¿Deseas formar parte del directorio?</h2>
        <div class="max-w-2xl mx-auto">
          <p class="text-gray-600 text-center mb-6">
            Si eres un profesional de la salud y deseas ser parte de nuestra red oficial de prestadores de servicios médicos, regístrate en nuestro programa.
          </p>
          <div class="flex justify-center">
            <a 
              href="https://piedrasnegras.tumunicipio.mx/ev/67f13d5dea47da07ae3a72d2/67a2593a26e531b8f586911e" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-900 to-red-700 text-white font-medium rounded-lg hover:shadow-lg transition-shadow"
            >
              Registrarse Ahora
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Médicos Registrados | Turismo Médico | Piedras Negras',
  meta: [
    { name: 'description', content: 'Directorio oficial de profesionales de la salud acreditados en el programa de Turismo Médico de Piedras Negras, Coahuila.' }
  ]
})

// Search and filter state
const searchQuery = ref('')
const selectedSpecialty = ref('')

// Real doctors data from official catalog
const doctors = ref([
  // ANÁLISIS DE LABORATORIO
  {
    id: 1,
    name: 'QFB. Alan Valdéz Juárez',
    specialty: 'Análisis de Laboratorio',
    specialtyEn: 'Clinical Tests',
    clinic: 'Laboratorios Valdés',
    phone: 'Mx +52 (878) 784-0214',
    website: 'https://labvaldes.com/',
    image: '/images/retmede docs/QFB.AlanValdes.jpg'
  },
  // CIRUGÍA BARIÁTRICA
  {
    id: 2,
    name: 'Dr. Guillermo Álvarez Valdés',
    specialty: 'Cirugía Bariátrica',
    specialtyEn: 'Metabolic & Bariatric Surgery',
    clinic: 'Endohospital',
    phone: 'Mx: +52 (878)-141-0620 / US: 01-800-831-8115',
    website: 'https://www.endohospital.mx/',
    image: '/images/retmede docs/Dr.GuillermoAlvarez.jpg'
  },
  {
    id: 3,
    name: 'Dr. Cristóbal Garza',
    specialty: 'Cirugía Bariátrica',
    specialtyEn: 'Minimal Invasive and Bariatric Surgery',
    clinic: 'Dr. Cristóbal Garza-Clínica de Obesidad y Cirugía',
    phone: 'Mx +52 (878) 115 7532',
    website: 'https://drcristobalgarza.com/',
    image: '/images/retmede docs/Dr.CristobalGarza.jpg'
  },
  {
    id: 4,
    name: 'Dr. Gabriel Rosales',
    specialty: 'Cirugía General y Bariátrica',
    specialtyEn: 'General and Bariatric Surgery',
    clinic: 'Obesity Free',
    phone: '+52 (878) 117-5271',
    website: 'https://drgabrielrosales.com/home/',
    image: '/images/retmede docs/Dr.GabrielRosales.jpg'
  },
  // CIRUGÍA MAXILOFACIAL
  {
    id: 5,
    name: 'Dr. Alejo Francisco Villarreal Alanís',
    specialty: 'Cirugía Maxilofacial y Odontología',
    specialtyEn: 'Oral and Maxillofacial Surgery',
    clinic: 'Clínica CICEM',
    phone: 'Mx: +52 (878) 782 0576 / US: 830 968 0593',
    website: 'https://www.avmaxilofacial.com/',
    image: '/images/retmede docs/Dr.AlejoVillareall.jpg'
  },
  // GINECOLOGÍA
  {
    id: 6,
    name: 'Dr. Carlos Daniel Martínez García',
    specialty: 'Ginecología',
    specialtyEn: 'OB-GYN',
    clinic: 'Hospital y Maternidad MISMA',
    phone: 'Mx: +52 (878) 247 2885 / US: +1 (830)-872-61-73',
    website: 'https://www.hospitalmisma.com/',
    image: '/images/retmede docs/Dr.CarlosDanielMtz.jpg'
  },
  {
    id: 7,
    name: 'Dra. Marisol Becerra Villavicencio',
    specialty: 'Ginecología',
    specialtyEn: 'OB-GYN',
    clinic: 'Dra. Marisol Becerra Villavicencio Ginecología y Obstetricia',
    phone: 'Mx +52 (878) 157 0654',
    website: 'https://www.dramarisolbecerra.com/',
    image: '/images/retmede docs/Dra.MarisolBecerra.avif'
  },
  // HOSPITAL
  {
    id: 8,
    name: 'Dr. Adalberto Peña Chavez',
    specialty: 'Hospital',
    specialtyEn: 'Hospital',
    clinic: 'Clínica México',
    phone: '+52 (878) 782 1361',
    website: 'https://clinicamexico.com/en/',
    image: '/images/retmede docs/Dr.AdalbertoPeñaChavez.jpg'
  },
  // INTERVENCIONISMO VASCULAR
  {
    id: 9,
    name: 'Angiotac Center',
    specialty: 'Intervencionismo Vascular',
    specialtyEn: 'Vascular Intervention',
    clinic: 'Angiotac Center',
    phone: 'Mx: +52(878) 782 9824 / US: +1 (830) 325 1933',
    website: 'https://angiotacenter.com/home/',
    image: '/images/retmede docs/AngiotacCenter.png'
  },
  // MEDICINA ESTÉTICA
  {
    id: 10,
    name: 'Dra. Nydia Magali Felipe Vázquez',
    specialty: 'Medicina Estética',
    specialtyEn: 'Aesthetic Medicine & Longevity',
    clinic: 'Clínica Dra. Nydia Felipe',
    phone: 'Mx: +52 (878) 782 4297',
    website: 'https://www.dranydiafelipe.mx/',
    image: '/images/retmede docs/Dra.NydiaFelipe.avif'
  },
  {
    id: 11,
    name: 'Dr. Daniel Arredondo Pérez',
    specialty: 'Medicina Estética',
    specialtyEn: 'Aesthetic Medicine',
    clinic: 'VIEE medicina estética',
    phone: 'Mx: +52 (878) 100 0770 / US: (830) 498 4351',
    website: 'https://www.viee.com.mx/',
    image: '/images/retmede docs/Dr.DanielArredondo.avif'
  },
  // MEDICINA GENERAL Y NUTRICIÓN
  {
    id: 12,
    name: 'Dra. Beatriz Lourdes Hernández Ruiz',
    specialty: 'Medicina General y Nutrición',
    specialtyEn: 'General Medicine, Weight Management & Nutrition',
    clinic: 'Dra. Betty',
    phone: 'Mx +52 (878) 133 6452',
    website: 'https://drabetty.com/',
    image: '/images/retmede docs/Dra.BeatrizLourdes.jpg'
  },
  // MEDICINA INTERNA Y ONCOLOGÍA
  {
    id: 13,
    name: 'Dra. Karla Margoth Kancheff Carrales',
    specialty: 'Medicina Interna y Oncología',
    specialtyEn: 'Internal Medicine & Oncology',
    clinic: 'Oncología Médica',
    phone: 'Mx: +52 (878) 782 0024 / US: 210 664 5524',
    website: 'https://drakarlakancheff.com/',
    image: '/images/retmede docs/Dra.KarlaKancheff.jpg'
  },
  {
    id: 14,
    name: 'Dr. Jose Luis Herrera Garcia',
    specialty: 'Medicina Interna',
    specialtyEn: 'Internal Medicine',
    clinic: 'Medicina Interna JLH',
    phone: 'Mx: +52 (878) 782 2147',
    website: 'https://medicina-interna-jlh.webnode.mx/',
    image: '/images/retmede docs/Dr.JoseLuisHerrera.webp'
  },
  // ODONTOLOGÍA
  {
    id: 15,
    name: 'Dra. Karla Gabriela Lucio',
    specialty: 'Odontología',
    specialtyEn: 'Dentistry for children',
    clinic: 'Clinica Dental Dra. Karla Gabriela Lucio',
    phone: 'Mx: +52 (878) 158 8928',
    website: 'https://clinicadentaldrakarlalucio.com/contacto',
    image: '/images/retmede docs/Dra.KarlaGabrielaLucio.jpg'
  },
  {
    id: 16,
    name: 'Dra. Erika Alejandra Salazar Reyes',
    specialty: 'Odontología y Ortodoncia',
    specialtyEn: 'General dentistry and Orthodontics',
    clinic: 'Alegro Dental',
    phone: '+52 (878) 104 4528/ US +1 (830) 273 2842',
    website: 'https://www.alegrodental.com/',
    image: '/images/retmede docs/Dra.ErikaSalazar.avif'
  },
  {
    id: 17,
    name: 'Dr. Ángel de Dios Camarillo',
    specialty: 'Odontología y Ortodoncia',
    specialtyEn: 'Pediatric Dentist & Orthodontics',
    clinic: 'Smile Kids',
    phone: 'Mx +52 (878) 782 1224',
    website: 'https://smilekidspn.com/',
    image: '/images/retmede docs/Dr.AngeldeDiosSmileKids.png'
  },
  // ORTODONCIA
  {
    id: 18,
    name: 'Dr. Jose Juan Cadena de la Garza',
    specialty: 'Ortodoncia',
    specialtyEn: 'Orthodontics',
    clinic: 'Cadent Dental office',
    phone: 'Mx +52 (878) 104-6330 / US +1 (210) 952-3041',
    website: 'https://www.cadentpiedrasnegras.com.mx/',
    image: '/images/retmede docs/Dr.JoseJuanCadena.avif'
  },
  {
    id: 19,
    name: 'Dr. Carlos Israel Rodriguez Jimenez',
    specialty: 'Ortodoncia',
    specialtyEn: 'Orthodontics',
    clinic: 'Integral Dent',
    phone: 'Mx +52 (878) 782 0564',
    website: 'https://www.integraldentpn.com/',
    image: '/images/retmede docs/Dr.CarlosIsrael.png'
  },
  {
    id: 20,
    name: 'Dr. Rogelio González Elguézabal',
    specialty: 'Ortodoncia',
    specialtyEn: 'Orthodontics',
    clinic: 'Prodentia',
    phone: 'Mx +52 (878) 790 7428',
    website: 'https://www.prodentiadentaloffice.com/',
    image: '/images/retmede docs/Dr.RogelioGonzalez.jpg'
  },
  {
    id: 21,
    name: 'Dra. Karla Imelda Rivera Gómez',
    specialty: 'Ortodoncia',
    specialtyEn: 'Orthodontics & Maxillofacial Orthopedics',
    clinic: 'Smile Kids',
    phone: 'Mx +52 (878) 782 1224',
    website: 'https://smilekidspn.com/',
    image: '/images/retmede docs/Dra.KarlaImeldaSmileKids.png'
  },
  {
    id: 22,
    name: 'Dr. Jesús Alonso Garza Sanchez',
    specialty: 'Ortodoncia',
    specialtyEn: 'Orthodontics and Orthopedics',
    clinic: 'VitaDent',
    phone: 'Mx +52 (878) 782 1224',
    website: 'https://www.vitadent.com.mx/',
    image: '/images/retmede docs/Dr. Jesus Alonso.jpg'
  },
  // ONCOLOGÍA
  {
    id: 23,
    name: 'Dr. Ivan Cruz Esquivel',
    specialty: 'Oncología',
    specialtyEn: 'Oncology Surgery',
    clinic: 'Dr. Ivan Cruz',
    phone: 'Mx: + 52 (877) 101 1456',
    website: 'https://www.oncologoivancruz.com/',
    image: '/images/retmede docs/Dr.IvanCruz.avif'
  },
  // PSICOLOGÍA CLÍNICA
  {
    id: 24,
    name: 'Psi. María de Jesús Pérez Martínez',
    specialty: 'Psicología Clínica',
    specialtyEn: 'Clinical Psychology',
    clinic: 'Psykeros',
    phone: 'Mx: + 52 (878)702 3641 / US: +1(830) 406 5517',
    website: 'https://psykeros.us/',
    image: '/images/retmede docs/Psi.MariadeJesusPerez.jpg'
  },
  // UROLOGÍA
  {
    id: 25,
    name: 'Dr. Omar Bárcenas',
    specialty: 'Urología',
    specialtyEn: 'Urology',
    clinic: 'Dr. Bárcenas Urología Avanzada',
    phone: 'Mx: +52 (800)062 4265 / US: +52 (210) 910-1062',
    website: 'https://urologodrbarcenas.com/',
    image: '/images/retmede docs/Dr.OmarBarcenas.webp'
  },
  // TRAUMATOLOGÍA
  {
    id: 26,
    name: 'Dr. Víctor Manuel Melgoza Castillo',
    specialty: 'Traumatología',
    specialtyEn: 'Traumatology and Orthopedics',
    clinic: 'Trauma Medic',
    phone: 'Mx: +52 (878) 782 1668 / US: (830) 872 6248',
    website: 'https://traumamedicpn.com/',
    image: '/images/retmede docs/Dr.VictorMelgoza.jpg'
  }
])

// Computed filtered doctors
const filteredDoctors = computed(() => {
  return doctors.value.filter(doctor => {
    const matchesSearch = searchQuery.value === '' || 
      doctor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      doctor.clinic.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesSpecialty = selectedSpecialty.value === '' || 
      doctor.specialty === selectedSpecialty.value
    
    return matchesSearch && matchesSpecialty
  })
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
