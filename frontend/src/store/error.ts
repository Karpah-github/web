import { defineStore } from "pinia";

export const useErrorInfo = defineStore("customError", {
  state: () => {
    return {
      errorMsg: "",
      errorSuccess: false,
    };
  },
  actions: {
    updateErrorMsg(msg: string, success?: boolean) {
      this.errorMsg = msg;
      this.errorSuccess = success ?? false;
      setTimeout(() => {
        this.errorMsg = "";
        this.errorSuccess = false;
      }, 3000);
    },
  },
});
