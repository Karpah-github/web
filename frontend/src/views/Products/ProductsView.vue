<template>
  <div class="px-5 md:px-8">
    <div class="flex justify-between py-4">
      <h1 class="">Products</h1>
      <div class="flex gap-4 cursor-pointer items-center">
        <div
          class="bg-neutral-bg p-2 gap-2 hidden md:flex items-center rounded-sm"
        >
          <button
            @click="changeView('grid')"
            :class="[{ 'bg-white': view === 'grid' }, 'p-1']"
          >
            <img class="w-full" src="../../assets/icons/grid.svg" alt="" />
          </button>
          <button
            @click="changeView('list')"
            :class="[{ 'bg-white': view === 'list' }]"
          >
            <img class="w-full" src="../../assets/icons/menu.svg" alt="" />
          </button>
        </div>
        <router-link to="/add-product" class="btn-primary py-2 px-5"
          >Add New Product</router-link
        >
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex font-light text-sm text-[#828282] cursor-pointer">
        <span
          @click="showProducts('all')"
          class="uppercase flex border-b border-[#828282] py-3 pl-2 pr-4"
          :class="productDisplay === 'all' ? 'active' : ''"
        >
          All
          <div
            class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
          >
            {{ productList.length }}
          </div>
        </span>
        <span
          @click="showProducts('active-products')"
          :class="productDisplay === 'active-products' ? 'active' : ''"
          class="uppercase flex border-b border-[#828282] py-3 px-2 md:px-8"
        >
          active
          <span
            class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
            >{{ activeProducts.length }}</span
          >
        </span>
        <span
          @click="showProducts('past')"
          :class="productDisplay === 'past' ? 'active' : ''"
          class="uppercase flex border-b border-[#828282] py-3 pl-4"
        >
          draft
          <span
            class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
            >{{ draftProducts.length }}</span
          >
        </span>
      </div>
      <button class="btn-secondary py-1 px-2 md:hidden">
        <img class="w-full" src="../../assets/icons/more.svg" alt="" />
      </button>
      <div
        class="hidden text-[#828282] font-light md:flex gap-5 justify-between"
      >
        <span class="flex items-center gap-1">
          <div class="w-4">
            <img class="w-full" src="../../assets/icons/filter.svg" alt="" />
          </div>
          <p>Filter</p>
        </span>
        <span class="flex items-center gap-1">
          <div class="w-6">
            <img class="w-full" src="../../assets/icons/sort.svg" alt="" />
          </div>
          <p>Sort</p>
        </span>
        <span class="flex items-center gap-1">
          <div class="w-4">
            <img class="w-full" src="../../assets/icons/search.svg" alt="" />
          </div>
          <p>Search</p>
        </span>
      </div>
    </div>
    <div v-if="!productList" class="empty-page h-screen my-4">
      <div class="text-center">
        <div class="w-32 mx-auto mb-6">
          <img
            class="w-full"
            src="../../assets/icons/empty-product-page-icon.svg"
            alt=""
          />
        </div>
        <h5 class="font-semibold text-2xl mb-1">No product listed</h5>
        <p class="text-md text-[#828282] font-light lg:w-3/4 mx-auto">
          To start selling, click the 'Add New Product' button and start
          creating your first product listing
        </p>
      </div>
    </div>
    <div class="product-table py-4">
      <div v-if="view === 'list'" class="table-container">
        <table class="table-auto w-full">
          <thead class="table__header">
            <tr
              class="product_table__row uppercase text-left text-[#333333] bg-neutral-bg"
            >
              <th class="font-medium pl-2 text-sm py-3">Product</th>
              <th class="font-medium text-sm py-2 text-left">Upload Date</th>
              <th class="font-medium text-sm py-2 text-left">Status</th>
              <th class="table__cell text-right"></th>
            </tr>
          </thead>

          <tbody>
            <ProductRow
              v-for="(product, index) in products"
              :key="index"
              :price="product.price"
              :name="product.name"
              :status="product.status"
              :upload-date="product.uploadDate"
              :id="product.id"
            />
          </tbody>
        </table>
      </div>
      <div
        v-if="view === 'grid'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full"
      >
        <ProductCard
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
</template>

<script setup lang="ts">
import ProductCard from "@/components/products/ProductCard.vue";
import { ref } from "vue";
import ProductRow from "../../components/products/ProductRow.vue";
import { productList } from "../../composables/products/products";
const view = ref("grid");
const changeView = (v: string) => {
  view.value = v;
};
// Products filter
const products = ref<any>(productList);
const productDisplay = ref("all");
const showProducts = (x: string) => {
  productDisplay.value = x;
  if (productList && x === "all") {
    const allProducts = productList;
    products.value = allProducts;
  } else if (x === "active-products") {
    const ongoingOrder = productList.filter(
      (activeProducts) => activeProducts.status !== "Draft"
    );
    products.value = ongoingOrder;
  } else {
    const draftProduct = productList.filter(
      (draftProducts) => draftProducts.status === "Draft"
    );
    products.value = draftProduct;
  }
};
const activeProducts = productList.filter(function (orders) {
  return orders.status !== "Draft";
});
const draftProducts = productList.filter(function (product) {
  return product.status === "Draft";
});
</script>

<style lang="scss">
.active {
  color: #cc8f56;
  border-bottom: 1px solid #cc8f56;
  .num {
    background: #cc8f56;
    color: #fff;
  }
}
.table__header {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 0.75rem;
}

tbody > .product_table__row {
  border-bottom: 1px solid #dfdfdf;
}

.table__row--last {
  border-bottom: 0;
}
</style>
