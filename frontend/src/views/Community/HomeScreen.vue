<script setup lang="ts">
import { ref } from "vue";
import CustomSelect from "@/components/Community/CustomSelect.vue";
import AddTopic from "@/components/modals/AddTopic.vue";

//show community navigation panel
const showNav = ref(true);
const topics = ref([
  {
    id: 1,
    topic: "Welcome and Forum Guidelines",
    replies: 98,
    date: "Jun 10",
  },
  {
    id: 2,
    topic: "Updates on the highlights feature",
    replies: 9,
    date: "Jun 10",
  },
  {
    id: 3,
    topic: "How to be a top seller",
    replies: 98,
    date: "Jun 10",
  },
  {
    id: 4,
    topic: "Karpah buyers algorithm",
    replies: 198,
    date: "Jun 10",
  },
  {
    id: 5,
    topic: "Updates on the highlights feature",
    replies: 9,
    date: "Jun 10",
  },
  {
    id: 6,
    topic: "How to be a top seller",
    replies: 98,
    date: "Jun 10",
  },
  {
    id: 7,
    topic: "Karpah buyers algorithm",
    replies: 198,
    date: "Jun 10",
  },
  {
    id: 8,
    topic: "Updates on the highlights feature",
    replies: 9,
    date: "Jun 10",
  },
]);
const openAddTopicModal = ref(false);
const showAddTopicModal = () => {
  openAddTopicModal.value = !openAddTopicModal.value;
};
</script>

<template>
  <div>
    <div class="nav flex justify-between items-center bg-white px-8 py-4">
      <div class="w-28">
        <img class="" src="../../assets/Karpah.svg" alt="" />
      </div>
      <div class="flex gap-4 items-center">
        <button class="btn-primary py-2 px-4 text-sm md:text-md">
          Sign up
        </button>
        <!-- <button class="btn-primary py-2 px-4 text-sm md:text-md">Login</button> -->
      </div>
    </div>
    <div
      class="bg-[#FAF4EE] w-full flex gap-y-5 justify-between items-center px-8 py-10 md:py-16"
    >
      <div class="">
        <h1 class="welcome">Welcome to the Karpah Community Forum</h1>
        <h6>
          Ask the community, share ideas, and connect with other Karpah users
        </h6>
      </div>
      <div class="hidden md:block">
        <img class="md:w-[250px]" src="../../assets/community.png" alt="" />
      </div>
    </div>
    <div class="px-8 py-8">
      <div class="flex my-4 flex gap-5 items-center justify-between">
        <div class="flex gap-2">
          <CustomSelect />
        </div>
        <button
          @click="showAddTopicModal"
          class="btn-primary rounded-xl py-2 px-4"
        >
          New Topic
        </button>
      </div>
      <nav
        class="font-light gap-4 page_nav flex md:gap-6 flex-wrap cursor-pointer md:flex-nowrap uppercase py-6 text-neutral"
        :class="{
          'hidden sm:flex md:hidden lg:flex': !showNav,
          flex: showNav,
        }"
      >
        <router-link
          :to="{ name: 'community' }"
          class="flex gap-1 md:gap-2 text-sm items-center"
        >
          Latest
        </router-link>
        <router-link
          :to="{ name: 'top' }"
          class="flex gap-1 md:gap-2 text-sm items-center"
        >
          Top
        </router-link>
        <router-link
          :to="{ name: 'new' }"
          class="flex gap-1 md:gap-2 text-sm items-center"
        >
          New (20)
        </router-link>
        <router-link
          :to="{ name: 'categories' }"
          class="flex gap-1 md:gap-2 text-sm items-center"
        >
          Categories
        </router-link>
      </nav>
      <AddTopic :open="openAddTopicModal" :close="showAddTopicModal" />
      <table class="table-auto w-full">
        <thead class="table__header">
          <tr
            class="product_table__row uppercase text-left text-[#333333] bg-neutral-bg"
          >
            <th class="font-medium pl-2 text-sm py-3">Topic</th>
            <th
              class="font-medium pl-2 text-sm py-3 text-left hidden md:block"
            ></th>
            <th class="font-medium text-sm py-2 pr-2 text-left">Replies</th>
            <th class="font-medium text-sm px-2 py-2 text-left">Activity</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="table__row text-sm md:text-md text-[#333333] border-b border-b-neutral-border"
            v-for="topic in topics"
            :key="topic.id"
          >
            <td class="table__image py-4 px-2">
              <router-link :to="`/community/${topic.topic}`">
                <p class="text-md font-medium">{{ topic.topic }}</p>
                <p class="text-sm font-light py-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam...
                </p>
              </router-link>
            </td>
            <td class="table__date py-4 px-2 hidden md:block">
              <div class="flex gap-2 w-10 md:w-full items-center">
                <img
                  class="w-8 h-8 rounded-full border border-primary"
                  src="../../assets/sellerAvatar.png"
                  alt=""
                />
                <img
                  class="w-8 h-8 hidden md:block rounded-full border border-primary"
                  src="../../assets/sellerAvatar.png"
                  alt=""
                />
                <img
                  class="w-8 h-8 hidden md:block rounded-full border border-primary"
                  src="../../assets/sellerAvatar.png"
                  alt=""
                />
              </div>
            </td>
            <td class="table__date px-2 text-neutral">{{ topic.replies }}</td>
            <td class="table__status px-2 text-neutral">{{ topic.date }}</td>
          </tr>
        </tbody>
      </table>
      <router-view @showNav="(mode: boolean)=> showNav = mode"></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  font-family: "Bebas Neue";
  font-style: normal;
  font-size: 36px;
  word-spacing: 0.1rem;
  color: #333333;
  @include sm {
    font-size: 24px;
  }
}
.page_nav a {
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  padding: 0.5em;
}
.page_nav a.router-link-active {
  border-bottom: 1px solid #cc8f56;
  color: #cc8f56;
}
</style>
