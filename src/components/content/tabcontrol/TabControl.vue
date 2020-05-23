
 <template>
 <div class="tabcontrol">
  <div v-for="(item,index) in list" class="tabtext" :class="{active:index===currentIndex}"
  :key="index" @click="tabclick(index)">
    <span>{{item}} </span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
      list:{
          type:Array
      }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
      tabclick(index){
        this.currentIndex= index;
        this.$emit('tabclick',index)
      }
  }

  
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tabcontrol{
  display: flex;
  color:gray;
  background-color: #fff;
  position: sticky;
  top: 44px;
  z-index: 99;
}
.tabcontrol .tabtext{
  flex: 1;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 17px;
}

.active{
  color: pink;
}
.active span{
  border-bottom: 3px solid pink;
  
}

</style>












<!--<template>
  <div id="tabcontrol">
   <van-tabs  @click="tabclick" class="van">
  <van-tab v-for="(item,index) in list" :key="index" :title="item" @click="tabclick(index)"
  :class="{active: currindex === index}">
  </van-tab>
  
</van-tabs>
      
  </div>
</template>

<script>


export default {
  name: 'TabControl',
  data(){
     return{
         currindex:0
     }
  },
  methods:{
      tabclick(index){
          this.currindex=index
          this.$emit('tabclick',index)
      }
  },
  props:{
      list:{
          type:Array
      }

  },
  components: {
   
  }
}
</script>

<style scoped>
.van-tab {
    font-size: 15px;
    font-weight: 600;
}
.van{
    z-index: 99;
}
.van-tab--active {
    border-bottom: 3px solid red;
    color: red;
    font-weight: 500;
}

</style>
 !-->