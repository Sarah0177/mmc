<template>
  <!-- 网站导航 -->
  <div class="tabs-nav">
    <div class="tab-item" v-for="item in productTypes" :key="item.name">
      <NuxtLink
        class="nav-link py-1 hover:text-orange-600"
        :class="ui"
        :activeClass="activeClass"
        @click="scrollToTop"
        :to="{ name: 'product-home', query: { type: item.type } }"
        >{{ item.name }}</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProductTypes } from "@/assets/json/navMenu.js";
import { ref } from "vue";

const props = defineProps({
  activeClass: String,
  exactActiveClass: String,
  ui: String,
  hasAll: Boolean,
});

const { t } = useI18n();
let defaultList = getProductTypes(t);
if (props.hasAll) {
  defaultList.unshift({
    name: t("all"),
    model: "",
    type: "",
    subType: [],
  });
}
const productTypes = ref(defaultList);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
}
</script>

<style lang="scss" scoped>
.tabs-nav {
  .tab-item {
    position: relative;
    .nav-link {
      display: block;
      &.router-link-active {
        font-weight: bold;
      }
      &::after {
        position: absolute;
        content: "";
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 1px;
        background-image: linear-gradient(
          to top,
          currentColor,
          currentColor 80%,
          transparent 80%
        );
        transition: 0.6s width;
      }
    }
  }
}
.horizontal.tabs-nav {
  .tab-item {
    & + .tab-item {
      margin-left: 48px;
    }
  }
}
.active-tab {
  background: orange;
}
</style>