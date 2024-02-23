<script setup lang="ts">
import { ref } from "vue";

const faqOpen = ref(0);
const toggleFaq = (id: number) => {
  if (faqOpen.value === id) {
    faqOpen.value = 0;
  } else {
    faqOpen.value = id;
  }
};
const faqs = [
  {
    id: 1,
    question: "How do I create a seller account on Karpah?",
    answer:
      "To join as a seller, click on the “Get Started” button on the homepage. Follow the registration process, providing necessary details such as your business information, contact details, and payment preferences. Once your account is created, you can proceed to set up your seller profile.",
  },
  {
    id: 2,
    question: "How do I list my products on the Karpah?",
    answer:
      "To join as a seller, click on the “Get Started” button on the homepage. Follow the registration process, providing necessary details such as your business information, contact details, and payment preferences. Once your account is created, you can proceed to set up your seller profile.",
  },

  {
    id: 3,
    question: "How do I manage my inventory and track sales?",
    answer:
      "To join as a seller, click on the “Get Started” button on the homepage. Follow the registration process, providing necessary details such as your business information, contact details, and payment preferences. Once your account is created, you can proceed to set up your seller profile.",
  },
  {
    id: 4,
    question: "What fees are associated with selling on Karpah?",
    answer:
      "To join as a seller, click on the “Get Started” button on the homepage. Follow the registration process, providing necessary details such as your business information, contact details, and payment preferences. Once your account is created, you can proceed to set up your seller profile.",
  },
  {
    id: 5,
    question: "How long does it take to get approved as a seller?",
    answer:
      "To join as a seller, click on the “Get Started” button on the homepage. Follow the registration process, providing necessary details such as your business information, contact details, and payment preferences. Once your account is created, you can proceed to set up your seller profile.",
  },
];
</script>

<template>
  <div
    class="flex faq-section font-montreal flex-col md:flex-row justify-between"
  >
    <div class="md:w-6/12">
      <h2 class="mb-10">
        FAQs
      </h2>
      <div class="text-neutral text-lg">
        Don’t see your question here?
      </div>
      <button class="text-primary text-lg font-mediu flex gap-2">
        <img src="../assets/icons/corner-up-right.svg" alt="" />Get in touch.
      </button>
    </div>
    <div class="flex md:w-6/12 flex-col py-5">
      <div
        v-for="faq in faqs"
        :key="faq.id"
        class="border-b border-neutral-border py-5"
      >
        <div
          class="collapsible-header flex pb-1 items-center justify-between"
          @click="toggleFaq(faq.id)"
        >
          <h1
            class="text-base text-[#1B1C1E] md:text-xl font-medium cursor-pointer"
          >
            {{ faq.question }}
          </h1>
          <span class="">
            <img
              v-if="faqOpen === faq.id"
              src="../assets/icons/close.svg"
              class="svg-black"
              alt="close"
            />
            <img
              v-else
              class="svg-black"
              src="../assets/icons/add.svg"
              alt="open"
            />
          </span>
        </div>
        <p
          v-show="faqOpen === faq.id"
          class="text-sm md:text-base pt-1 font-normal text-[#4D4D4D]"
        >
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq-section {
  h2 {
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: #1b1c1e;
    @include sm {
      font-size: 32px;
      line-height: 130%;
    }
  }
}
.svg-black {
  filter: invert(0%) sepia(4%) saturate(0%) hue-rotate(321deg) brightness(101%)
    contrast(105%);
  cursor: pointer;
}
</style>
