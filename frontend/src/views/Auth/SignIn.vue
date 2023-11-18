<script setup lang="ts">
import { ref } from "vue";
import customPasswordInput from "@/components/CustomPasswordInput.vue";

const signInData = ref({
  email: "",
  password: "",
  keepSignedIn: false,
});
const showPassword = ref(false);
</script>

<template>
  <div class="flex h-screen">
    <div class="bg-[#FAF4EE] px-5 hidden md:block md:w-5/12 py-8">
      <div class="">
        <img class="w-32" src="../../assets/Karpah.svg" alt="" />
      </div>
      <h6 class="auth-header w-9/12 mt-10">
        Capture fashion's spotlight. Sell your creations on our marketplace and
        shine globally.
      </h6>
      <div class="">
        <img src="../../assets/signup.svg" alt="signup illustration" />
      </div>
    </div>
    <div
      class="pt-8 px-8 mx-auto flex flex-col md:w-6/12 justify-center w-full"
    >
      <div class="mb-4 w-full md:w-9/12 mx-auto">
        <h6 class="text-dark text-xl mb-2 font-semibold">Welcome Back</h6>
        <p class="font-light text-[#4D4D4D]">
          What a great day to make sales on Karpah!
        </p>
      </div>
      <form class="md:w-9/12 w-full my-5 mx-auto">
        <div
          class="form-field gap-2 cursor-pointer mb-6 justify-center flex items-center"
        >
          <img src="../../assets/icons/google-icon.svg" alt="" />
          <p>Continue with Google</p>
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="email">Email address</label>
          </span>
          <input
            class="form-field"
            type="email"
            name="email"
            v-model="signInData.email"
            required
          />
        </div>
        <customPasswordInput
          :password="signInData.password"
          :showPassword="showPassword"
          v-model="signInData.password"
          @toggle-show-password="showPassword = !showPassword"
        />
        <button class="btn-primary w-full mt-6 py-2">Log in to Karpah</button>
      </form>
      <div
        class="flex justify-between text-sm md:w-9/12 w-full mx-auto items-center"
      >
        <div class="flex gap-2 my-2 items-center">
          <input
            class=""
            type="checkbox"
            name="kepp-signedin"
            v-model="signInData.keepSignedIn"
            required
          />
          <label for="kepp-signedin">Keep me signed in </label>
        </div>
        <router-link to="/auth/forgot-password" class="text-dark underline"
          >Forgot Password</router-link
        >
      </div>
      <div class="flex gap-2 justify-center items-center my-8">
        <p class="text-neutral">Don’t have an account?</p>
        <router-link to="/auth/signup" class="text-dark underline"
          >Sign Up</router-link
        >
      </div>
      <div
        class="text-sm absolute bottom-4 md:left-[50%] translate-x-[40%] flex gap-10 font-light"
      >
        <router-link to="/" class="text-[#5693CC]">Terms of Use</router-link>
        <router-link to="/" class="text-[#5693CC]">Privacy Policy</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-header {
  font-family: "Bebas Neue";
  font-style: normal;
  font-size: 28px;
  letter-spacing: 0.011em;
  color: #333333;
}
</style>
