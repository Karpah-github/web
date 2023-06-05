<script setup lang="ts"></script>

<template>
  <div class="flex h-screen">
    <div class="bg-[#FAF4EE] px-5 hidden md:block md:w-5/12 pt-8">
      <div class="">
        <img class="w-32" src="../../assets/Karpah.svg" alt="" />
      </div>
      <h6 class="auth-header w-9/12 mt-10">
        Unleash your brand's potential. Join our dynamic marketplace and elevate
        your fashion presence
      </h6>
      <div class="w-5/6">
        <img
          src="../../assets/check-email.svg"
          alt="check email illustration"
        />
      </div>
    </div>
    <div
      class="pt-8 px-8 mx-auto md:w-6/12 flex flex-col justify-center w-full"
    >
      <div class="mb-4 w-full md:w-9/12 mx-auto">
        <h6 class="text-dark text-xl mb-2 font-semibold">Check your email</h6>
        <p class="font-light text-[#4D4D4D]">
          Check your email address for a link to reset your account password. If
          is doesn’t appear within few minutes, kindly check your spam folder.
        </p>
      </div>
      <div class="md:w-9/12 w-full my-5 mx-auto">
        <div class="form-input2">
          <span class="flex gap-1">
            <label for="email">Email address</label>
          </span>
          <div
            class="rounded-md text-[#4D4D4D] text-sm outline-none p-2 bg-[#E6E6E6]"
          >
            johndoe12@gmail.com
          </div>
        </div>
      </div>
      <div class="flex gap-2 text-sm justify-center items-center">
        <p class="text-neutral">Wrong email?</p>
        <router-link to="/auth/signup" class="text-dark underline"
          >Change it</router-link
        >
      </div>
      <div class="my-8 flex text-sm justify-center text-neutral" text-sm>
        Having problems? please try again later or
        <router-link to="/" class="text-[#5693CC] px-1"
          >Contact Support
        </router-link>
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
