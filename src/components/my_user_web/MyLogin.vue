<template>
  <div id="MyLogin">
    <div class="wrap">
      <div class="box-top">
        <div class="image"></div>
      </div>
      <div class="box-bottom">
        <h2>羡林i</h2>
        <span>后端, 中间件, 前端</span>
      </div>
      <div class="box-bottom2">
        <ul style="list-style: none">
          <li>QQ:2683971783</li>
          <li>WX:Y_xianlin</li>
          <li>Gitee:xianlin-i</li>
        </ul>
      </div>
    </div>
    <div class="wrap">
      <div class="box-top">
        <div class="imageShu"></div>
      </div>
      <div class="box-bottom">
        <h2>舒芯芯</h2>
        <span>硬件, 前端</span>
      </div>
      <div class="box-bottom2">
        <ul style="list-style: none">
          <li>QQ:3182363613</li>
          <li>WX:shuxinxinyyds</li>
          <li>Gitee:ShuXinXin_Luck</li>
        </ul>
      </div>
    </div>
    <div class="login">
      <div class="box">
        <p class="table">登录 千寻云</p>
        <br>
        <input type="text" v-model="userData.account" placeholder="邮箱账号(输入后可登录)">
        <input type="password" v-model="userData.password" placeholder="平台密码">
        <el-button v-if='userData.account.length!==0' @click="onSubmit" class="button-login">GO!</el-button>
        <el-button v-else class="button-login" @click="toRegister">没有账号, 前去注册</el-button>
        <br>
        <div class="below">
          <el-checkbox v-model="userData.lasting">30天免登录</el-checkbox>
          <el-link class="forget">忘记密码?</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data() {
    return {
      userData: {
        account: '',
        password: '',
        lasting: false
      },
    }
  },
  methods: {
    testLog() {
      console.log("TestLog")
    },
    toRegister() {
      this.$router.push('/register')
    },
    onSubmit() {
      let _this = this
      // if (_this.userData.password.length===0){
      //   _this.loginRemind();
      // }
      this.$axios.post('/users', _this.userData).then(function (response) {
        if (response.data.code === 200) {
          _this.$message.success('登录成功, 正在跳转...')
          // console.log(response.data.data)
          // 将token写入本地储存
          localStorage.setItem('token', response.data.msg)
          // 将用户信息写入本地储存
          localStorage.setItem('UserData', JSON.stringify(response.data.data))
          setTimeout(function () {
            // location.href = '/' // 跳转到首页
          }, 800)
        } else {
          _this.$message.error('登录失败')
        }
      })
    },
    loginRemind() {
      const h = this.$createElement
      this.$notify({
        title: '您尚未登录, 请先登录',
        message: h('i', {style: 'color: teal'}, '登录后即可正常访问其他页面, 如果您还没有账号, 请先注册;'),
      })
    },
  },
  mounted() {
    document.title = "MyLogin"
    this.loginRemind();
  }
}
</script>

<style lang="less" scoped>
#MyLogin {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%); // 设置背景颜色
  display: flex;// 弹性布局
  justify-content: space-around; // 内容左右对齐方式
  align-items: center; // 上下中心对齐
  height: 100vh; // 设置组件占满屏幕

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  /* -------------------------------------------- */
  /* 外层容器 */
  /* -------------------------------------------- */

  .wrap {
    position: relative;
    //align-items: center;
    width: 330px;
    height: 260px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgb(0, 0, 0, .5);
    overflow: hidden;
    border-radius: 0 0 30px 30px;
  }

  /* -------------------------------------------- */
  /* 上部分的块 */
  /* -------------------------------------------- */

  .box-top {
    position: relative;
    width: 330px;
    height: 130px;
    background-color: rgb(180, 180, 210);
    display: flex;
    justify-content: center;
    transition: .5s;
  }

  .box-top::after {
    content: '';
    width: 40px;
    height: 40px;
    clip-path: polygon(50% 40%, 0 0, 100% 0);
    background-color: rgb(180, 180, 210);
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -38px;
    z-index: 999;
  }

  .imageShu {
    position: absolute;
    top: 20px;
    width: 90px;
    height: 90px;
    background-image: url("/public/img/舒芯芯.jpg");
    background-size: cover;
    border: 5px solid rgb(140, 140, 170);
    transition: .5s;
  }

  .image {
    position: absolute;
    top: 20px;
    width: 90px;
    height: 90px;
    background-image: url("/public/img/羡林i.jpg");
    background-size: cover;
    border: 5px solid rgb(140, 140, 170);
    transition: .5s;
  }

  /* -------------------------------------------- */
  /* 下部分的两个大块 */
  /* -------------------------------------------- */

  .box-bottom, .box-bottom2 {
    position: absolute;
    top: 130px;
    width: 330px;
    height: 130px;
    text-align: center;
    transition: .5s;
  }

  .box-bottom h2 {
    display: block;
    margin: 30px 0 10px 0;
    font: 800 28px 'Hobo Std';
  }

  .box-bottom span {
    font: 400 24px 'Giddyup Std';
  }

  .box-bottom h2::after {
    content: '';
    display: block;
    width: 200px;
    height: 2px;
    background-color: #000;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 4px);
  }

  /* -------------------------------------------- */
  /* 下部分的第二个大块 */
  /* -------------------------------------------- */

  .box-bottom2 {
    top: 300px;
    height: 220px;
  }

  .box-bottom2 li {
    margin: 25px;
    font: 800 20px 'OCR A Std';
    transition: .2s;
  }

  .wrap:hover .box-top {
    height: 50px;
  }

  .wrap:hover .image {
    width: 35px;
    height: 35px;
    border-width: 3px;
    transform: translate(-140px, -15px);
  }

  .wrap:hover .imageShu {
    width: 35px;
    height: 35px;
    border-width: 3px;
    transform: translate(-140px, -15px);
  }

  .wrap:hover .box-bottom {
    top: 300px;
  }

  .wrap:hover .box-bottom2 {
    top: 50px;
  }

  li:hover {
    color: rgb(100, 160, 160)
  }

  .below {
    display: flex;
    justify-content: space-between;
    margin-right: 5px;
    margin-left: 5px;
  }

  .button-login {
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

  .login {
    //margin-right: 10vw;
    //margin-top: 20vh;
    float: right;
    width: 650px;
    height: 450px;
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

  .table {
    //top: 0;
    font: 900 40px '';
    text-align: center;
    letter-spacing: 5px;
    color: #3d3d3d;
  }

  .box {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .box input {
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


}
</style>
