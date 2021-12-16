<template>
  <TEstq ref="TE"></TEstq>
  <router-view></router-view>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const TE = ref(null);
onMounted(() => {
  console.log('2222',TE.value.test);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
