<template>
  <div class="px-4 lg:px-10">
    <div class="py-4">
      <h1 class="">Orders</h1>
    </div>
    <div class="mb-4">
      <div class="flex font-light text-sm text-[#828282]">
        <span
          class="uppercase flex active border-b border-[#828282] py-3 pl-2 pr-4"
        >
          All
          <div
            class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
          >
            12
          </div>
        </span>
        <span class="uppercase border-b border-[#828282] py-3 px-2 md:px-8">
          ongoing
          <!-- <span class="w-4 h-4 rounded-full bg-[#828282] text-white">12</span> -->
        </span>
        <span class="uppercase flex border-b border-[#828282] py-3 pl-4">
          Past
          <span
            class="w-5 h-5 ml-1 flex items-center justify-center num text-xs rounded-full bg-[#828282] text-white"
            >12</span
          >
        </span>
      </div>
    </div>
    <div v-if="!orderList" class="empty-page h-screen my-4">
      <div class="text-center">
        <div class="w-32 mx-auto mb-6">
          <img class="w-full" src="../../assets/icons/no-orders.svg" alt="" />
        </div>
        <h5 class="font-semibold text-2xl mb-1">No orders yet</h5>
        <p class="text-md text-[#828282] font-light lg:w-3/4 mx-auto">
          Keep your products updated and be sure to promote them to start
          attracting buyers.
        </p>
      </div>
    </div>
    <div class="order-table py-4">
      <div
        class="hidden text-[#828282] font-light md:flex gap-5 justify-between pb-4 px-4"
      >
        <div class="search">
          <span class="w-5">
            <img class="w-full" src="../../assets/icons/search.svg" alt="" />
          </span>
          <input
            type="search"
            v-model="searchedOrder"
            placeholder="Search here"
          />
        </div>
        <div class="flex gap-4 items-center">
          <span class="flex items-center gap-1">
            <div class="w-4">
              <img class="w-full" src="../../assets/icons/filter.svg" alt="" />
            </div>
            <p>Filter</p>
          </span>
          <span class="flex items-center gap-1">
            <div class="w-6">
              <img class="w-full" src="../../assets/icons/h-dots.svg" alt="" />
            </div>
          </span>
        </div>
      </div>
      <div class="table-container">
        <table class="table-auto w-full">
          <thead class="table__header">
            <tr
              class="table__row uppercase text-left text-[#333333] bg-[#F2F2F2]"
            >
              <th class="font-medium pl-2 text-sm py-3">
                <div class="w-5 h-5 bg-[#DFDFDF] rounded-sm"></div>
              </th>
              <th class="font-medium text-sm py-2 text-left">order id</th>
              <th class="font-medium text-sm py-2 text-left">Customer name</th>
              <th class="font-medium text-sm py-2 text-left">price</th>
              <th class="font-medium text-sm py-2 text-left">status</th>
              <th class="font-medium text-sm py-2 text-left">delivery date</th>
              <th class="table__cell text-right"></th>
            </tr>
            <br />
          </thead>

          <tbody>
            <tr
              class="table__row text-[#333333] hover:bg-[#F2F2F2]"
              v-for="(order, index) in filteredOrders"
              :key="index"
            >
              <td class="table__box px-2 py-8">
                <div class="w-5 h-5 bg-[#DFDFDF] rounded-sm"></div>
              </td>
              <td class="table__id">
                <p class="text-sm w-32 lg:w-full">{{ order.orderId }}</p>
              </td>
              <td class="table__name">
                <div class="flex gap-2 items-center w-44 lg:w-full">
                  <span
                    class="bg-[#212121] text-white uppercase text-sm rounded-full w-8 h-8 flex justify-center items-center"
                    >{{ order.customerName.charAt(0) }}</span
                  >
                  <div class="flex flex-col">
                    <h6>{{ order.customerName }}</h6>
                    <p class="text-xs text-[#828282]">
                      {{ order.customerEmail }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="table__price">
                <div class="w-40 lg:w-full pr-4">
                  <p class="text-sm py-2">₦‎{{ order.price }}.00</p>
                </div>
              </td>
              <td class="table__status text-center">
                <div class="flex items-center gap-2 w-32 lg:w-full">
                  <div
                    class="w-2 h-2 rounded-full"
                    :class="[
                      { 'bg-[#FA9E33]': order.status === 'processing' },
                      { 'bg-[#3BB75E]': order.status === 'delivered' },
                      { 'bg-[#E72B3B]': order.status === 'cancelled' },
                    ]"
                  ></div>
                  <p class="uppercase text-[#333333] text-sm tracking-widest">
                    {{ order.status }}
                  </p>
                </div>
              </td>
              <td class="table__date">
                <div class="flex flex-col w-40 lg:w-full">
                  <p class="text-sm py-2">{{ order.deliveryDate }}</p>
                  <p class="text-xs text-[#B3B3B3]">12:48pm</p>
                </div>
              </td>
              <td class="table__actions text-center">
                <div class="flex gap-3 w-full relative">
                  <button
                    class="py-1 px-2 w-6"
                    @click="showActions(order.orderId)"
                  >
                    <img
                      class="w-full"
                      src="../../assets/icons/v-dots.svg"
                      alt=""
                    />
                  </button>
                  <div class="">
                    <OrderActions
                      :open="openModal"
                      :close="showActions"
                      :show-order-details="showOrderDetails"
                      :id="order.orderId"
                      :show-actions-modal="showActionsModal"
                    />
                  </div>
                </div>
              </td>
              <OrderDetails
                :open="openOrderModal"
                :close="showOrderDetails"
                :order="order"
                :show-actions-modal="showActionsModal"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { orderList } from "../../composables/orders/orders";
import OrderActions from "@/components/modals/OrderActions.vue";
import OrderDetails from "@/components/modals/OrderDetails.vue";
let openModal = ref(false);
const showActionsModal = ref("");
const showActions = (x: string) => {
  openModal.value = !openModal.value;
  if (showActionsModal.value === x) {
    showActionsModal.value = "";
  } else {
    showActionsModal.value = x;
  }
};
const searchedOrder = ref("");
const filteredOrders = computed(() => {
  const value =
    searchedOrder.value.charAt(0).toUpperCase() + searchedOrder.value.slice(1);
  return orderList.filter(function (order) {
    return (
      order.customerName.indexOf(value) > -1 ||
      order.orderId.indexOf(value) > -1 ||
      order.customerEmail.indexOf(value) > -1 ||
      order.deliveryDate.indexOf(value) > -1 ||
      order.status.indexOf(value) > -1
    );
  });
});
const openOrderModal = ref(false);
const showOrderDetails = (x: string) => {
  openOrderModal.value = !openOrderModal.value;
  openModal.value = false;
  showActionsModal.value = x;
  //   console.log(x);
};
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
.order-table {
  border: 1px solid #f2f2f2;
  border-radius: 4px;
}
.table__header {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 0.75rem;
}

/* tbody > .table__row {
  border-bottom: 1px solid #dfdfdf;
} */

.table__row--last {
  border-bottom: 0;
}
.search {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  display: flex;
  color: #333333;
  align-items: center;
  gap: 8px;
  padding: 0.4rem;
  input {
    outline: none;
  }
  input::placeholder {
    color: #b3b3b3;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
