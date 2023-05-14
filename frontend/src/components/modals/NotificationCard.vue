<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps(["open", "close", "showNotificationModal"]);
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div class="notification-modal py-2" :class="props.open ? 'show' : ''">
      <div
        class="px-2 flex justify-between py-2 border-b border-neutral-border"
      >
        <h3 class="font-medium">Notifications</h3>
        <p class="text-neutral text-sm font-light">Mark all as read</p>
      </div>
      <!-- <div class="flex items-center justify-center mt-20">
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
      </div> -->
      <div>
        <div class="px-4 py-4 flex flex-col gap-5 mb-4">
          <div class="flex gap-1 items-center">
            <div class="img mr-2">
              <img src="../../assets/avatar.svg" alt="avatar" />
            </div>
            <div class="">
              <p class="text-dark">New sale !</p>
              <p class="font-light text-neutral text-xs">
                You sold 3 units of XYZ product for $150
              </p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div
              class="w-10 h-10 flex justify-center items-center rounded-full bg-[#FAF4EE]"
            >
              <img
                class="svg-primary"
                src="../../assets/icons/messages-2.svg"
                alt="avatar"
              />
            </div>
            <div class="">
              <p class="text-dark">You have a new message</p>
              <p class="font-light text-neutral text-xs">
                A payment of $7.20 has been applied to your financial account.
              </p>
            </div>
          </div>
          <div class="flex gap-1 items-center">
            <div class="img mr-2">
              <img src="../../assets/avatar.svg" alt="avatar" />
            </div>
            <div class="">
              <p class="text-dark">New sale!</p>
              <p class="font-light text-neutral text-xs">
                You sold 3 units of XYZ product for $150
              </p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div
              class="w-10 h-10 flex justify-center items-center rounded-full bg-[#FAF4EE]"
            >
              <img
                class="svg-primary"
                src="../../assets/icons/messages-2.svg"
                alt="avatar"
              />
            </div>
            <div class="">
              <p class="text-dark">You have a new message</p>
              <p class="font-light text-neutral text-xs">
                A payment of $7.20 has been applied to your financial account.
              </p>
            </div>
          </div>
          <div class="flex gap-2 items-center">
            <div
              class="w-10 h-10 flex justify-center items-center rounded-full bg-[#FAF4EE]"
            >
              <img
                class="svg-primary w-6"
                src="../../assets/icons/shopping-cart.svg"
                alt="avatar"
              />
            </div>
            <div class="">
              <p class="text-dark">
                New Order received for Salsa African Dress
              </p>
              <p class="font-light text-neutral text-xs">
                You've received a new order for Salsa African dress
              </p>
            </div>
          </div>
        </div>
        <router-link
          @click="props.close"
          to="/store-activities"
          class="text-neutral text-sm pl-2"
          >See all activities</router-link
        >
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
  height: 450px;
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
