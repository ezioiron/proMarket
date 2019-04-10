import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: '/login', //登陆界面
      component: () => import("./views/account/Login.vue")
    },
    {
      path: '/home',  //后台主界面
      redirect:'/home/systeminfo',
      component: () => import('./views/home.vue'),
      children:[
        {
          path:"/home/systeminfo",  //系统信息
          component:() => import("./views/account/SystemInfo.vue")
        },
        {
          path:"/home/addaccount",  //添加账号
          component:() => import("./views/account/addAccount.vue")
        },
        {
          path:"/home/manageaccount", //管理账号
          component:() => import("./views/account/manageAccount.vue")
        },
        {
          path:"/home/changepassword",  //修改密码
          component:() => import("./views/account/changePassword.vue")
        },
        {
          path:"/home/addgoods",  //添加商品
          component:() => import("./views/goods/addGoods.vue")
        },
        {
          path:"/home/managegoods", //管理商品
          component:() => import("./views/goods/manageGoods.vue")
        },
        {
          path:"/home/saletotal", //销售统计
          component:() => import("./views/total/saleTotal.vue")
        },
        {
          path:"/home/stocktotal",  //进货统计
          component:() => import("./views/total/stockTotal")
        },
        {
          path:"/home/addstock",  //添加库存
          component:() => import("./views/stock/addstock")
        },
        {
          path:"/home/managestock",  //管理库存
          component:() => import("./views/stock/managestock")
        },
        
      ]
    }
  ]
})
