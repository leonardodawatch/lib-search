<template>
  <div id="app">
    <header class="header">
      <div class="header-container">
        <img class="headerlogo" src="../src/assets/headerlogo.svg">
        <img class="account" src="../src/assets/account.svg">
      </div>
    </header>
   <router-view></router-view>
   <footer class="footer">
      <p>加入我们-联系方式-意见反馈</p>
      <p>POWERED BY TWT STUDIO copyright 2000-2019</p>
    </footer>
  </div>
</template>

<script>



export default {
  name: 'app',
  
}
</script>

<style>
* {
  box-sizing: border-box;
  transition: all 0.5s ease-out;
}
.footer {
  background-color: #ff3333;
  height: 70px;
  padding: 10px;
  margin-top: 230px;
  /* margin:bottom; */
}
.header {
  background-color: #ff3333;
  height: 60px;
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
footer p {
  color: #eee;
  opacity: 0.4;
  text-align: center;
  font-size: 10px;
}
</style>
