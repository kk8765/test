<template>
  <h2>浪里行舟</h2>
  <h1>Hello Vue3.2</h1>
  <button @click="back">Hello</button>
  <!-- <keep-alive> -->
    <HelloWorld ref="HD">
      <p>默认插槽</p>
      <template #slotTest>
        <p>具名插槽</p>
      </template>
      <template #slotTestObj = "obj">
        <p>{{obj.item}}</p>
      </template>
    </HelloWorld>
  <!-- </keep-alive> -->
</template>
<script setup>
  import HelloWorld from '../components/HelloWorld.vue';
  import { ref, defineExpose, onActivated, onMounted } from "vue";
  let test = ref("test")
  defineExpose({ test });
  const back = () => {
    window.history.back(-1);
  }
  onActivated(() => {
    console.log(222414142)
  })
  onMounted(() => {
    console.log(1111)
  })
</script>

<style scoped>

</style>