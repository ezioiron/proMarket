<template>
  <div class="saleTotal">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>商品管理</h2>
      </div>

      <!-- 搜索栏 -->
      <div>
        <el-form :inline="true" :model="search" class="demo-form-inline">
          <el-form-item>
            <el-select v-model="search.class" placeholder="选择分类">
              <el-option label="日用" value="日用"></el-option>
              <el-option label="数码" value="数码"></el-option>
              <el-option label="服装" value="服装"></el-option>
              <el-option label="母婴" value="母婴"></el-option>
            </el-select>
          </el-form-item>

          <span style="color:#777;line-height:40px;font-size:14px">关键字:</span>

          <el-form-item>
            <el-input v-model="search.name"></el-input>
          </el-form-item>

          <span style="color:#777;line-height:40px;font-size:14px">(商品名称,条形码)&emsp;</span>

          <el-form-item>
            <el-button size="small" type="success">查询</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 商品详情 -->
      <div class="text item">
        <el-table
          ref="multipleTable"
          :data="stock"
          tooltip-effect="dark"
          style="width: 100%"
         
        >
          <!-- 条形码 -->
          <el-table-column prop="code" label="商品条形码"></el-table-column>

          <!-- 商品名称 -->
          <el-table-column prop="name" label="商品名称"></el-table-column>

          <!-- 进价 -->
          <el-table-column prop="inprice" label="进价" show-overflow-tooltip></el-table-column>

          <!-- 入库 -->
          <el-table-column prop="instock" label="入库" show-overflow-tooltip></el-table-column>

          <!-- 库存 -->
          <el-table-column prop="stock" label="库存" show-overflow-tooltip></el-table-column>

          <!-- 已售 -->
          <el-table-column prop="saled" label="已售" show-overflow-tooltip></el-table-column>


          <!-- 操作 -->
          <el-table-column label="操作">
            <template>
              <!-- 修改按钮 -->
              <el-button size="mini" type="primary">
                <i class="el-icon-edit"></i>
              </el-button>

              <!-- 删除按钮 -->
              <el-button size="mini" type="danger">
                <i class="el-icon-delete"></i>
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stock:[
        { code:"62165123", name:"优乐美", inprice:2.6, instock:55 ,stock:134 , saled:24 },
        { code:"68453124", name:"海飞丝", inprice:34, instock:37 ,stock:156 , saled:45 },
      ],
      search:{
        class:"",
        name:""
      }
    };
  }
};
</script>

<style>
</style>

