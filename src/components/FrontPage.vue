<template>
  <div>
    <header class="header">
      <div class="header-container">
        <img class="headerlogo" src="../assets/headerlogo.svg">
        <img class="account" src="../assets/account.svg">
      </div>
    </header>
    <div class="main-container" :class="{'main-container-bgdown':searchDone}">
      <div :class="{'search-bar':!searchDone,'search-bar-up':searchDone }">
        <input type="input" placeholder="请输入关键字搜索" v-model="searchText" @keydown.enter="fetchInfor">
        <button @click="fetchInfor">检索</button>
      </div>

      <div v-if="onSearch" class="search-animation">
        <div class="search-animation1"></div>
      </div>
      <p v-if="books.length" class="grey">
        共检索到
        <span class="red">{{books.length}}</span> 本书籍
      </p>
      <div v-if="books.length" >
       <EachBookInfor 
       v-for="book in books" 
        :book="book"
        :key="book.index"/>
       
    
      </div>

    </div>
    <footer class="footer">
      <p>加入我们-联系方式-意见反馈</p>
      <p>POWERED BY TWT STUDIO copyright 2000-2019</p>
    </footer>
  </div>
</template>

<script>
import EachBookInfor from "./EachBookInfor";


export default {
  components: { EachBookInfor },
  data() {
    return {
      onSearch: false,
      searchDone: false,
      searchText: "",
      books: []
    };
  },
  methods: {
    fetchInfor() {
      let vm = this;
      let bookName = this.searchText.trim();
      let url = `http://open.twtstudio.com/api/v1/library/book?title=${bookName}&page={page}`;
      if (!bookName) {
        alert("请输入关键词后再搜索");
      } else {
        this.onSearch = true;
        this.searchDone = true;
        fetch(url).then(
        
          function(res) {
            vm.onSearch = false;
            if (res.ok) {      
              res.json().then(function(jsondata) {
                if (jsondata.data.length === 0) {
                  alert("无搜索结果！");
                } else {
                  vm.books = jsondata.data;
                }
              });
            } else {
              vm.searchDone = false;
              vm.onSearch = false;
              alert(`请求失败，状态码为${res.status}`);
            }
          },
          function(error) {
            vm.searchDone = false;
            vm.onSearch = false;
            alert("因未知原因，请求失败!");
          }
        );
      } //else
    },
    
  }
};
</script>

<style>
.grey{
  color: #aaa;
}
.red {
  color: #ff3333;
}
* {
  box-sizing: border-box;
  transition: all 0.5s ease-out;
}
.header {
  background-color: #ff3333;
  height: 60px;
}
.search-animation {
  width: 30px;
  height: 30px;
  position: relative;
  margin: 50px auto;
}

.search-animation1 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ff3333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}
@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }

  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }

  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
body {
  margin: 0;
  background-color: #f7f7f7;
}
.header-container {
  margin-left: 50px;
  margin-right: 50px;
  overflow: hidden;
}
.headerlogo {
  width: 200px;
  height: 60px;
}
.account {
  width: 50px;
  height: 60px;
  float: right;
}
.main-container {
  background-image: url("../assets/background.png");
  background-size: 830px;
  background-repeat: no-repeat;
  width: 850px;
  height: auto;
  margin: 0 auto;
  text-align: center;
}
.main-container-bgdown {
  background-position: bottom;
  background-size: 1200px;
  width: 1200px;
}
.search-bar {
  margin-top: 370px;
  display: inline-flex;
  justify-content: center;
}
.search-bar-up {
  margin-top: 80px;
  display: inline-flex;
  justify-content: center;
}
input {
  width: 430px;
  font-size: 20px;
  padding: 18px;
}
button {
  width: 120px;
  margin-left: 20px;
  font-size: 20px;
  letter-spacing: 4px;
  text-align: center;
  color: #eee;
  background-color: #ff3333;
  cursor: pointer;
}
input,
button {
  box-shadow: 2px 2px 5px #aaa;
  height: 45px;
  border: none;
  border-radius: 25px;
  outline: none;
}
.footer {
  background-color: #ff3333;
  height: 70px;
  padding: 10px;
  margin-top:230px;
  /* margin:bottom; */
}

footer p {
  color: #eee;
  opacity: 0.4;
  text-align: center;
  font-size: 10px;
}
</style>
