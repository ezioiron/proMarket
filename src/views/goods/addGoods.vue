<template>
  <div class="addGoods">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>添加商品</h2>
      </div>
      <div class="text item">


        <el-form
          style="width:400px"
          :model="addForm"
          :rules="rules"
          ref="addForm"
          label-width="100px"
          class="demo-addForm"
        >

          <el-form-item label="所属分类" prop="class">
            <el-select v-model="addForm.class" placeholder="---选择分类---">
              <el-option label="日用" value="日用"></el-option>
              <el-option label="数码" value="数码"></el-option>
              <el-option label="服装" value="服装"></el-option>
              <el-option label="母婴" value="母婴"></el-option>
            </el-select>
          </el-form-item>


          <el-form-item label="商品条形码" prop="code">
            <el-input style="width:150px" v-model="addForm.code"></el-input>
            &emsp;<el-button size="mini" type="warning" round>  生成条形码</el-button>
          </el-form-item>

          <el-form-item style="width:250px" label="商品名称" prop="name">
            <el-input v-model="addForm.name"></el-input>
          </el-form-item>

          <el-form-item label="商品售价" prop="saleprice">
            <el-input style="width:150px" v-model="addForm.saleprice"></el-input> 元
          </el-form-item>

          <el-form-item style="margin-bottom:5px" label="市场价" prop="marketprice">
            <el-input style="width:150px" v-model="addForm.marketprice"></el-input> 元
            <p style="color:#888;font-size:12px">默认市场价位售价的1.2倍</p>
          </el-form-item>

          <el-form-item label="商品进价" prop="inprice">
            <el-input style="width:150px" v-model="addForm.inprice"></el-input> 元
          </el-form-item>

          <el-form-item label="入库数量" prop="count">
            <el-input  style="width:150px" v-model="addForm.count"></el-input>
          </el-form-item>

          <el-form-item style="margin-bottom:5px" label="商品重量" prop="weight">
            <el-input style="width:150px" v-model="addForm.weight"></el-input>
            <p style="color:#888;font-size:12px">记重商品单位为千克</p>
          </el-form-item>

          <el-form-item label="商品单位" prop="unit">
            <el-input style="width:150px" v-model="addForm.unit"></el-input>
          </el-form-item>


            <el-form-item label="会员优惠">
              <el-radio-group v-model="addForm.vipdiscount">
                <el-radio label="享受"></el-radio>
                <el-radio label="不享受"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="是否促销">
              <el-radio-group v-model="addForm.promotion">
                <el-radio label="启用"></el-radio>
                <el-radio label="禁用"></el-radio>
              </el-radio-group>
            </el-form-item>

          <el-form-item  label="商品简介" prop="desc">
            <el-input style="width:300px" type="textarea" v-model="addForm.desc"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="add()">立即添加</el-button>
          </el-form-item>

        </el-form>



      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      addForm:{
        class:"",
        code:"",
        name:"",
        saleprice:"",
        marketprice:"",
        inprice:"",
        count:"",
        weight:"",
        unit:"",
        vipdiscount:"",
        promotion:""
      },
      rules:{
        class:[
          {required:true,message:"请选择分类",trigger:"change"}
        ],
        code:[
          {required:true,message:"请输入条形码",trigger:"blur"}
        ],
        name:[
          {required:true,message:"请输入商品名称",trigger:"blur"}
        ],
        saleprice:[
          {required:true,message:"请输入商品售价",trigger:"blur"}
        ],
      }
    }
  },
  methods:{
    add(){
      this.$refs.addForm.validate((valid) => {
        if(valid){
          alert("添加成功")
          this.$router.push("/home/managegoods")
        }else{
          return
        }
      })
    }
  }
};
</script>

<style>
</style>
