<template>
  <div>default layout</div>
  <el-button type="primary" plain>
    <router-link  to="/">index</router-link>
  </el-button>
  <el-button>
    <router-link class="item" to="about">about</router-link>
  </el-button>

  <NuxtPage></NuxtPage>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item {
  color: red;
  font-size: 2rem;
}
</style>
