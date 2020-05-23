<template>
 <div class="recommend">
    <van-grid >
  <van-grid-item v-for="item in recommends" :key="item.image923" class="grid">
      <a :href="item.link">
    <van-image :src="item.image" />
    <span>{{item.title}}</span>
      </a>
  </van-grid-item>
  
</van-grid>
 </div>

</template>

<script>
export default {
  name: 'Recommends',
  props:{
      recommends:{
          type:Array,
          default:function(){
              return[]
          }
      }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-grid{
    border-bottom: 15px solid gainsboro;
}
.grid img{
    width: 100%;
}

.grid span{
    color: gray;
    font-size: 15px;
    padding-left: 3px;
    text-align: center;
   
}
 </style>
