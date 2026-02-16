<!-- components/Navbar.vue -->
<template>
  <nav class="bg-white fixed w-full top-0 z-50 shadow-sm transition-all duration-300">
    <!-- Adjusted container classes for earlier cutoffs (using xl instead of 2xl) -->
    <div class="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
      <!-- Desktop Navigation -->
      <!-- Changed from 'hidden 2xl:block' to 'hidden xl:block' -->
      <div class="hidden xl:block py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/inicio" class="flex items-center flex-shrink-0 h-12">
            <img
              class="h-9 w-auto object-contain my-auto"
              src="/images/logo-nav.png"
              alt="Piedras Negras Logo"
            />
          </NuxtLink>

          <div class="flex items-center justify-between flex-1 mx-2 sm:mx-3 md:mx-4 lg:mx-6">
            <div
              class="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 lg:space-x-3 flex-grow"
            >
              <template
                v-for="(item, index) in navigationItems"
                :key="item.path"
              >
                <div class="relative group" v-if="item.hasSubmenu">
                  <button
                    class="px-2 py-2 text-sm xl:text-base transition-colors duration-300 whitespace-nowrap flex items-center group-hover:text-[#9D2449] h-full"
                    :class=" [
                      item.disabled
                        ? 'text-gray-300 cursor-not-allowed'
                        : route.path.startsWith(item.path) ||
                          (item.path === '/inicio' && route.path === '/inicio')
                        ? 'text-[#9D2449] font-medium border-b-2 border-[#9D2449]'
                        : 'text-[#2D2D2D] hover:text-[#9D2449] font-medium'
                    ]"
                    @click="!item.disabled && toggleSubmenu(item.name)"
                  >
                    <span class="flex items-center">
                      {{ item.name }}
                      <Icon
                        name="heroicons:chevron-down"
                        class="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        :class="{'group-hover:rotate-180': !item.disabled}"
                      />
                    </span>
                  </button>
                  <div
                    v-if="!item.disabled"
                    class="absolute left-0 mt-0 w-72 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left"
                    style="z-index: 1000;"
                  >
                    <NuxtLink
                      v-for="subItem in item.submenu"
                      :key="subItem.path"
                      :to="subItem.disabled ? '' : subItem.path"
                      class="block px-4 py-3 text-sm hover:bg-pink-50 transition-colors duration-200"
                      :class="{
                        'text-[#9D2449] bg-pink-50 font-medium': route.path === subItem.path,
                        'text-gray-700 hover:text-[#9D2449]': !subItem.disabled,
                        'text-gray-300 cursor-not-allowed': subItem.disabled
                      }"
                      @click="subItem.disabled && $event.preventDefault()"
                    >
                      {{ subItem.name }}
                    </NuxtLink>
                  </div>
                </div>
                <NuxtLink
                  v-else
                  :to="item.disabled ? '' : item.path"
                  class="px-2 py-2 text-sm xl:text-base transition-colors duration-300 whitespace-nowrap flex items-center h-full"
                  :class="[
                    item.disabled
                      ? 'text-gray-300 cursor-not-allowed'
                      : route.path === item.path || route.path === '/inicio' && item.path === '/inicio'
                      ? 'text-[#9D2449] font-medium border-b-2 border-[#9D2449]'
                      : 'text-[#2D2D2D] hover:text-[#9D2449] font-medium'
                  ]"
                  @click="item.disabled && $event.preventDefault()"
                >
                  <span class="flex items-center">{{ item.name }}</span>
                </NuxtLink>
                <div
                  v-if="index < navigationItems.length - 1"
                  class="h-6 w-px bg-gray-300"
                ></div>
              </template>
            </div>

            <div class="flex items-center space-x-0.5 ml-2 sm:ml-3 min-w-[110px] justify-end">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                :aria-label="social.name"
                class="text-[#9D2449] hover:text-[#2D2D2D] transition-colors duration-300 flex items-center w-6 h-6 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <!-- Changed from '2xl:hidden' to 'xl:hidden' -->
      <div class="xl:hidden">
        <!-- Mobile Header -->
        <div class="py-3">
          <div class="flex items-center justify-between">
            <NuxtLink to="/inicio" class="flex items-center flex-shrink-0 h-10">
              <img
                class="h-8 w-auto object-contain my-auto"
                src="/images/logo-nav.png"
                alt="Piedras Negras Logo"
              />
            </NuxtLink>
            <button
              @click="toggleMenu"
              class="text-[#2D2D2D] p-2 transition-colors duration-300 hover:text-[#9D2449]"
              :aria-expanded="isMenuOpen"
              aria-controls="mobile-menu"
              aria-label="Menu principal"
            >
              <Icon
                :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
                class="h-6 w-6"
              />
            </button>
          </div>
        </div>

        <!-- Mobile Menu with slide animation -->
        <div
          id="mobile-menu"
          class="transform transition-all duration-300 ease-in-out"
          :class="[ 
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
            isMenuOpen ? 'h-auto' : 'h-0'
          ]"
        >
          <div class="pt-2 pb-4 space-y-1">
            <template v-for="item in navigationItems" :key="item.path">
              <template v-if="item.hasSubmenu">
                <div>
                  <button
                    @click="!item.disabled && toggleSubmenu(item.name)"
                    class="w-full flex items-center justify-between px-4 py-2 text-[#2D2D2D] font-medium hover:text-[#9D2449] transition-colors duration-300"
                    :class="{'cursor-not-allowed': item.disabled}"
                  >
                    <span>{{ item.name }}</span>
                    <Icon
                      name="heroicons:chevron-down"
                      class="w-5 h-5 transition-transform duration-300"
                      :class="{ 'rotate-180': openSubmenu === item.name }"
                    />
                  </button>
                  <div
                    v-if="!item.disabled"
                    class="overflow-hidden transition-all duration-300"
                    :style="{
                      maxHeight: openSubmenu === item.name ? submenuHeight + 'px' : '0',
                      opacity: openSubmenu === item.name ? '1' : '0'
                    }"
                  >
                    <NuxtLink
                      v-for="subItem in item.submenu"
                      :key="subItem.path"
                      :to="subItem.disabled ? '' : subItem.path"
                      class="block pl-8 py-2 transition-colors duration-300"
                      :class="[ 
                        route.path === subItem.path
                          ? 'text-[#9D2449] font-medium'
                          : subItem.disabled
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-[#2D2D2D] hover:text-[#9D2449]'
                      ]"
                      @click="subItem.disabled && $event.preventDefault()"
                    >
                      {{ subItem.name }}
                    </NuxtLink>
                  </div>
                </div>
              </template>
              <NuxtLink
                v-else
                :to="item.disabled ? '' : item.path"
                class="block px-4 py-2 transition-colors duration-300"
                :class=" [
                  item.disabled
                    ? 'text-gray-300 cursor-not-allowed'
                    : route.path === item.path ||
                      (item.path === '/inicio' && route.path === '/inicio')
                    ? 'text-[#9D2449] font-medium border-l-4 border-[#9D2449] bg-pink-50'
                    : 'text-[#2D2D2D] hover:text-[#9D2449] hover:bg-gray-50 font-medium'
                ]"
                @click="item.disabled && $event.preventDefault()"
              >
                {{ item.name }}
              </NuxtLink>
            </template>
          </div>

          <div class="flex justify-center space-x-2 mt-4 pt-4 border-t border-gray-200">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="text-[#9D2449] hover:text-[#2D2D2D] transition-colors duration-300 flex items-center w-8 h-8 justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <!-- Adjusted height if needed (h-16 vs h-24) to match your new breakpoints -->
  <div class="h-16 xl:h-20"></div>
