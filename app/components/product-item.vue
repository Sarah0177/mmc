<template>
  <div class="rounded-lg relative w-full h-full">
    <div class="flex justify-center w-full h-full">
      <img class="rounded-lg w-full h-full object-fill" :style="imgStyle" :src="item.imgSrc" :alt="item.name">
    </div>
    <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-back/0 to-black/30 min-h-[60px]">
      <p class="name text-md font-semibold text-center text-white" :style="textStyle">{{item.name}}</p>
    </div>
  </div>
</template>

<script langs="ts" setup>

const props = defineProps({
  item: Object,
  textStyle: Object,
  imgStyle: Object
})

console.log('item', props.item)


</script>