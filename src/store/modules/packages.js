import packagesApi from "@/api/packages";
import { PER_PAGE } from "@/helpers/pagination";

const state = {
  data: {
    objects: [],
  },
  isLoading: false,
  errors: null,
  perPage: PER_PAGE,
};

const mutations = {
  getPackagesStart(state) {
    state.isLoading = true;
    state.errors = null;
  },
  getPackagesSuccess(state, payload) {
    state.isLoading = false;
    state.data = payload;
    state.errors = null;
  },
  getPackagesFailed(state, payload) {
    state.isLoading = false;
    state.errors = payload;
  },
};

const actions = {
  async getPackages(context, payload) {
    try {
      context.commit("getPackagesStart");
      const res = await packagesApi.getPackages(payload);
      context.commit("getPackagesSuccess", res.data);
    } catch (e) {
      context.commit("getPackagesFailed", e);
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
