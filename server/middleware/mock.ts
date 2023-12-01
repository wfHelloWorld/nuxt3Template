export default defineEventHandler((event) => {
  // 1. 判断 env (是否为开发环境)


  if (process.env.NODE_ENV === 'development') {
    // 2. 判断 url 是否为 /api 打头, 是 -> 转发到 mock 中
    const url = getRequestURL(event)
    if (url.pathname.indexOf('/api') !== -1) {
      // 判断是否是 /api 打头的
      const path = url.pathname.replace('/api', '/mock')
      return sendRedirect(event, (process.env.BASE_URL || 'http://localhost:3000') + path) // 更改路径,重定向到 mock
    }
  }
})
