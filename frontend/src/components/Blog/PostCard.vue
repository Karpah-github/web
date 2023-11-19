<script lang="ts" setup>
// eslint-disable-next-line no-undef
const props = defineProps(["title", "author", "img", "readTime"]);
</script>

<template>
  <div class="">
    <div class="">
      <img class="w-full" src="../../assets/blog-img.png" alt="" />
    </div>
    <h6 class="text-dark font-medium py-2 text-sm">
      {{ props.title }}
    </h6>
    <div class="text-neutral flex items-center text-xs py-1 felx gap-1">
      <p class="uppercase">by {{ author }}</p>
      <p>.</p>
      <p>{{ readTime }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
