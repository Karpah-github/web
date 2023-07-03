<template>
  <div class="">
    <div class="flex justify-between gap-4">
      <h5 class="header6 text-xl pt-2">Account settings</h5>
      <button type="button" class="btn-primary px-4 py-2 uppercase">
        Save Changes
      </button>
    </div>

    <form action="" class="md:w-6/12 pt-4">
      <div class="form-input">
        <span class="flex gap-1">
          <label for="fullname">Full name</label>
        </span>
        <input
          class="form-field"
          type="text"
          name="fullname"
          v-model="account.fullname"
          required
        />
      </div>
      <div class="form-input pb-4 border-b border-neutral-border">
        <label for="email">Email Address</label>
        <input
          class="form-field"
          type="text"
          name="email"
          v-model="account.email"
          id="email"
        />
      </div>
      <div class="form-input pt-8 border-b border-neutral-border">
        <label for="country">Avatar</label>
        <p class="text-neutral text-sm font-light pb-1">
          JPG, PNG or GIF (720 x 690) max
        </p>
        <div class="flex justify-between items-center">
          <label htmlFor="image" className="upload-input my-4">
            <input
              type="file"
              required
              :value="account.avatar"
              accept="image/jpeg, image/png, image/jpg"
              @change="addImages"
              name="image"
              id="image"
            />
            <img v-if="images" class="upload-image" :src="images" alt="image" />
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
          <button @click="images = ''" class="btn-secondary p-2" v-if="images">
            Change
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line no-undef
const account = ref({
  fullname: "",
  email: "",
  avatar: "",
});
const images = ref<any>("");
// productInfo.value.images = images.value;
const addImages = (input: any) => {
  const files = input.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target?.result;
      images.value = image;
    };
    reader.readAsDataURL(files[i]);
  }
  //   emit("update:avatar", input.target.file);
};
</script>

<style lang="scss" scoped>
.upload-input {
  border: 1px dashed #e6e7e9;
  width: 160px;
  height: 160px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.upload-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
input[type="file"] {
  display: none;
}
</style>
