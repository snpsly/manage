<template>
  <div class="cards">
    <el-card class="box-card" body-style="padding:10px">
      <chart :isAxisChart="true" :chartData="chartdatebar"></chart>
    </el-card>
    <el-card class="box-card" body-style="padding:10px">
      <chart :isAxisChart="false" :chartData="chartdatepie"></chart>
    </el-card>
  </div>
</template>

<script>
import { getdata } from '@/api/home.js'
import chart from '@/components/charts/chart.vue'
export default {
  name: 'BarPieChart',
  components: { chart },
  data() {
    return {
      barchart: null,
      barchartdate: [],
      barchartseries: [],

      barchartname: [],
      piechart: null,
      piechartseries: [],
      piechartname: []
    }
  },
  computed: {
    chartdatebar() {
      return {
        xData: this.barchartname,
        series: this.barchartseries
      }
    },
    chartdatepie() {
      return {
        series: [
          {
            name: '市场占比',
            type: 'pie',
            radius: '50%',
            data: this.piechartseries,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    getdata().then((res) => {
      this.piechartseries = res.data.data.videoData

      this.chartdate = res.data.data.orderData.date
      this.barchartname = res.data.data.userData.map((e) => e.date)
      this.barchartseries.push({
        name: '新增用户',
        type: 'bar',
        data: res.data.data.userData.map((item) => {
          return item.new
        })
      })
      this.barchartseries.push({
        name: '活跃用户',
        type: 'bar',
        data: res.data.data.userData.map((item) => {
          return item.active
        })
      })
    })
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  .box-card {
    width: 49%;
    div {
      height: 114px;
    }
  }
}
</style>