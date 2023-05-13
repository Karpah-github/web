<!-- eslint-disable no-undef -->
<script setup lang="ts">
const props = defineProps(["activity"]);
</script>

<template>
  <div class="flex justify-between font-light">
    <div class="flex gap-1 items-center text-sm">
      <div class="img mr-2">
        <img src="../../assets/avatar.svg" alt="avatar" />
      </div>
      <p>{{ activity.notifier }}</p>
      <p>{{ activity.activityType }}</p>
      <p class="underline font-thin cursor-pointer">
        {{ activity.notification }}
      </p>
    </div>
    <p class="text-neutral text-sm">2hrs</p>
  </div>
</template>

<style lang="scss"></style>
