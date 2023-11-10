<!-- eslint-disable vue/valid-define-props -->
<template>
  <div class="product-card">
    <div class="product-img w-full">
      <img
        class="w-full border border-[#dfdfdf] rounded-md"
        src="../../assets/product.png"
        alt=""
      />
    </div>
    <div class="px-2 product-details py-3 flex justify-between items-center">
      <div class="flex justify-between items-center">
        <div class="">
          <p class="text-md py-1 font-light">{{ props.name }}</p>
        </div>
      </div>
      <p class="text-md">₦‎{{ props.price }}.00</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  id: String,
  name: String,
  price: Number,
  uploadDate: String,
  status: String,
  deleteProduct: Function,
});
</script>

<style>
.product-card {
  border-radius: 4px;
  /* width: 280px; */
}
</style>
