<template>
  <div class="max-w-7xl mx-auto py-6 lg:py-8 px-6">
    <div class="w-full py-6">
      <UBreadcrumb :items="items">
        <template #separator>
          <span class="mx-2 text-muted">/</span>
        </template>
        <template #item-label="{ item }">
          <span class="cursor-pointer" @click="breadcrumbClick(item)">{{
            item.label
          }}</span>
        </template>
      </UBreadcrumb>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="">
        <img
          src="@/assets/images/product/orange-resin.jpg"
          alt="melamine moulding compound"
        />
      </div>
      <div class="">
        <div class="font-bold text-4xl">{{ productData.model }}</div>
        <div class="my-4 text-md min-h-[160px] sm:min-h-[60px]">
          {{ productDes || "The details will be updated soon." }}
        </div>
        <div>
          <UButton
            class="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-sm uppercase"
            trailing-icon="i-lucide-arrow-right"
            size="xl"
            to="/contact"
            >Get a free quote</UButton
          >
        </div>
      </div>
    </div>
    <div class="my-8">
      <UTabs
        :unmount-on-hide="false"
        variant="link"
        :items="tabItems"
        class="w-full"
      >
        <template #content="{ item }">
          <div class="py-8">
            <p>This is the {{ item.label }} tab.</p>
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { BreadcrumbItem, TabsItem } from "@nuxt/ui";
import { getProductTypes } from "@/assets/json/navMenu.js";
import descInfo from "@/assets/json/productDes.js";

const router = useRouter();
const { t } = useI18n();
const productData = useState("productData");
console.log("receivedProductData", productData);
const productDes = descInfo[productData.value.model];
console.log("descInfo", descInfo);
console.log("desc", productDes);

const productTypeName = getProductTypes(t).find(
  (item) => item.type == productData.value.type
)?.name;

const items = ref<BreadcrumbItem[]>([
  {
    label: t("home"),
    to: "/",
  },
  {
    label: t("product"),
    to: "/product",
  },

  {
    label: productData.value?.model,
  },
]);

const tabItems = ref<TabsItem[]>([
  {
    label: "Description",
    content: "This is the account content.",
  },
  {
    label: "Additional Information",
    content: "This is the password content.",
  },
]);

// 动态添加面包屑
if (productTypeName) {
  items.value.splice(2, 0, {
    label: productTypeName,
    dataType: `product`,
  });
}

const breadcrumbClick = (item) => {
  if (productTypeName && item.dataType == "product") {
    router.push({
      path: "/product",
      query: {
        type: productData.value.type,
      },
    });
  }
};
</script>