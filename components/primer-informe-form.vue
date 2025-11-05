<template>
  <div class="bg-white rounded-lg shadow-md p-8 sm:p-10 max-w-2xl mx-auto">
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-[#7d2d4a] mb-2">
        Confirmar Asistencia
      </h3>
      <p class="text-gray-600">
        Por favor complete el siguiente formulario para confirmar su asistencia al evento
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Full Name -->
      <div>
        <label for="fullName" class="block text-sm font-semibold text-gray-700 mb-2">
          Nombre Completo <span class="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          v-model="formData.fullName"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d2d4a] focus:border-transparent outline-none transition-all"
          placeholder="Ingrese su nombre completo"
        />
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
          Teléfono <span class="text-red-500">*</span>
        </label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          required
          pattern="[0-9]{10}"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d2d4a] focus:border-transparent outline-none transition-all"
          placeholder="10 dígitos"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
          Correo Electrónico <span class="text-red-500">*</span>
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d2d4a] focus:border-transparent outline-none transition-all"
          placeholder="ejemplo@correo.com"
        />
      </div>

      <!-- Submit Button -->
      <div class="pt-4">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-gradient-to-r from-[#7d2d4a] to-[#9d3d5a] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!isSubmitting">Confirmar Asistencia</span>
          <span v-else class="flex items-center justify-center">
            <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        </button>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div class="flex items-center">
          <i class="fas fa-check-circle text-green-500 text-xl mr-3"></i>
          <p class="text-green-700 font-medium">
            ¡Gracias! Su asistencia ha sido confirmada exitosamente.
          </p>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="showError" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <div class="flex items-center">
          <i class="fas fa-exclamation-circle text-red-500 text-xl mr-3"></i>
          <p class="text-red-700 font-medium">
            Hubo un error al enviar el formulario. Por favor intente nuevamente.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  fullName: '',
  phone: '',
  email: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // TODO: Replace with actual API call
    // const response = await fetch('/api/primer-informe/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    showSuccess.value = true
    
    // Reset form after success
    setTimeout(() => {
      formData.fullName = ''
      formData.phone = ''
      formData.email = ''
      showSuccess.value = false
    }, 3000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    showError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
input:focus {
  box-shadow: 0 0 0 3px rgba(125, 45, 74, 0.1);
}
</style>
