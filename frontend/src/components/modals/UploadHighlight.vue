<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import { defineProps } from "vue";
const props = defineProps([
  "open",
  "close",
  "highlightModal",
  "galleryName",
  "highlight",
]);
const highlightImage = ref();
const images = ref<any>([]);
// productInfo.value.images = images.value;
const addHighlightImage = (input: any) => {
  const files = input.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target?.result;
      images.value.push({
        image: image,
        fileName: files[i].name,
        fileSize: files[i].size,
      });
    };
    reader.readAsDataURL(files[i]);
  }
};
const deleteImage = (index: number) => {
  images?.value.splice(index, 1);
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div
      class="upload-highlight text-left p-8"
      :class="highlightModal === highlight.id ? 'show' : ''"
    >
      <div class="flex justify-between">
        <h3 class="text-2xl">Upload Highlight</h3>
        <div class="flex gap-8">
          <img @click="props.close" src="../../assets/icons/close.svg" alt="" />
        </div>
      </div>
      <form class="mt-8">
        <div class="form-input">
          <label for="new-password">Add gallery name</label>
          <input
            class="form-field"
            type="text"
            name="gallery-name"
            :value="galleryName"
            @input="
              $emit(
                'update:galleryName',
                ($event.target as HTMLInputElement).value
              )
            "
            id="gallery-name"
          />
        </div>
        <div class="form-input">
          <label for="country">Upload Images</label>
          <div class="flex justify-between items-center">
            <label
              htmlFor="highlight-image"
              className="upload-highlight-image mt-4"
            >
              <input
                type="file"
                required
                :value="highlightImage"
                :multiple="true"
                accept="image/jpeg, image/png, image/jpg"
                @change="addHighlightImage"
                name="highlight-image"
                id="highlight-image"
              />

              <div class="mx-auto">
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
                <p class="text-primary font-medium">Add Image</p>
              </div>
            </label>
          </div>
        </div>
      </form>
      <div class="mb-5">
        <p class="text-dark pb-2">Uploads</p>
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex justify-between items-center py-4"
        >
          <div class="flex gap-4 items-center">
            <div class="">
              <img class="w-16 h-16 rounded-md" :src="image.image" alt="" />
            </div>
            <div class="">
              <p class="text-dark pb-1 text-sm">
                {{ image.fileName }}
              </p>
              <p class="text-neutral text-sm font-light">12.4kb</p>
            </div>
          </div>
          <span @click="deleteImage(index)">
            <img
              class="w-5 svg-neutral"
              src="../../assets/icons/trash.svg"
              alt=""
            />
          </span>
        </div>
      </div>
      <div class="flex justify-end gap-4">
        <button class="btn-secondary py-2 px-4" @click="props.close">
          Cancel
        </button>
        <button class="btn-primary py-2 px-4">Save</button>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.upload-highlight {
  background: #ffffff;
  display: none;
  overflow-y: auto;
  top: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 3;
  position: fixed;
  cursor: pointer;
  &.show {
    display: block;
  }
  @include md {
    width: 45%;
    height: 100%;
  }
}

.modal-overlay::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  /* overflow: aut; */
  z-index: 2;
}
.svg-primary {
  filter: invert(62%) sepia(56%) saturate(388%) hue-rotate(348deg)
    brightness(88%) contrast(90%);
}
.svg-neutral {
  filter: invert(29%) sepia(26%) saturate(0%) hue-rotate(156deg) brightness(99%)
    contrast(100%);
}
.upload-highlight-image {
  border: 1px dashed #e6e7e9;
  width: 100%;
  height: 160px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
input[type="file"] {
  display: none;
}
</style>
