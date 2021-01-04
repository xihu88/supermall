<template>
  <div class="detail">
    <detail-title></detail-title>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImage='topImage'></detail-swiper>
      <detail-base-info :good="good"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-good-info :detail-info="detailInfo" @goodInfoLoad="goodInfoLoad"></detail-good-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <goods-list :goods="recommendList"></goods-list>
    </scroll>
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


  export default {
    name:'Detail',
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
      GoodsList
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
    position: relative;
    z-index: 8;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content {
    flex: 1;
    overflow-y: scroll;
  } 
</style>