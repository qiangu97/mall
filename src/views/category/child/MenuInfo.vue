<template>
  <div id="menuinfo">
   <van-grid :column-num="3">
       
  <van-grid-item  v-for="(item,index) in subcategories.list" 
  :key="index" :icon="item.image" :text="item.title" :url="item.link" v-lazy="item.image"/>
  
</van-grid>
  </div>
</template>

<script>


export default {
  name: 'MenuInfo',
  
  props:{
      subcategories:{
          type:Object
      }
  },
  components: {
   
  }
}
</script>

<style scoped>
#menuinfo{
    position:absolute;
    top: 0;
    left: 85px;
}
</style>
