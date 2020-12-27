<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)
  export default {
    name:'Scroll',
    props: {
      probeType:{
        type:Number,
        default:0
      }
    },
    data () {
      return {
        scroll:null
      }
    },
    mounted () {
      this.scroll= new BScroll(this.$refs.wrapper,{
        probeType:3,
        click:true,
        pullUpLoad:true,
        disableTouch: false,
        disableMouse: false,
      })
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('contentScroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        // console.log("上拉加载了");
        // console.log(this.scroll);
        this.$emit("pullingUpLad");
      })
    },
    methods: {
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY(){
        return this.scroll?this.scroll.y : 0
      }
    }
  }
</script>
<style scoped>
</style>