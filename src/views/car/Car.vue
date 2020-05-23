<template>
  <div id="car">
  <nav-bar>
    <div slot="center">购物车({{length}})</div>
  </nav-bar>
    <scroll class="content">
  <car-list :carlist="carlist"></car-list>
    </scroll>
  <bottom-bar ></bottom-bar>
  </div>
</template>

<script> 
import Scroll from 'components/commom/scroll/Scroll'

import BottomBar from './child/BottomBar'
import NavBar from 'components/commom/navbar/NavBar'
import CarList from './child/CarList'
import {mapGetters} from 'vuex'
export default {
  name: 'Car',
  components: {
   NavBar,
   CarList,
   BottomBar,
   Scroll
  },
  computed:{
    ...mapGetters({
        length:'carlength',
        carlist:'carlist'
    })
   
  }
}
</script>

<style scoped>
#car{
  position: relative;
}
.content{
  height: 100vh;
  padding-bottom: 160px;
  overflow: hidden;
}
</style>
