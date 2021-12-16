<template>
  <p>home</p>
  <button @click="toPage">toPage</button>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const toPage = (() => {
      router.push({
        name: 'page'
      })
    })
    return {
      toPage
    }
  },
}
</script>



