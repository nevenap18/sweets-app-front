<template>
  <div class="login">
    <div class="login-form-holder">
      <form @submit.prevent class="form" >
        <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="username" class="form-control" placeholder="Enter Username"/>
        </div>
        <div class="form-group">
            <label>Password:</label>
            <input type="password" v-model="password" class="form-control" placeholder="Enter Password"/>
        </div>

        <div class="form-group">
            <Button type="submit" styleType="Filled" label="Login" class="submit" @click.native="sendCredentials"/>
        </div>
        <span> {{ loginMessage }} </span>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Api from '@/helpers/Api'

export default {
  name: 'Login',
  components: {
    Button
  },
  data () {
    return {
      username: '',
      password: '',
      loginMessage: ''
    }
  },
  methods: {
    sendCredentials () {
      Api().post('/auth/login', {
        username: this.username,
        password: this.password
      }).then((response) => {
        this.loginMessage = response.data.status === 'error' ? 'Login Unsuccessful!!!' : 'Login Successful!!!'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  min-height: calc(100vh - 110px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-form-holder {
  width: 70%;

  .form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 30px 10px;
    border: 1px solid #BD79B6;
    border-radius: 8px;

    .form-group{
      margin-bottom: 20px;
      min-width: 300px;
      display: flex;
      justify-content: space-between;
    }

  }
}
.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cart-item {
  width: 80%;
  min-width: 600px;
  min-height: 200px;
  padding: 20px 15px;
  border-bottom: 1px solid #BD79B6;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.button-order {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    width: 100px;
    height: 50px;
    font-size: 17px;
  }
}

</style>
