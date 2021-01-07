<template>
  <div class="cart-list-item">
    <div class="img"><img :src="cartListItem.imgURL" alt=""></div>
    <div class="text">
      <div class="title"> {{cartListItem.title}} </div>
      <div class="desc"> {{cartListItem.desc}} </div>
      <span class="price left" > {{cartListItem.newPrice}} </span> <span class="counter right"> ×{{cartListItem.counter}} </span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'CartListItem',
    props:{
      cartListItem:{
        type:Object,
        default:{}
      }
    }
  }
</script>
<style scoped>
  .cart-list-item {
    height: 130px;
    border-bottom: 1px solid #aaa;
    display: flex;
    padding: 8px;
  }
  .img {
    flex: 1;
    height: 100%;
  }
  .img img {
    height: 100%;
    border-radius: 4px;
  }
  .text {
    flex: 4;
  }
  .title,
  .desc {
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>