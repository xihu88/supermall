<template>
  <div class="goodslist">
    <div class="goodslistitem" v-for = "item in goods"  :key="item.title">
      <img :src="item.show.img" alt="">
      <div class="goodsinfo">
        <p> {{item.title}} </p>
        <span class="price"> ¥{{item.price}} </span>
        <span class="collect"> {{item.cfav}} </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'GoodsList',
    props: {
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .goodslistitem {
    width: 48%;
    font-size: 12px;
  }
  .goodslistitem .goodsinfo p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goodslistitem img {
    width: 100%;
  }
  .goodslistitem .price {
    color: var(--color-high-text);
  }

  .goodsinfo {
    text-align: center;
  }

</style>