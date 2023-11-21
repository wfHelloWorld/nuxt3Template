import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  persist: true, // 浏览器是否缓存
})
