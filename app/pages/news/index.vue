<template>
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
        style="width:100%;height: 100%;"
      />
    </div>
  </div>
  <div class="flex">
    <div class=""></div>
    <!-- <img src="@/assets/images/aboutUs-2.webp" title="melamine supplier" /> -->
  </div>
</template>