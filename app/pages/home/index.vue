<script lang="ts" setup>
import { ref } from "vue";
import bg1 from "@/assets/images/home/bg-1.webp";
import bg2 from "@/assets/images/home/bg-2.webp";
import bg3 from "@/assets/images/home/bg-3.webp";
const swiperItems = [
  {
    img: bg2,
    title: "Professional supplier",
  },
  {
    img: bg1,
    title: "Fast delivery",
  },
  {
    img: bg3,
    title: "Stable quality",
  }
];
</script>

<template>
  <NuxtLayout name="default">
    <div class="wrap">
      <div class="w-full h-[200px] md:h-[calc((100vh-80px)_/_2)] lg:h-[500px] overflow-hidden">
        <UCarousel
          v-slot="{ item }"
          :items="swiperItems"
          loop
          class="w-full h-full"
        >
          <div class="relative">
            <img
              :src="item.img"
              class="w-full h-[200px] md:h-[calc((100vh-80px)_/_2)] lg:h-[500px] object-cover"
            />
            <div
              class="absolute top-0 right-0 w-full h-full flex items-center justify-center"
              :title="item.title"
            >
              <div class="text-white font-bold text-xl sm:text-2xl md:text-5xl max-w-2xl">{{ item.title }}</div>
            </div>
          </div>
        </UCarousel>
      </div>
      <div class="py-8 md:py-12">
        <p class="text-center uppercase font-bold text-2xl md:text-4xl">
          Product Catalogue
        </p>
        <div>

        </div>
      </div>
    </div>
  </NuxtLayout>
</template>