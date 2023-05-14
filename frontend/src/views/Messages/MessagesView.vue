<script setup lang="ts">
import { ref } from "vue";
import { messageList } from "../../composables/messages/messages";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const selectedChat = ref();
const allChats = ref<Array<any>>([
  {
    from: 80,
    userMessage:
      "Hi there! I'm interested in the Salsa African Dress you're selling. Can you tell me more about it?",
    createdAt: new Date().toISOString().split("T")[0],
  },
]);
const message = ref();
const isSendingMessage = ref<boolean>(false);
const userId = ref(78);
const textImage = ref<any>([]);
const sendMessage = (e: any) => {
  e.preventDefault();
  if (message.value.trim()) {
    isSendingMessage.value = true;

    allChats.value.push({
      from: userId.value,
      userMessage: message.value,
      createdAt: new Date(),
    });
    message.value = "";
    isSendingMessage.value = false;
  }
};

const addImages = (input: any) => {
  const files = input.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = e.target?.result;
      textImage.value = image;
      allChats.value.push({
        from: userId.value,
        userMessageImage: textImage.value,
        createdAt: new Date(),
      });
    };

    reader.readAsDataURL(files[i]);
  }
};
</script>

<template>
  <div class="md:flex w-full h-screen">
    <section
      class="md:w-4/12 overflow-y-scroll px-4 md:border-r md:border-neutral-border"
    >
      <div class="">
        <div class="flex my-4 items-center gap-2">
          <h4 class="text-lg">Messages</h4>
          <img class="w-4" src="../../assets/icons/arrow-down.svg" alt="" />
        </div>
        <div class="search my-5">
          <span class="w-5">
            <img class="w-full" src="../../assets/icons/search.svg" alt="" />
          </span>
          <input type="search" placeholder="Search here" />
        </div>
      </div>
      <div
        v-if="messageList"
        class="flex justify-between mt-8 items-center w-full"
      >
        <div class="flex gap-3">
          <div
            class="rounded-full w-16 h-12 flex justify-center items-center border border-neutral-border"
          >
            <img src="../../assets/icons/sms-notification.svg" alt="" />
          </div>
          <div class="w-full">
            <h5 class="text-md">Message requests</h5>
            <p class="text-[#B3B3B3] font-light">2 pending requests</p>
          </div>
        </div>
        <div class="">
          <img class="w-5" src="../../assets/icons/arrow-right.svg" alt="" />
        </div>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center h-[75vh] my-4"
      >
        <div class="text-center">
          <div class="w-32 mx-auto mb-6">
            <img
              class="w-full"
              src="../../assets/icons/empty-inbox.svg"
              alt=""
            />
          </div>
          <p class="text-md text-[#4D4D4D] font-medium">No Conversation yet</p>
        </div>
      </div>

      <div v-for="(message, index) in messageList" class="" :key="index">
        <div
          @click="selectedChat = message"
          :class="[
            selectedChat?.username === message.username
              ? 'border-l border-primary bg-[#F2F2F2]'
              : '',
          ]"
          class="flex justify-between cursor-pointer flex-wrap mt-6 p-2 items-start w-full"
        >
          <div class="flex gap-3">
            <div class="w-14 h-12 rounded-full">
              <img
                class="w-full h-12 rounded-full"
                :src="message.avatar"
                alt=""
              />
            </div>
            <div class="w-full">
              <h5 class="text-md">{{ message.username }}</h5>
              <p class="text-neutral font-light text-sm">
                Received successful...
              </p>
            </div>
          </div>
          <div class="">
            <p class="text-neutral font-light text-xs">
              {{ message.createdAt }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden md:block md:w-8/12">
      <div
        v-if="!selectedChat && !messageList"
        class="flex flex-col items-center justify-center h-[75vh] my-4"
      >
        <div class="text-center">
          <div class="w-32 mx-auto mb-6">
            <img
              class="w-full"
              src="../../assets/icons/empty-chat.svg"
              alt=""
            />
          </div>
          <h5 class="font-medium text-[#4D4D4D] text-lg mb-1">
            No message yet
          </h5>
          <p class="text-md text-neutral font-light lg:w-3/4 mx-auto">
            Hey there! It looks like there's no message here yet. Don't worry,
            that's totally fine!
          </p>
        </div>
      </div>
      <div
        v-if="!selectedChat && messageList"
        class="flex flex-col items-center justify-center h-[80vh] my-4"
      >
        <div class="text-center">
          <h5 class="font-medium text-[#4D4D4D] text-md mb-1">
            Select a message
          </h5>
          <p class="text-sm text-neutral font-light md:w-3/4 mx-auto">
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </p>
        </div>
      </div>
      <div
        v-if="selectedChat"
        class="flex flex-col justify-between gap-4 h-screen"
      >
        <div class="">
          <div
            class="w-full p-3 flex justify-between items-center border-b border-neutral-border"
          >
            <div class="flex gap-2 items-center">
              <span
                class="bg-[#212121] text-white uppercase text-sm rounded-full w-8 h-8 flex justify-center items-center"
                >{{ selectedChat?.username.charAt(0) }}</span
              >
              <h6>{{ selectedChat?.username }}</h6>
            </div>
            <span class="">
              <img src="../../assets/icons/more.svg" alt="more icon" />
            </span>
          </div>
          <div class="my-2 px-4">
            <p class="text-center text-sm text-neutral my-3 font-light">
              27 March, 2023
            </p>
            <div
              v-for="(chat, index) in allChats"
              :key="index"
              class="w-3/4"
              :class="[chat.from === userId ? 'float-right' : '']"
            >
              <div
                class="flex gap-2 my-2"
                :class="[
                  chat.from === userId
                    ? 'flex-row-reverse items-end bg-[#FAFAFA]'
                    : '',
                ]"
              >
                <div class="f">
                  <img
                    class="w-8 h-8 rounded-full"
                    :src="selectedChat.avatar"
                    alt=""
                  />
                </div>
                <div
                  class="border border-[#ECECEC] w-full rounded-md px-2 py-1 text-sm"
                  :class="[chat.from === userId ? 'border-[#F2F2F2]' : '']"
                >
                  <p class="text-[#4D4D4D]">{{ chat.userMessage }}</p>
                  <div class="w-full">
                    <img
                      class="h-48"
                      v-if="chat?.userMessageImage"
                      :src="chat?.userMessageImage"
                      alt="image message"
                    />
                  </div>
                  <p
                    class="text-neutral mt-1 font-light"
                    :class="[chat.from === userId ? 'float-right' : '']"
                  >
                    {{ dayjs(chat.createdAt).fromNow() }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 mb-4">
          <div class="message-input w-full">
            <label htmlFor="image" className="w-10 cursor-pointer">
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                @change="addImages"
                name="image"
                id="image"
              />
              <img
                class="svg-neutral-1"
                src="../../assets/icons/gallery.svg"
                alt="gallery icon"
              />
            </label>

            <span class="w-10">
              <img
                class="svg-neutral-1"
                src="../../assets/icons/emoji-happy.svg"
                alt="emoji-happy icon"
              />
            </span>
            <input
              type="text"
              name="message"
              placeholder="Type your message"
              id=""
              v-model="message"
              @keyup.enter="sendMessage"
              class="w-full outline-none"
            />

            <span
              class="w-10 justify-self-end cursor-pointer"
              @click="sendMessage"
            >
              <img
                src="../../assets/icons/send-01.svg"
                alt="emoji-happy icon"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.message-input {
  box-shadow: 0px 4px 6px -1px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.1);
  border-radius: 4px;
  background-color: #fff;
  padding: 12px;
  display: flex;
  input[type="text"] {
    word-wrap: break-word;
    word-break: break-all;
    font-size: 14px;
  }
  input[type="file"] {
    display: none;
  }
}
.svg-neutral-1 {
  filter: invert(33%) sepia(0%) saturate(0%) hue-rotate(252deg) brightness(88%)
    contrast(93%);
}
</style>
