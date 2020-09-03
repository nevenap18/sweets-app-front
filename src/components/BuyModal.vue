<template>
  <div class="modal">
    <span> Please enter quantity: </span>
    <div>
      <input v-model.number="quantity" placeholder="Enter quantity"/>
      <span>{{ sweet.unit }}</span>
    </div>
    <div class="buttons">
      <Button label="Buy" styleType="Filled" @click.native="addToCart"/>
      <Button label="Cancel" styleType="Filled" @click.native="$emit('cancel-buy')"/>
    </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'BuyModal',
  components: {
    Button
  },
  props: {
    sweet: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      quantity: this.sweet.unit === 'pcs' ? 1 : 100
    }
  },
  computed: {
    quantityUnit () {
      if (this.sweet.unit === 'gr'){
        return this.quantity/100
      } else {
        return this.quantity
      }
    }
  },
  methods: {
    addToCart () {
      if (this.quantityUnit === 0) {
        return
      }
      const cartItem = {
        sweet: this.sweet,
        quantity: this.quantityUnit,
        price: (this.sweet.price * this.quantityUnit)
      }

      let array = JSON.parse(localStorage.getItem('cart'));

      if (array == undefined) {
          array = [];
      }
      const arrayItem = array.find(item => item.sweet.sweetId === cartItem.sweet.sweetId);
      if (arrayItem) {
        arrayItem.quantity += cartItem.quantity
        arrayItem.price = arrayItem.price + cartItem.price
      } else {
        array.push(cartItem)
      }
      const key = 'cart'
      const storageItem = JSON.stringify(array)
      localStorage.setItem(key, storageItem)
      this.$emit('cancel-buy')
    }
  }
}
</script>

<style scoped lang="scss">

.modal {
  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px solid #BD79B6;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    margin-right: 15px;
  }


  .buttons {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 30px;
    width: 70%;
  }
}

</style>
