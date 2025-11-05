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

      <!-- Plus One Full Name (Optional) -->
      <div>
        <label for="plusOneFullName" class="block text-sm font-semibold text-gray-700 mb-2">
          Nombre Completo del Acompañante (Opcional)
        </label>
        <input
          id="plusOneFullName"
          v-model="formData.plusOneFullName"
          type="text"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d2d4a] focus:border-transparent outline-none transition-all"
          placeholder="Ingrese el nombre de su acompañante"
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

      <!-- Status -->
      <div>
        <label for="status" class="block text-sm font-semibold text-gray-700 mb-2">
          Estatus <span class="text-red-500">*</span>
        </label>
        <select
          id="status"
          v-model="formData.status"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d2d4a] focus:border-transparent outline-none transition-all"
        >
                    <option>CONFIRMAR</option>
          <option>REPRESENTANTE</option>
          <option>CANCELAR/NO ASISTE</option>
        </select>
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
  plusOneFullName: '',
  phone: '',
  email: '',
  status: 'CONFIRMAR'
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    const response = await fetch('https://formspree.io/f/xnnoedyv', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      showSuccess.value = true;
      // Reset form after success
      setTimeout(() => {
        formData.fullName = '';
        formData.plusOneFullName = '';
        formData.phone = '';
        formData.email = '';
        formData.status = 'CONFIRMAR';
        showSuccess.value = false;
      }, 3000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
input:focus {
  box-shadow: 0 0 0 3px rgba(125, 45, 74, 0.1);
}
</style>
