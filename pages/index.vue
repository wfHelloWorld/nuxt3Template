<template>
  <nuxt-link to="/about">about</nuxt-link>
  <div>Hello Nuxt from page, auto generate routes</div>
  <div>{{ store.count }}</div>
  <el-button @click="store.increment">+1</el-button>
  <div>pos: {{ x }}, {{ y }}</div>
</template>

<script setup lang="ts">
// 调用 store
import { useCounter } from '~/stores/useCounter'
const store = useCounter() 

// onMounted(() => {

// })


const { x, y } = useMouse()
</script>

<style scoped lang="scss"></style>
