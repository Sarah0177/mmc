<template>
  <!-- Who we are -->
  <div
    class="max-w-7xl mx-auto flex justify-between w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8 py-6"
  >
    <div class="">
      <p class="font-medium mb-6 text-gray-900 font-bold text-2xl">
        Who We Are
      </p>
      <p class="whitespace-pre-line">{{ $t("about_us") }}</p>
    </div>
    <div class="img-wrapper h-60 md:h-96 overflow-hidden">
      <img
        src="@/assets/images/aboutUs-1.webp"
        title="melamine supplier"
        class="rounded-lg object-cover"
        style="width: 100%; height: 100%"
      />
    </div>
  </div>
  <!-- Our mission -->
  <div
    class="max-w-7xl mx-auto flex justify-between w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8 py-6"
  >
    <div class="order-1 lg:order-2">
      <p class="font-medium mb-6 text-gray-900 font-bold text-2xl">
        Our Missions
      </p>
      <p class="whitespace-pre-line">{{ $t("our_mission") }}</p>
    </div>
    <div class="order-2 lg:order-1 img-wrapper h-60 md:h-96 overflow-hidden">
      <img
        src="@/assets/images/aboutUs-2.webp"
        title="melamine supplier"
        class="rounded-lg object-cover"
        style="width: 100%; height: 100%"
      />
    </div>
  </div>
  <!-- Our advantages -->
  <div class="w-full py-6 px-4 max-w-7xl mx-auto">
    <h2 class="font-bold text-2xl text-center mb-4">Our Advantages</h2>
    <h6 class="text-center">
      Experienced Team Offers Reliable Products and Services for Customers
    </h6>
    <div
      class="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-6"
    >
      <div
        class="rounded-xl min-h-[240px] bg-gray-100 p-8"
        v-for="item in list"
        :key="item.title"
      >
        <div class="w-full flex justify-center">
          <img
            src="@/assets/images/advantages-1.webp"
            alt=""
            class="w-12 h-12 box-content border border-orange-300 rounded-full p-2"
          />
        </div>
        <p class="mt-2 text-center text-lg font-bold text-gray-700">
          {{ item.title }}
        </p>
        <p class="mt-2 text-center">{{ item.desc }}</p>
      </div>
    </div>
  </div>
  <!-- Our factory -->
  <div class="w-full py-6 max-w-7xl mx-auto px-6 mb-4">
    <h2 class="font-bold text-2xl text-center mb-4">Our Factory</h2>
    <div
      style="transition-delay:600ms"
      class="group flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg overflow-hidden"
    >
      <div
        v-for="(item, index) in factoryImgs"
        :key="index"
        class="rounded-lg overflow-hidden"
      >
        <img
          :src="item"
          alt=""
          class="rounded-lg overflow-hidden hover:scale-110 transition-all duration-300  opacity-0 translate-y-5 opacity-100 translate-y-0"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import advantages from "@/assets/json/advantages.js";
import { factoryImgList } from "@/assets/json/img.js";
console.log(advantages);
const list = ref(advantages);
const factoryImgs = ref(factoryImgList);
</script>