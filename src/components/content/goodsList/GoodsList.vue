<template>
  <div class="goodslist">
    <goods-list-item :goods='item' v-for="(item,index) in goods" :key="index" ></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
  export default {
    name:'GoodsList',
    props: {
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
     GoodsListItem
    }
  }
</script>
<style scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>