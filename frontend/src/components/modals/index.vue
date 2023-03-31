<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["open", "close"]);
</script>
<template>
  <div
    @click.self="props.close"
    v-if="props.open"
    class="modal-overlay flex justify-center items-center"
  >
    <div class="modal-container">
      <!-- <div class="flex justify-between items-center mb-5">
        <div>
          <p class="font-normal text-xl text-gray-700">{{ title }}</p>
        </div>
        <div class="flex justify-end">
          <button
            @click.prevent="close"
            class="uppercase text-sm text-gray-600"
          >
            <i class="uil uil-times-circle text-xl"></i>
          </button>
        </div>
      </div> -->
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.close-dot {
  width: 11px;
  height: 11px;
  border-radius: 6.5px;
  @apply bg-red-400 outline-none;
}
</style>
