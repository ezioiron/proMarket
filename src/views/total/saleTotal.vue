<template>
  <div class="saleTotal">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>销售统计</h2>
      </div>

        <el-form :inline="true" ref="form" :model="form" label-width="80px">

          <el-form-item label="时间">
            <el-col :span="10">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="0.5">&emsp;—&emsp;</el-col>

            <el-col :span="10">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-select v-model="form.total" placeholder="销售情况统计">
              <el-option label="今年" value="去年"></el-option>
              <el-option label="去年" value="今年"></el-option>
            </el-select>
          </el-form-item>

           <el-form-item>
            <el-button type="success" @click="onSubmit">提交</el-button>
          </el-form-item>

        </el-form>

      <div class="text item"></div>

    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{
        date1:"",
        date2:"",
        total:""
      }
    }
  }
};
</script>

<style>
</style>
