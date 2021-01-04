<template>
  <div class="detail-shop-info">
    <div class="shop-logo">
      <img :src="shop.shopLogo" alt=""><span> {{shop.name}} </span>
    </div>
    <div class="shop-info">
      <div class="shop-statistics">
        <div class="shop-sells">
          <div> {{shop.sells}} </div>
          <span>总销量</span>
        </div>
        <div class="shop-goods-count">
          <div> {{shop.goodsCount}} </div>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-score">
        <div v-for="(item,inedx) in shop.score" :key="inedx">
          <span> {{item.name}} </span><span> {{item.score}} </span> <span v-if="item.isBetter">高</span><span v-else>低</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name:'DetailShopInfo',
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  .shop-logo img {
    /* height: 20px; */
    width: 50px;
  }
  .shop-info {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
  }
  .shop-statistics {
    /* flex: 1; */
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    text-align: center;
  }

  .shop-scroe {
    /* flex: 1; */
  }

  .shop-sells,
  .shop-goods-count {
    flex: 1;
    width: 60px;
  }
</style>