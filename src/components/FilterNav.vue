<template>
  <div class='filter-nav'>
    <div class='filter-buttons'>
      <div class="mainfilters-button">
        <Button styleType="Outlined" :label="currentFilter ? currentFilter : 'Filters'" @click.native="showFilters = !showFilters"/>
        <div v-if="showFilters" class="dropdown">
          <div class='filter' v-for="(filter, index) in mainFilters" :key="index" @click="getFilters(filter)">
            <span>{{ filter }}</span>
          </div>
        </div>
      </div>
      <div v-if="showSubfiltersButton" class="subfilters-button">
        <Button styleType="Outlined" :label="currentSubfilter ? currentSubfilter : 'Subfilters'" @click.native="showSubfilters = !showSubfilters"/>
        <div v-if="showSubfilters" class="dropdown">
            <div class='filter' v-for="(filter, index) in filters" :key="index" @click="getFilteredSweets(filter)">
            <span>{{ filter.name }}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button'
import { mapActions } from 'vuex'
import Api from '@/helpers/Api'

export default {
  name: 'FilterNav',
  components: {
    Button
  },
  data() {
    return {
      mainFilters: ['color', 'origin', 'kind', 'ingredient'],
      filters: [],
      showFilters: false,
      showSubfiltersButton: false,
      showSubfilters: false,
      currentFilter: '',
      currentSubfilter: ''
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['setSweets']),
    async getFilters (filter) {
      const response = await Api().get(`/api/${filter}`)
      this.currentFilter = filter
      this.currentSubfilter = ''
      this.filters = response.data
      this.showSubfiltersButton = true
      this.showFilters = false
    },
    async getFilteredSweets (filter) {
      const response = await Api().get(`/api/${this.currentFilter}/${Object.values(filter)[0]}`)
      this.setSweets(response.data.sweets)
      this.currentSubfilter = filter.name
      this.showSubfilters = false
    }
  }
}
</script>

<style scoped lang="scss">

.filter-nav {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

   .filter-buttons {
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
   }
}

.mainfilters-button {
  // margin-right: 25px;
  position: relative;
}

.subfilters-button {
  position: relative;
}

.dropdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  width: 110px;

  .filter {
    border: 1px solid #BD79B6;
    width: 100%;
    font-size: 14px;
    min-height: 20px;
    cursor: pointer;

    span {
      margin: 10px;
      color: #BD79B6;
    }
  }
}

</style>
