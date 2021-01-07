<template>
  <div class="detail">
    <detail-title></detail-title>
    <scroll class="content" ref="scroll" @contentScroll="contentScroll">
      <detail-swiper :topImage='topImage'></detail-swiper>
      <detail-base-info :good="good"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-good-info :detail-info="detailInfo" @goodInfoLoad="goodInfoLoad"></detail-good-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <goods-list :goods="recommendList"></goods-list>
    </scroll>
    <back-top v-show="backTopIsShow" @click.native="backTopClick"></back-top>
    <detail-bottom-bar @addToCart="addToCart" class="bottom-bar"></detail-bottom-bar>
  </div>
</template>
<script>
  import DetailTitle from './childComponents/DetailTitle'
  import { getDetailData,Goods,Shop,GoodsParam,getRecommend } from 'network/detail'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailGoodInfo from './childComponents/DetailGoodInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import {debounce} from 'common/utils'
  import DetailParamInfo from './childComponents/DetailParamInfo'
  import DetailCommentInfo from './childComponents/DetailCommentInfo'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import DetailBottomBar from './childComponents/DetailBottomBar'
  import {backTopMixin} from 'common/mixin'
  

  export default {
    name:'Detail',
    mixins:[backTopMixin],
    data () {
      return { 
        topImage:[],
        good:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendList:[]
      }
    },
    components: {
      DetailTitle,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    computed: {
      iid(){
        return this.$route.params.iid?this.$route.params.iid : 0
      },
      jieliu(){
        return debounce(this.$refs.scroll.refresh)
      }
    },
    methods: {
      goodInfoLoad(){
        this.jieliu()
      },
      addToCart(){
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.topImage[0]
        obj.title = this.good.title
        obj.desc = this.good.desc;
        obj.newPrice = this.good.nowPrice;
        obj.counter = 1;
        // 3.添加到Store中
        this.$store.dispatch('addCart', obj)
      }
      
    },
    created () {
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.topImage = res.data.result.itemInfo.topImages
        this.good = new Goods(res)
        this.shop = new Shop(res)
        this.detailInfo = res.data.result.detailInfo
        this.paramInfo = new GoodsParam(res);
        if(res.data.result.rate.list){
          this.commentInfo = res.data.result.rate.list[0]
        }
      });
      // setTimeout(()=>{
      //   this.$refs.scroll.refresh()
      // },500)
      
      
      getRecommend().then((res, error) => {
        if (error) return
        this.recommendList = res.data.data.list
        console.log(res);
      })
      

    }
  }

</script>
<style scoped>
  .detail {
    /* 把底部导航栏盖住 */
    position: relative;  
    z-index: 8;

    background-color: #fff;
    height: 100vh;
    /* 设置flex布局,主轴为垂直方向 */
    display: flex;
    flex-direction: column;
  }
  .content {
    /* 出去顶部和底部高度,剩余为scroll高度 */
    flex: 1;
    overflow-y: scroll;
  }
  /* .bottom-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  } */
</style>