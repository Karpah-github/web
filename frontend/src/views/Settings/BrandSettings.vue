<template>
  <div class="">
    <div class="flex justify-between gap-4">
      <h5 class="header6 text-xl pt-2">Branding</h5>
      <button type="button" class="btn-primary px-4 py-2 uppercase">
        Save Changes
      </button>
    </div>

    <form action="" class="md:w-8/12 lg:w-7/12 pt-4">
      <div class="form-input pt-8 border-b border-neutral-border">
        <label for="country">Store display picture</label>
        <p class="text-neutral text-sm font-light pb-1">
          Add the picture that displays on your store’s profile
        </p>
        <div class="flex justify-between items-center">
          <label htmlFor="display-image" className="upload-input mt-4">
            <input
              type="file"
              required
              :value="branding.displayPicture"
              accept="image/jpeg, image/png, image/jpg"
              @change="addDisplayImage"
              name="display-image"
              id="display-image"
            />
            <img
              v-if="displayImage"
              class="upload-image"
              :src="displayImage"
              alt="image"
            />
            <div v-else class="">
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
              <p class="text-primary font-medium">Upload</p>
            </div>
          </label>
          <button
            @click="displayImage = ''"
            class="btn-secondary p-2"
            v-if="displayImage"
          >
            Change
          </button>
        </div>
      </div>
      <div class="form-input pt-6 border-b border-neutral-border">
        <label for="country">Store page banner</label>
        <p class="text-neutral text-sm font-light pb-1">
          Add the picture that captures attention to your store profile
        </p>
        <div class="flex justify-between items-center">
          <div
            v-if="banner"
            class="flex w-full mt-4 items-center justify-between"
          >
            <div class="upload-page-banner">
              <img :src="banner" alt="image" />
            </div>
            <button @click="banner = ''" class="btn-secondary p-2">
              Change
            </button>
          </div>
          <label v-else htmlFor="page-banner" className="upload-banner my-4">
            <input
              type="file"
              required
              :value="branding.pageBanner"
              accept="image/jpeg, image/png, image/jpg"
              @change="addBanner"
              name="page-banner"
              id="page-banner"
            />

            <div class="">
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
        <p class="text-neutral text-sm font-light">
          Recommended dimensions 3200 x 420px
        </p>
      </div>
      <div
        v-if="!sizeGuides"
        class="form-input pt-6 border-b border-neutral-border"
      >
        <label for="country">Store size guide</label>
        <p class="text-neutral text-sm font-light pb-1">
          Upload your size guides to guide buyers
        </p>
        <div class="flex justify-between items-center">
          <label
            htmlFor="size-guide"
            className="w-full border-dashed rounded-sm border items-center border-[#E8E8E8] p-3 flex justify-between mt-4"
          >
            <input
              type="file"
              required
              :value="branding.sizeGuide"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              @change="addSizeGuide"
              name="size-guide"
              id="size-guide"
            />
            <div class="flex items-center gap-2">
              <div
                class="w-12 h-12 bg-neutral-bg rounded-sm flex justify-center items-center"
              >
                <img src="../../assets/icons/add.svg" alt="" />
              </div>
              <div class="font-light">
                <h6 class="text-dark">Upload your size guide</h6>
              </div>
            </div>
            <button class="btn-secondary p-2">Browse</button>
          </label>
        </div>
      </div>
      <div v-else class="flex justify-between items-center pt-6">
        <div class="bg-neutral-bg mb-3 rounded-sm p-3 flex items-center gap-3">
          <div class="">
            <img src="../../assets/icons/Sheets.svg" alt="" />
          </div>
          <div class="">
            <p
              class="text-dark font-light text-sm w-[80%] whitespace-nowrap text-ellipsis overflow-hidden"
            >
              {{ sizeGuides[0].id }} <br />
              {{ sizeGuides[0].size / 1000 }} K.B
            </p>
          </div>
        </div>
        <button @click="sizeGuides = ''" class="btn-secondary p-2">
          Change
        </button>
      </div>
      <div class="form-input pt-6">
        <label for="country">Store Highlights</label>
        <p class="text-neutral text-sm font-light pb-1">
          Add picture highlights to your store for people to see
        </p>
        <div
          v-for="highlight in highlights"
          :key="highlight.id"
          class="flex items-center justify-between rounded-md border border-neutral-border p-3 my-3"
        >
          <div class="flex items-center gap-2">
            <div
              class="w-16 h-16 bg-[#ECECEC] rounded-sm flex justify-center items-center"
            >
              <img
                class="svg-mid-neutral w-8"
                src="../../assets/icons/add.svg"
                alt=""
              />
            </div>
            <div class="font-light">
              <h6 class="text-dark">Add highlight</h6>
            </div>
          </div>
          <button
            @click="openUploadHighlight(highlight.id)"
            class="btn-secondary p-2"
          >
            Add
          </button>
          <UploadHighlight
            :open="openHighlightModal"
            :close="openUploadHighlight"
            :highlight-modal="highlightModal"
            :highlight="highlight"
          />
        </div>
        <button
          class="flex text-primary gap-1 py-5 items-center"
          type="button"
          @click="addStoreHighlight"
        >
          <img class="svg-primary" src="../../assets/icons/add.svg" alt="" />
          <span class="text-lg">Add highlight</span>
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import UploadHighlight from "@/components/modals/UploadHighlight.vue";
// eslint-disable-next-line no-undef
const branding = ref({
  displayPicture: "",
  pageBanner: "",
  sizeGuide: "",
});
// Add store display image
const displayImage = ref<any>("");
const addDisplayImage = (input: any) => {
  const pict = input.target.files;
  for (let i = 0; i < pict.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const display = e.target?.result;
      displayImage.value = display;
    };
    reader.readAsDataURL(pict[i]);
  }
};
// Add store banner
const banner = ref<any>("");
const addBanner = (input: any) => {
  const files = input.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target?.result;
      banner.value = image;
    };
    reader.readAsDataURL(files[i]);
  }
};
// Add size guide file
class UploadableFile {
  file: any;
  id: string;
  url: string;
  status: null;
  size: number;
  constructor(file: any) {
    this.file = file;
    this.id = `${file.name}`;
    this.url = URL.createObjectURL(file);
    this.status = null;
    this.size = file.size;
  }
}
const sizeGuides = ref<any>("");
const addSizeGuide = (input: any) => {
  let newUploadableFiles = [...input.target.files].map(
    (file) => new UploadableFile(file)
  );
  sizeGuides.value = newUploadableFiles;
};
// Add store highlights
const highlights = ref<
  Array<{ id: number; galleryName: string; images: Array<any> }>
