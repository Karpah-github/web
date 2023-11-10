<script lang="ts" setup>
import { ref } from "vue";
import modal from "./index.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { defineProps } from "vue";
const props = defineProps(["open", "close"]);

const options = ref([
  {
    id: 0,
    category: "All Categories",
    replies: 5000,
  },
  {
    id: 1,
    category: "Info and Announcements",
    replies: 27,
  },
  {
    id: 2,
    category: "General Discussions",
    replies: 986,
  },
  {
    id: 3,
    category: "Ask the community",
    replies: 9896,
  },
  {
    id: 4,
    category: "Sellers Discussions",
    replies: 986,
  },
  {
    id: 5,
    category: "Buyers Discussions",
    replies: 986,
  },
]);
const category = ref("");
const editorData = ref("<p>Write your discussion in detail here</p>");
const editor = ClassicEditor;
const onReady = (editor: any) => {
  console.log("kemi");
};
const onChange = (data: any) => {
  console.log(data);
};
</script>
<template>
  <modal :open="props.open" :close="props.close" class="overflow-y-hidden">
    <div class="delete-modal text-left p-4">
      <div class="text-left">
        <h4 class="text-lg mb-2 font-medium mb-4">Create a new Topic</h4>
        <div class="">
          <div
            class="flex md:gap-5 flex-col md:items-center md:flex-row w-full"
          >
            <div class="form-input md:w-7/12">
              <label class="font-medium" for="topic-title">Topic Title</label>
              <input
                class="form-field"
                type="text"
                name="topic-title"
                id="topic-title"
                placeholder="What is this discussion about"
              />
            </div>
            <div class="form-input md:w-5/12">
              <label class="font-medium" for="category">Select Category</label>
              <select
                name="category"
                v-model="category"
                class="form-field"
                id="category"
              >
                <option value="none" selected disabled hidden>
                  Select Category
                </option>
                <option
                  v-for="(option, index) in options"
                  :key="index"
                  :value="option.category"
                >
                  {{ option.category }}
                </option>
              </select>
            </div>
          </div>

          <Ckeditor
            :editor="editor"
            v-model="editorData"
            @ready="onReady"
            @input="onChange"
          ></Ckeditor>
        </div>
      </div>
      <div class="flex justify-end pt-5 gap-3">
        <button class="btn-secondary px-3 py-1" @click="props.close">
          Cancel
        </button>
        <button class="bg-primary text-white px-3 py-1 rounded-sm text-sm">
          Add Topic
        </button>
      </div>
    </div>
  </modal>
</template>
<style lang="scss">
.delete-modal {
  background: #ffffff;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  position: fixed;
  width: 85%;
  /* height: 60vh; */
  cursor: pointer;
  border-radius: 8px;
  @include md {
    width: 500px;
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
.svg-red {
  filter: invert(38%) sepia(89%) saturate(4462%) hue-rotate(336deg)
    brightness(89%) contrast(105%);
}
</style>
