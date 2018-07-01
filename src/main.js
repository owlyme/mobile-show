import Vue from 'vue'
import App from './App.vue'
import "lib-flexible/flexible.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import 'swiper/dist/css/swiper.css';
import "./assets/animate.css";


  Vue.prototype.popup = function (data) {
    this.$refs['app'];
    console.log(this)
	};




Vue.use(VueAwesomeSwiper /* { default global options } */);
new Vue({
  el: '#app',
  render: h => h(App)
})

