
<template>
  <menu :text="bbb"></menu>
  <router-view></router-view> 
</template>
<script>
  module.exports = {
    data:function(){
      return {
        orderList:[{
          name:'在线预约',
          path:'/yylist',
          icon:'../src/static/img/c.png'
        },
        {
          name:'居民缴费',
          path:'/yylist',
          icon:'../src/static/img/b.png'
        },
        {
          name:'网上支付',
          path:'/yylist',
          icon:'../src/static/img/a.png'
        }]
      }
    },
    components:{
      menu:require('../component/header.vue'),
    },
    route:{
      activate:function(transition){
        console.log(transition.to.path);
        transition.next();
      },
      data:function(transition){
        transition.next();
      },
      deactivate:function(transition){
        transition.next();
      }
    },
    methods:{
      test:function(e){
        alert(e.target.nodeName)
      }
    }
  }
</script>
