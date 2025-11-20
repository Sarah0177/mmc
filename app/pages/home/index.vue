<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import bg1 from "@/assets/images/home/bg-1.webp";
import bg2 from "@/assets/images/home/bg-2.webp";
import bg3 from "@/assets/images/home/bg-3.webp";
import product1 from "@/assets/images/product/product-1.webp";
import product2 from "@/assets/images/product/product-2.webp";
import product3 from "@/assets/images/product/product-3.webp";
import product4 from "@/assets/images/product/product-4.webp";

const router = useRouter()

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
  },
];

const productList = ref([
  {
    imgSrc: product1,
    name: "Melamine resin - white",
    id: "1",
    type: "resin",
  },
  {
    imgSrc: product2,
    name: "Melamine resin - pink",
    id: "2",
    type: "resin",
  },
  {
    imgSrc: product3,
    name: "Melamine resin - blue",
    id: "3",
    type: "resin",
  },
  {
    imgSrc: product4,
    name: "Melamine resin - orange",
    id: "4",
    type: "resin",
  },
]);
console.log("productlist", productList.value);

const goToProduct = () => {
 router.push({path: '/product'})
}

</script>

<template>
  <NuxtLayout name="default">
    <div class="wrap">
      <div
        class="w-full h-[200px] md:h-[calc((100vh-80px)_/_2)] lg:h-[500px] overflow-hidden"
      >
        <UCarousel
          v-slot="{ item }"
          :items="swiperItems"
          loop
          autoplay
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
              <div
                class="text-white font-bold text-xl sm:text-2xl md:text-5xl max-w-2xl"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </UCarousel>
      </div>
      <div class="py-8 md:py-12 mx-auto flex flex-col justify-center">
        <p class="text-center uppercase font-bold text-2xl md:text-4xl">
          Product Catalogue
        </p>
        <div class="flex justify-center">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 px-8 py-8"
          >
            <product-item
              v-for="item in productList"
              :key="item.id"
              :item="item"
              class="w-56 h-56 md:w-64 md:h-64"
            >
            </product-item>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <UButton
            class="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-full"
            trailing-icon="i-lucide-arrow-right"
            size="xl"
            to="/product"
            >More Categories</UButton
          >
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>