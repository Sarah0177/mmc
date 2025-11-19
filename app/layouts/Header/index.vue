<script lang="ts" setup>
import { ref, watch } from "vue";

const { locales, setLocale } = useI18n();
let locale = ref(locales.value[0]);
const toggle = () => {
  if (locales.value.length < 2) return;
  const code = locale.value.code == "en" ? "zh" : "en";
  locale.value = locales.value.find((item) => item.code == code);
  console.log("locale value", locale.value);
  setLocale(code);
};

let open = ref(false);

const toggleDrawer = () => {
  open.value = !open.value;
};

const close = () => {
  open.value = false;
};

</script>

<template>
  <div
    class="header flex justify-between items-center bg-orange-500 text-white"
  >
    <!-- logo -->
    <div class="logo">
      <span class="logo-link" title="melamine moulding compound">MMC</span>
    </div>
    <!-- 网站导航 -->

    <tabs-nav class="hidden horizontal lg:flex"></tabs-nav>

    <!-- 语言切换 -->
    <div v-if="locales.length > 1" class="lang" @click="toggle">
      {{ locale.name }}
    </div>

    <!-- 展开 -->
    
    <!-- <div class=""> -->
    <UDrawer
      :open="open"
      direction="right"
      :overlay="true"
      :dismissable="true"
      :close-on-overlay-click="true"
    >
      <UIcon
        name="i-lucide-align-justify"
        class="size-12 lg:hidden cursor-pointer"
        @click="toggleDrawer"
      />
      <template #header>
        <div class="flex justify-between items-center w-76">
          <div class="logo">
            <span class="logo-link" title="melamine moulding compound"
              >LOGO</span
            >
          </div>
          <UIcon name="i-lucide-x" class="w-6 h-6 cursor-pointer" @click="close" />
        </div>
      </template>
      <template #body>
        <tabs-nav class="text-orange-900"></tabs-nav>
      </template>
    </UDrawer>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.header {
  --header-text-color: #ffffff;
  position: fixed;
  padding: 0 40px 0 40px;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  z-index: 99;
}

.logo {
  background-size: cover;
  background-image: url("~/assets/images/logo/logo.webp");
  text-indent: -999px;
  .logo-link {
    display: block;
    width: 128px;
    height: $header-height;
  }
}

// .tabs-nav {
//   .tab-item {
//     position: relative;
//     & + .tab-item {
//       margin-left: 48px;
//     }
//     .nav-link {
//       display: block;
//       padding: 6px 2px;
//       &.router-link-active {
//         font-weight: bold;
//       }
//       &::after {
//         position: absolute;
//         content: "";
//         width: 0;
//         height: 2px;
//         bottom: 0;
//         left: 50%;
//         transform: translateX(-50%);
//         border-radius: 1px;
//         background-image: linear-gradient(
//           to top,
//           currentColor,
//           currentColor 80%,
//           transparent 80%
//         );
//         transition: 0.6s width;
//       }
//     }
//   }
// }

.lang {
  width: 120px;
  text-align: center;
  cursor: pointer;
}
</style>
