<template>
  <div v-if="isDataReady" class="sweet-info">
    <div class="info-wrapper">
      <div class="image">
        <img alt="sweet-image" src="https://www.beautycolorcode.com/ffd1dc-400x400.png"/>
      </div>
      <div class="info">
        <div class="top-info">
          <span>{{sweet.name}}</span>
          <span>{{sweet.price}}rsd per {{sweet.unit}}</span>
        </div>
        <div class="description">
          <span>{{sweet.description}}</span>
        </div>
        <div class="characteristics">
          <span>Color: {{sweet.color.name}}</span>
          <span>Origin: {{sweet.origin.name}}</span>
          <span>
            Ingredients:
            <span v-for="(ingr, index) in sweet.ingredients" :key="index">
              {{ingr.name}}; 
            </span>
          </span>
          <span>
             Kinds:
            <span v-for="(kind, index) in sweet.kinds" :key="index">
              {{kind.name}}; 
            </span>
          </span>
        </div>
        <div class="button">
          <Button styleType='Filled' :label='"Buy"' :type='"button"' @click.native="buyModalOpen = true"/>
        </div>
      </div>
    </div>
    <BuyModal v-if="buyModalOpen" :sweet='sweet' @cancel-buy="buyModalOpen = false"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Api from '@/helpers/Api'
import BuyModal from '@/components/BuyModal'
import Button from '@/components/Button'

export default {
  name: 'SweetInfo',
  components: {
    BuyModal,
    Button
  },
  data() {
    return {
      sweet: {},
      isDataReady: false,
      buyModalOpen: false
    }
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
  ...mapActions([])
  },
  async created () {
    const response = await Api().get(`/sweet/${this.$route.params.id}`)
    this.sweet = response.data
    this.isDataReady = true
  }
}
</script>

<style scoped lang="scss">
.sweet-info {
  min-height: calc(100vh - 110px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.sweet {
  flex-basis: 33.33%;
}

.info-wrapper {
  padding-top: 30px;
  display: flex;
  justify-content: flex-start;
  width: 70%;
  flex-wrap: wrap;

  .image {
    width: 50%;

    img {
      width: 400px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 400px;

    .button {
      padding: 10px 30px;
    }

    .top-info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 70px;
      width: 100%;
      border-bottom: 1px solid #BD79B6;
    }

    .description {
      padding: 10px 30px;
    }

    .characteristics {
      height: 33%;
      padding: 10px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }

  }
}

</style>
