<script setup lang="ts">
import BuyersProductCard from "@/components/products/BuyersProductCard.vue";
import { productList } from "@/composables/products/products";
import { ref } from "vue";

const products = ref<any>(productList);
const productDisplay = ref("all");
const showProducts = (x: string) => {
  productDisplay.value = x;
  if (productList && x === "all") {
    const allProducts = productList;
    products.value = allProducts;
  } else if (x === "men") {
    const mensCloth = productList.filter(
      (menProducts) => menProducts.category === "men"
    );
    products.value = mensCloth;
  } else if (x === "women") {
    const womensCloth = productList.filter(
      (womenProducts) => womenProducts.category === "women"
    );
    products.value = womensCloth;
  } else {
    const kidsCloth = productList.filter(
      (kidsProducts) => kidsProducts.category === "kids"
    );
    products.value = kidsCloth;
  }
};
</script>

<template>
  <div>
    <div class="nav flex justify-between items-center bg-white px-8 py-4">
      <div class="w-28">
        <img class="" src="../../assets/Karpah.svg" alt="" />
      </div>
      <div class="flex gap-8 items-center">
        <router-link class="text-dark text-md hidden md:block" to="/community"
          >Community</router-link
        >
        <router-link
          to="/dashboard"
          class="btn-primary py-2 px-4 text-sm md:text-md"
        >
          Your Dashboard
        </router-link>
      </div>
    </div>
    <div class="banner">
      <img src="../../assets/banner.png" alt="" />
    </div>
    <div class="flex my-6 flex-wrap gap-y-4 justify-between items-center">
      <div class="flex gap-3 items-center">
        <div class="w-[170px] md:w-[240px] md:w-6/12">
          <img class="rounded-md w-full" src="../../assets/brand.png" alt="" />
        </div>
        <div class="">
          <h5 class="text-lg md:text-2xl font-medium text-dark">
            Inks by Ojaymie
          </h5>
          <p class="text-neutral py-2 text-xs md:text-sm font-light">
            Quality designs you’ll love
          </p>
          <p class="text-neutral pb-4 text-xs md:text-sm font-light">
            Lagos, Nigeria
          </p>
          <router-link
            to="/settings/account"
            class="btn-secondary px-4 py-2 text-xs md:text-sm"
          >
            Edit profile
          </router-link>
        </div>
      </div>
      <div class="md:w-5/12 pl-8 md:pl-0 pr-8">
        <p class="text-neutral font-light text-sm md:text-md py-2">
          Discover the perfect blend of style and quality at our fashion store.
          We offer a carefully curated collection of trendy clothing and
          accessories that will elevate your wardrobe. Experience exceptional
          customer service and find the latest fashion essentials to express
          your unique style.
        </p>
        <div class="flex gap-5 justify-between">
          <div class="flex gap-4 items-center my-4">
            <img
              class="rounded-full w-10 h-10"
              src="../../assets/sellerAvatar.png"
              alt=""
            />
            <p class="font-light text-sm text-dark">Janet doe</p>
          </div>
          <!-- <button class="text-primary">Message</button> -->
        </div>
      </div>
    </div>

    <div class="">
      <div
        class="flex flex-row overflow-scroll md:overflow-hidden px-8 py-4 gap-5 w-full md:justify-between items-center"
      >
        <div class="flex items-center gap-3">
          <div class="w-[90px] md:w-[60px]">
            <img
              class="w-16 h-16 rounded-md"
              src="../../assets/image.png"
              alt=""
            />
          </div>
          <p class="text-dark text-xs md:text-sm">Customer Reviews</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-[90px] md:w-[60px]">
            <img
              class="w-16 h-16 rounded-md"
              src="../../assets/sellerAvatar.png"
              alt=""
            />
          </div>
          <p class="text-dark text-xs md:text-sm">Customer Reviews</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-[90px] md:w-[60px]">
            <img
              class="w-16 h-16 rounded-md"
              src="../../assets/image.png"
              alt=""
            />
          </div>
          <p class="text-dark text-xs md:text-sm">Latest Styles</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-[90px] md:w-[60px]">
            <img
              class="w-16 h-16 rounded-md"
              src="../../assets/sellerAvatar.png"
              alt=""
            />
          </div>
          <p class="text-dark text-xs md:text-sm">Customer Reviews</p>
        </div>
      </div>
    </div>

    <div class="mx-8 mt-8 border-t border-[#E6E6E6]">
      <div
        class="flex mb-4 text-xs md:text-sm text-[#B3B3B3] justify-between md:justify-center md:gap-8"
      >
        <span
          @click="showProducts('all')"
          class="uppercase cursor-pointer flex py-3"
          :class="productDisplay === 'all' ? 'active-product' : ''"
        >
          All products
        </span>
        <span
          @click="showProducts('men')"
          class="uppercase cursor-pointer flex py-3"
          :class="productDisplay === 'men' ? 'active-product' : ''"
        >
          men
        </span>
        <span
          @click="showProducts('women')"
          class="uppercase cursor-pointer flex py-3"
          :class="productDisplay === 'women' ? 'active-product' : ''"
        >
          women
        </span>
        <span
          @click="showProducts('kids')"
          class="uppercase cursor-pointer flex py-3"
          :class="productDisplay === 'kids' ? 'active-product' : ''"
        >
          kids
        </span>
      </div>
      <div class="min-h-[500px]">
        <div
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full"
        >
          <BuyersProductCard
            v-for="(product, index) in products"
            :key="index"
            :price="product.price"
            :name="product.name"
            :status="product.status"
            :upload-date="product.uploadDate"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active-product {
  color: #333;
  border-top: 1px solid #333;
}
</style>
