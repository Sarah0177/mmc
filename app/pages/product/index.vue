<template>
  <div class="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(item, index) in productList" class="item flex" :key="index">
      <div class="left">
        <img v-if="item.img" :src="item.img" :alt="item.title" class="src" />
        <img v-if="!item.img" src="@/assets/images/product/Melamine-resin.png" :alt="item.title" class="image" />
      </div>
      <div class="right">
        <div class="title">{{ item.title.toUpperCase() }}</div>
        <div class="desc">
          <span class="bold">Description: </span>{{ item.description }}
        </div>
        <div class="application">
          <span class="bold">Application: </span>{{ item.application }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import productJSON from "@/assets/json/product.json";

type productItem = {
  img: string;
  title: string;
  description: string;
  application: string;
  keywords: string;
};

const productList: productItem[] = productJSON;
</script>

<style type="scss" scoped>
.item {
  /* width: calc(50% - 20px); */
  height: 200px;
  padding: 10px;
  border: 1px solid #efefef;
  border-radius: 8px;
  /* margin: 10px; */
}
.left {
  margin-right: 6px;
}
.image {
  width: 200px;
  border-radius: 100px;
}
.title {
  font-size: 18px;
  color: red;
  line-height: 24px;
}
.description {
  font-size: 16px;
  color: #ddd;
}
.bold {
  font-weight: bold;
}
</style>
