<script setup lang="ts">
import PostCard from "@/components/Blog/PostCard.vue";
import shopCard from "@/components/Shop/ShopCard.vue";
import { ref } from "vue";
const blogContent = ref<Array<any>>([
  {
    id: 1,
    title:
      "A Step-by-Step Guide to Setting Up a Successful Store Account on Karpah",
    author: "John Doe",
    readTime: "5 mins",
    img: "../../assets/blog-img.png",
  },
  {
    id: 2,
    title:
      "A Step-by-Step Guide to Setting Up a Successful Store Account on Karpah",
    author: "John Doe",
    readTime: "5 mins",
    img: "../assets/blog-img.png",
  },
  {
    id: 3,
    title:
      "A Step-by-Step Guide to Setting Up a Successful Store Account on Karpah",
    author: "John Doe",
    readTime: "5 mins",
    img: "../assets/blog-img.png",
  },
]);
const shopContent = ref<Array<any>>([
  {
    id: 1,
    name: "Janet Doe",
    brandName: "Inks by Ojaymie",
    logo: "@/assets/brand.png",
    img: "@/assets/blog-img.png",
  },
  {
    id: 2,
    name: "Janet Doe",
    brandName: "Inks by Ojaymie",
    logo: "@/assets/brand.png",
    img: "@/assets/blog-img.png",
  },
  {
    id: 3,
    name: "Janet Doe",
    brandName: "Inks by Ojaymie",
    logo: "@/assets/brand.png",
    img: "@/assets/blog-img.png",
  },
]);
</script>

<template>
  <div class="p-6 md:py-10 md:px-8">
    <div
      class="flex justify-between gap-8 bg-[#FAF4EE] items-center px-6 py-8 flex-col-reverse md:flex-row"
    >
      <div class="md:w-6/12">
        <h3 class="home-heading text-dark">
          Unleash Your Style, Amplify Your Brand: Join Our Fashion Revolution, 
          Where Creativity Meets Commerce!
        </h3>
        <button
          class="mt-4 px-6 py-3 text-md w-full md:w-36 font-medium btn-primary"
        >
          Start Selling
        </button>
      </div>
      <div class="md:w-6/12">
        <img class="w-full" src="../assets/home-img.png" alt="" />
      </div>
    </div>
    <div class="my-5">
      <div class="flex py-8 justify-between text-dark items-center">
        <p class="text-sm font-medium">Latest from karpah</p>
        <!-- <button class="text-sm">Show all</button> -->
      </div>
      <div class="flex gap-10 flex-wrap">
        <div v-for="post in blogContent" :key="post.id">
          <PostCard
            :title="post.title"
            :author="post.author"
            :img="post.img"
            :readTime="post.readTime"
          />
        </div>
      </div>
    </div>
    <div class="my-5">
      <div class="flex py-8 justify-between text-dark items-center">
        <p class="text-sm font-medium">Get inspired by top sellers</p>
      </div>
      <div class="flex gap-10 flex-wrap">
        <div v-for="shop in shopContent" :key="shop.id">
          <shopCard :name="shop.name" :brand="shop.brandName" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-heading {
  font-size: 36px;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  @include sm {
    font-size: 18px;
  }
}
</style>
