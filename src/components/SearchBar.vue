<template>
  <div>
    <v-text-field
      outlined
      placeholder="Search all of npm"
      prepend-inner-icon="mdi-magnify"
      hide-details
      v-model="searchValue"
      @input="handleSearchValue"
    ></v-text-field>
  </div>
</template>
<script>
import queryString from "query-string";
import { debounce } from "vue-debounce";
import { mapState } from "vuex";

export default {
  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    loadPackages() {
      this.$store.dispatch("getPackages", this.getRequestsParams());
    },
    getRequestsParams() {
      return queryString.stringify({
        text: this.searchValue,
        size: this.perPage,
      });
    },

    handleSearchValue: debounce(function () {
      this.loadPackages();
    }, 1000),
  },

  computed: {
    ...mapState({
      perPage: (state) => state.packages.perPage,
    }),
  },
};
</script>
<style lang="scss"></style>
