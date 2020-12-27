<template>
    <div class="goodslistitem" >
      <img :src="goods.show.img" alt="" @load="imgLoad">
      <div class="goodsinfo">
        <p> {{goods.title}} </p>
        <span class="price"> ¥{{goods.price}} </span>
        <span class="collect"> {{goods.cfav}} </span>
      </div>
    </div>
</template>
<script>
  export default {
    name:'',
    props: {
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit('imgLoad')
      }
    }
  }
</script>
<style scoped>
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