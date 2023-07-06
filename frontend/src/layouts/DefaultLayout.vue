<template>
  <div class="">
    <div
      class="flex md:hidden justify-between px-5 py-4 items-center mobile-header w-full"
    >
      <button class="p-2" @click="toggleSidebar" data-testid="navToggleTest">
        <img class="w-full" src="../assets/icons/menu.svg" alt="" />
      </button>
      <div class="w-20">
        <img class="w-full" src="../assets/Karpah.svg" alt="" />
      </div>
      <div class="">
        <img class="w-full" src="../assets/icons/notification.svg" alt="" />
      </div>
    </div>
    <div class="flex">
      <div class="">
        <SideBar />
      </div>
      <main class="main" id="app">
        <div
          class="hidden py-3 px-8 w-full md:flex items-center justify-between md:border-b border-[#E6E6E6]"
        >
          <!-- <div class="search">
            <span class="w-5">
              <img class="w-full" src="../assets/icons/search.svg" alt="" />
            </span>
            <input type="search" placeholder="Search here" />
          </div> -->
          <div class="flex items-center w-full justify-end gap-4">
            <div class="cursor-pointer" @click="showNotificationModal">
              <img
                class="w-full"
                src="../assets/icons/notification.svg"
                alt=""
              />
            </div>
            <router-link class="text-dark text-md" to="/"
              >Community</router-link
            >
            <button class="btn-secondary py-2 px-4">View Shop</button>
            <div class="">
              <NotificationCard
                :open="openNotificationModal"
                :close="showNotificationModal"
                :show-notification-modal="showNotificationModal"
              />
            </div>
          </div>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationCard from "@/components/modals/NotificationCard.vue";
import { ref } from "vue";
// import { useRoute } from "vue-router";
import SideBar from "../components/navigations/side/SideBar.vue";
const toggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar?.classList.add("open");
};
const openNotificationModal = ref(false);
const showNotificationModal = () => {
  openNotificationModal.value = !openNotificationModal.value;
};
// const route = useRoute();
</script>

<style lang="scss">
.main {
  width: calc(100% - 220px);
  margin-left: 220px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
}

.search {
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  color: #b3b3b3;
  display: flex;
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
