<script setup lang="ts">
import AccountSettings from "@/components/settings/AccountSettings.vue";
import PasswordSettings from "@/components/settings/PasswordSettings.vue";
import SettingsNav from "@/components/settings/SettingsNav.vue";
import StoreSettings from "@/components/settings/StoreSettings.vue";
import { storeInfo } from "@/composables/settings/SettingsDetails";
import { Ref, ref } from "vue";

const page = ref("store");
const updatePage = (view: string) => {
  page.value = view;
};
const store: Ref<storeInfo> = ref({
  name: "",
  bio: "",
  currency: "",
  country: "",
});
const password = ref({
  oldPassword: "",
  newPassword: "",
});
const account = ref({
  fullname: "",
  email: "",
  avatar: "",
});
</script>

<template>
  <div class="px-8 py-10">
    <div class="flex gap-3 items-center">
      <h5 class="header5">Settings</h5>
    </div>
    <SettingsNav :page="page" @update:page="updatePage" />
    <StoreSettings
      v-show="page === 'store'"
      :country="store.country"
      :store-bio="store.bio"
      :store-name="store.name"
      :page="page"
      @update:page="updatePage"
    />
    <PasswordSettings
      v-show="page === 'password'"
      :old-password="password.oldPassword"
      :page="page"
      :new-password="password.newPassword"
      :update:page="updatePage"
    />
    <AccountSettings
      v-show="page === 'account'"
      :avatar="account.avatar"
      :full-name="account.fullname"
      :email="account.email"
      :update:page="updatePage"
    />
  </div>
</template>

<style lang="scss" scoped></style>
