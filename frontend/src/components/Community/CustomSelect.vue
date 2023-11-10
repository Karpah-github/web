<script setup lang="ts">
import { ref } from "vue";

const tabindex = ref(0);
const open = ref(false);
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
const selected = ref({
  id: 0,
  category: "All Categories",
});
const selectCategory = (option: { id: number; category: string }) => {
  selected.value = option;
  open.value = false;
  //   $emit("input", option);
};
</script>

<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected.category }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="selectCategory(option)"
        class="flex justify-between text-sm py-4 px-3"
      >
        <p>{{ option.category }}</p>
        <p>x {{ option.replies }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}

.custom-select .selected {
  border-radius: 32px;
  border: 1px solid #ad8225;
  color: #333;
  padding: 4px 1em;
  padding-right: 2rem;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border-radius: 32px;
  border: 1px solid #ad8225;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #333 transparent transparent transparent;
}

.custom-select .items {
  color: #333;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #cc8f56;
  position: absolute;
  width: 250px;
  background-color: #fff;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #333;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #cc8f56;
}

.selectHide {
  display: none;
}
</style>
