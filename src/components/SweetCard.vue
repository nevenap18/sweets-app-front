<template>
  <div class="sweet-card">
    <img alt="sweet-image" :src="getImgPath" class="sweet-image" @click="goToSweetInfo(sweet)">
    <span class='title' @click="goToSweetInfo(sweet)"> {{ sweet.name }} </span>
    <div class='buttons'>
      <Button styleType='Filled' :label='"Buy"' :type='"button"' @click.native="$emit('open-buy-modal', sweet)"/>
      <Button styleType='Outlined' :label='"More Info"' :type='"button"' @click.native="goToSweetInfo(sweet)"/>
    </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'Home',
  components: {
    Button
  },
  props: {
    sweet: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToSweetInfo (sweet) {
      this.$router.push({name: 'SweetInfo', params: {id: sweet.sweetId}})
    }
  },
  computed: {
    getImgPath() {
      if(this.sweet.photos.length){
        return `http://localhost:3000/assets/photos/${this.sweet.photos[0].imagePath}`
      } else {
        return 'https://www.beautycolorcode.com/ffd1dc-400x400.png'
      }
    }
  }
}
</script>

<style scoped lang="scss">

.sweet-card {
  width: 200px;
  min-height: 200px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
    margin: 15px 20px;

  .sweet-image {
    width: 200px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .title {
    font-size: 14px;
    color: #BD79B6;
    text-align: center;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    align-content: center;
    height: 30px;
    width: 100%;
  }
}

</style>
