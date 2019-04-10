<template>
  <div class="home">
    <el-container>
            <!-- 左侧 -->
            <el-aside width="200px">
              <leftNav></leftNav>
            </el-aside>

            <!-- 右侧 -->
            <el-container>
                <!-- 头 -->
                <el-header><top></top></el-header>
                <!-- 中 -->
                <el-main><router-view></router-view></el-main>
                <!-- 尾 -->
                <el-footer><bottom></bottom></el-footer>
            </el-container>

        </el-container>   
  </div>
</template>

<script>
import leftNav from "@/components/leftNav.vue"
import top from "@/components/top.vue"
import bottom from "@/components/bottom.vue"
export default {

  components:{
    leftNav,
    top,
    bottom
  }
}
</script>

<style lang="less">
@import "./home.less";
</style>
