<template>
  <div class="md:flex gap-20">
    <h5 class="header5 pt-4">Product Details</h5>
    <form action="" class="md:w-6/12 pt-4">
      <div class="form-input">
        <span class="flex gap-1">
          <label for="product-name">Product Name</label>
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
          name="product-name"
          :value="productName"
          @input="
            $emit(
              'update:productName',
              ($event.target as HTMLInputElement).value
            )
          "
          required
          id="product-name"
        />
      </div>
      <div class="form-input">
        <label for="description">Product Description</label>
        <textarea
          name="description"
          class="form-field"
          id="description"
          cols="30"
          rows="10"
          :value="productDescription"
          @input="
            $emit(
              'update:productDescription',
              ($event.target as HTMLInputElement).value
            )
          "
        ></textarea>
      </div>
      <div class="form-input">
        <label for="category">Category</label>
        <select
          name="category"
          :value="productCategory"
          @input="
            $emit(
              'update:productCategory',
              ($event.target as HTMLInputElement).value
            )
          "
          class="form-field"
          id="category"
        >
          <option value="none" selected disabled hidden>Select Category</option>
          <option value="african-fashion">African fashion</option>
        </select>
      </div>
      <div class="form-input">
        <label for="quantity">Quantity</label>
        <input
          class="form-field"
          name="quantity"
          :value="productQuantity"
          @input="
            $emit(
              'update:productQuantity',
              ($event.target as HTMLInputElement).value
            )
          "
          id="quantity"
        />
      </div>
      <div class="form-input">
        <label for="">Tags</label>
        <div class="form-field flex gap-2 flex-wrap">
          <span class="tag" v-for="(tag, index) in productTags" :key="index">
            <p class="text-md uppercase">{{ tag }}</p>
            <svg
              @click="removeTag(index)"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.29303 6.29308C6.48056 6.10561 6.73487 6.00029 7.00003 6.00029C7.26519 6.00029 7.5195 6.10561 7.70703 6.29308L12 10.5861L16.293 6.29308C16.3853 6.19757 16.4956 6.12139 16.6176 6.06898C16.7396 6.01657 16.8709 5.98898 17.0036 5.98783C17.1364 5.98668 17.2681 6.01198 17.391 6.06226C17.5139 6.11254 17.6255 6.18679 17.7194 6.28069C17.8133 6.37458 17.8876 6.48623 17.9379 6.60913C17.9881 6.73202 18.0134 6.8637 18.0123 6.99648C18.0111 7.12926 17.9835 7.26048 17.9311 7.38249C17.8787 7.50449 17.8025 7.61483 17.707 7.70708L13.414 12.0001L17.707 16.2931C17.8892 16.4817 17.99 16.7343 17.9877 16.9965C17.9854 17.2587 17.8803 17.5095 17.6948 17.6949C17.5094 17.8803 17.2586 17.9855 16.9964 17.9878C16.7342 17.99 16.4816 17.8892 16.293 17.7071L12 13.4141L7.70703 17.7071C7.51843 17.8892 7.26583 17.99 7.00363 17.9878C6.74143 17.9855 6.49062 17.8803 6.30521 17.6949C6.1198 17.5095 6.01463 17.2587 6.01236 16.9965C6.01008 16.7343 6.11087 16.4817 6.29303 16.2931L10.586 12.0001L6.29303 7.70708C6.10556 7.51955 6.00024 7.26525 6.00024 7.00008C6.00024 6.73492 6.10556 6.48061 6.29303 6.29308Z"
                fill="#CC8F56"
              />
            </svg>
          </span>
          <input
            type="text"
            class="placeholder:text-[#B3B3B3] w-full ml-2 outline-none"
            placeholder="+ Add tag"
            :value="productTag"
            @input="
              $emit(
                'update:productTag',
                ($event.target as HTMLInputElement).value
              )
            "
            @keyup.enter="addTag"
          />
        </div>
      </div>
      <div class="flex pb-6 justify-between items-center">
        <label for="reviews">Allow Client reviews</label>
        <label class="switch">
          <input
            type="checkbox"
            :value="productReviewStatus"
            @input="
              $emit(
                'update:productReviewStatus',
                ($event.target as HTMLInputElement).value
              )
            "
            checked
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div class="">
        <div class="flex pb-4 justify-between items-center">
          <h6 class="text-lg">Measurements</h6>
          <button type="button" @click="openMeasurements">
            <img
              class="svg-neutral"
              src="../../../assets/icons/add.svg"
              v-if="!showMeasurement"
              alt=""
            />
            <img
              v-else
              src="../../../assets/icons/minus.svg"
              alt="minus icon"
            />
          </button>
        </div>
        <div v-if="showMeasurement" class="grid md:grid-cols-2 gap-x-8">
          <div class="form-input">
            <label for="bust">Bust</label>
            <div class="form-field flex justify-between">
              <input
                type="text"
                name="bust"
                class="w-full"
                :value="productBust"
                @input="
                  $emit(
                    'update:productBust',
                    ($event.target as HTMLInputElement).value
                  )
                "
              />
              <p class="text-neutral text-sm font-light">Inches</p>
            </div>
          </div>
          <div class="form-input">
            <label for="Waist">Waist</label>
            <div class="form-field flex justify-between">
              <input
                type="text"
                name="Waist"
                class="w-full"
                :value="productWaist"
                @input="
                  $emit(
                    'update:productWaist',
                    ($event.target as HTMLInputElement).value
                  )
                "
              />
              <p class="text-neutral text-sm font-light">Inches</p>
            </div>
          </div>
          <div class="form-input">
            <label for="Hips">Hips</label>
            <div class="form-field flex justify-between">
              <input
                type="text"
                name="Hips"
                class="w-full"
                :value="productHip"
                @input="
                  $emit(
                    'update:productHip',
                    ($event.target as HTMLInputElement).value
                  )
                "
              />
              <p class="text-neutral text-sm font-light">Inches</p>
            </div>
          </div>
          <div class="form-input">
            <label for="Height">Height</label>
            <div class="form-field flex justify-between">
              <input
                type="text"
                name="Height"
                class="w-full"
                :value="productHeight"
                @input="
                  $emit(
                    'update:productHeight',
                    ($event.target as HTMLInputElement).value
                  )
                "
              />
              <p class="text-neutral text-sm font-light">Inches</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class=""
          v-for="(highlight, index) in productHighlights"
          :key="index"
        >
          <div class="flex pb-4 justify-between items-center">
            <h6 class="text-lg">Highlights {{ index + 1 }}</h6>
            <button
              type="button"
              class="text-[#E72B3B] text-md"
              @click="removeHighlight(index)"
            >
              Remove
            </button>
          </div>
          <div class="form-input">
            <label for="highlight-title">Title </label>
            <input
              type="text"
              name="highlight-title"
              class="form-field"
              @input="
                addHighlightTitle({
                  id: index,
                  title: ($event.target as HTMLInputElement).value,
                })
              "
              placeholder="Placeholder"
            />
          </div>
          <div class="form-input">
            <label for="highlight-details">Details</label>
            <textarea
              class="form-field"
              name="highlight-details"
              id="highlight-details"
              placeholder="Placeholder"
              @input="
                addHighlightDetails({
                  id: index,
                  details: ($event.target as HTMLInputElement).value,
                })
              "
            ></textarea>
            <div class="flex justify-end text-[#B3B3B3] font-light">64</div>
          </div>
        </div>
      </div>
      <button
        class="flex text-primary gap-1 pb-6 items-center"
        type="button"
        @click="addHighlight"
      >
        <img class="svg-primary" src="../../../assets/icons/add.svg" alt="" />
        <span class="text-lg">Add highlight</span>
      </button>
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
import { ref } from "vue";
// eslint-disable-next-line no-undef
defineProps({
  productName: String,
  productDescription: String,
  productTags: Array,
  productTag: String,
  productCategory: String,
  productQuantity: Number,
  productReviewStatus: Boolean,
  productHeight: Number,
  productWaist: Number,
  productHip: Number,
  productBust: Number,
  productHighlights: Array,
  addTag: Function,
  page: String,
  removeTag: {
    type: Function,
    required: true,
  },
  addHighlight: {
    type: Function,
    required: true,
  },
  removeHighlight: {
    type: Function,
    required: true,
  },
  addHighlightTitle: {
    type: Function,
    required: true,
  },
  addHighlightDetails: {
    type: Function,
    required: true,
  },
});

// eslint-disable-next-line no-undef
defineEmits([
  "update:productName",
  "update:productDescription",
  "update:productTag",
  "update:productCategory",
  "update:productQuantity",
  "update:productReviewStatus",
  "update:productHeight",
  "update:productWaist",
  "update:productproductHip",
  "update:productproductBust",
  "update:page",
]);

const showMeasurement = ref(false);
const openMeasurements = () => {
  showMeasurement.value = !showMeasurement.value;
};
</script>

<style lang="scss" scoped>
.tag {
  background: #faf4ee;
  border-radius: 2px;
  padding: 2px 8px;
  display: flex;
  gap: 8px;
  color: #cc8f56;
}
.svg-neutral {
  filter: invert(29%) sepia(26%) saturate(0%) hue-rotate(156deg) brightness(99%)
    contrast(100%);
}
.svg-primary {
  filter: invert(62%) sepia(56%) saturate(388%) hue-rotate(348deg)
    brightness(88%) contrast(90%);
}
</style>
