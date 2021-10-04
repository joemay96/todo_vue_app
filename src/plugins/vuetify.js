import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    //changing the themecolors
    /*primary: "#9652ff",
    success: "#3cd1c2",
    info: "#ffaa2c",
    error: "#f83e70",
    */
    themes: {
      light: {
        primary: "#9652ff",
        success: "#3cd1c2",
        info: "#ffaa2c",
        error: "#f83e70",
        /*primary: "#3f51b5",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",*/
      },
    },
  },
});
