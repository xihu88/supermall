<template>
  <div class="shopcart">
    <shop-cart-navbar></shop-cart-navbar>
    <scroll class="centent" ref="scroll">
      <cart-list></cart-list>
    </scroll>
  </div>
</template>
<script>
  import  ShopCartNavbar from './childComponents/ShopCartNavbar'
  import Scroll from 'components/common/scroll/Scroll'
  import CartList from './childComponents/CartList'

  export default {
    name:'Shopcart',
    components:{
      ShopCartNavbar,
      Scroll,
      CartList
    },
    activated () {
      this.$refs.scroll.refresh()
    }
  }
</script>
<style scoped>
/* flex方式 */
  .shopcart {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .shopcart::after {
    display: block;
    content: '';
    height: 49px;
  }
  .centent {
    flex: 1;
    overflow-y: scroll;
  }

  /* 定位的方式 可行*/
  /* .shopcart {
    height: 100vh;
    position: relative;
  }
  .centent {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow-y: scroll;
  } */
  /* 计算的方式 */
  /* .shopcart {
    height: calc(100vh - 49px);
  }
  .centent {
    height: calc(100% - 44px);
    overflow-y: hidden;
  } */
</style>