import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "lib-flexible/flexible.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "./assets/animate.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
