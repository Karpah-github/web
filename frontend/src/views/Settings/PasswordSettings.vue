<template>
  <div class="">
    <div class="flex justify-between gap-4">
      <h5 class="header6 text-xl pt-2">Password</h5>
      <button type="button" class="btn-primary px-4 py-2 uppercase">
        Save Changes
      </button>
    </div>

    <form action="" class="md:w-6/12 pt-4">
      <div class="form-input">
        <span class="flex gap-1">
          <label for="old-password">Old Password</label>
        </span>
        <input
          class="form-field"
          type="text"
          name="old-password"
          v-model="password.oldPassword"
          required
        />
      </div>
      <div class="form-input">
        <label for="new-password">New Password</label>
        <input
          class="form-field"
          type="text"
          name="new-password"
          v-model="password.newPassword"
          id="new-password"
        />
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line no-undef
const password = ref({
  oldPassword: "",
  newPassword: "",
});
</script>

<style lang="scss" scoped></style>
