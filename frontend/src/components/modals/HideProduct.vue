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
  "hideProduct",
]);
const hideProduct = (x: string) => {
  productList.filter(function (item) {
    return item.id !== x;
  });
  props.close();
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="hide-modal text-left p-4"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <div class="text-left">
        <div
          class="w-10 h-10 mt-2 mb-4 flex justify-center items-center rounded-full bg-[#FAF4EE]"
        >
          <img
            class="svg-primary w-5"
            src="../../assets/icons/shop-remove.svg"
            alt="hide icon"
          />
        </div>
        <h4 class="text-md font-medium">You are about to hide a product</h4>
        <p class="font-light text-sm py-2">
          Do you want to hide this product? Hiding this product would remove it
          from your catalog and return it to your drafts
        </p>
      </div>
      <div class="flex justify-end py-5 gap-2">
        <button class="btn-secondary px-3 py-1" @click="props.close">
          Cancel
        </button>
        <button
          class="btn-primary px-3 py-1 rounded-sm text-sm"
          @click="hideProduct(id)"
        >
          Hide
        </button>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.hide-modal {
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
.svg-primary {
  filter: invert(62%) sepia(56%) saturate(388%) hue-rotate(348deg)
    brightness(88%) contrast(90%);
}
</style>
