export default{
    addcar(context,payload){
            return new Promise((resolve,reject)=>{
                let product=null
                for(let item of context.state.carlist){
                    if(item.iid==payload.iid){
                     product=item       
                    }
                }
                if(product){
                    context.commit('addcount',product)
                    resolve('商品数量+1')
                }else{
                    payload.count=1
                    context.commit('addtocar',payload)
                    resolve('成功加入购物车')
                }


            })
        
        
    }   
    
}
