<script setup lang="ts">
import { ref } from "vue";
// eslint-disable-next-line no-undef
const props = defineProps({ page: String });
// eslint-disable-next-line no-undef
const emit = defineEmits(["update:page"]);
const screen = ref(props.page);
const changeUploadScreen = (view: string) => {
  screen.value = view;
  emit("update:page", view);
};
</script>

<template>
  <nav>
    <ul
      class="font-light gap-5 flex md:gap-6 flex-wrap cursor-pointer md:flex-nowrap uppercase py-6 text-neutral"
    >
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('store')"
      >
        <span
          :class="[
            { 'text-primary border-b border-primary': screen === 'store' },
          ]"
          >Store</span
        >
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('Account')"
      >
        <span
          :class="[
            { 'text-primary border-b border-primary': screen === 'Account' },
          ]"
          >Account</span
        >
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('Branding')"
      >
        <span
          :class="[
            { 'text-primary border-b border-primary': screen === 'Branding' },
          ]"
          >Branding</span
        >
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('notification')"
      >
        <span
          :class="[
            {
              'text-primary border-b border-primary': screen === 'notification',
            },
          ]"
          >notification</span
        >
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('Payout')"
      >
        <span
          :class="[
            { 'text-primary border-b border-primary': screen === 'Payout' },
          ]"
          >Payout</span
        >
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('password')"
      >
        <span
          :class="[
            { 'text-primary border-b border-primary': screen === 'password' },
          ]"
          >Password</span
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.normal-svg {
  stroke: #828282;
}
.active-svg {
  stroke: #cc8f56 !important;
}
</style>
