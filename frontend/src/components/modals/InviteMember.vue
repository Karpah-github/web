<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
import { productList } from "@/composables/products/products";
const props = defineProps([
  "open",
  "close",
  "showActionsModal",
  "id",
  "hideProduct",
]);
const formData = ref({
  fullName: "",
  email: "",
  password: "",
});
const hideProduct = (x: string) => {
  productList.filter(function (item) {
    return item.id !== x;
  });
  props.close();
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="hide-modal text-left p-4"
      :class="showActionsModal === id ? 'show' : ''"
    >
      <div class="text-left">
        <button @click="props.close" class="flex ml-auto">
          <img src="../../assets/icons/close.svg" alt="" />
        </button>
        <h4 class="text-md font-medium">Add an admin</h4>
        <form class="my-4">
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="full-name">Full name</label>
            </span>
            <input
              class="form-field"
              type="text"
              name="full-name"
              v-model="formData.fullName"
              required
            />
          </div>
          <div class="form-input2">
            <span class="flex gap-1">
              <label for="email">Email address</label>
            </span>
            <input
              class="form-field"
              type="email"
              name="email"
              v-model="formData.email"
              required
            />
          </div>

          <div class="form-input2">
            <span class="flex gap-1">
              <label for="password">Password</label>
            </span>
            <input
              class="form-field"
              type="password"
              name="password"
              v-model="formData.password"
              required
            />
          </div>
          <div class="flex pt-5 gap-2 w-full">
            <button class="btn-primary px-3 py-2 rounded-sm text-sm w-full">
              Save Admin
            </button>

            <!-- <button class="btn-secondary px-3 py-1 w-1/2" @click="props.close">
              Cancel
            </button> -->
          </div>
        </form>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.hide-modal {
  background: #ffffff;
  display: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  position: fixed;
  width: 80%;
  height: 440px;
  overflow: scroll;
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
.svg-primary {
  filter: invert(28%) sepia(7%) saturate(5645%) hue-rotate(338deg)
    brightness(100%) contrast(88%);
}
</style>
