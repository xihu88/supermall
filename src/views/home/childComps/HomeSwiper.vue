<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {Swiper, SwiperItem } from 'components/common/swiper'
  export default {
    name:'HomeSwiper',
    props: {
      banners:Array
    },
    data () {
      return {
        swiperImgIsLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImgLoad(){
        if (!this.swiperImgIsLoad) {
          this.$emit("swiperImgLoad");
          // console.log("轮播图片加载了");
          this.swiperImgIsLoad = true
        }
      }
    }
  }
</script>
<style scoped>
</style>