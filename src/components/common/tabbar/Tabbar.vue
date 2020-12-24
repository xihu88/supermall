<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'Tabbar'
  }
</script>
<style scoped>
  #tabbar {
    background-color: #f6f6f6;
    display: flex;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
  }
</style>