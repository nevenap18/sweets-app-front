<template>
  <div class="item">
    <div class="image">
      <img :src="getImgPath" alt="cart item" class="sweet-image"/>
    </div>
    <div class="info">
      <div class="top-info">
        <span>{{ sweet.name }}</span>
        <span>{{ getQuantity }}{{ sweet.unit }}</span>
        <span>{{ price }}rsd</span>
      </div>
      <div class="bottom-info">
        <div class="description">
          <span>{{ sweet.description }}</span>
        </div>
        <div class="info-button">
          <Button label="More Info" styleType="Outlined" @click.native="$router.push({ name: 'SweetInfo', params: { id: sweet.sweetId } })"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'CartItem',
  props: {
    sweet: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  components: {
    Button
  },
  computed: {
    getImgPath() {
      if(this.sweet.photos.length){
        return `http://localhost:3000/assets/photos/${this.sweet.photos[0].imagePath}`
      } else {
        return 'https://www.beautycolorcode.com/ffd1dc-400x400.png'
      }
    },
    getQuantity() {
      if(this.sweet.unit === 'gr') {
        return this.quantity * 100
      }  else {
        return this.quantity
      }
    }
  }
}
</script>

<style scoped lang="scss">

.item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .image {
    height: 200px;
    flex-basis: 30%;

    img {
      height: 100%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    flex-basis: 60%;
    margin-left: 15px;
    height: 200px;

    .top-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 25%;
      border-bottom: 1px solid #BD79B6;
      width: 100%;
    }

    .bottom-info {
      height: 60%;
      width: 100%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .info-button {
        align-self: flex-end;
      }
    }

  }
}
</style>
