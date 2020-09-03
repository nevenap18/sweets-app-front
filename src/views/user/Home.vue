<template>
  <div v-if="isDataReady" class="home">
    <FilterNav v-if="getAllSweets.length > 0"/>
    <div v-if="getAllSweets.length > 0" class="sweet-holder">
      <div class='sweet' v-for="(sweet, index) in getAllSweets" :key="index">
        <SweetCard :photos="photos" @open-buy-modal="showBuyModal($event)" :sweet="sweet"/>
      </div>
    </div>
    <div class="message" v-else><span>Sorry, no sweets currently</span></div>
    <BuyModal v-if="buyModalOpen" :sweet='sweet' @cancel-buy="buyModalOpen = false"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SweetCard from '@/components/SweetCard'
import FilterNav from '@/components/FilterNav'
import Api from '@/helpers/Api'
import BuyModal from '@/components/BuyModal'

export default {
  name: 'Home',
  components: {
    SweetCard,
    FilterNav,
    BuyModal
  },
  data() {
    return {
      isDataReady: false,
      buyModalOpen: false,
      sweet: {},
      photos: []
    }
  },
  computed: {
    ...mapGetters(['getAllSweets'])
  },
  methods: {
  ...mapActions(['setSweets', 'setPhotos']),
  showBuyModal (sweet) {
    this.sweet = sweet
    this.buyModalOpen = true
    }
  },
  async created () {
    const sweets = await Api().get('/api/sweet')
    const photos = await Api().get('/api/photo')
    this.photos = photos.data
    this.setSweets(sweets.data)
    this.isDataReady = true
  }
}
</script>

<style scoped lang="scss">
.home {
  min-height: calc(100vh - 180px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.sweet {
  flex-basis: 33.33%;
}

.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sweet-holder {
  display: flex;
  justify-content: flex-start;
  width: 70%;
  flex-wrap: wrap;
}

</style>
