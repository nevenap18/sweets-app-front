<template>
  <div class="navigation">
    <Logo class="logo"/>
    <router-link v-if="this.$route.name !== 'Home'" :to="link"> {{ title }} </router-link>
    <div class="cart-login">
      <Button label="Cart" styleType="Outlined" @click.native="$router.push({name: 'Cart'})"/>
      <Button label="Login" styleType="Filled" @click.native="$router.push({name: 'Login'})"/>
    </div>
  </div>
</template>

<script>
import Button from './Button'
import Logo from './Logo'

export default {
  name: 'Navigation',
  components: {
    Button,
    Logo
  },
  props: {
    title:  {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">

.navigation {
   height: 100px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #ffd1dc;
   border-bottom: 1px solid rebeccapurple;

   .logo {
     width: 110px;
     cursor: pointer;
     margin-left: 40px;
   }

   .cart-login {
     width: 180px;
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin-right: 40px;
   }
}

</style>
