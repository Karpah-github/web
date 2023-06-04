<script setup lang="ts">
import { ref } from "vue";

const signUpData = ref({
  fullName: "",
  storeName: "",
  email: "",
  password: "",
  confirmPassword: "",
  MakeCustomWear: false,
});
</script>

<template>
  <div class="flex">
    <div class="bg-[#FAF4EE] px-5 hidden md:block md:w-6/12 py-8">
      <div class="">
        <img class="w-32" src="../../assets/Karpah.svg" alt="" />
      </div>
      <h6 class="auth-header w-9/12 mt-10">
        Global stage for your fashion. Sell your designs worldwide on our
        marketplace
      </h6>
      <div class="w-5/6">
        <img src="../../assets/signup.svg" alt="signup illustration" />
      </div>
    </div>
    <div class="px-8 py-8">
      <div class="mb-4 md:w-8/12 mx-auto">
        <h6 class="text-dark text-xl mb-2">Welcome to Karpah</h6>
        <p class="font-light text-[#4D4D4D]">
          Unlock your potential as a fashion designer. We connects you with a
          global audience and helps you grow your brand
        </p>
      </div>
      <form class="md:w-8/12 mx-auto my-8">
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="email">Email address</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="email"
            v-model="signUpData.email"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="full-name">Full name</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="full-name"
            v-model="signUpData.fullName"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="store-name">Store Name</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="store-name"
            v-model="signUpData.storeName"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="password">Password</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="password"
            v-model="signUpData.password"
            required
          />
        </div>
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="confirm-password">Confirm Password</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="confirm-password"
            v-model="signUpData.confirmPassword"
            required
          />
        </div>
        <div class="flex gap-2 my-2 items-center">
          <input
            class=""
            type="checkbox"
            name="cutome-wear"
            v-model="signUpData.MakeCustomWear"
            required
          />
          <label for="cutome-wear">Yes, I’m willing to do custom wear </label>
        </div>
        <button class="btn-primary w-full mt-8 py-2">Create account</button>
      </form>
      <div class="flex gap-1 justify-center items-center mb-6">
        <p class="text-neutral">Already have an account?</p>
        <router-link to="/auth/signin" class="text-dark underline"
          >Log in</router-link
        >
      </div>
      <div
        class="mb-5 w-5/12 text-sm mx-auto text-center font-light text-neutral"
      >
        <span>
          By signing up, you agree to our
          <router-link to="/" class="text-[#5693CC]">Privacy Policy</router-link
          >,
          <router-link to="/" class="text-[#5693CC]">Cookie Policy</router-link>
          and
          <router-link to="/" class="text-[#5693CC]">Terms of Use</router-link>
        </span>
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
