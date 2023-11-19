<template>
  <transition name="slide-down">
    <div
      v-if="props.errorMsg | Store.errorMsg.length"
      class="tw-fixed tw-left-1/2 tw-top-4 tw-rounded-md -tw-translate-x-1/2 tw-z-[100] tw-px-4 tw-py-2 tw-shadow-md"
      :class="[
        Store.errorSuccess
          ? 'tw-text-green-700 tw-bg-[#D1F1CC] tw-border-l-4 tw-border tw-border-[#A4E299] tw-border-l-[#A4E299]'
          : 'tw-text-red-700 tw-bg-[#FBE9E9] tw-border-l-4 tw-border tw-border-l-[#DC4437] tw-border-[#F4B7B5]',
      ]"
    >
      <p class="tw-text-red-700 tw-m-0">{{ errorMsg }}</p>
      <p
        v-if="Store.errorSuccess"
        class="tw-text-[#0E5C00] tw-my-1 tw-font-medium"
      >
        Success
      </p>
      <p v-else class="tw-text-[#590C07] tw-my-1 tw-font-medium">
        Request failed
      </p>
      <p
        class="tw-m-0"
        :class="[Store.errorSuccess ? 'tw-text-green-700' : 'tw-text-red-700']"
      >
        {{ Store.errorMsg }}
      </p>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useErrorInfo } from "@/store/error";

const Store = useErrorInfo();
// eslint-disable-next-line no-undef
const props = defineProps(["errorMsg"]);
</script>
<style lang="scss" scoped>
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 1s, transform 1s;
}
</style>
