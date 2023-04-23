<template>
  <div class="px-5 md:px-8">
    <h1 class="md:mt-4">Overview</h1>
    <div class="flex justify-between items-center">
      <p class="text-[#b3b3b3] font-light">Wishing you a great sales week</p>
      <button class="btn-secondary flex gap-1 py-1 px-1">
        This week
        <img class="w-4" src="../assets/icons/arrow-down.svg" alt="" />
      </button>
    </div>
    <div class="flex gap-4 flex-wrap mt-6 xl:justify-between">
      <div class="stat-box">
        <p class="text-neutral text-md font-light">Total Revenue</p>
        <h3 class="text-dark text-2xl pt-2">₦‎129,498.95</h3>
      </div>
      <div class="stat-box">
        <p class="text-neutral text-md font-light">Shop Visits</p>
        <h3 class="text-dark text-2xl pt-2">1024</h3>
        <span class="pt-6 flex gap-1 items-center font-light">
          <p class="text-[#E72B3B] text-sm flex">
            5%
            <img
              src="../assets/icons/arrow-down-1.svg"
              class="svg-red w-4"
              alt=""
            />
          </p>
          <p class="text-[#b3b3b3] text-xs">vs last week</p>
        </span>
      </div>
      <div class="stat-box">
        <p class="text-neutral text-md font-light">Shop Orders</p>
        <h3 class="text-dark text-2xl pt-2">24</h3>
        <span class="pt-6 flex gap-1 items-center font-light">
          <p class="text-[#3BB75E] text-sm flex">
            5%
            <img
              src="../assets/icons/arrow-up.svg"
              class="svg-green w-4"
              alt=""
            />
          </p>
          <p class="text-[#b3b3b3] text-xs">vs last week</p>
        </span>
      </div>
      <div class="stat-box">
        <p class="text-neutral text-md font-light">Conversion Rate</p>
        <h3 class="text-dark text-2xl pt-2">37%</h3>
        <span class="pt-6 flex gap-1 items-center font-light">
          <p class="text-[#E72B3B] text-sm flex">
            5%
            <img
              src="../assets/icons/arrow-down-1.svg"
              class="svg-red w-4"
              alt=""
            />
          </p>
          <p class="text-[#b3b3b3] text-xs">vs last week</p>
        </span>
      </div>
    </div>
    <section class="pt-8 pb-6">
      <div class="flex justify-between">
        <h3 class="text-xl">Orders</h3>
        <router-link
          to="/orders"
          v-if="orderList"
          class="text-primary font-light text-sm"
          >View Orders</router-link
        >
      </div>
      <div class="mb-4">
        <div class="flex font-light text-sm text-[#828282]">
          <span
            :class="orderDisplay === 'ongoing' ? 'active' : ''"
            class="uppercase flex border-b border-[#828282] py-3 pr-2"
          >
            ongoing
            <span
              class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
              >4</span
            >
          </span>
          <span
            :class="orderDisplay === 'past' ? 'active' : ''"
            class="uppercase flex border-b border-[#828282] py-3 pl-4"
          >
            Closed
            <span
              class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
              >2</span
            >
          </span>
        </div>
        <div v-if="!orderList" class="empty-page h-64 my-4">
          <div class="text-center">
            <div class="w-28 h-full mx-auto mb-2">
              <img class="w-full" src="../assets/icons/no-orders.svg" alt="" />
            </div>
            <p class="text-md text-[#4D4D4D] font-light mx-auto">
              All good, No new order yet
            </p>
          </div>
        </div>
        <div v-else class="orders flex gap-5">
          <div class="" v-for="order in orderList" :key="order.orderId">
            <order-card :order="order" />
          </div>
        </div>
      </div>
    </section>
    <div class="activities pb-6">
      <div class="flex justify-between">
        <h3 class="text-xl">Activity</h3>
        <router-link
          to="/"
          v-if="activityList"
          class="text-primary font-light text-sm"
          >View Activity</router-link
        >
      </div>
      <div class="my-4">
        <div v-if="!activityList" class="empty-page h-64 my-4">
          <div class="text-center">
            <div class="w-28 h-full mx-auto mb-2">
              <img
                class="w-full"
                src="../assets/icons/no-notification.svg"
                alt=""
              />
            </div>
            <p class="text-md text-[#4D4D4D] font-light mx-auto">Nothing yet</p>
          </div>
        </div>
        <div v-else class="grid lg:grid-cols-2 gap-x-12 gap-y-4">
          <div
            class=""
            v-for="activity in activityList"
            :key="activity.activityId"
          >
            <activity-item :activity="activity" />
          </div>
        </div>
      </div>
    </div>
    <div class="products pb-6">
      <div class="flex justify-between">
        <h3 class="text-xl">Top Products</h3>
        <router-link
          to="/products"
          v-if="productList"
          class="text-primary font-light text-sm"
          >View Products</router-link
        >
      </div>
      <div class="mb-4">
        <div v-if="!productList" class="empty-page h-72 my-4">
          <div class="text-center">
            <div class="w-28 h-full mx-auto mb-2">
              <img
                class="w-full"
                src="../assets/icons/empty-product-page-icon.svg"
                alt=""
              />
            </div>
            <p class="text-md text-[#4D4D4D] font-light mx-auto">
              No product yet
            </p>
            <p class="text-[#b3b3b3] text-sm pt-2 pb-4">
              Get started by adding products to your store
            </p>
            <router-link to="/add-product" class="btn-secondary p-2"
              >Add Product</router-link
            >
          </div>
        </div>
        <div v-else class="orders flex gap-5">
          <product-card
            v-for="(product, index) in productList"
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

<script setup lang="ts">
import { ref } from "vue";
import { orderList } from "@/composables/orders/orders";
import OrderCard from "@/components/orders/OrderCard.vue";
import { productList } from "@/composables/products/products";
import ProductCard from "@/components/products/ProductCard.vue";
import { activityList } from "@/composables/activities/activities";
import ActivityItem from "@/components/Activity/ActivityItem.vue";

const orderDisplay = ref("ongoing");
</script>

<style lang="scss" scoped>
.active {
  color: #cc8f56;
  border-bottom: 1px solid #cc8f56 !important;
  .num {
    background: #cc8f56;
    color: #fff;
  }
}
.stat-box {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 14px;
  width: 47%;
  @include lg {
    width: 30%;
  }
  @include xl {
    width: 270px;
  }
}
.svg-red {
  filter: invert(34%) sepia(98%) saturate(5075%) hue-rotate(341deg)
    brightness(94%) contrast(93%);
}
.svg-green {
  filter: invert(65%) sepia(7%) saturate(3225%) hue-rotate(84deg)
    brightness(90%) contrast(96%);
}
.orders {
  max-width: 100%;
  overflow-x: scroll;
  margin: 16px 0;
}
.product-card {
  min-width: 310px;
}
</style>
