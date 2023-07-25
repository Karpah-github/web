<script setup lang="ts">
import { ref } from "vue";

const createStore = ref(true);
const brandStore = ref(false);
const connectBank = ref(false);
const addProducts = ref(false);
const launchStore = ref(false);
if (
  createStore.value &&
  brandStore.value &&
  connectBank.value &&
  addProducts.value
) {
  launchStore.value = true;
}
</script>

<template>
  <div class="px-6 md:px-8 py-10 lg:w-8/12 mx-auto">
    <div
      class="bg-neutral-bg px-1 md:px-3 py-2 items-center flex justify-between rounded-lg"
    >
      <div class="flex gap-2">
        <span
          class="hidden md:flex rounded-full justify-center items-center w-6 h-6 bg-primary text-white"
          >!</span
        >
        <p class="text-[#4d4d4d] text-xs md:text-sm">
          Learn how to effectively setup your shop
        </p>
      </div>
      <button
        class="bg-white text-[8px] px-1 md:text-[14px] md:px-4 py-2 rounded-md"
      >
        Watch Tutorials
      </button>
    </div>
    <div class="mt-10 text-center">
      <h5 class="header5">Getting started with Karpah</h5>
      <p class="font-light text-sm md:text-md py-1 text-neutral">
        Complete the following to showcase your products and start growing your
        business.
      </p>
      <div class="flex justify-between items-center my-10">
        <div class="bg-neutral-border rounded-xl h-2 w-1/2">
          <div
            class="bg-primary h-2 rounded-xl"
            :class="[createStore ? 'w-[20%]' : 'w-[0%]']"
          ></div>
        </div>
        <p class="text-dark font-light text-xs md:text-sm">
          1 of 5 steps completed
        </p>
      </div>
      <div class="flex flex-col gap-12">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <span
              class="flex rounded-full justify-center items-center w-10 h-10"
              :class="
                createStore
                  ? 'bg-[#FAF4EE] text-[#CC8F56]'
                  : 'bg-[#ECECEC] text-[#4d4d4d]'
              "
              >1</span
            >
            <div class="text-left">
              <p class="font-medium text-sm md:text-md text-dark">
                Create your store
              </p>
              <p class="text-sm font-light text-neutral">
                Add more details about your store
              </p>
            </div>
          </div>
          <span
            v-if="createStore"
            class="flex items-center rounded-full justify-center bg-[#3BB75E] w-5 h-5"
          >
            <img class="w-full" src="../../assets/icons/Checkmark.svg" alt="" />
          </span>
          <router-link
            to="/settings/store"
            v-else
            class="btn-secondary py-2 px-4"
            >Complete</router-link
          >
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <span
              class="flex rounded-full justify-center items-center w-10 h-10"
              :class="
                brandStore
                  ? 'bg-[#FAF4EE] text-[#CC8F56]'
                  : 'bg-[#ECECEC] text-[#4d4d4d]'
              "
              >2</span
            >
            <div class="text-left">
              <p class="font-medium text-md text-dark">Brand your store</p>
              <p class="text-sm font-light text-neutral">
                Give your store front a branded look
              </p>
            </div>
          </div>
          <span
            v-if="brandStore"
            class="flex items-center rounded-full justify-center bg-[#3BB75E] w-5 h-5"
          >
            <img class="w-full" src="../../assets/icons/Checkmark.svg" alt="" />
          </span>
          <router-link
            to="/settings/branding"
            v-else
            class="btn-secondary py-2 px-4"
            >Setup</router-link
          >
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <span
              class="flex rounded-full justify-center items-center w-10 h-10"
              :class="
                connectBank
                  ? 'bg-[#FAF4EE] text-[#CC8F56]'
                  : 'bg-[#ECECEC] text-[#4d4d4d]'
              "
              >3</span
            >
            <div class="text-left">
              <p class="font-medium text-sm md:text-md text-dark">
                Connect your bank account
              </p>
              <p class="text-sm font-light text-neutral">
                Add a payout bank account to receive money
              </p>
            </div>
          </div>
          <span
            v-if="connectBank"
            class="flex items-center rounded-full justify-center bg-[#3BB75E] w-5 h-5"
          >
            <img class="w-full" src="../../assets/icons/Checkmark.svg" alt="" />
          </span>
          <router-link
            to="/settings/payout"
            v-else
            class="btn-secondary py-2 px-4"
            >Connect</router-link
          >
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <span
              class="flex rounded-full justify-center items-center w-10 h-10"
              :class="
                addProducts
                  ? 'bg-[#FAF4EE] text-[#CC8F56]'
                  : 'bg-[#ECECEC] text-[#4d4d4d]'
              "
              >4</span
            >
            <div class="text-left">
              <p class="font-medium text-sm md:text-md text-dark">
                Add your products
              </p>
              <p class="text-sm font-light text-neutral">
                Start listing your products to karpah
              </p>
            </div>
          </div>
          <span
            v-if="addProducts"
            class="flex items-center rounded-full justify-center bg-[#3BB75E] w-5 h-5"
          >
            <img class="w-full" src="../../assets/icons/Checkmark.svg" alt="" />
          </span>
          <router-link to="/add-product" v-else class="btn-secondary py-2 px-4"
            >Add</router-link
          >
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-4">
            <span
              class="flex rounded-full justify-center items-center w-10 h-10"
              :class="
                launchStore
                  ? 'bg-[#FAF4EE] text-[#CC8F56]'
                  : 'bg-[#ECECEC] text-[#4d4d4d]'
              "
              >5</span
            >
            <div class="text-left">
              <p class="font-medium text-sm md:text-md text-dark">
                Launch your store
              </p>
              <p class="text-sm font-light text-neutral">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <span
            v-if="launchStore"
            class="flex items-center rounded-full justify-center bg-[#3BB75E] w-5 h-5"
          >
            <img class="w-full" src="../../assets/icons/Checkmark.svg" alt="" />
          </span>
          <button
            v-else
            :disabled="!launchStore"
            class="btn-secondary py-2 px-4"
          >
            Launch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button:disabled {
  background-color: #f2f2f2;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
