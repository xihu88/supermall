<template>
  <div>
    <navbar>
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/Navbar'
  import {mapGetters} from 'vuex'
  export default {
    name:'',
    components:{
      Navbar
    },
    computed:{
       ...mapGetters(['cartLength'])
    }
  }
</script>
<style scoped>
</style>