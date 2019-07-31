<template>
  <div class="login-wrap">
    <!--关键字: 导航-->
    <van-nav-bar title="登录" />
    <form action="/" method="POST">
      <van-cell-group>
        <van-field v-validate="'required|phone'" name="phone" :error-message="errors.first('phone')" v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号" />
        <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-button
      :loading="loginLoading"
      type="info" block @click.prevent="handleLogin">登录</van-button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
// import request from '@/utils/request.js'
import { login } from '@/api/user.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      },
      loginLoading: false
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async handleLogin () {
      // 返回的数据data中有两个键，token和refresh_token
      try {
        // 点击按钮校验规则是否通过
        this.$validator.validate().then(async valid => {
          this.loginLoading = true
          if (!valid) {
            this.loginLoading = false
            return
          }
          // 验证通过
          const data = await login(this.user)
          console.log(data)
          this.setUser(data)
          this.loginLoading = false
        })
      } catch (error) {
        this.loginLoading = false
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
    .van-nav-bar {
        background-color: #1989fa;
        .van-nav-bar__title {
            color: #ffffff;
        }
    }
</style>
