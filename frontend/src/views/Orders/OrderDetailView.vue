<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { orderList } from "../../composables/orders/orders";
const route = useRoute();
const router = useRouter();
const order = orderList.find((o) => o.orderId === route.params.id);
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
  <div class="text-left p-4" v-if="order">
    <div class="">
      <button @click.prevent="router.go(-1)" class="btn-secondary p-0.5">
        <img src="../../assets/icons/arrow-left.svg" alt="" />
      </button>
    </div>
    <nav>
      <ul class="gap-1 flex md:gap-2 flex-wrap md:flex-nowrap uppercase py-4">
        <li>
          <router-link
            to="/"
            class="flex gap-1 text-sm items-center font-light text-[#b3b3b3]"
          >
            <span>DASHBOARD</span>
            <div>
              <img
                src="../../assets/icons/arrow-right.svg"
                alt="arrow-right icon"
                class="svg-mid-neutral"
              />
            </div>
          </router-link>
        </li>
        <li>
          <router-link
            to="/orders"
            class="flex gap-1 text-sm font-light items-center text-[#b3b3b3]"
          >
            <span>ORDERS</span>
            <div>
              <img
                src="../../assets/icons/arrow-right.svg"
                alt="arrow-right icon"
                class="svg-mid-neutral"
              />
            </div>
          </router-link>
        </li>
        <li class="flex gap-1 text-sm items-center">
          <span>#{{ order.orderId }}</span>
        </li>
      </ul>
    </nav>
    <div class="flex justify-between">
      <h3 class="text-2xl">Order #{{ order.orderId }}</h3>
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
    <div class="md:flex gap-5 items-start">
      <div class="md:w-8/12">
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
                <span
                  v-else
                  class="flex items-center gap-1 text-sm text-primary"
                >
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
                    <p class="text-sm">
                      {{ product.measurement.waist }} inches
                    </p>
                  </li>
                  <li class="grid grid-cols-2 gap-10">
                    <span class="text-neutral font-light">Hip</span>
                    <p class="text-sm">{{ product.measurement.hip }} inches</p>
                  </li>
                  <li class="grid grid-cols-2 gap-10">
                    <span class="text-neutral font-light">Height</span>
                    <p class="text-sm">
                      {{ product.measurement.height }} inches
                    </p>
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
                <p
                  class="text-sm bg-neutral-bg py-2 w-20 text-center rounded-sm"
                >
                  {{ product.size }}
                </p>
                <h6
                  class="uppercase text-md font-light tracking-widest mt-3 pb-2"
                >
                  material
                </h6>
                <p
                  class="text-sm bg-neutral-bg py-2 w-32 text-center rounded-sm"
                >
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
        <div class="flex justify-between items-center mb-10">
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
      </div>
      <div class="border border-neutral-border p-3 mt-2 rounded-md md:w-4/12">
        <div class="border-b border-neutral-border pb-2">
          <h4 class="text-xl pb-3 pt-1">Shipping Details</h4>
          <p class="text-neutral text-sm font-light">Address</p>
          <p class="text-[#4d4d4d] text-sm pb-4 font-light">
            123, Jeweess Bridge Apt. 174 London, UK.
          </p>
          <p class="text-neutral text-sm font-light">Phone Number</p>
          <p class="text-[#4d4d4d] text-sm pb-4 font-light">474-746-3918</p>
        </div>
        <div class="mt-2">
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
              class="flex justify-between pt-3 mt-3 border-t border-neutral-border"
            >
              <p class="text-neutral text-sm">Total</p>
              <p class="text-dark test-sm">₦‎1129.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.order-details {
  background: #ffffff;
  cursor: pointer;
}

.svg-primary {
  filter: invert(62%) sepia(56%) saturate(388%) hue-rotate(348deg)
    brightness(88%) contrast(90%);
}
.svg-mid-neutral {
  filter: invert(76%) sepia(0%) saturate(539%) hue-rotate(190deg)
    brightness(98%) contrast(82%);
}
</style>
