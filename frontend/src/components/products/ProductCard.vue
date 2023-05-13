<!-- eslint-disable vue/valid-define-props -->
<template>
  <div class="product-card">
    <div class="product-img w-full">
      <img class="w-full" src="../../assets/product.png" alt="" />
    </div>
    <div class="px-2 product-details py-3">
      <div class="flex justify-between items-center">
        <div class="">
          <div
            class="bg-[#ECECEC] flex gap-2 items-center rounded-full px-2 py-1"
          >
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
          <p class="text-md py-2">{{ props.name }}</p>
        </div>
        <div class="relative">
          <div class="" @click="showActions(props.id)">
            <img class="w-full" src="../../assets/icons/more.svg" alt="" />
          </div>
          <div class="">
            <ProductActions
              :open="openModal"
              :close="showActions"
              :show-delete-modal="showDeleteModal"
              :show-hide-modal="showHideModal"
              :id="props.id"
              :show-actions-modal="showActionsModal"
            />
          </div>
        </div>
      </div>
      <p class="text-sm py-4 text-[#B3B3B3]">{{ props.uploadDate }}</p>
      <p class="text-md pb-2">₦‎{{ props.price }}.00</p>
    </div>
    <ProductDelete
      :open="openDeleteModal"
      :close="showDeleteModal"
      :id="props.id"
      :show-actions-modal="showActionsModal"
      :delete-product="deleteProduct"
    />
    <HideProduct
      :open="openHideModal"
      :close="showHideModal"
      :id="props.id"
      :show-actions-modal="showActionsModal"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import HideProduct from "../modals/HideProduct.vue";
import ProductActions from "../modals/ProductActions.vue";
import ProductDelete from "../modals/ProductDelete.vue";
let openModal = ref(false);
const showActionsModal = ref("");
const showActions = (x: any) => {
  openModal.value = !openModal.value;
  if (showActionsModal.value === x) {
    showActionsModal.value = "";
  } else {
    showActionsModal.value = x;
  }
};
const openDeleteModal = ref(false);
const openHideModal = ref(false);
const showDeleteModal = (x: string) => {
  openDeleteModal.value = !openDeleteModal.value;
  openModal.value = false;
  showActionsModal.value = x;
};
const showHideModal = (x: string) => {
  openHideModal.value = !openHideModal.value;
  openModal.value = false;
  showActionsModal.value = x;
};
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
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  /* width: 280px; */
}
</style>
