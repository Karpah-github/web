<template>
  <div class="md:flex gap-20">
    <h5 class="header5 pt-4">Shipping</h5>
    <form action="" class="md:w-6/12 pt-4">
      <div class="md:flex gap-5">
        <div class="form-input md:w-6/12">
          <span class="flex gap-1">
            <label for="product-price">Weight</label>
            <div class="w-3">
              <img
                class="w-full"
                src="../../../assets/icons/asterick.svg"
                alt=""
              />
            </div>
          </span>
          <div class="form-field flex justify-between">
            <input
              type="text"
              name="bust"
              class="w-full outline-none"
              :value="productWeight"
              @input="
                $emit(
                  'update:productWeight',
                  ($event.target as HTMLInputElement).value
                )
              "
            />
            <p class="text-neutral text-sm font-light">Kg</p>
          </div>
        </div>
        <div class="form-input md:w-6/12">
          <span class="flex gap-1">
            <label for="product-price">Height</label>
            <div class="w-3">
              <img
                class="w-full"
                src="../../../assets/icons/asterick.svg"
                alt=""
              />
            </div>
          </span>
          <div class="form-field flex justify-between">
            <input
              type="text"
              name="bust"
              class="w-full outline-none"
              :value="productHeight"
              @input="
                $emit(
                  'update:productHeight',
                  ($event.target as HTMLInputElement).value
                )
              "
            />
            <p class="text-neutral text-sm font-light">Cm</p>
          </div>
        </div>
      </div>
      <div class="form-input">
        <label for="compare-price">Compare at price</label>
        <select
          name="deliver-period"
          :value="productDeliveryPeriod"
          @input="
            $emit(
              'update:productDeliveryPeriod',
              ($event.target as HTMLInputElement).value
            )
          "
          class="form-field"
          id="deliver-period"
        >
          <option value="none" selected disabled hidden>Select Option</option>
          <option value="2-4days">2-4 days</option>
          <option value="4-8days">4-8 days</option>
          <option value="9-12days">9-12 days</option>
          <option value="30days">30 days</option>
        </select>
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
  productWeight: Number,
  productHeight: Number,
  comparePrice: Number,
  productDeliveryPeriod: String,
  page: String,
});
// eslint-disable-next-line no-undef
defineEmits([
  "update:productWeight",
  "update:productDeliveryPeriod",
  "update:productHeight",
  "update:page",
]);
</script>

<style lang="scss" scoped></style>
