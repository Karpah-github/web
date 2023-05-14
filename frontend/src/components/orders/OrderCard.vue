<!-- eslint-disable no-undef -->
<script setup lang="ts">
const props = defineProps(["order"]);
</script>

<template>
  <div class="order-card">
    <div class="flex justify-between">
      <span class="uppercase flex gap-1 font-light text-sm"
        ><p class="text-neutral">Order ID:</p>
        <p class="text-[#4d4d4d]">#{{ order.orderId }}</p></span
      >
      <div class="flex gap-8">
        <router-link :to="`orders/${order.orderId}`"
          ><img src="../../assets/icons/maximize.svg" alt=""
        /></router-link>
      </div>
    </div>
    <div class="flex gap-2 items-center w-44 my-4 lg:w-full">
      <span
        class="bg-[#212121] text-white uppercase text-sm rounded-full w-8 h-8 flex justify-center items-center"
        >{{ order.customerName.charAt(0) }}</span
      >
      <div class="flex flex-col">
        <h6 class="text-sm">{{ order.customerName }}</h6>
      </div>
    </div>
    <div class="flex items-center gap-4 my-4">
      <div class="w-24">
        <img class="w-full" src="../../assets/image.png" alt="" />
      </div>
      <div class="">
        <p class="text-sm my-1">Salsa African Attire</p>
        <router-link
          :to="`orders/${order.orderId}`"
          class="text-primary font-light text-sm"
          >SHOW DETAILS</router-link
        >
      </div>
    </div>
    <div class="mt-4 font-light">
      <h3 class="text-sm uppercase text-neutral">DELIVERY</h3>
      <span
        v-if="order.status === 'delivered'"
        class="flex gap-1 mt-1 items-center"
      >
        <span
          class="flex items-center rounded-full justify-center bg-[#3BB75E] w-3 h-3"
        >
          <img class="w-full" src="../../assets/icons/Checkmark.svg" alt="" />
        </span>
        <p class="text-neutral font-thin">Shipped to</p>
        <p class="text-[#4D4D4D]">{{ order.location }}</p>
      </span>
      <p v-else class="text-[#4D4D4D]">Production due in 5 days</p>
    </div>
  </div>
</template>

<style lang="scss">
.order-card {
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 14px;
  min-width: 310px;
  height: 300px;
}
</style>
