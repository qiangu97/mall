<template>
  <div id="carlist">
   <car-list-item v-for="(item,index) in carlist" :carlistitem="item" :key="index" @click="click(index)"></car-list-item>
  </div>
</template>

<script>
import CarListItem from './CarListItem'

export default {
  name: 'CarList',
  methods:{
    click(index){
      this.$emit('selectItem')
    }
  },

  components: {
      CarListItem
  },
  props:{
      carlist:{
          type:Array,
          
      }
  }
}
</script>

<style scoped>
#carlist{
  padding-bottom: 150px;
}
</style>
