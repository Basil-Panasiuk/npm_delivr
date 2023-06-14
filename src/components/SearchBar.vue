<template>
  <div>
    <v-text-field
      outlined
      placeholder="Search all of npm"
      prepend-inner-icon="mdi-magnify"
      hide-details
      :value="searchValue"
      @input="handleSearchValue"
    ></v-text-field>
  </div>
</template>
<script>
import queryString from "query-string";
import { debounce } from "vue-debounce";
import { mapGetters, mapState } from "vuex";
import { DELAY } from "@/helpers/debounce";

export default {
  methods: {
    loadPackages(from = 0) {
      this.$store.dispatch("getPackages", this.getRequestParams(from));
    },
    getRequestParams(from) {
      return queryString.stringify({
        text: this.searchValue,
        size: this.perPage,
        from,
      });
    },

    handleSearchValue: debounce(function (value) {
      this.$store.commit("setSearchValue", value);

      if (this.page > 1) {
        this.$store.commit("setPage", 1);
      } else {
        this.loadPackages();
      }
    }, DELAY),
  },

  computed: {
    ...mapState({
      perPage: (state) => state.packages.perPage,
      searchValue: (state) => state.packages.searchValue,
      page: (state) => state.packages.page,
    }),
    ...mapGetters({
      startFromIndex: "startFromIndex",
    }),
  },

  watch: {
    page() {
      this.loadPackages(this.startFromIndex);
    },
  },
};
</script>
<style lang="scss"></style>
