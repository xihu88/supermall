<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    
    <div class="center"><slot name="center"></slot></div>
    
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default {
    name:'Navbar'
  }
</script>
<style scoped>
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: relative;
    z-index: 3;
  }
  .left,
  .right {
    width: 60px;

  }
  .center {
    flex: 1;
  }
</style>