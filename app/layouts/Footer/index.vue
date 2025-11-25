<script lang="ts" setup></script>

<template>
  <div class="footer bg-mainColorLight-200 pt-12 pb-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 px-4">
        <div class="mb-8 text-center md:text-left">
          <h1 class="mb-2 font-semibold text-lg">Quick Links</h1>
          <tabs-nav active-class="normal"></tabs-nav>
        </div>
        <div class="mb-8 text-center md:text-left">
          <h1 class="mb-2 font-semibold text-lg">Product Catelogues</h1>
          <product-nav active-class="normal"></product-nav>
        </div>
        <div class="mb-8 text-center md:text-left">
          <h1 class="mb-2 font-semibold text-lg">Contact Us</h1>
          <div>
            <div class="flex items-center justify-center md:justify-start" v-for="item in contactInfoList" :key="item.name">
              <div class="mr-2 py-2">
                <UIcon :name="item.icon" class="block size-8 w-4 h-4 text-orange-500" />
              </div>
              <div>
                <a
                  v-if="item.type == 'email'"
                  class="text-gray-900 text-base hover:text-orange-600 break-all"
                  :href="`mailto:${item.value}`"
                  >{{ item.value }}</a
                >
                <a
                  v-else-if="item.type == 'phone'"
                  class="text-gray-900 text-base hover:text-orange-600"
                  :href="`tel:${item.value}`"
                  >{{ item.value }}</a
                >
                <div v-else class="text-gray-900 text-base mt-1">
                  {{ item.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="content box-content w-full px-4 py-8">
          <div class="flex flex-col sm:flex-row justify-between border-t-1 border-gray-400 pt-6">
            <div class="text-sm text-gray-700 mb-4 sm:mb-0 text-center md:text-left">
              <p class="leading-8">
                Copyright © 2025 Blueheart Technology of Zhejiang Ltd.
              </p>
              <p>ICP备案：粤ICP备xxxxxxxx号 文网游备字 (20xx)</p>
            </div>
            <div class="">
              <social-nav />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { contactInfoList } from "@/assets/json/navMenu.js";
const items = [
  {
    label: "Figma Kit",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Playground",
    to: "https://stackblitz.com/edit/nuxt-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
];
</script>
<style lang="scss" scoped>
.footer {
  min-height: $footer-height;
}
.content {
  color: #898989;
  font-size: 12px;
  line-height: 2;
  font-family: "Open Sans", sans-serif;
}
</style>
