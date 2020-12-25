<template>
  <div id="tab-control">
    <div class="tab-control-item" :class="{active:index==currentIndex}" @click="itemClick(index)" v-for="(item,index) in title" :key="item"> {{item}} </div>
  </div>
</template>
<script>
  export default {
    name:'TabControl',
    props: {
      title:Array
    },
    data () {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit("tabClick", index)
      }
    }
  }
</script>
<style scoped>
  #tab-control {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
  }
  .tab-control-item {
    /* flex: 1; */
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>