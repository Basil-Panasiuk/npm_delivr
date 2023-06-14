import Vue from "vue";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export const vuetify = new Vuetify({
  rtl: false,
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: {
          lighten1: "#DF6C4F",
          base: "#f87443",
        },
        gray: {
          lighten1: "#edf0f2",
          base: "#909AB0",
          darken1: "#737B8B",
          darken2: "#4f4746",
        },
      },
    },
  },
});
