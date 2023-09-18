<template>
  <div>about page</div>
  <Swiper1 :items="items"></Swiper1>
  <Swiper :items="items"></Swiper>

</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/type'
import bg from '~/src/assets/images/bg.png'


const items: SwiperItemType[] = [
  {
    image: bg,
    title: '标题',
    subTitle: '副标题',
    desc: 'description'
  },
  {
    image: bg,
    title: '标题',
    subTitle: '副标题',
    desc: 'description'
  },
  {
    image: bg,
    title: '标题',
    subTitle: '副标题',
    desc: 'description'
  },
  {
    image: bg,
    title: '标题',
    subTitle: '副标题',
    desc: 'description'
  },
  {
    image: bg,
    title: '标题',
    subTitle: '副标题',
    desc: 'description'
  },
]
</script>

<style scoped></style>
