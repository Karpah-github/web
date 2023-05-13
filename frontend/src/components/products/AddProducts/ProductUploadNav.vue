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
      class="font-light gap-1 flex md:gap-3 flex-wrap md:flex-nowrap uppercase py-6 text-neutral"
    >
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('upload-image')"
      >
        <span :class="[{ 'text-primary': screen === 'upload-image' }]"
          >upload images</span
        >
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              :class="[
                'normal-svg',
                { 'active-svg': screen === 'upload-image' },
              ]"
              d="M5.94043 13.28L10.2871 8.9333C10.8004 8.41997 10.8004 7.57997 10.2871 7.06664L5.94043 2.71997"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center items-center"
        @click="changeUploadScreen('product-details')"
      >
        <span :class="[{ 'text-primary': screen === 'product-details' }]"
          >Product Details</span
        >
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.94043 13.28L10.2871 8.9333C10.8004 8.41997 10.8004 7.57997 10.2871 7.06664L5.94043 2.71997"
              :class="[
                'normal-svg',
                { 'active-svg': screen === 'product-details' },
              ]"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('pricing')"
      >
        <span :class="[{ 'text-primary': screen === 'pricing' }]">pricing</span>
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.94043 13.28L10.2871 8.9333C10.8004 8.41997 10.8004 7.57997 10.2871 7.06664L5.94043 2.71997"
              :class="['normal-svg', { 'active-svg': screen === 'pricing' }]"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('variants')"
      >
        <span :class="[{ 'text-primary': screen === 'variants' }]"
          >variants</span
        >
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.94043 13.28L10.2871 8.9333C10.8004 8.41997 10.8004 7.57997 10.2871 7.06664L5.94043 2.71997"
              :class="['normal-svg', { 'active-svg': screen === 'variants' }]"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </li>
      <li
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
        @click="changeUploadScreen('shipping')"
      >
        <span :class="[{ 'text-primary': screen === 'shipping' }]"
          >shipping</span
        >
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.94043 13.28L10.2871 8.9333C10.8004 8.41997 10.8004 7.57997 10.2871 7.06664L5.94043 2.71997"
              :class="['normal-svg', { 'active-svg': screen === 'shipping' }]"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
