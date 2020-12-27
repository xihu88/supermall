<template>
  <div id="home">
    <navbar class="home-navbar"><div slot="center">购物街</div></navbar>
    <tab-control id="tab-control-clone"  
                 :title="['流行','新款','精选']" ref="tabControl1" 
                 @tabClick="tabClick" v-show="tabControlIsFixed">
    </tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @contentScroll="contentScroll" @pullingUpLad="pullingUpLoad">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <div id="feature"><a href="https://act.mogujie.com/zzlx67"><img src="~assets/img/home/recommend_bg.jpg" alt=""></a></div>
      <tab-control class="tab-control" :title="['流行','新款','精选']" ref="tabControl" @tabClick="tabClick" ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="backTopIsShow"></back-top>
  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/Navbar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import RecommendView from 'views/home/childComps/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata,getHomeGoodsdata} from 'network/home'
  import {debounce} from 'common/utils'
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
        currentType:"pop",
        backTopIsShow:false,
        tabControlOffsetTop:0,
        tabControlIsFixed:false,
        scrollY:0
      }
    },
    components: {
      Navbar,
      HomeSwiper,
      RecommendView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created () {
      this.getHomeMultidata();
      for( let item of this.goodsTypeArr){
        this.getHomeGoodsdata(item)
      }
    }, 
    activated () {
      this.$refs.scroll.scrollTo(0,this.scrollY,0);
      this.$refs.scroll.refresh()
    },
    deactivated () {
      this.scrollY = this.$refs.scroll.getScrollY()
    },
    mounted () {
      // let timer = null;
      // const that = this;
      // this.$bus.$on("imgLoad",()=>{
      //   console.log("图片加载");
      //   if(timer){clearTimeout(timer)}
      //   timer = setTimeout(()=>{
      //     console.log("----------");
      //     that.$refs.scroll.scroll.refresh();
      //     console.log(this);
      //     console.log(that);
      //     timer = null
      //   },50)
      // }) 
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on("imgLoad",()=>{
        refresh()
      })
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
          this.goods[type].page ++;
          this.$refs.scroll.finishPullUp()
        })
      },
      tabClick(index){
        this.currentType = this.goodsTypeArr[index];
        this.$refs.tabControl.currentIndex = this.$refs.tabControl1.currentIndex = index
      },
      backTopClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // console.log(position);
        this.backTopIsShow = -position.y > 1000;
        this.tabControlIsFixed = -position.y > this.tabControlOffsetTop

      },
      pullingUpLoad(){
        this.getHomeGoodsdata(this.currentType);
      },
      swiperImgLoad(){
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
      }
    }
  }
</script>
<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    /* overflow: hidden; */
    position: relative;
  }
  .home-navbar {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3; */
  }
  #feature img {
    width: 100%;
  }
  .content {
    /* padding-top: 44px; */
    /* height: 475px;  */
    /* overflow: hidden; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    overflow-y: scroll;
  }
  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
  #tab-control-clone {
    position: relative;
    z-index: 3;
  }
</style>