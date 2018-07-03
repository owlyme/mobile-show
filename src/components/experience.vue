<template>
    <section class="page" >
        <header class="header">
            <transition  name="slidedown-fade"  tag="div" 
            v-on:after-enter="stepNext"
             appear>
                <h2>
                    <transition  name="slideleft-fade" tag="span" 
                    v-on:after-enter="stepNext" appear v-if="_step[0]">
                        <span class="square-point"></span>
                    </transition>
                    <span>工作经验及项目</span>
                    <transition  name="slideright-fade" tag="span" 
                    v-on:after-enter="addWord(words, 0.02)" appear v-if="_step[0]">
                        <span class="square-point"></span>
                    </transition>
                </h2> 
            </transition>
        </header>  
        <transition v-on:after-enter="stepNext" appear name="fade">      
            <div class="companies"  v-if="_step[1]">
                <div class="row" v-for="(item, index) in experience" :key="'experience'+index">
                    <div class="company">公司名称:{{item.company}}</div>
                    <div class="period">工作时间:{{item.period}}</div>
                    <div class="content" v-on:click="setPopupData(item)">
                        <a href="#"> >>>详情介绍 </a>
                    </div>
                </div>
            </div>
        </transition>
        <transition  appear name="fade"> 
            <div class="project" v-if="_step[2]">
                <div class="card" v-for="(item, index) in projects" :key="'project'+index">
                    <a :href="item.link">
                        <div class="icon"><img :src="item.icon" /></div>
                        <div class="name">                        
                            {{item.name}}                        
                        </div>
                    </a>
                </div>
            </div>
        </transition> 
    </section>
</template>

<script>

export default {
  name: 'page',
  data () {       
    return {
      step: [],
      words:'你好，我是徐远。从事前段开发工作快三年，工作期间与UI设计师协作，分析并给出最优的web、移动界面前端结构解决方案和效果实现； 负责前端界面的前端构建，各类交互设计与实现； 对完成的页面进行维护和对前端性能做相应的优化； 熟悉当前互联网的各种流行应用，在交互开发、用户体验等方面有自己的见解，能主动根据业务需要，提出合理的交互方案。',
      wordsList: [],
      experience: [],
      projects: [
        {
            icon: 'http://s1.znuart.cn/favicon.ico',
            link: "http://znuart.cn/",
            name: "全国少儿绘画大赛"
        },
        {
            icon: 'http://ii.ysintelligent.com/static/yishang.ico',
            link: "http://ii.ysintelligent.com/",
            name: "衣依"
        }
      ]
    }
  },
  created(){
    import('../../static/workExprience.json')
        .then( json=> {
        this.experience = json.expr;
    });
  },
  mounted(){
      
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
    },
    setPopupData(val){
        this.$emit('switchPopup',{visiable: true,data:val})
    }
  }
}
</script>

<style scoped lang="scss">
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
        .companies{
            padding: 0 5px ;
        }
        .row {
            text-align: left;
            letter-spacing: 0.2em;  
            padding: 5px ;
            margin: 10px 0;
            border: 1px solid;
            background: rgba(17, 17, 17, 0.3);
            border-radius: 5px;
            box-shadow: 0px 5px 16px rgba(255, 255, 255, 0.2);           
            .company{
                font-size: 20px;
               
                line-height: 1rem;
            }
            .period{
                font-size: 18px;
            }
            .content{
                font-size: 18px;
            }
        }
        .project{
            overflow: hidden;
            margin: 69px 0;
            .card{
                width: 50%;
                float: left;
            }
            img{
                width: 2rem;
            }
        }       
    
        
    }


</style>