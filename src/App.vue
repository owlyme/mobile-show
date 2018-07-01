<template>
  <div id="app" key="app">
    <swiper :options="swiperOption" class="swiper-box" 
          ref="mySwiper" 
         >
        <swiper-slide>
         <TitlePage v-if=" index == 0" />
        </swiper-slide> 
        <swiper-slide >
         <Profile v-if=" index == 1" />
        </swiper-slide>
        <swiper-slide >
         <Experience v-if=" index == 2" v-on:switchPopup="getPopupData" />
        </swiper-slide>
    </swiper>
    
    <div class="siwper-up">
        <div class="toggle-up">
          <img src="./assets/arrow.png">
        </div>
    </div>
    <Pup v-bind:data="popupData" />
  </div>
</template>

<script>
import TitlePage from './components/titlepage'
export default {
  name: 'app',
  components: {
    TitlePage : () => import('./components/titlepage'),
    Profile : () => import('./components/profile'),
    Experience : () => import('./components/experience'),
    Pup : () => import('./components/pup') 
  },
  data () {
    let self  = this ;
    return {
      currSwiperIndex: 0,
      swiperOption: {
          direction: 'vertical',
          autoPlay: false,
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: true,
          speed: 500,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          on: {
            init: function () {
              /* do something */
            },
            slideChange (){             
             console.log(self.swiper.activeIndex);
              self.currSwiperIndex = self.swiper.activeIndex;
            }
          }
      },
      swiperSlides: [1,2,3],
      bouncing: false,
      popupData: {
        visiable: false
      }
    }
  },
  created(){
    
  },
  mounted(){
    console.log(this.swiper);

    this.interval();
  },
  computed: {
      swiper() {       
        return this.$refs.mySwiper.swiper
      },
      index(){       
        return this.currSwiperIndex
      }
  },

  methods: {
    interval(){      
      setInterval(() => {
          this.bouncing = !this.bouncing
      }, 3000)
    },
    swiperfn(a,b,c,d){
      console.log(a,b,c,d)
    },
    getPopupData(val){
      // this.popupData.visiable = val.visiable
      this.popupData= val;
    }
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #fff;
}
  html,body ,#app{
    position: relative;
    height: 100%;
  }
  body {
    background-image: url(./assets/stardust.png);
  }
  #app{
    position: relative;
  }
  .siwper-up{
    position: absolute;
    width: 100%;
    height: 40px;
    text-align: center;
    z-index: 99;
    bottom: 0;
    img{
      width: 30px;
    }
  }
  
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 0 0 1px #fff;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #12aeef;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  // animate
.slideup-fade-enter-active,
.slidedown-fade-enter-active,
.slideleft-fade-enter-active,
.slideright-fade-enter-active{
  transition: all .5s ease;
}
.slideup-fade-leave-active,
.slidedown-fade-enter-active,
.slideleft-fade-leave-active,
.slideright-fade-leave-active,
.words-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slideup-fade-enter, .slideup-fade-leave-to{
  transform: translateY(500px);
  opacity: 0;
}
.slidedown-fade-enter, .slidedown-fade-leave-to{
  transform: translateY(-500px);
  opacity: 0;
}
.slideleft-fade-enter, .slideleft-fade-leave-to{
  transform: translateX(500px);
  opacity: 0;
}
.slideright-fade-enter, .slideright-fade-leave-to{
  transform: translateX(-500px);
  opacity: 0;
}
.words-enter-active{
  transition: all .5s ease;
}
.words-enter, .words-leave-to{
  transform:translate(-1500px, 500px);
  opacity: 0;
}

@-webkit-keyframes toggleup {
  0% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  74% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  75% {
    -webkit-transform: translate3d(0,-30px,0);
    transform: translate3d(0,-30px,0);
    opacity: 0.6;
  }
  76% {
    opacity: 0;
  }
  80% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  85% {
    -webkit-transform: translate3d(0,-30px,0);
    transform: translate3d(0,-30px,0);
    opacity: 0.6;
  }
  86% {
    opacity: 0.0;
  }
  90% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  100%{
    opacity: 0.0;
  }
}


@keyframes toggleup {
  0% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  74% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  75% {
    -webkit-transform: translate3d(0,-30px,0);
    transform: translate3d(0,-30px,0);
    opacity: 0.6;
  }
  76% {
    opacity: 0;
  }
  80% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  85% {
    -webkit-transform: translate3d(0,-30px,0);
    transform: translate3d(0,-30px,0);
    opacity: 0.6;
  }
  86% {
    opacity: 0.0;
  }
  90% {
    -webkit-transform: translate3d(0,30px,0);
    transform: translate3d(0,30px,0);
    opacity: 0;
  }
  100%{
    opacity: 0.0;
  }
}

.toggle-up {
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: toggleup;
  animation-name: toggleup;
  animation-iteration-count: infinite;
}
</style>
