<template>
    <section class="page" >
        <header class="header">
            <transition  name="slidedown-fade"  tag="div" 
            v-on:after-enter="stepNext" appear>
                <h2>
                    <transition  name="slideleft-fade" tag="span" 
                    v-on:after-enter="stepNext" appear v-if="_step[0]">
                        <span class="square-point"></span>
                    </transition>
                    <span>个人信息</span>
                    <transition  name="slideright-fade" tag="span" 
                    v-on:after-enter="addWord(words, 0.02)" appear v-if="_step[0]">
                        <span class="square-point"></span>
                    </transition>
                </h2> 
            </transition>
        </header>

        <div class="skill">
            <h2 v-if="_step[1]">技能特长</h2>
            <transition-group   name="slideDown" tag="div" appear 
            v-if="_step[1]" v-on:after-enter="stepNext"> 
                <div class="row" v-for="(skill, index) in skills" :key="'skill'+index">
                    <div class="span2 type">{{skill.type}}</div>
                    <div class="span6 level">
                        <em v-bind:style="{width: skill.level}"></em>
                    </div>
                    <div class="span2 evaluate">{{skill.evaluate}}</div>
                </div>
            </transition-group>            
        </div>      
        <div class="profile">
            <transition-group  name="bounceUp" tag="p" appear v-if="_step[1]"
            v-on:after-enter="stepNext">
                <span v-for="(word,index) in _wordsList" :key="'word'+index">
                    {{word}}
                </span>
            </transition-group>
        </div>
        
    </section>
</template>

<script>
export default {
  name: 'page', 
  data () {
    return {
      step: [],
      words:null,
      wordsList: [],
      skills: [
          {
            type: 'JS',
            level: '90%',
            evaluate: "精通"
          },
          {
            type: 'CSS',
            level: '90%',
            evaluate: "精通"
          },
          {
            type: 'HTML5',
            level: '90%',
            evaluate: "精通"
          },
          {
            type: 'VUE',
            level: '90%',
            evaluate: "精通"
          },
          {
            type: 'NODE',
            level: '60%',
            evaluate: "熟悉"
          },
          {
            type: 'Express',
            level: '50%',
            evaluate: "熟悉"
          }
      ]
    }
  },
  created(){
      
  },
  mounted(){
   this.words ='你好，我是徐远。从事前段开发工作快三年，工作期间与UI设计师协作，分析并给出最优的web、移动界面前端结构解决方案和效果实现； 负责前端界面的前端构建，各类交互设计与实现； 对完成的页面进行维护和对前端性能做相应的优化； 熟悉当前互联网的各种流行应用，在交互开发、用户体验等方面有自己的见解，能主动根据业务需要，提出合理的交互方案。'
  },
  computed:{
      _step(){          
          return this.step
      },
      _wordsList(){          
          return this.wordsList
      }
  },
  methods: {
    stepNext(){
        this.step.push(true)
    },
    addWord(words, time){
        let startIndex = 0
        let len = words.length;
        let recursion = (startIndex) =>{
            let timer = setTimeout(() => {
                if (startIndex >= len) {
                    clearTimeout(timer);
                    return;
                }
                this.wordsList.push(words[startIndex])
                recursion(startIndex+1)
            }, time*1000);
        };
        recursion(startIndex);
    }
  }
}
</script>

<style scoped lang="scss">
    $width1: 4rem;
    $color1: goldenrod;

    $fontsize1: 0.7rem; 
    $fontsize2: 1.5rem;

    $pointsize: 0.3rem;

    .page{
        width: 100%;
        height: 100%;
        text-align: center;
        .header{
            margin: 20px 0;
            height: 3rem;
            h2{
                height: 3rem;
                line-height: 3rem;
                font-size: 0.8rem;
                background-image: url(../assets/header-bg.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                .square-point{
                    display: inline-block;
                    border: 0.2rem solid #fff;
                    margin: auto 20px;
                    -webkit-transform-origin: center;
                    transform-origin: center;
                    -webkit-transform: rotate3d(0,0,1,-45deg);
                    transform: rotate3d(0,0,1,-45deg);
                }
            }

        }

        .profile {
            text-align: left;
            letter-spacing: 0.2em;           
            p{  
                padding: 0 5px;
                margin-top: 10px;
                font-size: 0.5rem;
                color: #d44d4d;
                overflow: hidden;
                span{
                    width:  0.5rem;
                    float:left;
                }
                span:first-child{
                    margin-left: 2em;
                } 
            }
        }
                   
        .row{
            font-size: 0.4rem;
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
            
            .span1 {
                width: 10%;
            }
            .span2 {
                width: 20%;
            }
            .span6 {
                width: 60%;
            }
            .type{   
                word-wrap: break-word;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .level{
                position: relative;
                height: 8px;
                border-radius: 4px;
                background-color: #eee;
                overflow: hidden;
                em{
                    position: absolute;
                    width: 0;
                    left: 0;
                    top: 0;
                    display: inline-block;
                    height: 8px;
                    background-color: #00b88d;
                    border-radius: 4px;
                    overflow: hidden;
                    transition: width 1s;
                }
            }
            .evaluate{
                display: inline-block;
            }
        }

        
    }


</style>