<template>
  <div id="MyRegister">
    <div class="register">
      <div class="box">
        <p class="table">注册 千寻云</p>
        <br>
        <input v-model="userData.name" type="text" class="input" placeholder="输入昵称(输入后可注册)"></input>
        <input v-model="userData.account" @blur="judge" type="text" class="input" placeholder="输入邮箱账号"></input>
        <div class="smsCode">
          <input v-model="userData.check" class="smsCodeText" placeholder="输入验证码"></input>
          <el-button class="smsCodeBtn">获取验证码</el-button>
        </div>
        <input v-model="userData.password" type="password" class="input" placeholder="输入密码"></input>
        <input type="password" class="input" placeholder="再次输入密码"></input>
        <el-button v-if='userData.name.length!==0' class="my-button">GO!</el-button>
        <el-button v-else @click="toLogin" class="my-button">已有账号, 前去登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRegister",
  data() {
    return {
      userData:{
        name: "",
        account: "",
        password: "",
        check: "",
        portrait: "",
      }
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    testLog() {
      console.log("TestLog")
    },
    judge() {
      this.$axios.get("/users/" + this.userData.account).then(value => {
        console.log(value.data.data);
        return value.data.data;
      })
    },
  },
  mounted() {
    document.title = "MyRegister"
  }
}
</script>

<style lang="less" scoped>
#MyRegister {
  background-image: linear-gradient(to top, #84fab0 0%, #8fd3f4 100%);
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-around; // 内容左右对齐方式

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  .smsCode {
    justify-content: space-between;
  }

  .smsCodeBtn {
    //text-align: center;
    //display: block;
    margin-left: 5%;
    width: 45%;
    height: 50px;
    padding: 12px;
    font: 900 20px '';
    border-radius: 10px;
    //margin-top: 20px;
    color: #fff;
    letter-spacing: 3px;
    background-image: linear-gradient(to left,
    #7028e4,#e5b2ca);

  }

  .smsCodeText {
    //width: 200px;
    width: 45%;
    height: 100%;
    margin-bottom: 20px;
    outline: none;
    border: 0;
    padding: 10px;
    background-color: transparent;
    border-bottom: 3px solid rgb(150, 150, 240);
    font: 900 16px '';
  }

  .input {
    width: 400px;
    height: 100%;
    margin-bottom: 20px;
    outline: none;
    border: 0;
    padding: 10px;
    background-color: transparent;
    border-bottom: 3px solid rgb(150, 150, 240);
    font: 900 16px '';
  }

  .box {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .table {
    //top: 0;
    font: 900 40px '';
    text-align: center;
    letter-spacing: 5px;
    color: #3d3d3d;
  }

  .register {
    //margin-right: 10vw;
    //margin-top: 20vh;
    float: right;
    width: 700px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, .7),
    rgba(255, 255, 255, .5),
    rgba(255, 255, 255, .4));
    /* 使背景模糊化 */
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px #a29bfe;
  }

  .my-button {
    text-align: center;
    display: block;
    height: 50px;
    padding: 12px;
    font: 900 20px '';
    border-radius: 10px;
    margin-top: 20px;
    color: #fff;
    letter-spacing: 3px;
    background-image: linear-gradient(to left,
    #fd79a8, #a29bf6);
  }

}
</style>
