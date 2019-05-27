<template>
  <div>
    <div class="main-container" :class="{'main-container-bgdown':searchDone}">
      <div :class="{'search-bar':!searchDone,'search-bar-up':searchDone }">
        <input type="input" placeholder="请输入关键字搜索" v-model="searchText" @keydown.enter="fetchInfor">
        <button @click="fetchInfor">检索</button>
      </div>

      <div v-if="onSearch" class="search-animation">
        <div class="search-animation1"></div>
      </div>

  
      <div v-if="books.length" >
         <p class="grey">
        共检索到
        <span class="red">{{books.length}}</span> 本书籍
      </p>
          <EachBookInfor v-for="book in books" :book="book" :key="book.index"/>
      </div>
      <!-- <router-view></router-view> -->
    </div>
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
    }

  }
};
</script>

<style>
.grey {
  
  color: #aaa;
}
.red {
  color: #ff3333;
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
  margin-bottom: 20px;
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



</style>
