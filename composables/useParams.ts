// 得到路经 Params 的方法

import type { RouteParams } from 'vue-router'

export function useParams<P extends RouteParams>() {
    const router = useRoute()
    return computed(() => router.params as P)
}