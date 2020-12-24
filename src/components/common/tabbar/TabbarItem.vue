<template>
  <div class="tabbaritem" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot ></div>
    <div :style="isActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
  export default {
    name:'TabbarItem',
    props: {
      path:{
        type: String
      },
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data () {
      return {
        
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      isActiveStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        if(!this.isActive){
        this.$router.replace(this.path)
        }
      }
    }
  }
</script>
<style scoped>
  .tabbaritem {
    flex: 1;
    height: 49px;
  }
  .tabbaritem img {
    width: 24px;
    height: 24px;
  }
</style>
