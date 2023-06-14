import packagesApi from "@/api/packages";
import { PER_PAGE } from "@/helpers/pagination";

const state = {
  data: null,
  isLoading: false,
  errors: null,
  perPage: PER_PAGE,
  searchValue: "",
  page: 1,
};

const mutations = {
  setPage(state, payload) {
    state.page = payload;
  },
  setSearchValue(state, payload) {
    state.searchValue = payload;
  },
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

const getters = {
  packagesList(state) {
    return (state.data?.objects || []).map((item) => item.package);
  },
  totalPages(state) {
    return Math.ceil((state.data?.total || 0) / state.perPage);
  },
  startFromIndex(state) {
    return (state.page - 1) * state.perPage;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
