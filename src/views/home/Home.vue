<template>
  <div id="home">
    <navbar class="home-navbar">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </navbar>
  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/Navbar'
  import {getHomeMultidata} from 'network/home'
  export default {
    name:'',
    data () {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      Navbar
    },
    created () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner;
        this.recommends = res.data.recommend;
        console.log(res.data.banner.list);
      })
    }
  }
</script>
<style scoped>
  .home-navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>