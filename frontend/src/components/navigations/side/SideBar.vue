<template>
  <div class="" id="sidebar" data-testid="sidebarOpenTest">
    <transition name="slide" appear>
      <aside
        class="aside flex flex-col justify-between gap-4 px-4 py-8 h-screen md:border-r border-neutral-border"
      >
        <ul class="flex flex-col gap-4">
          <div class="md:mb-6 w-full flex justify-between items-center">
            <div class="md:pl-3">
              <img
                class="w-8/12 hiddden md:block"
                src="../../../assets/Karpah.svg"
                alt=""
              />
            </div>
            <div class="" @click="closeSidebar">
              <img
                class="w-full md:hidden"
                src="../../../assets/icons/close.svg"
                alt=""
              />
            </div>
          </div>
          <div class="md:hidden">
            <div class="search my-4">
              <span class="w-5">
                <img
                  class="w-full"
                  src="../../../assets/icons/search.svg"
                  alt=""
                />
              </span>
              <input type="search" placeholder="Search here" />
            </div>
            <div class="">
              <button class="btn-secondary w-full py-2">View Shop</button>
            </div>
          </div>
          <router-link to="/">Home </router-link>
          <router-link to="/overview"> Overview </router-link>
          <router-link to="/orders"> Orders </router-link>
          <router-link to="/products"> Products </router-link>
          <router-link to="/messages"> Messages </router-link>
          <!-- <router-link to="/analytics"> Analytics </router-link> -->
          <router-link to="/settings"> Settings </router-link>
          <div class="w-full h-[1px] bg-neutral-bg"></div>
          <router-link to="/get-started">Get Started </router-link>
          <router-link class="text-dark text-md md:hidden" to="/"
            >Community</router-link
          >
        </ul>
        <nav>
          <div class="flex w-full -mb-3 mt-5 text-white dark:text-white">
            <div class="flex relative items-center w-full justify-between px-3">
              <span class="flex flex-nowrap items-center">
                <span
                  class="w-8 h-8 flex items-center justify-center bg-primary rounded-md"
                  ><img src="../../../assets/icons/primer.svg" alt=""
                /></span>
                <p class="font-semibold capitalize">John Doe</p>
              </span>
              <span>
                <img src="../../../assets/icons/more.svg" alt="" />
              </span>
            </div>
          </div>
        </nav>
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { watch } from "vue";

const closeSidebar = () => {
  document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
};
const route = useRoute();
watch(route, () => {
  document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
});
</script>

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
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 220px;
  @media (max-width: 768px) {
    display: none;
    width: 100% !important;
    &.open {
      display: block;
    }
  }
}
a,
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
}
</style>
