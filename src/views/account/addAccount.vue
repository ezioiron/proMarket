<template>
  <div class="addAccount">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>添加账号</h2>
      </div>
      <div class="text item">
        
        <el-form style="width:350px;" :model="signForm" status-icon :rules="rules" ref="signForm" label-width="100px" class="demo-ruleForm">
          <!-- 账号 -->
          <el-form-item label="账号" prop="account">
              <el-input type="text" v-model="signForm.account" autocomplete="off"></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item label="密码" prop="password">
              <el-input type="text" v-model="signForm.password" autocomplete="off"></el-input>
          </el-form-item>

          <!-- 确认密码 -->
          <el-form-item label="确认密码" prop="checkPass">
              <el-input type="text" v-model="signForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <!-- 选择分组 -->
          <el-form-item label="选择用户组" prop="userGroup">
              <el-select v-model="signForm.userGroup" placeholder="请选择用户组">
              <el-option label="超级用户" value="超级用户"></el-option>
              <el-option label="普通用户" value="普通用户"></el-option>
              </el-select>
          </el-form-item>

          <el-form-item>
              <el-button @click="submitForm()">添加</el-button>
              <el-button @click="resetForm()">重置</el-button>
          </el-form-item>

        </el-form>

      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    const checkPassword = (rule,value,callback) => {
      if(value === ""){
        callback(new Error("请输入密码"))
      }else if(value.length<6 || value.length>12){
        callback(new Error("请输入6~12位密码"))
      }else{
        if(this.signForm.checkPass !== ""){  //如果确认密码不为空就触发
          this.$refs.signForm.validateField("checkPass") //验证密码是否一致
        }
        callback()
      }
    }

    const confirmPassword = (rule,value,callback) => {
      if(value===""){
        callback(new Error("确认密码不能为空"))
      }else if(value!== this.signForm.password){
        callback(new Error("两次输入的密码不一致"))
      }else{
        callback()
      }
    }

    return {
      signForm:{
        account:"",
        password:"",
        checkPass:"",
        userGroup:""
      },
      rules:{
        account:[
          {required:true,message:"请输入账号",trigger:"blur"},
          {min:4,max:10,message:"账号长度必须为4~10位",trigger:"blur"}
        ],
        password:[
          {required:true,validator:checkPassword,trigger:"blur"},
        ],
        checkPass:[
          {required:true,validator:confirmPassword,trigger:"blur"},
        ],
        userGroup:[
          {required:true,message:"请选择用户组",trigger:"change"}
        ]
      }
    }
  },
  methods:{
    resetForm(){
      this.$refs.signForm.resetFields()
    },
    submitForm(){
      this.$refs.signForm.validate((valid) => {
        if(valid){
          let params = {
            account:this.signForm.account,
            password:this.signForm.password,
          }
          alert("添加成功")
          this.$router.push("/home/manageaccount")
        }else{
          return
        }
      })
    }
  }
};
</script>

<style>

.el-input__inner{
  padding-right: 65px !important;
}
</style>
