<template>
  <div class="relative w-full h-full">
    <div class="flex justify-center w-full h-full overflow-hidden">
      <img class="w-full h-full object-fill hover:scale-110 transition-all duration-300  opacity-0 translate-y-5 opacity-100 translate-y-0" :style="imgStyle" :src="item.imgSrc" :alt="item.name">
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