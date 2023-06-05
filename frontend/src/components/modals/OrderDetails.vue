<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps(["open", "close", "showActionsModal", "order"]);
const moreDetails = ref(-1);
const showMoreDetails = (x: number) => {
  if (moreDetails.value === x) {
    moreDetails.value = -1;
  } else {
    moreDetails.value = x;
  }
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="order-details text-left p-4"
      :class="showActionsModal === order.orderId ? 'show' : ''"
    >
      <div class="flex justify-between">
        <h3 class="text-2xl">Order #{{ order.orderId }}</h3>
        <div class="flex gap-8">
          <router-link :to="`orders/${order.orderId}`"
            ><img src="../../assets/icons/maximize.svg" alt=""
          /></router-link>
          <img @click="props.close" src="../../assets/icons/close.svg" alt="" />
        </div>
      </div>
      <ul class="flex justify-between gap-2 flex-wrap items-center py-4">
        <li class="flex gap-2">
          <span class="text-[#828282]">Date:</span>
          <p>Mar 31, 2023</p>
        </li>
        <li class="flex gap-3">
          <span class="text-[#B3B3B3]">Status:</span>
          <div class="flex items-center gap-2 w-32 lg:w-full">
            <div
              class="w-2 h-2 rounded-full"
              :class="[
                { 'bg-[#FA9E33]': order.status === 'processing' },
                { 'bg-[#3BB75E]': order.status === 'delivered' },
                { 'bg-[#E72B3B]': order.status === 'cancelled' },
              ]"
            ></div>
            <p class="uppercase text-[#333333] text-sm tracking-widest">
              {{ order.status }}
            </p>
          </div>
        </li>
        <li class="flex gap-2">
          <span class="text-[#B3B3B3]">Estimated Delivery:</span>
          <p>{{ order.deliveryDate }}</p>
        </li>
      </ul>
      <h4 class="text-xl pb-4">Product Ordered</h4>
      <div
        class="product py-2"
        v-for="(product, index) in order.products"
        :key="index"
        index
      >
        <div class="border border-neutral-border p-3 rounded-md">
          <div class="flex justify-between items-start">
            <div class="flex gap-3">
              <div class="w-24">
                <img
                  class="rounded-lg"
                  src="../../assets/image.png"
                  alt="product"
                />
              </div>
              <div
                class="flex flex-col justify-between gap-y-5 text-dark font-light"
              >
                <p class="w-11/12 md:w-full">
                  The Name of the product can be this long
                </p>
                <div class="flex justify-between">
                  <p>₦‎{{ order.price }}.00</p>
                  <p>Qty: {{ product.quantity }}</p>
                </div>
              </div>
            </div>
            <button
              @click="showMoreDetails(index)"
              class="font-light uppercase pt-2"
            >
              <span
                v-if="moreDetails !== index"
                class="flex gap-1 text-sm text-[#B3B3B3]"
              >
                <p class="hidden md:block">details</p>
                <img
                  src="../../assets/icons/arrow-right.svg"
                  class="w-full"
                  alt="right arrow"
                />
              </span>
              <span v-else class="flex items-center gap-1 text-sm text-primary">
                <p class="hidden md:block">hide details</p>
                <img
                  class="svg-primary w-5"
                  src="../../assets/icons/arrow-up-1.svg"
                  alt="down arrow"
                />
              </span>
            </button>
          </div>
          <div class="" v-if="moreDetails === index">
            <div class="border-y border-neutral-bg py-5 mt-4">
              <h6 class="uppercase text-md font-light tracking-widest pb-2">
                description
              </h6>
              <p class="text-sm">{{ product.description }}</p>
            </div>
            <div class="border-b border-neutral-bg py-5">
              <h6 class="uppercase text-md font-light tracking-widest pb-2">
                measurements
              </h6>
              <ul class="flex flex-col gap-y-3 pl-2">
                <li class="grid grid-cols-2 gap-10">
                  <span class="text-neutral font-light">Waist</span>
                  <p class="text-sm">{{ product.measurement.waist }} inches</p>
                </li>
                <li class="grid grid-cols-2 gap-10">
                  <span class="text-neutral font-light">Hip</span>
                  <p class="text-sm">{{ product.measurement.hip }} inches</p>
                </li>
                <li class="grid grid-cols-2 gap-10">
                  <span class="text-neutral font-light">Height</span>
                  <p class="text-sm">{{ product.measurement.height }} inches</p>
                </li>
                <li class="grid grid-cols-2 gap-10">
                  <span class="text-neutral font-light">Bust/Chest</span>
                  <p class="text-sm">{{ product.measurement.bust }} inches</p>
                </li>
              </ul>
            </div>
            <div class="border-b border-neutral-bg py-5">
              <h6 class="uppercase text-md font-light tracking-widest pb-2">
                Size
              </h6>
              <p class="text-sm bg-neutral-bg py-2 w-20 text-center rounded-sm">
                {{ product.size }}
              </p>
              <h6
                class="uppercase text-md font-light tracking-widest mt-3 pb-2"
              >
                material
              </h6>
              <p class="text-sm bg-neutral-bg py-2 w-32 text-center rounded-sm">
                {{ product.material }}
              </p>
            </div>
            <div class="border-b border-neutral-bg py-5">
              <h6 class="uppercase text-md font-light tracking-widest pb-2">
                personal note
              </h6>
              <p class="text-sm">{{ product.note }}</p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="text-xl pt-4 pb-3 mt-2">Customer details</h4>
      <div
        class="flex justify-between items-center pb-6 border-b border-neutral-border"
      >
        <div class="flex gap-2 items-center">
          <span
            class="bg-[#212121] text-white uppercase text-sm rounded-full w-8 h-8 flex justify-center items-center"
            >{{ order.customerName.charAt(0) }}</span
          >
          <div class="flex flex-col">
            <h6>{{ order.customerName }}</h6>
            <p class="text-xs text-[#828282]">
              {{ order.customerEmail }}
            </p>
          </div>
        </div>
        <button
          class="bg-white md:w-44 p-2 text-sm uppercase text-dark rounded-sm shadow-md"
        >
          message buyer
        </button>
      </div>
      <div class="md:flex justify-between py-6">
        <div class="md:w-5/12 border-b border-neutral-border md:border-none">
          <h4 class="text-xl pb-3">Shipping Details</h4>
          <p class="text-neutral text-sm font-light">Address</p>
          <p class="text-neutral text-sm pb-4 font-light">
            123, Jeweess Bridge Apt. 174 London, UK.
          </p>
          <p class="text-neutral text-sm font-light">Phone Number</p>
          <p class="text-neutral text-sm pb-4 font-light">474-746-3918</p>
        </div>
        <div class="md:w-6/12">
          <h4 class="text-xl py-4">Order Summary</h4>
          <ul class="flex flex-col gap-4">
            <li class="flex justify-between">
              <p class="text-neutral text-sm">Subtotal</p>
              <p class="text-dark test-sm">₦‎129.00</p>
            </li>
            <li class="flex justify-between">
              <p class="text-neutral text-sm">Discount</p>
              <p class="text-dark test-sm">₦‎129.00</p>
            </li>
            <li class="flex justify-between">
              <p class="text-neutral text-sm">Delivery</p>
              <p class="text-dark test-sm">₦‎129.00</p>
            </li>
            <li class="flex justify-between">
              <p class="text-neutral text-sm">Tax</p>
              <p class="text-dark test-sm">₦‎129.00</p>
            </li>
            <li
              class="flex justify-between pt-2 border-t border-neutral-border"
            >
              <p class="text-neutral text-sm">Total</p>
              <p class="text-dark test-sm">₦‎1129.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.order-details {
  background: #ffffff;
  display: none;
  overflow-y: auto;
  top: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 3;
  position: fixed;
  cursor: pointer;
  &.show {
    display: block;
  }
  @include md {
    width: 60%;
    height: 100%;
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
  background-color: rgba(0, 0, 0, 0.07);
  /* overflow: aut; */
  z-index: 2;
}
.svg-primary {
  filter: invert(62%) sepia(56%) saturate(388%) hue-rotate(348deg)
    brightness(88%) contrast(90%);
}
</style>
