<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-950">
    <div class="container mx-auto px-6 dark:text-gray-300">
      <h2 class="text-4xl font-bold mb-12 text-center ">{{ $t('contact.title') }}</h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block mb-2">{{ $t('contact.form.name') }}</label>
              <input id="name" v-model="form.name" type="text"
                class="w-full px-4 py-2 rounded-lg border focus:ring-primary focus:border-primary text-gray-800" required>
            </div>

            <div>
              <label for="email" class="block mb-2">{{ $t('contact.form.email') }}</label>
              <input id="email" v-model="form.email" type="email"
                class="w-full px-4 py-2 rounded-lg border focus:ring-primary focus:border-primary text-gray-800" required>
            </div>

            <div>
              <label for="message" class="block mb-2">{{ $t('contact.form.message') }}</label>
              <textarea id="message" v-model="form.message" rows="5"
                class="w-full px-4 py-2 rounded-lg border focus:ring-primary focus:border-primary text-gray-800" required></textarea>
            </div>

            <button type="submit"
              class="px-8 py-3 bg-primary font-semibold text-lg rounded-xl shadow-lg hover:bg-primary/80 hover:shadow-xl active:scale-95 transition-all duration-200 ease-in-out">
              {{ $t('contact.form.submit') }}
            </button>



          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <Icon name="mdi:email" class="w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 class="text-lg font-semibold">{{ $t('contact.info.email') }}</h3>
              <a href="mailto:info@yourdomain.com" class="text-gray-600 dark:text-gray-300">info@yourdomain.com</a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <Icon name="mdi:phone" class="w-6 h-6 mt-1 text-primary" />
            <div>
              <h3 class="text-lg font-semibold">{{ $t('contact.info.phone') }}</h3>
              <a href="tel:+1234567890" class="text-gray-600 dark:text-gray-300">+1 234 567 890</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})
const toast = useNuxtApp().$toast
const submitForm = async () => {
  console.log('Form submitted:', form)
  await $fetch('/api/contact', {
    method: 'post',
    body: form
  })
  form.name = ''
  form.email = ''
  form.message = ''
  toast.success('Message sent successfully!', {
    timeout: 3000
  })
}
</script>