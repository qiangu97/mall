<template>
  <div class="bottom-menu">
  <van-submit-bar :price="price*100" button-text="提交订单" @submit="onSubmit">
    
  <van-checkbox v-model="checked" @click="allclick">全选{{count}}</van-checkbox>
  
</van-submit-bar>
  </div>
</template>

<script>
import { Toast } from 'vant';
	export default {
    name: "BottomBar",
    computed:{
      checked(){
          if(this.$store.getters.carlist.length===0) return false
          return  !this.$store.getters.carlist.find(item=> !item.checked)
      },
      price(){
          return this.$store.getters.carlist.filter(item=>{
            return item.checked
          }).reduce((PreValue,item)=>{
                return PreValue + item.count * item.highNowPrice
          },0)
      },

      count(){
        const count=[]
            for(let item of this.$store.getters.carlist){
              if(item.checked){
                count.push(item)               
              }             
            }
        return count.length
        console.log(count);
        
      }
    },
    methods:{
      onSubmit(){
        if(this.count===0)
        Toast.fail('请选择商品')
        
      },
    
    allclick(){
      if(this.checked){
        this.$store.getters.carlist.forEach(item=>item.checked=false)
      }else{
       this.$store.getters.carlist.forEach(item=>item.checked=true) 
      }
      
    },

    },

	}
</script>

<style scoped>
 .van-submit-bar {
    bottom: 44px;
    background: #fff;
 }
</style>
