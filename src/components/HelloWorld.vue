
<template>
  <h2>浪里行舟</h2>
  <h1>Hello Vue3.2</h1>
  <h2>{{ color }}</h2>
  <button @click="color = 'red'" :data.prop="1111">color red</button>
  <button @click="color = 'yellow'" data-attr="1111">color yellow</button>
  <button @click="btn">color blue</button>
  <button @click="fontSize = '40px'">fontSize 40px</button>
  <slot></slot>
  <slot name="slotTest"></slot>
  <slot name="slotTestObj" :item="obj"></slot>>
</template>
<script setup>
  import { ref, defineExpose, reactive, onMounted, onActivated } from "vue";
  const obj = reactive({ 
    list: [1,2,3,4,5,6,7,8,9]
  })
  const color = ref("pink");
  color.value = "green";
  const btn = () => {
    color.value = 'blue';
  }
  let aaa = ref("aaa")
  defineExpose({ aaa });
  const fontSize = ref("18px");
  onActivated(() => {
    console.log(222414142)
  })
  onMounted(() => {
    console.log(1111)
  })
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
h2 {
  font-size: v-bind(fontSize);
}
</style>