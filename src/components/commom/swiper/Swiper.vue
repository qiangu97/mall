<template>
 <div class="swiper">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in banners" :key="item.image923">
    <a :href="item.link">
      <img :src="item.image" alt="" srcset="" @load="imageLoad">

    </a>

  </van-swipe-item>
  
</van-swipe>

 </div>


</template>

<script>


export default {
  name: 'Swiper',
  
  props:{
      banners:{
          type:Array,
          default:function(){
              return[]
          }
      }
  },
  data(){
      return{
          isLoad:false
      }
  },
  methods:{
      imageLoad(){
         if(!this.isLoad){
              this.$emit("SwiperImageLoad")
              this.isLoad=true
              //console.log('1');
              
         }
      }
  }
      
  
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe{
  height: 200px;
}

.my-swipe img{
  height: 200px;
  width: 100%;
}
</style>
