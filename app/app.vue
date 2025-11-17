<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
useHead({
  title: "MMC",
  meta: [
    {
      name: "description",
      content: "",
    },
    {
      name: "keywords",
      content: "",
    },
  ],
});
useSeoMeta({
  title: "Melamine products supplier",
  ogTitle: "Melamine moulding compound, Melamine tableware",
  description: "We professionally provide melamine tableware and melaming moulding compound for years",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss">
@forward "@/assets/styles/global.scss";
</style>
