<template>
  <div class="top">



    <el-row :gutter="24">

      <el-col :span="20">
        <h3 class="title">
        华联超市管理系统
        <i class=""></i>
        </h3>
      </el-col>

      <el-col :span="4">
        <el-row :gutter="20">
          <!-- 头像 -->
          <el-col :span="6"><div class="avatar"><img style="border-radius:50%" width="100%" height="100%" src="./img/avatar.jpg" alt=""></div></el-col>
          
          <!-- 名字和下拉框 -->
          <el-col :span="14">          
            <el-dropdown>
              <span style="color:#fff;cursor:pointer" class="el-dropdown-link">
                ezio.iron<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  @import "./css/top.less";
</style>
