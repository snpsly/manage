<template>
  <div class="loginform">
    <el-card class="box-card login-card">
      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="login-container"
      >
        <h3 class="login_title">系统登陆</h3>

        <el-form-item
          label="用户名"
          label-width="80px"
          prop="username"
          class="username"
        >
          <el-input
            type="input"
            v-model="form.username"
            auto-complete="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          label-width="80px"
          prop="password"
          class="password"
        >
          <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div class="login">
          <el-button type="primary" @click="login" class="login_submit"
            >登陆</el-button
          >
        </div>
      </el-form></el-card
    >
  </div>
</template>

<script>
import { getloginuser } from '@/api/login'
export default {
  name: 'Vue2projectLoginForm',

  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名长度不能小于三位',
            trigger: 'blur'
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },

  mounted() {},

  methods: {
    login() {
      getloginuser(this.form).then((res) => {
        if (res.data.data.message === '获取成功') {
          let data = JSON.stringify(this.form)
          localStorage.setItem('userName', data)
          this.setCookie('userName', data)
          this.$router.push({ name: 'home' })
        } else {
          alert('登录失败，用户密码为123')
        }
      })
    },
    setCookie(name, value, seconds) {
      seconds = seconds || 0 //seconds有值就直接赋值，没有为0
      var expires = ''
      if (seconds != 0) {
        //设置cookie生存时间
        var date = new Date()
        date.setTime(date.getTime() + seconds * 1000)
        expires = '; expires=' + date.toGMTString()
      }
      document.cookie = name + '=' + escape(value) + expires + '; path=/' //转码并赋值
    }
  }
}
</script>
<style>
.login-card {
  border-radius: 20px;
}
</style>
<style lang="scss" scoped>
.login_title {
  text-align: center;
  color: #505458;
}
.login_submit {
  margin: 0 auto;
}
.loginform {
  margin: 30px auto;
  width: 400px;
}
.login {
  display: flex;
  justify-content: center;
}
</style>