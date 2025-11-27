import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      path: "/",
      component: () => import("~/pages/index.vue"),
      meta: { layout: false }
    },
    {
      path: "/news",
      component: () => import("~/pages/news/index.vue"),
    },
    {
      path: "/product",
      component: () => import("~/pages/product/index.vue"),
      name: 'product-home'
    },
    {
      path: '/product/:model',
      component: () => import("~/pages/product/[model].vue"),
      name: 'product-detail',
    },
    {
      path: "/contact",
      component: () => import("~/pages/contact/index.vue"),
    },
  ],
} satisfies RouterConfig