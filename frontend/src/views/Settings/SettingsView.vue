<template>
  <div class="px-8 py-10">
    <div class="flex gap-3 items-center">
      <h5 class="header5">Settings</h5>
    </div>
    <nav
      class="font-light gap-5 page_nav flex md:gap-6 flex-wrap cursor-pointer md:flex-nowrap uppercase py-6 text-neutral"
      :class="{
        'hidden sm:flex md:hidden lg:flex': !showNav,
        flex: showNav,
      }"
    >
      <router-link
        :to="{ name: 'store' }"
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
      >
        Store
      </router-link>
      <router-link
        :to="{ name: 'account' }"
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
      >
        Account
      </router-link>
      <router-link
        :to="{ name: 'branding' }"
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
      >
        Branding
      </router-link>
      <router-link
        :to="{ name: 'payout' }"
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
      >
        Payout
      </router-link>
      <router-link
        :to="{ name: 'password' }"
        class="flex gap-1 md:gap-2 md:text-xs text-sm items-center"
      >
        Password
      </router-link>
    </nav>
    <router-view @showNav="(mode: boolean)=> showNav = mode"></router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

//show settings navigation panel
const showNav = ref(true);
</script>
<style>
.page_nav a {
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  padding: 0.5em;
}
.page_nav a.router-link-active {
  border-bottom: 1px solid #cc8f56;
  color: #cc8f56;
}
</style>
