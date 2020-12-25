<template>
  <div id="Category">
    <div class="wrapper">
      <ul class="content">
        <li>{xiangmu1}</li>
        <li>{xiangmu2}</li>
        <li>{xiangmu3}</li>
        <li>{xiangmu4}</li>
        <li>{xiangmu5}</li>
        <li>{xiangmu6}</li>
        <li>{xiangmu7}</li>
        <li>{xiangmu8}</li>
        <li>{xiangmu9}</li>
        <li>{xiangmu10}</li>
        <li>{xiangmu11}</li>
        <li>{xiangmu12}</li>
        <li>{xiangmu13}</li>
        <li>{xiangmu14}</li>
        <li>{xiangmu15}</li>
        <li>{xiangmu16}</li>
        <li>{xiangmu17}</li>
        <li>{xiangmu18}</li>
        <li>{xiangmu19}</li>
        <li>{xiangmu20}</li>
        <li>{xiangmu21}</li>
        <li>{xiangmu22}</li>
        <li>{xiangmu23}</li>
        <li>{xiangmu24}</li>
        <li>{xiangmu25}</li>
        <li>{xiangmu26}</li>
        <li>{xiangmu27}</li>
        <li>{xiangmu28}</li>
        <li>{xiangmu29}</li>
        <li>{xiangmu30}</li>
        <li>{xiangmu31}</li>
        <li>{xiangmu32}</li>
        <li>{xiangmu33}</li>
        <li>{xiangmu34}</li>
        <li>{xiangmu35}</li>
        <li>{xiangmu36}</li>
        <li>{xiangmu37}</li>
        <li>{xiangmu38}</li>
        <li>{xiangmu39}</li>
        <li>{xiangmu40}</li>
        <li>{xiangmu41}</li>
        <li>{xiangmu42}</li>
        <li>{xiangmu43}</li>
        <li>{xiangmu44}</li>
        <li>{xiangmu45}</li>
        <li>{xiangmu46}</li>
        <li>{xiangmu47}</li>
        <li>{xiangmu48}</li>
        <li>{xiangmu49}</li>
        <li>{xiangmu50}</li>
        <li>{xiangmu51}</li>
        <li>{xiangmu52}</li>
        <li>{xiangmu53}</li>
        <li>{xiangmu54}</li>
        <li>{xiangmu55}</li>
        <li>{xiangmu56}</li>
        <li>{xiangmu57}</li>
        <li>{xiangmu58}</li>
        <li>{xiangmu59}</li>
        <li>{xiangmu60}</li>
        <li>{xiangmu61}</li>
        <li>{xiangmu62}</li>
        <li>{xiangmu63}</li>
        <li>{xiangmu64}</li>
        <li>{xiangmu65}</li>
        <li>{xiangmu66}</li>
        <li>{xiangmu67}</li>
        <li>{xiangmu68}</li>
        <li>{xiangmu69}</li>
        <li>{xiangmu70}</li>
        <li>{xiangmu71}</li>
        <li>{xiangmu72}</li>
        <li>{xiangmu73}</li>
        <li>{xiangmu74}</li>
        <li>{xiangmu75}</li>
        <li>{xiangmu76}</li>
        <li>{xiangmu77}</li>
        <li>{xiangmu78}</li>
        <li>{xiangmu79}</li>
        <li>{xiangmu80}</li>
        <li>{xiangmu81}</li>
        <li>{xiangmu82}</li>
        <li>{xiangmu83}</li>
        <li>{xiangmu84}</li>
        <li>{xiangmu85}</li>
        <li>{xiangmu86}</li>
        <li>{xiangmu87}</li>
        <li>{xiangmu88}</li>
        <li>{xiangmu89}</li>
        <li>{xiangmu90}</li>
        <li>{xiangmu91}</li>
        <li>{xiangmu92}</li>
        <li>{xiangmu93}</li>
        <li>{xiangmu94}</li>
        <li>{xiangmu95}</li>
        <li>{xiangmu96}</li>
        <li>{xiangmu97}</li>
        <li>{xiangmu98}</li>
        <li>{xiangmu99}</li>
        <li>{xiangmu100}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  BScroll.use(Pullup)
  export default {
    name:'Category',
    mounted () {
      this.scroll= new BScroll(".wrapper",{
        probeType:3,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log("加载了");
      })
    }
  }
</script>
<style scoped>
  .wrapper {
    height: 200px;
    background-color: red;
    overflow-y: scroll;
  }
</style>