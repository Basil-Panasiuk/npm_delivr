<template>
  <div class="table__wrapper">
    <v-data-table
      hide-default-footer
      :headers="headers"
      :items="packagesList"
      :items-per-page="perPage"
      :loading="isLoading"
      :mobile-breakpoint="0"
    >
      <template v-slot:loading>
        <div>loading...</div>
      </template>
      <template v-slot:no-data v-if="!packagesList.length">
        <div v-if="searchValue" class="text-center">No results</div>
        <h2 v-else class="black--text text-center py-10">
          enter the name of the package in the search field
        </h2>
      </template>
      <template v-slot:body="{ items }" v-else>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.name"
            @click="() => onRowClick(item)"
            class="pointer"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.version }}</td>
            <td>{{ item.author?.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    <v-divider></v-divider>
    <div class="d-flex justify-center py-2">
      <v-card flat max-width="50%" width="100%">
        <v-pagination
          :value="page"
          @input="onPageChange"
          color="primary"
          :length="totalPages"
        ></v-pagination>
      </v-card>
    </div>
    <package-info v-model="isDetailInfo" />
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import PackageInfo from "@/components/PackageInfo.vue";
export default {
  components: { PackageInfo },
  data() {
    return {
      isDetailInfo: false,
      headers: [
        { text: "Name", sortable: false },
        { text: "Version", sortable: false },
        { text: "Author", sortable: false },
      ],
    };
  },

  methods: {
    onPageChange(value) {
      this.$store.commit("setPage", value);
    },
    onRowClick(pack) {
      this.$store.commit("selectPackage", pack);
      this.isDetailInfo = true;
    },
  },

  computed: {
    ...mapState({
      perPage: (state) => state.packages.perPage,
      isLoading: (state) => state.packages.isLoading,
      searchValue: (state) => state.packages.searchValue,
      page: (state) => state.packages.page,
    }),
    ...mapGetters({
      packagesList: "packagesList",
      totalPages: "totalPages",
    }),
  },
};
</script>
<style lang="scss">
.table {
  &__wrapper {
    border: 1px solid var(--v-gray-base);
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
