import Vue from "vue";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export const vuetify = new Vuetify({
  rtl: false,
  theme: {
    themes: {
      light: {
        primary: {
          base: "#6C3CEA",
        },
      },
    },
  },
});
