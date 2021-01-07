<template>
  <div>
    <div class="car-list" v-for="item in cartList" :key="item.iid">
      <div class="chech-botton"></div>
      <cart-list-item class="cart-list-item" :cart-list-item="item"></cart-list-item>
    </div>
  </div>
</template>
<script>
  import CartListItem from './CartListItem'
  export default {
    name:'CartList',
    components:{
      CartListItem
    },
    computed: {
      cartList(){
        return this.$store.state.cartList
      }
    }
  }
</script>
<style scoped>
  .car-list {
    display: flex;

  }
  .cart-list-item {
    flex: 1;
  }
</style>