<template>
  <div class="DetailGoodInfo" v-if="Object.keys(detailInfo).length !== 0">
    <div>{{detailInfo.desc}}</div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imgLoad">
    </div>
  </div>
</template>
<script>
  
  export default {
    name:'DetailGoodInfo',
    props:{
      detailInfo:{
        type: Object,
        default: {},
      }
    },
    data(){
      return {
        timer:null
      }
    },
    methods: {
      imgLoad(){
        this.$emit("goodInfoLoad")

        // if(this.timer !== null){
        //   clearTimeout(this.timer)
        // }
        // const that = this;
        // this.timer = setTimeout(()=> {
        //   that.$emit("goodInfoLoad");
        //   // console.log("发送goodInfoLoad");
        // },50)

      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
  .DetailGoodInfo {
    background-color: red;
  }
</style>