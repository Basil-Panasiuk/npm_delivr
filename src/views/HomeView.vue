<template>
  <v-card class="mx-auto pa-10" max-width="900" width="100%" flat>
    <search-bar class="mb-10" />
    <packages-table />
  </v-card>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import PackagesTable from "@/components/PackagesTable.vue";

export default {
  components: { SearchBar, PackagesTable },
};
</script>
