import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import DetailedInfor from './components/DetailedInfor.vue'


Vue.config.productionTip = false

Vue.use(VueRouter);

const router=new VueRouter({
  mode:'history',
  routes:[{
    path:'/detailed/:id',component:DetailedInfor
  }]

});

// let bus= new Vue({

// })

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

