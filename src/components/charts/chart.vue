<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Vue2projectChart',

  props: {
    //接收参数
    isAxisChart: {
      //判断是柱状图/折线图,还是饼图
      type: Boolean,
      default: true
    },
    chartData: {
      //图标的数据
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        }
      }
    }
  },
  data() {
    return {
      axisOptions: {
        //折线图与柱状图的配置
        legend: {
          // 图例文字颜色
          textStyle: {
            color: '#333'
          }
        },
        // 图表居中
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '20%',
          containLabel: true
        },
        // 提示框
        tooltip: {
          trigger: 'axis',

          textStyle: { fontSize: 1, height: 0 },
          position: function (point, params, dom, rect, size) {
            var obj = { left: point[0], top: 0 }
            obj[['left', 'right'][+(point[0] < size.viewSize[0] / 1.2)]] =
              point[0] - 100
            return obj
          },
          padding: 3
        },

        xAxis: {
          type: 'category', // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            interval: 0,
            color: '#333'
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3'
        ],
        series: []
      },
      normalOptions: {
        //饼图的配置信息
        tooltip: {
          trigger: 'item'
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
          '#3ed1cf'
        ],
        series: [],
        padding: 3
      },
      echart: null //判断当前页面中是否有echart图表
    }
  },

  watch: {
    chartData: {
      //一旦图标的数据发生变化，重新渲染图表
      deep: true,
      handler: function () {
        this.initChart()
      }
    }
  },

  methods: {
    initChart() {
      //生成图表
      this.initChartData() //初始化图表数据
      window.addEventListener('resize', () => {
        if (this.echart) {
          this.echart.resize()
        }
      })
      if (this.echart) {
        //如果图表已经存在，只需要更新配置信息
        this.echart.setOption(this.options)
      } else {
        //如果不存在，则生成图表并配置信息
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        //如果是柱状图/折线图
        this.axisOptions.xAxis.data = this.chartData.xData //x轴数据
        this.axisOptions.series = this.chartData.series //y轴
      } else {
        this.normalOptions.series = this.chartData.series //饼图只用配置series
      }
    }
  },
  computed: {
    options() {
      // 判断是折线图/柱状图，还是饼图
      return this.isAxisChart ? this.axisOptions : this.normalOptions
    }
  }
}
</script>

<style lang="sass" scoped>
</style>