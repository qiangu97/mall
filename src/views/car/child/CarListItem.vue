<template>
  <div id="carlistitem" class="carlistitem">
      <div class="selected">
         <van-checkbox icon-size="24px" checked-color="red"  v-model="carlistitem.checked" @click="checkedclick"></van-checkbox>
      </div>

    <div class="card"> 
    <van-card
  :num='carlistitem.count'
  :price='carlistitem.highNowPrice'
  :desc='carlistitem.desc'
  :title='carlistitem.title'
  :thumb="carlistitem.img"
/></div> 
  </div>
</template>

<script>


export default {
  name: 'CarListItem',
  components: {
   
  },
  
  methods:{
    checkedclick(){ 
    }
  },
  props:{
      carlistitem:{
          type:Object
      }
  }
}
</script>

<style scoped>
.carlistitem{
  position: relative;
}

.selected{
   width:100%;
   position:absolute; 
    top: 75px; 
    z-index: 99;
}
.card{
    border-bottom:2px solid beige;
    background-color: #fff;
}
.van-card__title {
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.van-card__desc {
    padding-top: 3px;
}
.van-card__price-currency{
    display: none;
}
.van-card__price {
    color: red;
}

</style>
