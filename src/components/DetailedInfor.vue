<template>
    <div>
    <p id="return">返回上一页</p>
    <div  class='overall-container'> 
        <div class='basic-messages'>
            <div>
            <p class="p-title">基本信息</p>
            </div>
            <div >
                <img src="../assets/2x61ou7ynr12s6zha5rzf1on7.jpg"/>
                <div class="book-details1-author">
                   <p>{{thisbook.title}}</p>
                   <p>作者:<span>{{thisbook.authorPrimary}}</span></p>
                   <p>出版社:<span>{{thisbook.publisher}}</span></p>
                   <p>时间:<span>{{thisbook.year}}</span></p>
                   <p>价格：<span>{{thisbook.price}}</span></p>
                </div>
            </div>
            <hr>
            <div class="book-brief">
                <p class='book-brief-title'>图书简介：</p>
                <p>{{thisbook.summary}}</p>
            </div>
        </div>
        <div class='inlibrary-messages'>
            <p class='p-title'>在馆信息</p>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="comments">
            <p class='p-title'>全部书评</p>
            <div>
                <img/>
                <div></div>
            </div>
            <div>
                <img/>
                <textarea/>
                <button></button>
            </div>
        </div>

    </div>
    </div>
</template>
<script>

export default {
    props:{
        

    },
    data(){
        return{
            thisbook:[]

        }
    },
    created(){
        this.getDetails();
    },
    watch:{
        '$route':'getDetails'
    },
    methods:{
         getDetails() { 
        let vm= this;
       let id= vm.$route.params.id;
        let url = `http://open.twtstudio.com/api/v1/library/book/${id}`;
         fetch(url).then(
          function(res) {
            if (res.ok) {      
              res.json().then(function(jsondata) {
                  vm.thisbook=jsondata.data;
              });
            } 
          }
        );
      }
    }

}
</script>


<style scoped>
.book-brief-title{
    float: left;
    margin-top: 0;
}
.book-brief{
    height: auto;
}
.book-details1-author{
    text-align: left;
}
.overall-container{
    background-color:#eee;
   margin:0 auto;
   width: 800px;
   box-shadow: 2px 2px 5px #ddd;
}
/* img+div{

} */
img{
    width:140px;
    float: left;
    margin-right: 20px;
}
#return{
    color:#aaa;
}
.basic-messages{
    height: 320px;
}
.inlibrary-messages{
    height: 300px;
}
.comments{
    height: 500px;
}
.basic-messages,
.inlibrary-messages,
.comments{
    width:800px;
    background-color:white;
    margin: 0 auto;
    padding-top:20px;
    padding-left: 40px;
    margin-bottom: 10px;
}
.p-title{
    color:#aaa;
    text-align: left;
    font-size: 20px;
}
button{
    border-radius: 5px;
    box-shadow: 2px 2px 4px #eee ;
}
</style>

