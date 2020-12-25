<template>
  <div id="home">
    <navbar class="home-navbar"><div slot="center">购物街</div></navbar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <div id="feature"><a href="https://act.mogujie.com/zzlx67"><img src="~assets/img/home/recommend_bg.jpg" alt=""></a></div>
      <tab-control id="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/Navbar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import RecommendView from 'views/home/childComps/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import {getHomeMultidata,getHomeGoodsdata} from 'network/home'
  export default {
    name:'Home',
    data () {
      return {
        banners: [],
        recommends: [],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        goodsTypeArr:['pop','new','sell'],
        currentType:"pop"
      }
    },
    components: {
      Navbar,
      HomeSwiper,
      RecommendView,
      TabControl,
      GoodsList,
      Scroll
    },
    created () {
      this.getHomeMultidata();
      for(let i = 0;i<this.goodsTypeArr.length;i++){
        this.getHomeGoodsdata(this.goodsTypeArr[i])
      }
    },
    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoodsdata(type){
        const page = this.goods[type].page + 1;
        getHomeGoodsdata(type,page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page ++
        })
      },
      tabClick(index){
        this.currentType = this.goodsTypeArr[index]
      }
    }
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
    /* height: 100vh; */
    /* overflow: hidden; */
    /* position: relative; */
  }
  .home-navbar {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
  #feature img {
    width: 100%;
  }
  #tab-control {
    position: sticky;
    top: 44px;
  }
  .content {
    /* padding-top: 44px; */
    height: 475px; 
    /* overflow-y: scroll; */
    overflow: hidden;
    /* position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
  }
</style>