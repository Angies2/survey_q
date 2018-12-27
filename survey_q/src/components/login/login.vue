<template>
<div>
<div class="lty-head-wrap">
  <div class="lty-logo">
    <img src="/survey/static/img/logo.jpg" height="43" width="122" alt="林同棪">
  </div>
  <div class="lty-h-title">林同棪国际BIM实施体系成熟度调研系统</div>
</div>
<div class="lty-content-wrap">
    <div class="lty-content">
        <div class="lty-cnt-center">
          <div class="lty-cnt-cr">
            <p class="lty-welcom">欢迎登录</p>
              <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="user">
                  <el-input type="input" v-model="ruleForm2.user" auto-complete="off"></el-input>
                  <i class="lty-icon-user"></i>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">登 陆</el-button>
                  <el-button @click="resetForm('ruleForm2')">重 置</el-button>
                </el-form-item>
              </el-form>
          </div>
        </div>
        <div class="lty-footer">
          林同棪国际工程咨询(中国)有限公司&nbsp;&nbsp;&nbsp;版权所有©2018 
        </div>
    </div>
    
</div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm2: {
          password: '',
          user:''
        },
        rules2: {
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur,change' }
          ],
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur,change' }
          ]
        }
      };
    },
    created(){

    },
    methods:{
      submitForm(formName) {
        var _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({path:"/admin"});
            // this.$http.post("/login",this.ruleForm2).then(function(res){
            //   var msg = res.body
            //   if(msg.success){
            //       sessionStorage.setItem('user',_this.ruleForm2.user)
            //       this.$router.push({path:"/admin"})
            //   }else{
            //     _this.$message({
            //       message: msg.message,
            //       type: 'error',
            //       duration:2000
            //     });
            //   }
            // });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lty-head-wrap{
  width: 1094px;
  margin: 0 auto;
  padding: 20px 0;
}
.lty-h-title{
  float: left;
  color: #666;
  font-size: 18px;
  padding-top: 22px;
}
.lty-logo{
  width: 122px;
  height: 43px;
  float: left;
  margin: 8px 30px 0 10px;
}
.lty-content-wrap{
  width: 100%;
  margin-top: 60px;
  background-color:#fff;
}
.lty-content{
  width: 100%;
  height: 600px;
  background:url('./bg.jpg');
}
.lty-content-title{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #d8d8d8;
  text-align: center;
  color: #409EFF;
}

.lty-li{
  width:370px;
  overflow: hidden;
}
.lty-li-l{
  width: 80px;
  float: left;
}
.lty-li-r{
  float: left;
}
.lty-cnt-center{
  width: 1094px;
  height: 600px;
  margin: 0 auto;
}
.lty-cnt-cr{
  opacity:0.9;
  float: left;
  background-color: #fff;
  width: 460px;
  overflow: hidden;
  padding:10px 40px 30px 0;
  margin: 130px 317px 0 290px;
  border-radius: 8px;
}
.lty-welcom{
  text-align: center;
  padding: 25px;
  font-size: 20px;
}
.lty-footer{
  color: #666;
  font-size: 14px;
  text-align: center;
  padding-top: 30px;
}


</style>