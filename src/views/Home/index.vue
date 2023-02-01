<template>
  <CustomHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedbacker - 2021</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    CustomHeader,
    Contact
  },
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const router = useRouter()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    // eslint-disable-next-line space-before-function-paren
    function handleLogin() {}

    // eslint-disable-next-line space-before-function-paren
    function handleAccountCreate() {}

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
