<template>
  <!-- PWA -->
  <ReloadPrompt></ReloadPrompt>

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

const { $pwa } = useNuxtApp()
onMounted(() => {
  $pwa.install()

  let registration = $pwa.getSWRegistration()
  setInterval(() => {
    if (registration) {
      registration.update()
    } else {
      $pwa.install()
      registration = $pwa.getSWRegistration()
    }
    console.log('更新')
  }, 500000) // 500秒自动更新

  // registerSW({
  //   immediate: true,

  //   // // 提示需要更新
  //   // onNeedRefresh() {
  //   //   console.log('nee refresh')
  //   // },

  //   onRegisteredSW(_url, registration) {

  //   }
  // })
})


const { x, y } = useMouse()
</script>

<style scoped lang="scss"></style>
