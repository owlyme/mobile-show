<template>
    <div id="popup" v-if="visiable">
        <header>
            <button class="back" @click="closePopup">    
            </button>
            <span>工作内容</span>
        </header>        
        <h2 class="company">{{data.data.company}}</h2>
        <div class="period">{{data.data.period}}</div>
        <p class="content">{{data.data.content}}</p>        
    </div>
</template>

<script>
export default {
    name: "popup",
    props: ['data'],    
    data(){
        return{

        }
    },
    computed:{
        visiable(){
            if( this.data.visiable){
                return this.data.visiable;
            };
            return false;
        }
    },
    methods: {
        closePopup(){
            this.data.visiable= false
        }
    }
    
}
</script>

<style scoped lang="scss">
    #popup{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #222;
        z-index:999999;
        
        header{
            position: relative;
            text-align: center;
            line-height: 40px;
            font-size: 18px;
            height: 40px;
            margin-bottom: 20px;
            background: #222;
            box-shadow: 0 1px 1px rgba(218, 208, 208, 0.14);
            .back{
                position: absolute;
                left: 0;
                top: 5px;
                height: 40px;
                width: 40px;
                border-style: none;
                background: url(../assets/back.png) no-repeat;
            }
        }
        
        .company{
            font-size:0.6rem;
            text-align: center;
        }
        .period{
            text-align: right;
            padding: 0 10px;
        }
        p.content{
            padding: 0 10px;
            font-size: 0.5rem;
            text-indent: 2em;
            line-height: 0.8rem;
            text-align:justify;
        }
    }
</style>

