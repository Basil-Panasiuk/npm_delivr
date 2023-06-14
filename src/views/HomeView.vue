<template>
  <div class="home__wrapper d-flex flex-column justify-space-between">
    <v-card class="mx-auto pa-10" max-width="900" width="100%" flat>
      <search-bar class="mb-10" />
      <packages-table />
    </v-card>
    <footer-bar class="primary lighten-1" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import PackagesTable from "@/components/PackagesTable.vue";
import FooterBar from "@/components/shared/FooterBar.vue";

export default {
  components: { FooterBar, SearchBar, PackagesTable },
};
</script>
<style lang="scss">
.home {
  &__wrapper {
    min-height: 100vh;
  }
}
</style>
