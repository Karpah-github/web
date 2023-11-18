<template>
  <div class="">
    <span class="flex gap-1">
      <label for="password">Password</label>
    </span>
    <div class="relative">
      <input
        id="password"
        :type="showPassword ? 'text' : 'password'"
        class="form-field"
        :value="password"
        @input="updateInput"
        :placeholder="placeholder"
      />
      <p
        v-if="password"
        class="absolute top-4 text-sm right-4 text-[#B0B0B0] cursor-pointer"
        @click="onToggleShowPassword"
      >
        Show
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  password: {
    type: String,
    required: true,
  },
  showPassword: {
    type: Boolean,
  },
  placeholder: {
    type: String,
  },
});
const emits = defineEmits(["update:modelValue", "toggle-show-password"]);
const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

const onToggleShowPassword = () => {
  emits("toggle-show-password");
};
</script>

<style></style>
