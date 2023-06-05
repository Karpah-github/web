<script lang="ts" setup>
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "showOrderDetails",
  "id",
]);
</script>
<template>
  <modal :open="props.open" :close="props.close">
    <div
      class="order-actions text-left"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <ul class="flex flex-col gap-2 font-light pt-1">
        <li
          @click="props.showOrderDetails(id)"
          class="hover:bg-neutral-bg px-4 py-1 text-[#333333] text-md"
        >
          View Order
        </li>
        <li class="hover:bg-neutral-bg px-4 py-1 text-[#333333] text-md">
          Message Buyer
        </li>
        <li class="hover:bg-neutral-bg px-4 py-1 text-[#E72B3B] text-md">
          Report
        </li>
      </ul>
    </div>
  </modal>
</template>
<style lang="scss">
.order-actions {
  width: 150px;
  height: 140px;
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
  background-color: rgba(0, 0, 0, 0.07);
  z-index: 2;
}
</style>
