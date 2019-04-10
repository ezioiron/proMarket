<template>
  <div class="systemInfo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>系统信息</h2>
      </div>
      <div class="text item">
        <el-row :gutter="24">
          <el-col :span="23">
              <div class="msg">
                <i class="el-icon-info"></i>
                商品总数:5 , 已销售的总金额:890.00 , 库存商品总价:1235.82
              </div> 
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="23">

              <div class="msg">
                <i class="el-icon-info"></i> 
                导入数据
              </div> 

          </el-col>
        </el-row>



        <el-row :gutter="24">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <h4>销售排行</h4>
              </div>
              <div class="text item">
                    <el-table
                      :data="saletop"
                      stripe
                      style="width: 100%">
                      <el-table-column
                        prop="name"
                        label="商品名称"
                        width="200">
                      </el-table-column>
                      <el-table-column
                        prop="count"
                        label="销量"
                        width="200">
                      </el-table-column>
                    </el-table>
              </div>
            </el-card>
          </el-col>

          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <h4>缺货的商品</h4>
              </div>
              <div class="text item">
                    <el-table
                      :data="lack"
                      stripe
                      style="width: 100%">
                      <el-table-column
                        prop="name"
                        label="商品名称"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="stock"
                        label="销量"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="operate"
                        label="操作"
                        width="150">
                      </el-table-column>
                    </el-table>
              </div>
            </el-card>
          </el-col>
        </el-row>


      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      saletop:[
        { name:"海飞丝",count:8 },
        { name:"茅台",count:6 },
        { name:"龙凤呈祥",count:5 },
        { name:"龙凤呈祥",count:7 }
      ],
      lack:[
        { name:"优乐美",stock:8,operate:"入库"},
        { name:"麦丽素",stock:6,operate:"入库"}
      ]
    }
  }
};
</script>

<style lang="less">
@import "./css/systeminfo.less";


</style>
