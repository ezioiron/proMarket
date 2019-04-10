<template>
  <div class="changePassword">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>修改密码</h2>
      </div>
      <div class="text item">
        <el-form
          style="width:350px;"
          :model="changePass"
          status-icon
          :rules="rules"
          ref="changePass"
          label-width="100px"
          class="demo-ruleForm"
        >
          <!-- 原密码 -->
          <el-form-item label="原密码" prop="old">
            <el-input type="text" v-model="changePass.old" autocomplete="off"></el-input>
          </el-form-item>

          <!-- 新密码 -->
          <el-form-item label="新密码" prop="new">
            <el-input type="text" v-model="changePass.new" autocomplete="off"></el-input>
          </el-form-item>

          <!-- 确认新密码 -->
          <el-form-item label="确认新密码" prop="checkNew">
            <el-input type="text" v-model="changePass.checkNew" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button @click="submitForm()">修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const newpass = (rule,value,callback) => {
      if(value === ""){
        callback(new Error("请输入密码"))
      }else if(value.length<6 || value.length>12){
        callback(new Error("请输入6~12位密码"))
      }else{
        if(this.changePass.new !== ""){  //如果确认密码不为空就触发
          this.$refs.changePass.validateField("checkNew") //验证密码是否一致
        }
        callback()
      }
    }

    const confirmNewpass = (rule,value,callback) => {
      if(value===""){
        callback(new Error("确认密码不能为空"))
      }else if(value!== this.changePass.new){
        callback(new Error("两次输入的密码不一致"))
      }else{
        callback()
      }
    }

    return {
      changePass: {
        old: "",
        new: "",
        checkNew: ""
      },
      rules: {
        old: [
          { required: true, trigger: "blur" }
        ],
        new: [
          { required: true, validator: newpass, trigger: "blur" }
        ],
        checkNew: [
          { required: true, validator: confirmNewpass, trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm(){
      this.$refs.changePass.validate((valid) => {
        if(valid){
          let params = {
            newpassword:this.changePass.new,
          }
          alert("修改成功")
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
</style>