</template>

<script setup>
import { ref, onUnmounted, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const openSubmenu = ref(null)
const submenuHeight = ref(150) // Adjust this value based on your submenu content

// Navigation items array
const navigationItems = [
  {
    name: 'Inicio',
    path: '/inicio',
    hasSubmenu: false,
    disabled: false
  },
  { 
    name: 'Noticias', 
    path: '/noticias',
    hasSubmenu: false,
    disabled: false
  },
  {
    name: 'Directorio',
    path: '/directorio',
    hasSubmenu: true,
    disabled: true,
    submenu: [
      { name: 'Cabildo', path: '/directorio/cabildo' },
      { name: 'Directores', path: '/directorio/directores' },
      { name: 'Organigrama general', path: '/directorio/organigrama' }
    ]
  },
  {
    name: 'Trámites',
    path: '/tramites',
    hasSubmenu: true,
    disabled: false,
    submenu: [
      { name: 'Registro de proveedores', path: '/tramites/registro-proveedores' },
      { name: 'Ventanilla Universal', path: '/tramites/ventanilla-universal' },
      { name: 'Información', path: '/tramites/informacion', disabled: true }
    ]
  },
  { name: 'Conferencias Matutinas', path: '/conferencias-matutinas', disabled: true },
  {
    name: 'Desarrollo Social',
    path: '/desarrollo-social',
    disabled: false
  },
  {
    name: 'Transparencia',
    path: '/transparencia',
    disabled: false
  }
]

// Social media links array
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/piedrasnegras/',
    icon: 'mdi:facebook'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mpiopnegras/',
    icon: 'mdi:instagram'
  },
  {
    name: 'X',
    url: 'https://x.com/MpioPNegras',
    icon: 'simple-icons:x'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@jacoborodriguezgzz',
    icon: 'mdi:youtube'
  }
]

// Toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleSubmenu = (menuName) => {
  openSubmenu.value = openSubmenu.value === menuName ? null : menuName
}

const closeMenu = () => {
  isMenuOpen.value = false
  openSubmenu.value = null
}

// Close menu and submenu when clicking outside
onMounted(() => {
  const handleClickOutside = (event) => {
    const nav = document.querySelector('nav')
    if (nav && !nav.contains(event.target)) {
      isMenuOpen.value = false
      openSubmenu.value = null
    }
  }
  document.addEventListener('click', handleClickOutside)
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Manage body overflow based on menu state
watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

// Close menu on route change
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
    openSubmenu.value = null
  }
)

// Cleanup
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;    /* Firefox */
}
</style>
