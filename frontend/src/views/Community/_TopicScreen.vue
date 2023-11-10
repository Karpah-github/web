<script setup lang="ts">
import AddReply from "@/components/modals/AddReply.vue";
import { ref } from "vue";

const openAddReplyModal = ref(false);
const showAddReplyModal = () => {
  openAddReplyModal.value = !openAddReplyModal.value;
};
const liked = ref(false);
const toggleLike = () => {
  liked.value = !liked.value;
};
</script>

<template>
  <div class="">
    <div
      class="nav flex shadow-md justify-between items-center bg-white px-8 py-4"
    >
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
    <div class="px-5 md:px-8 py-5">
      <h3 class="text-xl font-medium">Welcome and Forum Guidelines</h3>
      <div class="flex gap-2 my-1 items-center">
        <span class="bg-[#3BB75E] w-2 h-2 rounded-full"></span>
        <p class="font-light">Share an idea</p>
      </div>

      <section class="py-10">
        <div class="border-b border-bg-neutral">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img
                class="w-10 rounded-full h-10 flex items-center"
                src="../../assets/avatar.svg"
                alt="avatar"
              />
              <p class="font-medium text-sm">Raji Adeoye</p>
              <p class="font-medium text-sm text-neutral">
                (Community Manager)
              </p>
            </div>
            <p>Jan' 21</p>
          </div>
          <div class="py-3 md:pl-12 w-10/12">
            <p class="">
              Hi there and welcome to our brand new support forum. This is a
              place for our community (that’s you) to connect with each other,
              ask and answer each other’s questions, share feedback, and more!
              <br /><br />

              To help you get the most out of this forum, we’ve put together the
              following guidelines. We want to make sure this site stays
              organized and that conversations stay constructive. Please make
              sure to take a moment to read them!
            </p>
            <div class="flex gap-4 my-4 items-center">
              <div @click="showAddReplyModal">
                <img
                  class="w-4 cursor-pointer"
                  src="../../assets/icons/message-circle-01.svg"
                  alt=""
                />
              </div>
              <div class="flex gap-1 items-center" @click="toggleLike">
                <img
                  v-if="liked"
                  class="w-4"
                  src="../../assets/icons/heart-filled.svg"
                  alt=""
                />
                <img
                  v-else
                  class="w-4"
                  src="../../assets/icons/heart.svg"
                  alt=""
                />
                <span>3</span>
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/link-03.svg" alt="" />
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/bookmark.svg" alt="" />
              </div>
            </div>
            <div
              class="border border-neutral rounded-md p-3 my-4 flex gap-5 md:gap-10 flex-wrap"
            >
              <span class="flex flex-col gap-1">
                <p class="font-light">Created</p>
                <p class="font-medium">Feb'22</p>
              </span>
              <span class="flex flex-col gap-1">
                <p class="font-light">Last Reply</p>
                <div class="flex items-center gap-2">
                  <div
                    class="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full"
                  >
                    A
                  </div>
                  <p class="font-medium">46m</p>
                </div>
              </span>
              <span class="flex flex-col gap-1">
                <p class="font-light">Replies</p>
                <p class="font-medium">7</p>
              </span>
              <span class="flex flex-col gap-1">
                <p class="font-light">Views</p>
                <p class="font-medium">634</p>
              </span>
              <span class="flex flex-col gap-1">
                <p class="font-light">Users</p>
                <p class="font-medium">4</p>
              </span>
              <span class="flex flex-col gap-1">
                <p class="font-light">Likes</p>
                <p class="font-medium">4</p>
              </span>
            </div>
          </div>
        </div>
        <div class="my-4 border-b border-bg-neutral">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img
                class="w-10 rounded-full h-10 flex items-center"
                src="../../assets/sellerAvatar.png"
                alt="avatar"
              />
              <p class="font-medium text-sm">Jane Adeoye</p>
            </div>
            <p>March' 21</p>
          </div>
          <div class="py-3 md:pl-12 w-10/12">
            <p class="">
              I would also like Outline Text as an argument in the API. Our use
              case is to allow users to programmatically create variations of an
              image designed in Figma.
            </p>
            <div class="flex gap-4 my-4 items-center">
              <div>
                <img
                  class="w-4"
                  src="../../assets/icons/message-circle-01.svg"
                  alt=""
                />
              </div>
              <div class="flex gap-1 items-center">
                <img class="w-4" src="../../assets/icons/heart.svg" alt="" />
                <span>1</span>
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/link-03.svg" alt="" />
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/bookmark.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="my-4 border-b border-bg-neutral">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img class="w-10" src="../../assets/avatar.svg" alt="avatar" />
              <p class="font-medium text-sm">Raji Adeoye</p>
            </div>
            <p>April' 21</p>
          </div>
          <div class="py-3 md:pl-12 w-10/12">
            <p class="">
              I would also like Outline Text as an argument in the API. Our use
              case is to allow users to programmatically create variations of an
              image designed in Figma.
            </p>
            <div class="flex gap-4 my-4 items-center">
              <div>
                <img
                  class="w-4"
                  src="../../assets/icons/message-circle-01.svg"
                  alt=""
                />
              </div>
              <div class="flex gap-1 items-center">
                <img class="w-4" src="../../assets/icons/heart.svg" alt="" />
                <span>1</span>
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/link-03.svg" alt="" />
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/bookmark.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="my-4 border-b border-bg-neutral">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img class="w-10" src="../../assets/avatar.svg" alt="avatar" />
              <p class="font-medium text-sm">Raji Adeoye</p>
            </div>
            <p>May' 21</p>
          </div>
          <div class="py-3 md:pl-12 w-10/12">
            <p class="">
              I would also like Outline Text as an argument in the API. Our use
              case is to allow users to programmatically create variations of an
              image designed in Figma.
            </p>
            <div class="flex gap-4 my-4 items-center">
              <div>
                <img
                  class="w-4"
                  src="../../assets/icons/message-circle-01.svg"
                  alt=""
                />
              </div>
              <div class="flex gap-1 items-center">
                <img class="w-4" src="../../assets/icons/heart.svg" alt="" />
                <span>1</span>
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/link-03.svg" alt="" />
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/bookmark.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <div class="flex justify-between">
            <div class="flex gap-4 items-center">
              <img class="w-10" src="../../assets/avatar.svg" alt="avatar" />
              <p class="font-medium text-sm">Raji Adeoye</p>
            </div>
            <p>Aug' 21</p>
          </div>
          <div class="py-3 md:pl-12 w-10/12">
            <p class="">
              I would also like Outline Text as an argument in the API. Our use
              case is to allow users to programmatically create variations of an
              image designed in Figma.
            </p>
            <div class="flex gap-4 my-4 items-center">
              <div>
                <img
                  class="w-4"
                  src="../../assets/icons/message-circle-01.svg"
                  alt=""
                />
              </div>
              <div class="flex gap-1 items-center">
                <img class="w-4" src="../../assets/icons/heart.svg" alt="" />
                <span>1</span>
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/link-03.svg" alt="" />
              </div>
              <div>
                <img class="w-4" src="../../assets/icons/bookmark.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <AddReply :open="openAddReplyModal" :close="showAddReplyModal" />
  </div>
</template>

<style lang="scss" scoped></style>
