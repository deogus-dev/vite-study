import { defineStore } from "pinia";

export const useCmnStore = defineStore("cmn", {
  state: () => ({
    cmnVal: "cmnval1",
  }),

  getters: {
    getCmnVal() {
      return this.cmnVal;
    },
  },

  actions: {
    changeCmnVal(val) {
      this.cmnVal = val;
    },
  },
});
