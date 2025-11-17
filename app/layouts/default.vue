<script setup>
import Header from "./Header/index.vue";
import Footer from "./Footer/index.vue";
</script>

<template>
  <div class="default-layout">
    <slot name="header">
      <Header></Header>
    </slot>
    <div class="content">
      <slot></slot>
    </div>
    <slot name="footer">
      <Footer></Footer>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  height: calc(100vh - $header-height);
}
.content {
  min-height:calc(100vh - $header-height - $footer-height);
  margin-top: $header-height;
  padding: 16px;
}
</style>
