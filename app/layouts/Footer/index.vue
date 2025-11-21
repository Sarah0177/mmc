<script lang="ts" setup></script>

<template>
  <div class="footer flex justify-center items-center bg-orange-200">
    
    <div class="content w-full border-top max-w-7xl px-4 ">
      <div class="flex justify-between">
        <div class="text-sm">
          <p class="leading-8">Copyright © 2025 Blueheart Technology of Zhejiang Ltd.</p>
          <p>ICP备案：粤ICP备xxxxxxxx号 文网游备字 (20xx)</p>
        </div>
        <div class="">
          <social-nav />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: $footer-height;
}
.content {
  color: #898989;
  font-size: 12px;
  line-height: 2;
  font-family: 'Open Sans', sans-serif;
}
</style>
