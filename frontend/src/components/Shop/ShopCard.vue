<script lang="ts" setup>
// eslint-disable-next-line no-undef
const props = defineProps(["name", "brand", "img", "readTime"]);
</script>

<template>
  <div class="md:w-[300px] border border-[#ECECEC] p-4">
    <div class="">
      <img class="w-full" src="../../assets/sellerAvatar.png" alt="" />
    </div>
    <div class="flex justify-between py-2 items-center">
      <div>
        <h6 class="text-dark -pb-2 font-medium text-lg">
          {{ props.name }}
        </h6>
        <i class="text-[#B3B3B3] text-sm">{{ props.brand }}</i>
      </div>
      <div class="w-16 h-16">
        <img class="rounded-md w-full" src="../../assets/brand.png" alt="" />
      </div>
    </div>
    <button class="btn-secondary mt-4 w-full text-center py-2">
      View Shop
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-secondary {
  box-shadow: 8px 8px 10px -6px rgba(16, 24, 40, 0.01),
    20px 20px 25px -5px rgba(16, 24, 40, 0.02),
    -8px -8px 10px 0px rgba(16, 24, 40, 0.01),
    -20px -20px 25px 0px rgba(16, 24, 40, 0.02);
}
</style>
