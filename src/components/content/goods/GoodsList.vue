<template>
  <div id="goodslist">
   <goods-list-item v-for="(item,index) in showgoods" :key="index" :goodslistitems="item"></goods-list-item>
   <div class="refresh">下拉加载更多...</div>
  </div>
</template>

<script>

import GoodsListItem from'./GoodsListItem'
export default {
  name: 'GoodsList',
  props:{
      showgoods:{
          type:Array
      }
  },

  components: {
   GoodsListItem
  }
}
</script>

<style scoped>
 #goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 70px;
} 
.refresh{
    opacity: 0.6;
    color: gray;
    bottom: 50px;
    position: absolute;
}

</style>
