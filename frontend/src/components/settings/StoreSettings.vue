<template>
  <div class="">
    <div class="flex justify-between gap-4">
      <h5 class="header6 text-xl pt-2">Store Settings</h5>
      <button type="button" class="btn-primary px-4 py-2 uppercase">
        Save Changes
      </button>
    </div>

    <form action="" class="md:w-6/12 pt-4">
      <div class="form-input">
        <span class="flex gap-1">
          <label for="product-price">Store Name</label>
        </span>
        <input
          class="form-field"
          type="text"
          name="store-name"
          :value="storeName"
          @input="
            $emit('update:storeName', ($event.target as HTMLInputElement).value)
          "
          required
        />
      </div>
      <div class="form-input pb-4 border-b border-neutral-border">
        <label for="storeBio">Store Bio</label>
        <textarea
          name="storeBio"
          class="form-field"
          id="storeBio"
          cols="30"
          rows="10"
          :value="storeBio"
          @input="
            $emit('update:storeBio', ($event.target as HTMLInputElement).value)
          "
        ></textarea>
      </div>
      <div class="form-input mt-10">
        <label for="country">Country</label>
        <p class="text-neutral text-sm font-light pb-1">
          Select the country which your business is registered in
        </p>
        <select
          name="country"
          :value="country"
          @input="
            $emit('update:country', ($event.target as HTMLInputElement).value)
          "
          class="form-field"
          id="country"
        >
          <option value="none" selected disabled hidden>Select Option</option>
          <option
            v-for="country in Countries"
            :key="country.countryName"
            :value="country.countryName"
          >
            {{ country.countryName }}
          </option>
        </select>
      </div>
      <div class="form-input">
        <label for="country">Currency</label>
        <p class="text-neutral text-sm font-light pb-1">
          Select the currency which you trade in
        </p>
        <select
          name="currency"
          :value="country"
          @input="
            $emit('update:currency', ($event.target as HTMLInputElement).value)
          "
          class="form-field"
          id="currency"
        >
          <option value="none" selected disabled hidden>Select Option</option>
          <option
            v-for="(currency, index) in currencies"
            :key="index"
            :value="currency"
          >
            {{ currency }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { Countries } from "../../composables/countries";
import { currencies } from "../../composables/currencies";
// eslint-disable-next-line no-undef
defineProps({
  storeName: String,
  storeBio: String,
  currency: Number,
  country: String,
  page: String,
});
// eslint-disable-next-line no-undef
defineEmits([
  "update:storeName",
  "update:storeBio",
  "update:country",
  "update:currency",
  "update:page",
]);
</script>

<style lang="scss" scoped></style>
