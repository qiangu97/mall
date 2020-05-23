<template>
  <div id="detailswiper">
   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in swiperlist" :key="item">
    
      <img :src="item" alt="" srcset="" >

    

  </van-swipe-item>
   </van-swipe>
  </div>
</template>

<script>


export default {
  name: 'DetailSwiper',
  components: {
   
  },
  props:{
      swiperlist:{
            type:Array
      }
  }
}
</script>

<style scoped>
.my-swipe{
  height: 200px;
}

.my-swipe img{
  height: 200px;
  width: 100%;
}
</style>
