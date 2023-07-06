<script setup lang="ts"></script>

<template>
  <div>
    <div class="nav flex justify-between items-center bg-white px-8 py-4">
      <div class="w-28">
        <img class="" src="../../assets/Karpah.svg" alt="" />
      </div>
      <div class="flex gap-8 items-center">
        <router-link class="text-dark text-md" to="/">Community</router-link>
        <button class="btn-primary py-2 px-4">Your Shop</button>
      </div>
    </div>
    <div class="banner">
      <img src="../../assets/banner.png" alt="" />
    </div>
    <div class="flex my-6 flex-wrap justify-between items-center gap-16">
      <div class="flex gap-3 items-center">
        <div class="w-[240px]">
          <img class="rounded-md w-full" src="../../assets/brand.png" alt="" />
        </div>
        <div class="">
          <h5 class="text-2xl font-medium text-dark">Inks by Ojaymie</h5>
          <p class="text-neutral py-2 text-sm font-light">
            Quality designs you’ll love
          </p>
          <p class="text-neutral pb-4 text-sm font-light">Lagos, Nigeria</p>
          <button class="btn-secondary px-4 py-2">Edit profile</button>
        </div>
      </div>
      <div class="md:w-5/12 pr-8">
        <p class="text-neutral font-light text-md">
          Discover the perfect blend of style and quality at our fashion store.
          We offer a carefully curated collection of trendy clothing and
          accessories that will elevate your wardrobe. Experience exceptional
          customer service and find the latest fashion essentials to express
          your unique style.
        </p>
        <div class="flex gap-5">
          <div class="flex gap-4 items-center my-4">
            <img
              class="rounded-full w-10 h-10"
              src="../../assets/sellerAvatar.png"
              alt=""
            />
            <p class="font-light text-sm text-dark">Janet doe</p>
          </div>
          <button class="text-primary">Message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped></style>
