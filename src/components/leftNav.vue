<template>
  <div class="left-nav">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#97FFFF"
      unique-opened
      router
    >

    <!-- 导航 -->
      <el-submenu :index=" (index + 1)+'' " v-for="(item , index) in menu" :key="index">
        <template slot="title">
          <i :class="item.iconClass"></i>
          <span>{{item.title}}</span>
        </template>

        <!-- 二级导航 -->
          <el-menu-item :index="submenu.path" v-for="(submenu,index) in item.children" :key="index">
          {{submenu.subtitle}}
          </el-menu-item>
      </el-submenu>

      
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menu:[
        { //系统管理
          iconClass:"el-icon-tickets",
          title:"系统",
          children:[
            {path:"/home/systeminfo",subtitle:"系统管理"}
          ]
        },
        { //账号
          iconClass:"el-icon-news",
          title:"账号",
          children:[
            {path:"/home/addaccount",subtitle:"添加账号"},
            {path:"/home/manageaccount",subtitle:"管理账号"},
            {path:"/home/changepassword",subtitle:"修改密码"}
          ]
        },
        { //商品
          iconClass:"el-icon-goods",
          title:"商品",
          children:[
            {path:"/home/addgoods",subtitle:"添加商品"},
            {path:"/home/managegoods",subtitle:"管理商品"}
          ]
        },
        { //统计
          iconClass:"el-icon-edit-outline",
          title:"统计",
          children:[
            {path:"/home/saletotal",subtitle:"销售统计"},
            {path:"/home/stocktotal",subtitle:"进货统计"}
          ]
        },
        { //进货
          iconClass:"el-icon-edit-outline",
          title:"进货",
          children:[
            {path:"/home/addstock",subtitle:"添加库存"},
            {path:"/home/managestock",subtitle:"库存管理"}
          ]
        },
      ]
    }
  }
};
</script>

<style lang="less">
@import "./css/leftNav.less";
</style>
