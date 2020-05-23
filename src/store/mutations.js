export default{
    addcount(state,payload){
        payload.count++
    } ,
    addtocar(state,payload){ 
        payload.checked=true
        state.carlist.push(payload)  
    }

}