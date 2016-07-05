var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
var App = Vue.extend({});
var router = new VueRouter();
require('routers')(router);
sessionStorage.removeItem('index');
router.start(App, '#app');
