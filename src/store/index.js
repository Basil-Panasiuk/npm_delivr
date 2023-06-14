import Vue from "vue";
import Vuex from "vuex";
import packages from "@/store/modules/packages.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    packages,
  },
});
