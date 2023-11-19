<script setup lang="ts">
import InviteMember from "@/components/modals/InviteMember.vue";
import UserDelete from "@/components/modals/userDelete.vue";
import { ref } from "vue";
const openModal = ref(false);
const openDModal = ref(false);
const openInviteMemberModal = () => {
  openModal.value = !openModal.value;
};
const openDeleteMemberModal = () => {
  openDModal.value = !openDModal.value;
};
</script>

<template>
  <div class="px-5 md:px-8">
    <div class="flex justify-between mt-10 mb-2">
      <h2 class="text-2xl font-medium">Teams</h2>
      <button
        @click="openInviteMemberModal"
        class="btn-primary px-4 py-2 rounded-md"
      >
        Invite member
      </button>
    </div>
    <div class="md:w-10/12">
      <div class="search md:w-1/2 mt-4">
        <span class="w-5">
          <img class="w-full" src="../../assets/icons/search.svg" alt="" />
        </span>
        <input type="search" placeholder="Search members or role" />
      </div>
      <div class="flex justify-between mt-10 items-center">
        <div class="flex gap-4 items-center">
          <img
            src="../../assets/sellerAvatar.png"
            class="w-10 h-10 rounded-full"
            alt=""
          />
          <div class="flex items-start gap-4 md:gap-10">
            <div class="text-sm md:text-md">
              <p class="font-normal">Jane Doe</p>
              <p class="text-[#b3b3b3]">janedoe@gmail.com</p>
            </div>
            <div class="bg-primary text-white text-xs px-3 py-1 rounded-2xl">
              OWNER
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <!-- <p class="text-[#b3b3b3] hidden md:block">12th June, 2022</p> -->
        </div>
      </div>
      <div class="flex justify-between mt-8 items-center">
        <div class="flex gap-4 items-center">
          <img
            src="../../assets/sellerAvatar.png"
            class="w-10 h-10 rounded-full"
            alt=""
          />
          <div class="flex items-start gap-4 md:gap-10">
            <div class="text-sm md:text-md">
              <p class="font-normal">John Doe</p>
              <p class="text-[#b3b3b3]">johndoe@gmail.com</p>
            </div>
            <div class="bg-primary text-white text-xs px-3 py-1 rounded-2xl">
              ADMIN
            </div>
          </div>
        </div>
        <div class="flex gap-5">
          <p class="text-[#b3b3b3] hidden md:block text-sm">12th June, 2022</p>
          <div class="flex cursor-pointer">
            <i class="fa-solid fa-pen"></i>
            <img
              @click="openDeleteMemberModal"
              class="svg-red w-5"
              src="../../assets/icons/trash.svg"
              alt="delete"
            />
          </div>
        </div>
      </div>
    </div>
    <InviteMember :open="openModal" :close="openInviteMemberModal" />
    <UserDelete :open="openDModal" :close="openDeleteMemberModal" />
  </div>
</template>

<style lang="scss" scoped></style>
