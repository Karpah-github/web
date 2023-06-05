<script setup lang="ts">
import { ref } from "vue";

const signInData = ref({
  email: "",
});
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
        <img src="../../assets/signin.svg" alt="signin illustration" />
      </div>
    </div>
    <div
      class="pt-8 px-8 mx-auto md:w-6/12 flex flex-col justify-center w-full"
    >
      <div class="mb-4 w-full md:w-9/12 mx-auto">
        <h6 class="text-dark text-xl mb-2">Forgot Password</h6>
        <p class="font-light text-[#4D4D4D]">
          Kindly provide us with the email address that is linked to your
          account, and we will send you a link to reset your password
        </p>
      </div>
      <form class="md:w-9/12 w-full my-5 mx-auto">
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="email">Email address</label>
          </span>
          <input
            class="form-field"
            type="text"
            name="email"
            v-model="signInData.email"
            required
          />
        </div>
        <button class="btn-primary w-full mt-6 py-2">
          Didn’t get it? Resend
        </button>
      </form>
      <div class="flex gap-2 text-sm justify-center items-center my-8">
        <p class="text-neutral">Wrong email?</p>
        <router-link to="/auth/signin" class="text-dark underline"
          >Change it</router-link
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
