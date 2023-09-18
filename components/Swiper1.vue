<template>
  <swiper
    :slides-per-view="3"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="h-80"
    :modules="modules"
    navigation
    :pagination="{ clickable: true, type: 'bullets' }"
    :scrollbar="{ draggable: true }"
    effect="coverflow"
    :coverflowEffect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }"

    >
    <swiper-slide v-for="item in items" :key="item.image">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top flex flex-col justify-center items-start"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <p class="text-4xl font-bold text-red">{{ item.title }}</p>
          <p class="text-xl text-red pt-4">{{ item.subTitle }}</p>
          <p>{{ item.desc }}</p>
        </div>
      </slot>
    </swiper-slide>

    ...
  </swiper>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperType } from 'swiper'
// Import Swiper styles
import type { SwiperItemType } from './type'

import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// 接收数据
defineProps({
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  }
})

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

// 调用的模块
const modules = [Navigation, Pagination, Scrollbar, EffectCoverflow]
</script>

<style scoped></style>
