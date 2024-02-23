<script setup lang="ts"></script>

<template>
  <div>
    <section class="bg-[#29292B] border-t py-14 border-[#D9D9D9] px-4 md:px-10">
      <div
        class="flex justify-between flex-wrap gap-2 text-xs md:text-sm text-white font-light"
      >
        <div class="">
          <h6 class="text-xl font-">Join to our newsletter</h6>
          <p class="text-base text-[#FFFFFFCC]">
            Get product updates, company news, and more
          </p>
          <div class="my-5 flex gap-2">
            <input
              type="email"
              name="email"
              id="email"
              class="border border-[#FFFFFF33] bg-transparent text-white w-[250px] md:w-[270px] py-2 outline-none rounded-3xl px-2"
              placeholder="Enter your email"
            />
            <router-link
              to="/auth/signup"
              class="bg-white text-dark py-2 px-5 text-base rounded-3xl"
            >
              Subscribe
            </router-link>
          </div>
        </div>
        <div class="flex gap-16">
          <ul class="flex flex-col gap-5">
            <li class="uppercase text-sm text-[#FFFFFF80]">company</li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                Blog
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/community" class="text-lg text-white">
                Community
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                Contact
              </router-link>
            </li>
          </ul>
          <ul class="flex flex-col gap-5">
            <li class="uppercase text-sm text-[#FFFFFF80]">folllow us</li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                X - Twitter
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/community" class="text-lg text-white">
                Instagram
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                Facebook
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bg-[#29292B] border-t border-[#D9D9D9] px-4 md:px-10">
      <div
        class="flex justify-between flex-wrap gap-2 my-8 text-xs md:text-sm text-neutral font-light"
      >
        <p class="">
          © 2023 Karpah. All rights reserved.
        </p>
        <div class="flex gap-2 md:gap-4">
          <router-link to="/" class="underline">Privacy policy</router-link>
          <router-link to="/" class="underline"
            >Terms and Condition</router-link
          >
        </div>
      </div>
      <div class="mt-20">
        <img src="../assets/landing-page/footer-logo.png" alt="" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
