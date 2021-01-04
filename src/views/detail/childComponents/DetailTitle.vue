<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail-title" >
        <span class="title-item" v-for="(item,index) in title" :key="item" @click="titleClick(index)" :class="{active : currentIndex == index}"> {{item}} </span>
      </div>
    </navbar>
  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/Navbar'
  export default {
    name:'DetailTitle',
    data () {
      return {
        title: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      Navbar
    },
    methods: {
      titleClick(index){
        this.currentIndex = index
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>
<style scoped>
  .active {
    color: red;
  }
  .detail-title {
    display: flex;
    text-align: center;
    font-size: 13px;
  }
  .title-item {
    flex: 1;
  }
  .back {
    text-align: center;
  }
  .back img {
    vertical-align: middle;;
  }
</style>