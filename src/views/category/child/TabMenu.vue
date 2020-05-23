<template>
  <div id="tabmenu">
      <van-sidebar v-model="activeKey">
  <van-sidebar-item   v-for="(item,index) in categories" :key="index" :title="item.title" @click="selectItem" />
 
</van-sidebar>
  </div>
</template>

<script>


export default {
  name: 'TabMenu',
  methods:{
       selectItem(index){
           this.$emit('selectItem',index)
       }
  },
  data(){
      return{
            activeKey:null
      }
  },
  props:{
      categories:{
          type:Array
      },
      
  },
 
}
</script>

<style scoped>
.van-sidebar-item {
    color: grey;
}
.van-sidebar{
    padding-bottom:80px ;
}
</style>
