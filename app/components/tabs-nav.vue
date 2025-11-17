<template>
  <!-- 网站导航 -->
  <div class="tabs-nav">
    <div class="tab-item">
      <NuxtLink class="nav-link" to="/">{{ $t("home") }}</NuxtLink>
    </div>
    <div class="tab-item">
      <NuxtLink class="nav-link" to="/product">{{ $t("product") }}</NuxtLink>
    </div>
    <div class="tab-item">
      <NuxtLink class="nav-link" to="/news">{{ $t("news") }}</NuxtLink>
    </div>
    <div class="tab-item">
      <NuxtLink class="nav-link" to="/contact">{{ $t("contact_us") }}</NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tabs-nav {
  .tab-item {
    position: relative;
    .nav-link {
      display: block;
      padding: 6px 2px;
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
</style>