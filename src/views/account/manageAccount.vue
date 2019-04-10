<template>
  <div class="manageAccount">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>账号管理</h2>
      </div>
      <div class="text item">
        <el-table
          ref="multipleTable"
          :data="account"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <!-- 选择 -->
          <el-table-column type="selection" width="50"></el-table-column>

          <!-- 账号 -->
          <el-table-column prop="account" label="账号" width="300"></el-table-column>

          <!-- 用户组 -->
          <el-table-column prop="userGroup" label="用户组" width="300"></el-table-column>

          <!-- 日期 -->
          <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>

          <!-- 操作 -->
          <el-table-column label="操作">
            <template>
              <!-- 修改按钮 -->
              <el-button size="mini" type="primary" @click="edit()">
                <i class="el-icon-edit"></i>
                修改
              </el-button>
              <!-- 删除按钮 -->
              <el-button size="mini" type="danger" @click="del()">
                <i class="el-icon-delete"></i>
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <div style="margin-top: 20px">
          <el-button type="danger" @click="toggleSelection()">批量删除</el-button>
          <el-button type="success" @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      account:[
        { account:"老杨", userGroup:"超级用户", date:"2019-1-9"},
        { account:"老咸", userGroup:"普通用户", date:"2019-3-3"},
      ]
    }
  }
}
</script>

<style>
</style>

