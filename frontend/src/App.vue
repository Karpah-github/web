<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script setup lang="ts">
// import "./assets/scss/_mixin.scss";
// import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<style></style>
