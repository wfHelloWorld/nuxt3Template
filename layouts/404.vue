import { HelloWorld } from '../.nuxt/components';
<template>
    <div>
        <NuxtPage></NuxtPage>
        <h1>404</h1>
        <p>路径错误,没有找到页面</p>
        <el-button @click="router.back">返回</el-button>
    </div>
    <HelloWorld></HelloWorld>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>

</style>