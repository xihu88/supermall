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
        console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log("加载了");
        this.scroll.refresh()

      })
    }
  }
</script>
<style scoped>
</style>