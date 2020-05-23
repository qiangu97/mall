<template>
    
 <div class="goodslistitems"  @click="itemclick">
   <img :src="showinfo" @load="imageloaditem" v-lazy="showinfo"/>
  <div class="text">
      <div class="title">{{goodslistitems.title}}</div>
      <div class="center">
      <span class="price"><img src="~assets/icon/price.svg" alt="">{{goodslistitems.price}}</span>
      <span class="icon"><img src="~assets/icon/love.svg" alt="">{{goodslistitems.cfav}}</span>
      </div>
  </div> 

  
 

  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
    computed:{
        showinfo(){
            return this.goodslistitems.image||this.goodslistitems.show.img

        }   
        },
  methods:{
        imageloaditem(){
            if(this.$route.path.indexOf('/home')){
                this.$bus.$emit('homeitemimage')
            }else if(this.$route.path.indexOf('/detail')){
                     this.$bus.$emit('detailitemimage')
            }
            
        },
        itemclick(){
             this.$router.push({
                 path:'/detail',
                 query:{
                     iid:this.goodslistitems.iid
                 }
             })
                 
                
             
             
             
            //console.log(this.goodslistitems.iid)
        }    
  },
   
  props:{
      goodslistitems:{
          type:Object,
          default(){
              return{}
          }
      },
      /* goods:{
          type:Object
      } */
  },
  


  
  
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodslistitems{
    
    width: 48%;
}


.goodslistitems img{
    width: 100%;
    
}

.goodslistitems .title{
    font-size: 13px;
    color: gray;
    /*让多余的文字省略成... */ 
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    
}
.goodslistitems .text .price img{
    height: 10px;
    width: 10px;
   
}
.goodslistitems .text .price{
    color:palevioletred;
    padding-right:10px; 
}
.goodslistitems .text .icon{
   color: gray; 
}
.goodslistitems .text .icon img{
    height: 10px;
    width: 10px;
}
</style>
