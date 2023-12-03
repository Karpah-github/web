<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const menuBar = ref(true);
const toggleSidebar = () => {
  const sidebar = document.getElementById("nav");
  menuBar.value = !menuBar.value;
  sidebar?.classList.add("open");
};
const closeSidebar = () => {
  menuBar.value = !menuBar.value;
  const sidebar = document.getElementById("nav");
  sidebar?.classList.remove("open");
};
watch(route, () => {
  document.getElementById("nav")?.classList.remove("open");
});
</script>

<template>
  <div>
    <div
      class="flex md:hidden justify-between px-5 py-4 items-center mobile-header w-full"
    >
      <div class="w-20">
        <img class="w-full" src="../assets/Karpah.svg" alt="" />
      </div>
      <button
        v-if="menuBar"
        class="p-2"
        @click="toggleSidebar"
        data-testid="navToggleTest"
      >
        <img class="w-full" src="../assets/icons/menu.svg" alt="" />
      </button>
      <button
        v-else
        class="p-2"
        @click="closeSidebar"
        data-testid="navToggleTest"
      >
        <img class="w-full" src="../assets/icons/close.svg" alt="" />
      </button>
    </div>
    <div
      class="nav flex flex-col md:flex-row justify-between md:items-center bg-white px-4 md:px-10 py-4 font-montreal"
      id="nav"
    >
      <div
        class="w-28 cursor-pointer hidden md:block"
        @click="router.push('/')"
      >
        <img class="" src="../assets/Karpah.svg" alt="" />
      </div>
      <div
        class="flex md:flex-row flex-col gap-4 text-base font-medium md:items-center"
      >
        <router-link to="/" class="py-2 px-4">
          Home
        </router-link>
        <router-link to="/" class="py-2 px-4">
          About
        </router-link>
        <router-link to="/" class="py-2 px-4">
          Blog
        </router-link>
      </div>
      <div class="flex md:flex-row flex-col gap-4 mt-2 md:items-center">
        <router-link to="/auth/signin" class="py-2 px-4 text-s">
          Sign in
        </router-link>
        <router-link
          to="/auth/signup"
          class="bg-primary text-white py-2 px-4 text-sm md:text-md w-28 rounded-2xl"
        >
          Get Started
        </router-link>
        <!-- <button class="btn-primary py-2 px-4 text-sm md:text-md">Login</button> -->
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
#nav {
  position: fixed;
  /* top: 40px;
  left: 0; */
  background-color: white;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
    width: 100% !important;
    &.open {
      display: flex;
      flex-direction: column;
    }
  }
}
/* a,
p {
  padding: 8px 14px;
  color: #4d4d4d;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
a:hover {
  color: #cc8f56;
  background: #faf4ee;
}
.router-link-exact-active,
a.router-link-active {
  color: #cc8f56;
  background: #faf4ee;
} */
</style>
