<template>
  <div>
    <!-- <p id="return">返回上一页</p> -->

    <div class="overall-container">
        <img @click="change" class="fav" :src="fav_url">
      <div class="basic-messages">
        <div>
          <p class="p-title">基本信息</p>
        </div>
        <div>
          <img class="cover" src="../assets/2x61ou7ynr12s6zha5rzf1on7.jpg">
          <div class="book-details1-author">
              <p class="title">
                <strong>{{thisbook.title}}</strong><Stars/>
              </p>
              
            
            <p>
              作者:
              <span>{{thisbook.authorPrimary}}</span>
            </p>
            <p>
              出版社:
              <span>{{thisbook.publisher}}</span>
            </p>
            <p>
              时间:
              <span>{{thisbook.year}}</span>
            </p>
            <p>
              价格：
              <span>{{thisbook.price}}</span>
            </p>
          </div>
        </div>
        
      </div>
      <div class="inlibrary-messages">
        <p class="p-title">在馆信息</p>
        <div class="book-library">
          <div>
            <p class="left">索书号</p>
            <div>
              <p v-for="holding in holdings" :key="holding.id">{{holding.barcode}}</p>
            </div>
          </div>
          <div>
            <p class="medium">所在馆藏地点</p>
            <div>
              <p v-for="holding in holdings" :key="holding.id">{{holding.local}}</p>
            </div>
          </div>
          <div>
            <p class="right">在馆状态</p>
            <div>
              <p v-for="holding in holdings" :key="holding.id">{{holding.state}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="comments">
        <p class="p-title">全部书评</p>
        <div class="each-commont">
          <div class="circle">
            <img src="../assets/img-744566a1baed8374c0efdba2eb51c851.jpg">
          </div>
          <div>
            <i class="name">Leonardodawatch</i>
            <Stars/>
            <p>死并非生的对立面，而是作为生的一部分永存</p>
          </div>
          <hr>
        </div>
        <div class="each-commont">
          <div class="circle">
            <img src="../assets/img-744566a1baed8374c0efdba2eb51c851.jpg">
          </div>
          <div>
            <i class="name">Leonardodawatch</i>
            <Stars/>
            <p>一切都是想象力的问题，我们的责任从想象力中开始</p>
          </div>
          <hr>
        </div>
        <div class="each-commont">
          <div class="circle">
            <img src="../assets/img-744566a1baed8374c0efdba2eb51c851.jpg">
          </div>
          <div>
            <i class="name">Leonardodawatch</i>
            <Stars/>
            <p>语言已在时光的凹坑中死去，无声地沉积在火山口湖黑暗的底部</p>
          </div>
          <hr>
        </div>
        <div class="commonts-own">
          <div class="circle">
            <img src="../assets/img-744566a1baed8374c0efdba2eb51c851.jpg">
          </div>
          <textarea/>
          <button>提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fav from "../assets/fav.png";
import unfav from "../assets/unfav.png";
import Stars from "../components/Stars";
export default {
  components: { Stars },
  props: {},
  data() {
    return {
      fav_url: unfav,
      thisbook: [],
      holdings: []
    };
  },
  created() {
    this.getDetails();
  },
  watch: {
    $route: "getDetails"
  },
  methods: {
    getDetails() {
      let vm = this;
      let id = vm.$route.params.id;
      let url = `http://open.twtstudio.com/api/v1/library/book/${id}`;
      fetch(url).then(function(res) {
        if (res.ok) {
          res.json().then(function(jsondata) {
            vm.thisbook = jsondata.data;
            vm.holdings = jsondata.data.holding;
          });
        }
      });
    },
    retureToBooks() {
      this.$route.back();
    },
    change() {
      if (this.fav_url === unfav) this.fav_url = fav;
      else this.fav_url = unfav;
    }
  }
};
</script>


<style scoped>
.name{
    font-size: 18px;
}
.each-commont {
  text-align: left;
}
.commonts-own {
  margin-top: 30px;
}
textarea {
  height: 150px;
  width: 540px;
  float: right;
}
button {
  float: right;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #eee;
}
hr {
  border: dotted #ddd;
  margin-top: 20px;
}
.circle + div {
  text-align: left;
  display: inline-block;
  margin-left: 40px;
}
.circle > img {
  height: 90px;
  clip-path: circle();
  float: left;
}
.book-library {
  display: flex;
  justify-content: space-between;
}
.left,
.right,
.medium {
  font-size: 17px;
}
.left + div,
.right + div,
.medium + div {
  color: #555;
}

.fav {
    position: relative;
  float: right;
  width: 140px;
  margin-top: -17px;
  margin-right: 25px;
}
.title {
  font-size: 20px;
}
.book-brief-title {
  float: left;
  margin-top: 0;
}
.book-brief {
  height: auto;
}
.book-details1-author {
  text-align: left;
  width: 430px;
}
.overall-container {
  background-color: #eee;
  margin: 50px auto;
  width: 750px;
  box-shadow: 2px 2px 5px #ddd;
}
/* img+div{

} */
.cover {
  width: 160px;
  float: left;
  margin-right: 30px;
}
#return {
  color: #aaa;
}
.basic-messages {
  height: 330px;
}
.inlibrary-messages {
  height: auto;
  padding-bottom: 30px;
}
.comments {
  height: auto;
  min-height: 800px;
}
.basic-messages,
.inlibrary-messages,
.comments {
  width: 750px;
  background-color: white;
  margin: 0 auto;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 60px;
  margin-bottom: 10px;
}
.p-title {
  color: #aaa;
  text-align: left;
  font-size: 20px;
}
</style>

