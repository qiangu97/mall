<template>
  <div id="category">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
  <scroll class="content">
   <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
   <menu-info :subcategories="showSubcategory"></menu-info>
   </scroll>
  </div>
</template>

<script>
import {getCategory ,getSubcategory} from 'network/category'

import NavBar from 'components/commom/navbar/NavBar'
import Scroll from 'components/commom/scroll/Scroll'

import MenuInfo from './child/MenuInfo'
import TabMenu from './child/TabMenu'
export default {
  name: 'Category',
  data(){
    return{
        categories:[],
        categoryData: {},
        currentIndex: -1,
    }
  },
  components: {
    TabMenu,
    NavBar,
    Scroll,
    MenuInfo
  },
  created(){
    this.getCategory()
    
  },
  computed:{
    showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
  },
  methods:{
     getSubcategories(index) {
       this.currentIndex=index
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          console.log(this.categoryData)
         
        })
     },

    selectItem(index){
        this.getSubcategories(index)

    },
      getCategory(){
        getCategory().then(res=>{
            this.categories = res.data.category.list
           for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
            }
           }
           
           this.getSubcategories(0)
        })   
  }
  }
}
</script>

<style scoped>
#category{
  position: relative;
}
.content{
  height: 100vh;
  
}
</style>
