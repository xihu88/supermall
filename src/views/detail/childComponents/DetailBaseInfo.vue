<template>
  <div class="detail-base-info" v-if="Object.keys(good).length !== 0">
    <div class="base-info-title"> {{good.title}} </div>
    <div class="base-info-price">
      <span class="new-price"> {{good.newPrice}} </span>
      <span class="old-price"> {{good.oldPrice}} </span>
      <span class="discount" v-if="good.discount"> {{good.discount}} </span>
    </div>
    <div class="base-info-columns">
      <span> {{good.columns[0]}} </span>
      <span> {{good.columns[1]}} </span>
      <span> {{good.services[good.services.length-1].name}} </span>
    </div>
    <div class="base-info-services">
      <span v-for="index in good.services.length-1" :key="index">
        <img :src="good.services[index-1].icon" alt="">
        <span> {{good.services[index-1].name}} </span>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'DetailBaseInfo',
    props: {
      good:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  .detail-base-info {
    padding: 10px;
  }
  .base-info-title {
    font-size: 14px;
    color: #000;
  }
  .base-info-price {
    padding: 13px 0;
  }
  .base-info-price span:nth-child(1){
    color: var(--color-high-text);
    font-size: 24px;
    font-weight: bold;
  }
  .base-info-price span:nth-child(2){
    font-size: 13px;
    text-decoration: line-through;
  }
  .base-info-price span:nth-child(3){
    background-color: var(--color-high-text);
    color: #fff;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 8px;
    position: relative;
    top: -10px
  }
  .base-info-columns {
    column-count: 3;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .base-info-services {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .base-info-services img {
    width: 14px;
    vertical-align: top;
  }
</style>