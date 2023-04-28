<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
import { productList } from "@/composables/products/products";
const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "id",
  "deleteProduct",
]);
const deleteProduct = (x: string) => {
  productList.filter(function (item) {
    return item.id !== x;
  });
  props.close();
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="delete-modal text-left p-4"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <div class="text-left">
        <div
          class="w-10 h-10 mt-2 mb-4 flex justify-center items-center rounded-full bg-[#FDF4F4]"
        >
          <img
            class="svg-red w-5"
            src="../../assets/icons/trash.svg"
            alt="delete icon"
          />
        </div>
        <h4 class="text-md font-medium">You are about to delete a product</h4>
        <p class="font-light text-sm py-2">
          Do you want to delete this product? deleting would remove this product
          from your catalog completely
        </p>
      </div>
      <div class="flex justify-end py-5 gap-2">
        <button class="btn-secondary px-3 py-1" @click="props.close">
          Cancel
        </button>
        <button
          class="bg-[#E72B3B] text-white px-3 py-1 rounded-sm text-sm"
          @click="deleteProduct(id)"
        >
          Delete
        </button>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.delete-modal {
  background: #ffffff;
  display: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  position: fixed;
  width: 80%;
  height: 255px;
  cursor: pointer;
  border-radius: 8px;
  &.show {
    display: block;
    margin: 0 auto;
  }
  @include md {
    width: 400px;
  }
}

.modal-overlay::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  /* overflow: aut; */
  z-index: 2;
}
.svg-red {
  filter: invert(38%) sepia(89%) saturate(4462%) hue-rotate(336deg)
    brightness(89%) contrast(105%);
}
</style>
