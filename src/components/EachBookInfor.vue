<template>
  <div>
    <div @click="turnToDetails" class="overall-container">
      <div class="left">
        <img id="cover" src="../assets/2x61ou7ynr12s6zha5rzf1on7.jpg">
      </div>
      <div class="right">
        <p id="title">
          <i class="iconfont">&#xe600;</i>
          {{book.title}}
        </p>
        <div id="book-other-attr">
          <p>
            作者：
            <span>{{book.author}}</span>
          </p>
          <p>
            出版社：
            <span>{{book.publisher}}</span>
          </p>
          <p>
            时间：
            <span>{{book.year}}</span>
          </p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      books:[]
    };
  },
  watch:{
      books:function(newVal,oldVal){
          this.books=newVal;
      }
  },
  methods: {
        turnToDetails(){
          let vm= this;
            vm.detailed=true;
            let id=vm.$props.book.index;
            vm.$router.push(`/detailed/${id}`);
        }
    }
}
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1193824 */
  src: url("//at.alicdn.com/t/font_1193824_mrgsmzky2gh.eot");
  src: url("//at.alicdn.com/t/font_1193824_mrgsmzky2gh.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1193824_mrgsmzky2gh.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1193824_mrgsmzky2gh.woff") format("woff"),
    url("//at.alicdn.com/t/font_1193824_mrgsmzky2gh.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1193824_mrgsmzky2gh.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 23px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #ff3333;
}
#title {
  font-size: 23px;
  margin-block-start: 5px;
}
#cover {
  width: 180px;
}
.left {
  float: left;
  margin-right: 50px;
}
.right {
  text-align: left;
}
.overall-container {
  width: 800px;
  height: 270px;
  padding: 20px;
  background-color: white;
  margin: 20px auto;

  box-shadow: 2px 2px 5px #aaa;
}
</style>

