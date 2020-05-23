<template>
  <div id="home">
   <nav-bar>
     <div slot="center" class="center">购物街</div>
   </nav-bar>
   <tab-control :list="type" @tabclick="tabclick" ref="tabcontrol1" v-show="tabshow" class="tabcontrol1"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3"
     @scroll="contentscroll"
     :pull-up-load="true"
     @pullingUp="loadmore">
   <swiper :banners="swiper" @SwiperImageLoad="imageload"></swiper>
  <recommends :recommends="recommend"></recommends>
  <fashion></fashion>
  <tab-control :list="type" @tabclick="tabclick" ref="tabcontrol2" ></tab-control>
 <goods-list :showgoods="show"></goods-list>
  </scroll>
  <back-top @click.native="backclick" v-show="showbacktop"></back-top>
  </div>
</template>

<script>


import BackTop from 'components/content/backtop/BackTop'
import Scroll from 'components/commom/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import TabControl from 'components/content/tabcontrol/TabControl'

import Fashion from 'views/home/homechild/Fashion'
import Recommends from 'components/commom/recommend/Recommends'
import Swiper from 'components/commom/swiper/Swiper'
import NavBar from 'components/commom/navbar/NavBar'
import {getHomeData,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'


export default {
  name: 'Home',
 
  components: {
   NavBar,
   Swiper,
   Recommends,
   Fashion,
   TabControl,
   GoodsList,
   Scroll,
   BackTop,
   
  },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
      
    },
    deactivated(){
      this.saveY=this.$refs.scroll.scroll.y
      
    },
  data(){
    return{
      isLoad:false,
      saveY:0,
      tabshow:false,
      tabtop:0,
      showbacktop:false,
      currIndex:'pop',
      swiper:[],
      recommend:[],
      type:['流行','新款','精品'],
      goods:{
        'pop':{page:0,list:[]},
        'sell':{page:0,list:[]},
        'new':{page:0,list:[]},
      }
    }
  },
  computed:{
    show(){
      return this.goods[this.currIndex].list 
    },
    
  },
  mounted(){
  const refresh=debounce(this.$refs.scroll.refresh,500)
  this.$bus.$on('homeitemimage',()=>{
     refresh()      
        
  })
  
  },

  created(){
    
    this.getHomeData()
    this.getHomeGoods('pop')
     this.getHomeGoods('sell')
    this.getHomeGoods('new') 
 
  },
  methods:{
      imageload(){
        this.tabtop=this.$refs.tabcontrol2.$el.offsetTop
          
      },

    loadmore(){
     
       this.getHomeGoods(this.currIndex)
        
    },
    contentscroll(position){  

      this.tabshow=-(position.y) > this.tabtop
       this.showbacktop=-(position.y)>1000
        
    },

    backclick(){
          this.$refs.scroll.scrollTo(0,0,500)
          //console.log('111');
          
          
    },
      tabclick(index){
       switch(index){
         case 0:
           this.currIndex='pop'
           break

           case 2:
             this.currIndex='sell'
            break

             case 1:
               this.currIndex='new'
               break
       }
       this.$refs.tabcontrol1.currentIndex=index
       this.$refs.tabcontrol2.currentIndex=index
        
      },

    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.finishPullUp()
          //console.log(this.goods[type].list)
      })
    },

    getHomeData(){
      getHomeData().then(res=>{
       //console.log(res);
        this.swiper=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    }
  }
}
</script>

<style scoped>
#home{
  position: relative;
}
.content{
  overflow: hidden;
  height: 100vh;

}
.tabcontrol1{
  z-index: 99;
}
</style>
