<script lang="ts" setup>
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "showDeleteModal",
  "showHideModal",
  "id",
]);
</script>
<template>
  <modal :open="props.open" :close="props.close">
    <div
      class="product-actions text-left"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <ul class="flex flex-col gap-2 font-light pt-1">
        <li class="hover:bg-neutral-bg px-4 py-1 text-[#333333] text-sm">
          Edit product
        </li>
        <li
          class="hover:bg-neutral-bg px-4 py-1 text-[#333333] text-sm"
          @click="props.showHideModal(id)"
        >
          Hide product
        </li>
        <li
          class="hover:bg-neutral-bg px-4 py-1 text-[#E72B3B] text-sm"
          @click="props.showDeleteModal(id)"
        >
          Delete
        </li>
      </ul>
    </div>
  </modal>
</template>
<style lang="scss">
.product-actions {
  width: 140px;
  height: 115px;
  position: absolute;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  background: #ffffff;
  display: none;
  overflow-y: auto;
  top: 40px;
  bottom: 0;
  right: 10px;
  z-index: 3;
  cursor: pointer;
  &.show {
    display: block;
  }
}

.modal-overlay::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>
