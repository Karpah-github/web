<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line no-undef
defineProps(["productImage", "page", "addImages"]);
// eslint-disable-next-line no-undef
defineEmits([
  "update:productImages",
  "update:productDeliveryPeriod",
  "update:productHeight",
  "update:page",
]);
const images = ref<any>([]);
// productInfo.value.images = images.value;
const addImages = (input: any) => {
  const files = input.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target?.result;
      images.value.push(image);
    };
    reader.readAsDataURL(files[i]);
  }
};
const coverImage = ref("");
const selectCoverImage = (image: any) => {
  coverImage.value = image;
};
</script>

<template>
  <div class="w-full md:w-10/12 lg:8/12 xl:w-7/12">
    <h5 class="header5 pt-4">Upload Images</h5>
    <div class="flex flex-col-reverse md:flex-row gap-10 my-6">
      <div>
        <div class="upload-input">
          <label htmlFor="image" className="upload-input">
            <input
              type="file"
              required
              :value="productImage"
              :multiple="true"
              accept="image/jpeg, image/png, image/jpg"
              @change="addImages"
              name="image"
              id="image"
            />
            <svg
              width="32"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="#b3b3b3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 18V6"
                stroke="#b3b3b3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p class="text-primary font-medium">Upload photo</p>
          </label>
        </div>
        <div class="py-4">
          <div v-if="images" class="flex md:flex-col gap-4 img-container">
            <div
              class="img-child md:w-44"
              v-for="(image, index) in images"
              :key="index"
            >
              <img
                :src="image"
                class="w-full rounded-lg"
                alt=""
                @click="selectCoverImage(image)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="">
          <div v-if="coverImage" class="">
            <img :src="coverImage" class="w-full rounded-lg" alt="" />
          </div>
          <div v-else class="cover-image px-10 text-center">
            <div class="mx-auto w-16">
              <img
                src="../../../assets/icons/image.svg"
                alt=""
                class="w-full"
              />
            </div>
            <span class="text-[#b3b3b3]"
              >Image uploaded would be shown here</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end gap-4 mt-4">
      <button type="button" class="btn-secondary px-4 py-3 uppercase">
        back
      </button>
      <button type="button" class="btn-primary px-4 py-2 uppercase">
        Save & Continue
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload-input {
  border: 1px dashed #dfdfdf;
  border-radius: 6px;
  width: 170px;
  height: 160px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
input[type="file"] {
  display: none;
}
.cover-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 408px; */
  height: 569px;
  background: #fafafa;
  border: 1px dashed #b3b3b3;
  border-radius: 4px;
  flex: none;
  order: 1;
}
.img-container {
  max-width: 100%;
  overflow-x: scroll;
}
@media screen and (max-width: 768px) {
  .img-child {
    min-width: 180px;
  }
}
</style>
