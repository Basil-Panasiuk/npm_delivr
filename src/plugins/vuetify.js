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
          base: "#f87443",
        },
        gray: {
          base: "#909AB0",
        },
      },
    },
  },
});
