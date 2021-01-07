
import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin = {
  data () {
    return {
      backTopIsShow:false
    }
  },
  components: {
    BackTop
    
  },
  methods: {
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // console.log(position);
      this.backTopIsShow = -position.y > 1000;
      this.tabControlIsFixed = -position.y > this.tabControlOffsetTop
    }
  }
}