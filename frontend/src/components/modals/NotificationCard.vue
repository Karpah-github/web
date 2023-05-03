<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps(["open", "close", "showNotificationModal"]);
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div class="notification-modal py-2" :class="props.open ? 'show' : ''">
      <div class="px-2 flex justify-between py-2 border-b border-netrual">
        <h3 class="font-medium">Notifications</h3>
        <p class="text-neutral text-sm font-light">Mark all as read</p>
      </div>
      <div class="flex items-center justify-center mt-10">
        <div class="text-center">
          <div class="w-32 mx-auto mb-1">
            <img
              class="w-full"
              src="../../assets/icons/no-notification.svg"
              alt=""
            />
          </div>
          <p class="text-md text-netrual font-light mx-auto">
            No notification yet
          </p>
        </div>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.notification-modal {
  background: #ffffff;
  display: none;
  top: 70px;
  /* left: 0px; */
  bottom: 0px;
  right: 20px;
  z-index: 3;
  position: fixed;
  width: 80%;
  height: 355px;
  cursor: pointer;
  border-radius: 8px;
  &.show {
    display: block;
    margin: 0 auto;
  }
  @include md {
    width: 400px;
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
  background-color: rgba(0, 0, 0, 0.5);
  /* overflow: aut; */
  z-index: 2;
}
.svg-red {
  filter: invert(38%) sepia(89%) saturate(4462%) hue-rotate(336deg)
    brightness(89%) contrast(105%);
}
</style>
