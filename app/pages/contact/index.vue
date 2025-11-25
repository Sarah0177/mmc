<template>
  <div class="max-w-6xl mx-auto p-8 lg:p-12">
    <div class="h-full grid grid-cols-1 lg:grid-cols-2 rounded-sm">
      <div class="bg-gray-50 h-full flex-col p-8 lg:p-12 relative">
        <h3 class="text-xl font-semibold text-gray-900 mb-8 flex items-center">
          <UIcon name="i-lucide-info" class="size-10 bg-orange-600 mr-2" />
          Contact Information
        </h3>
        <div class="flex flex-col">
          <div class="flex mb-8" v-for="item in contactInfoList" :key="item.label">
            <div
              class="left mr-8 w-12 h-12 rounded-full bg-orange-100 flex flex-none justify-center items-center"
            >
              <UIcon
                :name="item.icon"
                class="block size-8 w-6 h-6 bg-orange-600"
              />
            </div>
            <div class="right">
              <div class="text-gray-500 text-sm font-medium">
                {{ item.label }}
              </div>
              <a
                v-if="item.type == 'email'"
                class="text-gray-900 text-base hover:text-orange-600 break-all"
                :href="`mailto:${item.value}`"
                >{{ item.value }}</a
              >
              <a
                v-else-if="item.type == 'phone'"
                class="text-gray-900 text-base hover:text-orange-600"
                :href="`tel:${item.value}`"
                >{{ item.value }}</a
              >
              <div v-else class="text-gray-900 text-base">{{ item.value }}</div>
            </div>
          </div>
        </div>
        <div class="follow mt-10 pt-8 border-t border-gray-200 relative z-20">
          <p class="text-gray-700 font-semibold mb-4">Follow Us:</p>
          <social-nav />
        </div>
      </div>
      <div class="bg-white p-8 lg:p-12">
        <h3 class="text-xl font-semibold text-gray-900 mb-8 flex items-center ">
          <UIcon name="i-lucide-info" class="size-10 bg-orange-600 mr-2 "/>
          Send Us a Message
        </h3>
        <div class="form space-y-6">
          <UInput
            v-model="name"
            placeholder="Your name"
            size="xl"
            class="w-full flex px-4 py-3 border border-gray-200 focus:outline-none transition-colors duration-200 rounded-md"
          />
          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <UInput
              v-model="email"
              placeholder="Your email"
              size="xl"
              class="w-full px-4 py-3 border border-gray-200 focus:outline-none transition-colors duration-200 rounded-md"
            />
            <UInput
              v-model="phone"
              placeholder="Your phone"
              size="xl"
              class="w-full px-4 py-3 border border-gray-200 focus:outline-none transition-colors duration-200 rounded-md"
            />
          </div>
          <UTextarea
            v-model="message"
            placeholder="Your message"
            :maxrows="6"
            size="xl"
            class="w-full px-4 py-3 border border-gray-200 focus:outline-none transition-colors duration-200 rounded-md"
          />
          <div>
            <UButton
              trailing-icon="i-lucide-arrow-right"
              size="md"
              class="bg-orange-500 font-bold text-white flex items-center uppercase font-medium py-3 px-10 cursor-pointer"
              @click="open = true"
              >Send message</UButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { contactInfoList } from '@/assets/json/navMenu.js'

let name = ref("");
let email = ref("");
let phone = ref("");
let message = ref("");
const open = ref(false);

const send = () => {
  open.value = !open.value;
  console.log("value", open);
  // if(!message.value) {
  //     alert('1')
  // }
};
</script>
