<template>
  <div>
    <el-card class="box-card" body-style="padding:10px">
      <chart :isAxisChart="true" :chartData="chartdate"></chart
    ></el-card>
  </div>
</template>

<script>
import { getdata } from '@/api/home.js'
import chart from '@/components/charts/chart.vue'

export default {
  name: 'LineChart',
  components: { chart },
  data() {
    return {
      chartdate: {
        xData: [],
        series: []
      }
    }
  },

  mounted() {
    getdata().then((res) => {
      this.chartdate.xData = Object.keys(res.data.data.orderData.data[0])

      this.chartdate.xData.forEach((e) => {
        this.chartdate.series.push({
          name: e,
          type: 'line',
          data: res.data.data.orderData.data.map((item) => {
            return item[e]
          })
        })
      })
    })
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.box-card {
  div {
    height: 150px;
  }
}
</style>