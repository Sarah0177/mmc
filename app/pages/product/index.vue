<template>
  <div class="filter-area px-4 py-8 sm:grid-cols-4 w-full text-center">
    <UButton
      v-for="item in productTypes"
      :key="item.name"
      color="neutral"
      variant="outline"
      :class="activeType == item.type ? 'bg-orange-400 text-white' : ''"
      class="font-semibold text-lg rounded-full border-1 border-gray-100 mx-4 my-2 px-6 py-2 cursor-pointer"
      @click="clickTypeHandler(item)"
      >{{ item.name }}
    </UButton>
  </div>
  <div
    class="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8"
  >
    <div
      v-for="(item, index) in filterProductList"
      class="item flex"
      :key="index"
      @click="clickProductHandler(item)"
    >
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
        <div class="title mb-2 uppercase">
          {{ `${item.model ? item.title + "-" + item.model : item.title}` }}
        </div>
        <div class="desc">
          <span class="bold">Description: </span>{{ item.description }}
        </div>
        <div class="application" v-show="item.application">
          <span class="bold">Application: </span>{{ item.application }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import productJSON from "@/assets/json/product.json";
import { getProductTypes } from "@/assets/json/navMenu.js";
import { onMounted, ref, watch } from "vue";

const { t } = useI18n();
const curRoute = useRoute();
const router = useRouter();
const activeType = ref('');

if (curRoute.query.type) {
  activeType.value = curRoute.query.type;
}

let defaultList = getProductTypes(t).map((item) => {
  return {
    ...item,
    active: activeType.value == item.type,
  };
});

defaultList.unshift({
  name: t("all"),
  model: "",
  type: "",
  subType: [],
  active: !activeType.value,
});

const productTypes = ref(defaultList);

type productItem = {
  img: string;
  title: string;
  description: string;
  application: string;
  keywords: string;
  type: string;
};

const productList: productItem[] = productJSON;

const filterProductList = computed(() => {
  console.log("active type", activeType.value);
  return productList.filter((item) =>
    activeType.value ? item.type == activeType.value : true
  );
});

watch(() => curRoute.query, (newVal, oldVal) => {
  console.log('newVal', newVal, oldVal)
  activeType.value = newVal.type
})

const clickTypeHandler = (selectItem) => {
  activeType.value = selectItem.type;
  productTypes.value.forEach((item) => {
    if (item.type === selectItem.type) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
};

const clickProductHandler = (item) => {
  router.push({
    path: `/product/${item.model}`,
  })
  // 存储状态
  const productState = useState('productData', () => ({}))
  productState.value = item
}

</script>

<style type="scss" scoped>
.item {
  padding: 16px;
  border: 1px solid #efefef;
  border-radius: 8px;
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
