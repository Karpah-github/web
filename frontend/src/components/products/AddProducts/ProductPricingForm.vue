<template>
  <div class="md:flex gap-20">
    <h5 class="header5 pt-4">Pricing</h5>
    <form action="" class="md:w-6/12 pt-4">
      <div class="form-input">
        <span class="flex gap-1">
          <label for="product-price">Price</label>
          <div class="w-3">
            <img
              class="w-full"
              src="../../../assets/icons/asterick.svg"
              alt=""
            />
          </div>
        </span>
        <input
          class="form-field"
          type="text"
          name="product-price"
          :value="productPrice"
          @input="
            $emit(
              'update:productPrice',
              ($event.target as HTMLInputElement).value
            )
          "
          required
        />
      </div>
      <div class="form-input">
        <label for="compare-price">Compare at price</label>
        <input
          class="form-field"
          type="text"
          name="compare-price"
          :value="comparePrice"
          @input="
            $emit(
              'update:comparePrice',
              ($event.target as HTMLInputElement).value
            )
          "
          id="compare-price"
        />
      </div>
      <div class="flex justify-end gap-4">
        <button type="button" class="btn-secondary px-4 py-3 uppercase">
          back
        </button>
        <button type="button" class="btn-primary px-4 py-2 uppercase">
          Save & Continue
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps({
  productPrice: Number,
  comparePrice: Number,
  page: String,
});
// eslint-disable-next-line no-undef
defineEmits(["update:productPrice", "update:comparePrice", "update:page"]);
</script>

<style lang="scss" scoped></style>
