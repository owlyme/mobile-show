<template>
    <div class="titlepage" >
        <div class="job">
            <transition  name="slideleft-fade"  tag="div" appear>
                <div class="line" ></div>
            </transition>
            <transition  name="fade" tag="div" appear>
            <div class="duty">WEB前端开发</div>
            </transition>
            <transition  name="slideright-fade" tag="div" appear>
                <div class="line" ></div>
            </transition>
        </div>
        <div class="avatar">
            <transition  name="zoom" tag="div" appear>
                <img src="../assets/logo.png">
            </transition>
        </div>
        <div class="title">
            <transition-group name="slideup-fade" tag="p" appear>
                <h1 key="s1">个人简历</h1>
                <h2 key="s2">RESUME</h2>
                <p key="s3">生活还有代码和远方</p>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
  name: 'titlepage',
 
  data () {
    return {
      
    }
  },
  created(){
    
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
    $width1: 4rem;
    $color1: goldenrod;

    $fontsize1: 0.7rem; 
    $fontsize2: 1.5rem;

    $pointsize: 0.3rem;

    .titlepage{
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content:  center;

        .job{
            margin: 20px 0;
            .line{
                display: inline-block;
                height: 2px;
                width: 50%;
                border: 1px solid #fff;
            }
            .duty {
                font-size: $fontsize1;
            }
        }

        .avatar {
            img{
                width: $width1;
                height: $width1;
                border: 5px solid $color1;
                padding: 5px;
                border-radius: 30px;
            }
        }
        .points { 
            height: 3rem;           
            .point{
                margin: 10px auto;
                width:  $pointsize;
                height:  $pointsize;
                border-radius: $pointsize;
                border: 2px solid #fff;
            }
        }

        .title {
            letter-spacing: 0.2em;
            h1{
                font-size: $fontsize2;
            }
            h2 {
                text-indent: 1em;
                letter-spacing: 1em;
            }
            p{
                margin-top: 10px;
                font-size: 0.5rem;
                color: #d44d4d;
            }
        }
    }

    
</style>