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
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
