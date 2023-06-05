<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="px-5 lg:px-8 my-6">
    <div class="flex gap-2">
      <button @click.prevent="router.go(-1)" class="btn-secondary p-1">
        <img class="w-4" src="../../assets/icons/arrow-left.svg" alt="" />
      </button>
      <p class="text-dark">Store Activity</p>
    </div>
    <p class="text-uppercase mt-6">Today</p>
    <div
      class="flex flex-col md:flex-row gap-2 justify-between w-full border-b border-neutral-border py-5"
    >
      <div class="flex gap-2 items-start">
        <img src="../../assets/avatar.svg" class="w-12" alt="avatar" />
        <div class="">
          <p class="text-dark mb-1 text-md">You have a new message</p>
          <p class="font-light text-neutral text-sm">
            A payment of $7.20 has been applied to your financial account.
          </p>
        </div>
      </div>
      <p class="text-[#B3B3B3] text-sm">March 24, 2023 at 4:43PM</p>
    </div>
    <div
      class="flex flex-col md:flex-row gap-2 justify-between w-full border-b border-neutral-border py-5"
    >
      <div class="flex gap-2 items-start">
        <img src="../../assets/avatar.svg" class="w-12" alt="avatar" />
        <div class="">
          <p class="text-dark mb-1 text-md">You have a new message</p>
          <p class="font-light text-neutral text-sm">
            A payment of $7.20 has been applied to your financial account.
          </p>
        </div>
      </div>
      <p class="text-[#B3B3B3] text-sm">March 24, 2023 at 4:43PM</p>
    </div>
    <div
      class="flex flex-col md:flex-row gap-2 justify-between w-full border-b border-neutral-border py-5"
    >
      <div class="flex gap-2 items-start">
        <img src="../../assets/avatar.svg" class="w-12" alt="avatar" />
        <div class="">
          <p class="text-dark mb-1 text-md">You have a new message</p>
          <p class="font-light text-neutral text-sm">
            A payment of $7.20 has been applied to your financial account.
          </p>
        </div>
      </div>
      <p class="text-[#B3B3B3] text-sm">March 24, 2023 at 4:43PM</p>
    </div>
    <div class="flex flex-col md:flex-row gap-2 justify-between w-full py-5">
      <div class="flex gap-2 items-start">
        <img src="../../assets/avatar.svg" class="w-12" alt="avatar" />
        <div class="">
          <p class="text-dark mb-1 text-md">You have a new message</p>
          <p class="font-light text-neutral text-sm">
            A payment of $7.20 has been applied to your financial account.
          </p>
        </div>
      </div>
      <p class="text-[#B3B3B3] text-sm">March 24, 2023 at 4:43PM</p>
    </div>
    <p class="text-uppercase mt-6">March 2, 2023</p>
    <div
      class="flex flex-col md:flex-row gap-2 justify-between w-full border-b border-neutral-border py-5"
    >
      <div class="flex gap-2 items-start">
        <img src="../../assets/avatar.svg" class="w-12" alt="avatar" />
        <div class="">
          <p class="text-dark mb-1 text-md">You have a new message</p>
          <p class="font-light text-neutral text-sm">
            A payment of $7.20 has been applied to your financial account.
          </p>
        </div>
      </div>
      <p class="text-[#B3B3B3] text-sm">March 24, 2023 at 4:43PM</p>
    </div>
    <div class="flex flex-col md:flex-row gap-2 justify-between w-full py-5">
      <div class="flex gap-2 items-start">
        <img src="../../assets/avatar.svg" class="w-12" alt="avatar" />
        <div class="">
          <p class="text-dark mb-1 text-md">You have a new message</p>
          <p class="font-light text-neutral text-sm">
            A payment of $7.20 has been applied to your financial account.
          </p>
        </div>
      </div>
      <p class="text-[#B3B3B3] text-sm">March 24, 2023 at 4:43PM</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
