<template>
  <div class="cart">
    <div v-if="cart != undefined" class='cart-holder'>
      <div class="cart-item" v-for="(item, index) in cart" :key="index">
        <CartItem :sweet="item.sweet" :quantity="item.quantity" :price="item.price"/>
      </div>
    </div>
    <div class="message" v-else><span>{{ message }}</span></div>
    <div class="button-order">
      <Button :label="'Order'" styleType="Filled" @click.native="sendCartData"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import CartItem from '@/components/CartItem'
import Api from '@/helpers/Api'

export default {
  name: 'Cart',
  components: {
    Button,
    CartItem
  },
  data () {
    return {
      cart: [],
      message: '',
      cartData: []
    }
  },
  methods: {
    sendCartData () {
      const payload = {
        sweets: this.cartData
      }
      Api().post('/api/cart/createCart', payload)
    }
  },
  created () {
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.cartData = this.cart.map(item => {
      const obj = {}
      obj.sweetId = item.sweet.sweetId
      obj.quantity = item.quantity
      obj.price = item.price
      return obj
    });

    if (this.cart == undefined) {
      this.message = 'Cart is empty'
    }
  }
}
</script>

<style scoped lang="scss">
.cart {
  min-height: calc(100vh - 110px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-holder {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;;
  width: 70%;
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
