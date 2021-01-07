export default  {
  addCounter(state,payload){
    payload.counter ++
  },
  addCart(state,payload){
    state.cartList.push(payload)
  }
}