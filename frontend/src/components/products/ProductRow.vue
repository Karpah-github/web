<template>
  <tr class="table__row text-[#333333]">
    <td class="table__image py-3 px-2">
      <div class="flex items-center gap-4">
        <div class="w-32">
          <img class="w-full" src="../../assets/image.png" alt="" />
        </div>
        <div class="w-40 md:w-full">
          <p class="text-md py-2">{{ props.name }}</p>
          <p class="text-md py-2">₦‎{{ props.price }}.00</p>
        </div>
      </div>
    </td>
    <td class="table__date">
      <p class="text-sm w-40 lg:w-full">{{ props.uploadDate }}</p>
    </td>
    <td class="table__status text-center">
      <div class="flex items-center gap-2 w-32 lg:w-full">
        <div
          class="w-2 h-2 rounded-full"
          :class="[
            { 'bg-[#B3B3B3]': props.status === 'Draft' },
            { 'bg-[#FA9E33]': props.status === 'Processing' },
            { 'bg-[#E72B3B]': props.status === 'out of stock' },
            { 'bg-[#3BB75E]': props.status === 'on-sale' },
          ]"
        ></div>
        <p class="uppercase text-[#333333] text-sm tracking-widest">
          {{ props.status }}
        </p>
      </div>
    </td>
    <td class="table__actions text-center">
      <div class="flex gap-3 w-full">
        <button class="btn-secondary py-2 px-4">Edit</button>
        <button class="btn-secondary py-1 px-2 w-10">
          <img class="w-full" src="../../assets/icons/more.svg" alt="" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  name: String,
  price: Number,
  uploadDate: String,
  status: String,
});
</script>

<style></style>