>([]);
const id = ref(0);
const addStoreHighlight = () => {
  const highlight = ref<any>({
    id: id.value++,
    galleryName: "",
    images: [],
  });
  const newp = highlights.value;
  newp.push(highlight.value);
  highlights.value = newp;
};
// Open upload highlight modal
const openHighlightModal = ref(false);
const highlightModal = ref();
const openUploadHighlight = (x: number) => {
  openHighlightModal.value = !openHighlightModal.value;
  if (highlightModal.value === x) {
    highlightModal.value = "";
  } else {
    highlightModal.value = x;
  }
};
</script>

<style lang="scss" scoped>
.upload-input {
  border: 1px dashed #e6e7e9;
  width: 160px;
  height: 140px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.upload-banner {
  border: 1px dashed #e6e7e9;
  width: 100%;
  height: 160px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.upload-image {
  width: 160px;
  height: 140px;
  border-radius: 8px;
}
.upload-page-banner {
  width: 160px;
  height: 140px;
  border-radius: 8px;
}
input[type="file"] {
  display: none;
}
.svg-mid-neutral {
  filter: invert(76%) sepia(0%) saturate(539%) hue-rotate(190deg)
    brightness(98%) contrast(82%);
}
.svg-primary {
  filter: invert(62%) sepia(56%) saturate(388%) hue-rotate(348deg)
    brightness(88%) contrast(90%);
}
</style>
