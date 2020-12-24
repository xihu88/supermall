<template>
  <div id="RecommendView">
    <div class="recommenditem" v-for="item in recommends" :key="item.title" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span> {{item.title}} </span>
      </a> 
    </div>
  </div>
</template>
<script>
  export default {
    name:'RecommendView',
    props: {
      recommends: Array
    }
  }
</script>
<style scoped>
  #RecommendView {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  }
  .recommenditem {
    flex: 1;
    font-size: 14px;
    line-height: 20px;
  }
  .recommenditem img {
    height: 65px;
    width: 65px;
  }

</style>