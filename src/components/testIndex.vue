
<template>
  <h2>浪里行舟</h2>
  <h1>Hello Vue3.2</h1>
</template>
<script setup>
  import { ref, defineExpose, onActivated, onMounted } from "vue";
  let test = ref("test")
  defineExpose({ test });
  onActivated(() => {
    console.log(222414142)
  })
  onMounted(() => {
    console.log(1111)
  })
</script>

<style scoped>

</style>