<template>
    <nav-bar class="navbar">
        
        <div slot="left" class="left" @click="backClick" >
            <img src="~assets/img/detail/back.svg" >
        </div>
       <div slot="center" class="title" >
           <div v-for="(item,index) in titles" :key="index" class="center-item" 
           :class="{active:index===currentIndex}"
           @click="titleClick(index)">{{item}}</div>
       </div>
       
    </nav-bar>
</template>

<script>
import NavBar from 'components/commom/navbar/NavBar'
export default {
  name: 'DetailNav',
  components:{
    NavBar
  },
  props:{
      titles:{
         type: Array,
        default: () => {
          return ['商品', '参数', '评论', '推荐']
        }
      },
      currentIndex:{
          type:Number,
          default:0
      }
  },
  data(){
      return{ 
          
      }
      
  },
  methods:{
      titleClick(index){
          //this.currentIndex=index
          this.$emit('indexclick',index)      
      },
      backClick(){
          this.$router.back()
      }
  }

}
</script>

<style scoped>
.navbar{
    background-color: #fff;
    border-bottom: 4px solid whitesmoke;
    position: sticky;
    top: 0;
    
}
.title{
    display: flex;
   
    
}
.center-item{
    color: gray;
    font-size: 13px;
    flex:1;
    align-content: center;
}
.left img{
    padding-left: 5px;
    height: 17px;
    line-height: 17px;
}
.active{
    color: pink;
}
</style>
