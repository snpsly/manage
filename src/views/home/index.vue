<template>
  <div class="main">
    <el-row :gutter="10">
      <el-col :span="8"
        ><div class="grid-content bg-purple-dark">
          <home-admin></home-admin> <home-list></home-list></div
      ></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-dark">
          <home-count></home-count>
          <line-chart></line-chart>
          <bar-pie-chart></bar-pie-chart></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import HomeAdmin from './components/HomeAdmin.vue'
import HomeList from './components/HomeList.vue'
import HomeCount from './components/HomeCount.vue'
import LineChart from './components/LineChart.vue'
import BarPieChart from './components/BarPieChart.vue'
import '@/api/mock.js'
export default {
  name: 'Home',
  components: { HomeAdmin, HomeList, HomeCount, LineChart, BarPieChart },
  data() {
    return {}
  },

  mounted() {},

  methods: {},
  created() {
    this.$store.commit('Page_Index', 0)
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
}
</style>
