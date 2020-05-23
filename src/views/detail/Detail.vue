<template>
  <div id="detail" class="detail">
   <detail-nav @indexclick="indexclick"  :current-index="currentIndex"></detail-nav>
   <scroll class="content" ref="scroll" @scroll="contentscroll" :pull-up-load="true">
   <detail-swiper :swiperlist="list.topImages" ref="swiper"></detail-swiper>
   <detail-text :goods="goods" ></detail-text>
   <detail-shop-info :shop="shop" ></detail-shop-info>
   <detail-goods-info :detailInfo="detailInfo" @detailimage="detailimage"></detail-goods-info>
   <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
   <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
    <goods-list :showgoods="recommendList" ref="recommend"> </goods-list>
   </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
   <back-top @click.native="backclick" v-show="showbacktop"  ></back-top>
  </div>
</template>

<script>
import { Toast } from 'vant';

import {debounce} from 'common/utils'

import BackTop from 'components/content/backtop/BackTop'
import Scroll from 'components/commom/scroll/Scroll'

import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from'./child/DetailBottomBar'
import DetailCommentInfo from './child/DetailCommentInfo'
import DetailParamInfo from './child/DetailParamInfo'
import DetailGoodsInfo from './child/DetailGoodsInfo'
import DetailShopInfo from './child/DetailShopInfo'
import DetailText from './child/DetailText'
import DetailSwiper from './child/DetailSwiper'
import DetailNav from './child/DetailNav'
import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'


export default {
  name: 'Detail',
  data(){
    return{
        showbacktop:false,
        tabshow:false,
        tabtop:0,
        iid:null,
        list:{},
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendList:[],
        themeTops:[],
        
        currentIndex:0,
    }
  },
  mounted(){
    //this.contentscroll()
     const refresh=debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('detailitemimage',()=>{
     refresh()      
          
       
    
  })
  },
 
  methods:{
    addToCart(){
        const carinfo={}
          carinfo.desc=this.goods.desc
          carinfo.title=this.goods.title
          carinfo.highNowPrice=this.list.highNowPrice
          carinfo.oldPrice=this.goods.oldPrice
          carinfo.img=this.list.topImages[0]
          carinfo.iid=this.iid

          this.$store.dispatch('addcar',carinfo).then(res=>{
              Toast.success(res)
          })

    },

    detailimage(){
       let refresh=debounce(this.$refs.scroll.refresh,100)
       refresh()
        this.getOffsetTops()
    },

    getOffsetTops() {
		    this.themeTops = []
        this.themeTops.push(this.$refs.swiper.$el.offsetTop)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
       // console.log(this.themeTops);
        
        
      },
    indexclick(index){ 
       this.$refs.scroll.scrollTo(0,-this.themeTops[index],200)  
       
       
    },
    backclick(){
          this.$refs.scroll.scrollTo(0,0,500)      
    },
    
    contentscroll(position){
      //console.log(position);
       this.showbacktop=-(position.y)>1000 

       this.listenScrollTheme(-position.y)
    },
    listenScrollTheme(position){
        for(let i=0;i<this.themeTops.length;i++){
          if(position >= this.themeTops[i] && position < this.themeTops[i+1]){
              if(this.currentIndex!==i){
                this.currentIndex=i
              }
              break
          }
        }
    },
  },
  components: {
   DetailNav,
   DetailSwiper,
   DetailText,
   DetailShopInfo,
   Scroll,
   DetailGoodsInfo,
   DetailParamInfo,
   DetailCommentInfo,
   GoodsList,
   BackTop,
   DetailBottomBar
   
   
  },
  created(){  
    this.iid=this.$route.query.iid
    const iid=this.iid
   getDetailData(iid).then(res=>{
     
     this.list=res.result.itemInfo

     const data=res.result
     this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    
    
     this.shop=new Shop(data.shopInfo)

     this.detailInfo = data.detailInfo
    
     //this.skuInfo=data.skuInfo

     this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

     if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }    
   }),

  
    getRecommend().then((res,err)=>{
        if(err) return
           this.recommendList = res.data.list
           //console.log(this.recommendList);   
            })
          
    
},
  
}
   

  

</script>

<style scoped>
#detail{
  
}

.detail{
  background-color: #fff;
  
  height: 100vh;
}
.content{
height: 100vh;


}
</style>
