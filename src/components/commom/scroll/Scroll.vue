<template>
 <div class="wrapper" ref="wrapper">
 <div class="content">
     <slot></slot>
 </div>
 </div>


</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  methods:{
      initScroll() {
		// 1.初始化BScroll对象
		if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })

        // 2.将监听事件回调
        this.scroll.on('scroll',position => {
          this.$emit('scroll',position)
          
        })

     

        // 3.监听上拉到底部
        this.scroll.on('pullingUp', () => {
          console.log('上拉加载');
          this.$emit('pullingUp')
        })
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
		    this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time) {
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      }
  },
  props:{
        probeType:{
             type:Number,
             default:0
           },
        pullUpLoad:{
            type:Boolean,
            default:false
        } ,
        
  },

  mounted(){
      setTimeout(this.initScroll,20)  
  },
  data(){
      return{
          scroll:null,
 
}
  },
   watch: {
		  data() {
        setTimeout(this.refresh, 20)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
