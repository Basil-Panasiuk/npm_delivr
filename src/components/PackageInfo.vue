<template>
  <v-dialog max-width="620" v-model="isShowed">
    <v-card flat class="px-10 py-8" v-if="selectedPackage">
      <div class="d-flex justify-space-between mb-4">
        <div class="d-flex align-center flex-wrap">
          <h2 class="font-weight-black me-3">
            {{ selectedPackage.name }}
          </h2>
          <v-card
            flat
            class="py-1 px-3 white--text f-12"
            width="max-content"
            color="gray"
          >
            Version {{ selectedPackage.version }}
          </v-card>
        </div>

        <v-btn icon @click="isShowed = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <p class="gray--text text--darken-2">
        {{ selectedPackage?.description }}
      </p>
      <div v-if="selectedPackage.author" class="mb-4">
        <span class="gray--text text--darken-2">Author: </span>
        <span class="font-weight-bold">{{ selectedPackage.author.name }}</span>
      </div>
      <div v-if="repository" class="mb-4">
        <span class="gray--text text--darken-2">Repository: </span>
        <a class="font-weight-bold" target="_blank" :href="repository">
          <span class="primary--text">{{ repository }}</span>
        </a>
      </div>
      <div class="d-flex flex-wrap align-center">
        <v-card
          v-for="word in selectedPackage.keywords"
          :key="uniqueId()"
          flat
          class="py-1 px-3 gray--text text--darken-2 f-12 me-2 mb-2"
          width="max-content"
          color="gray lighten-1"
        >
          {{ word }}
        </v-card>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState } from "vuex";
import createUID from "create-unique-id";
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    uniqueId() {
      return createUID(22);
    },
  },

  computed: {
    ...mapState({
      selectedPackage: (state) => state.packages.selectedPackage,
    }),
    isShowed: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    repository() {
      return this.selectedPackage?.links?.repository;
    },
  },
};
</script>
<style lang="scss"></style>
