<script setup lang="ts">
import { ref } from "vue";

const payoutHistory = ref([
  {
    date: "23 mar, 2023",
    accountNumber: 1298462312,
    status: "processing",
    amount: 12909,
  },
  {
    date: "23 mar, 2023",
    accountNumber: 1298462312,
    status: "paid",
    amount: 12909,
  },
]);
</script>

<template>
  <div class="md:9/12 lg:w-8/12">
    <h5 class="header6 text-xl pb-8">Payout</h5>
    <div class="mb-3">
      <h6 class="text-md">Payout information</h6>
      <p class="font-light text-neutral text-sm">
        Add default payout bank details
      </p>
    </div>
    <div
      class="mb-3 border-dashed rounded-sm border items-center border-[#E8E8E8] p-3 flex justify-between"
    >
      <div class="flex items-center gap-2">
        <div
          class="w-12 h-12 bg-neutral-bg rounded-sm flex justify-center items-center"
        >
          <img
            class="svg-content-neutral"
            src="../../assets/icons/bank.svg"
            alt=""
          />
        </div>
        <div class="font-light">
          <h6 class="text-dark">Bank account</h6>
          <p class="text-neutral text-sm">Connect your bank account</p>
        </div>
      </div>
      <button class="btn-secondary p-2">Connect</button>
    </div>
    <div class="payout-table py-6">
      <div class="mb-2">
        <h6 class="text-md">Payout History</h6>
        <p class="font-light text-neutral text-sm">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div class="table-container">
        <table class="table-auto w-full">
          <thead class="table__header">
            <tr
              class="table__row uppercase text-left text-neutral bg-neutral-bg"
            >
              <th class="font-medium text-sm p-2 text-left">Date</th>
              <th class="font-medium text-sm py-2 text-left">Bank account</th>
              <th class="font-medium text-sm py-2 text-left">status</th>
              <th class="font-medium text-sm py-2 text-left">amount</th>
            </tr>
            <br />
          </thead>

          <tbody>
            <tr
              class="table__row text-[#333333] hover:bg-neutral-bg"
              v-for="(payout, index) in payoutHistory"
              :key="index"
            >
              <td class="table__date">
                <div class="flex flex-col w-40 lg:w-full">
                  <p class="text-sm p-2">{{ payout.date }}</p>
                </div>
              </td>
              <td class="table__id py-3">
                <div class="flex items-center gap-2">
                  <div
                    class="w-10 h-10 bg-neutral-bg rounded-full flex items-center justify-center"
                  >
                    <img src="../../assets/icons/bank.svg" alt="" />
                  </div>
                  <p class="text-sm">
                    {{ payout.accountNumber }}
                  </p>
                </div>
              </td>
              <td class="table__status text-center">
                <div class="flex items-center gap-2 w-32 lg:w-full">
                  <div
                    class="w-2 h-2 rounded-full"
                    :class="[
                      { 'bg-[#FA9E33]': payout.status === 'processing' },
                      { 'bg-[#3BB75E]': payout.status === 'paid' },
                      { 'bg-[#E72B3B]': payout.status === 'error' },
                    ]"
                  ></div>
                  <p class="uppercase text-[#333333] text-sm tracking-widest">
                    {{ payout.status }}
                  </p>
                </div>
              </td>
              <td class="table__price">
                <div class="w-40 lg:w-full pr-4">
                  <p class="text-sm py-2">₦‎{{ payout.amount }}.00</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.svg-content-neutral {
  filter: invert(33%) sepia(5%) saturate(0%) hue-rotate(73deg) brightness(86%)
    contrast(95%);
}
</style>
