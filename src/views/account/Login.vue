<template>
  <div class="login">
    <div class="login-wrap">
      <div class="title">
        <span class="el-icon-menu"></span>
        超市管理系统
      </div>

    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <!-- 账号 -->
        <el-form-item label="账号" prop="account">
            <el-input type="text" v-model="loginForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
            <el-input type="text" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="text" v-model="loginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
            <el-button @click="resetForm()">重置</el-button>
        </el-form-item>

      </el-form>

    </div>
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
        if(this.loginForm.checkPass !== ""){  //如果确认密码不为空就触发
          this.$refs.loginForm.validateField("checkPass") //验证密码是否一致
        }
        callback()
      }
    }

    const confirmPassword = (rule,value,callback) => {
      if(value===""){
        callback(new Error("确认密码不能为空"))
      }else if(value!== this.loginForm.password){
        callback(new Error("两次输入的密码不一致"))
      }else{
        callback()
      }
    }

    return {
      loginForm:{
        account:"",
        password:"",
        checkPass:""
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
        ]
      }

    }
  },

  methods:{
    resetForm(){
      this.$refs.loginForm.resetFields()
    },
    submitForm(){
      this.$refs.loginForm.validate((valid) => {
        if(valid){
          let params = {
            account:this.loginForm.account,
            password:this.loginForm.password,
          }
          alert("登陆成功")
          this.$router.push("/home")
        }else{
          return
        }
      })
    }
  }

}
</script>








<style lang="less">
  @import "./css/login.less";
</style>

