<template>
  <div>
    <div v-for="item in message" :key="item.id">
      <span>{{ item.name + "-" + item.email }}</span>
    </div>
  </div>
</template>

<script setup>
import { prisma } from "../../libs/prisma";
let message;

const getMessage = async () => {
  return await prisma.message.findMany();
};

try {
  message = await getMessage();
  console.log('query messages successfully')
} catch(err) {
  console.log('failed to query messages')
}
</script>