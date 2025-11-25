<template>
  <div class="filter-area px-4 py-8 sm:grid-cols-4 w-full">
    <UButton
      v-for="item in productTypes"
      :key="item.name"
      color="neutral"
      variant="outline"
      :class="item.active ? 'bg-orange-400 text-white' : ''"
      class="font-semibold text-lg rounded-full border-1 border-gray-100 mx-4 my-2 px-6 py-2 cursor-pointer"
      @click="clickTypeHandler(item)"
      >{{ item.name }}
    </UButton
    >
  </div>
  <div class="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
    <div v-for="(item, index) in filterProductList" class="item flex" :key="index">
      <div class="left rounded-lg w-full h-[160px] overflow-hidden mr-4">
        <img v-if="item.img" :src="item.img" :alt="item.title" class="src" />
        <img
          v-if="!item.img"
          src="@/assets/images/product/orange-resin.jpg"
          :alt="item.title"
          class="object-content rounded-lg hover:scale-110"
        />
      </div>
      <div class="right">
        <div class="title mb-2 uppercase">{{ `${item.model? item.title + '-' + item.model: item.title}` }}</div>
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
import productJSON from "@/assets/json/product.json";
import { getProductTypes } from "@/assets/json/navMenu.js";
import { ref } from "vue";

const { t } = useI18n();
let defaultList = getProductTypes(t).map(item => {
  return {
    ...item,
    active: false
  }
});

defaultList.unshift({
  name: t("all"),
  model: "",
  type: "",
  subType: [],
  active: true
});

const productTypes = ref(defaultList);
const activeType = ref(null)

type productItem = {
  img: string;
  title: string;
  description: string;
  application: string;
  keywords: string;
  type: string
};

const productList: productItem[] = productJSON;

const filterProductList = computed(() => {
  return productList.filter(item => activeType.value && activeType.value.type ? item.type == activeType.value.type : true)
})

const clickTypeHandler = (selectItem) => {
  activeType.value = selectItem
  productTypes.value.forEach(item => {
    if(item.type === selectItem.type) {
      item.active = true
    } else {
      item.active = false
    }
  })
}


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

.title {
  font-size: 18px;
  line-height: 24px;
}
.description {
  font-size: 16px;
  color: #ddd;
}
.bold {
  font-weight: bold;
}
.active-tab {
  background: orange;
}
</style>
