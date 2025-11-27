<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import bg1 from "@/assets/images/home/bg-1.webp";
import bg2 from "@/assets/images/home/bg-2.webp";
import bg3 from "@/assets/images/home/bg-3.webp";
import product1 from "@/assets/images/product/product-1.webp";
import product2 from "@/assets/images/product/product-2.webp";
import product3 from "@/assets/images/product/product-3.webp";
import product4 from "@/assets/images/product/product-4.webp";

const router = useRouter();

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
    type: "red_resin",
  },
  {
    imgSrc: product2,
    name: "Melamine resin - pink",
    id: "2",
    type: "white_resin",
  },
  {
    imgSrc: product3,
    name: "Melamine resin - blue",
    id: "3",
    type: "orange_resin",
  },
  {
    imgSrc: product4,
    name: "Melamine resin - orange",
    id: "4",
    type: "green_resin",
  },
  {
    imgSrc: product1,
    name: "Melamine resin - yellow",
    id: "5",
    type: "green_resin",
  },
]);

const productClickHandler = (item) => {
  console.log('item', item)

  router.push({
    path: '/product',
    query: {
      type: item.type
    }
  })
}



</script>

<template>
  <NuxtLayout name="default">
    <div class="wrap">
      <div
        class="w-full h-[200px] md:h-[calc((100vh-80px)_/_2)] lg:h-[400px] overflow-hidden"
      >
        <UCarousel
          v-slot="{ item }"
          :items="swiperItems"
          loop
          
          class="w-full h-full"
        >
          <div class="relative">
            <img
              :src="item.img"
              class="w-full h-[200px] md:h-[calc((100vh-80px)_/_2)] lg:h-[400px] object-cover"
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
        <p class="text-center uppercase font-bold text-2xl">
          Product Catalogue
        </p>
        <!-- 热门产品 -->
        <div class="flex justify-center">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16 py-8 px-4 max-w-7xl"
          >
            <product-item
              v-for="item in productList"
              :key="item.id"
              :item="item"
              class=""
              @click="productClickHandler(item)"
            >
            </product-item>
          </div>
        </div>
        <!-- 更多产品 -->
        <!-- <div class="w-full flex justify-center">
          <UButton
            class="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-full"
            trailing-icon="i-lucide-arrow-right"
            size="xl"
            to="/product"
            >More Categories</UButton
          >
        </div> -->
        <!-- 公司介绍 -->
        <div
          class="flex py-8 px-4 mt-8 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4"
        >
          <div class="flex grid grid-cols-2 gap-4">
            <img
              class="w-64"
              src="@/assets/images/company-1.webp"
              alt="melamine"
            />
            <img
              class="w-64"
              src="@/assets/images/company-2.webp"
              alt="melamine"
            />
          </div>
          <div>
            <p class="text-2xl font-bold py-6 mt-0">
              Guangzhou Jamie Tableware Co., Ltd.
            </p>
            {{ $t("company") }}
            <div class="w-full mt-4 flex justify-start">
              <UButton
                class="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-full"
                trailing-icon="i-lucide-arrow-right"
                size="xl"
                to="/product"
                >View More Products</UButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>