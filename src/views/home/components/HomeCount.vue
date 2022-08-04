<template>
  <div class="main">
    <el-card
      class="box-card"
      :body-style="{
        padding: 0,
        display: 'flex'
      }"
      v-for="item in countData"
      :key="item.name"
    >
      <i
        :class="'el-icon-' + item.icon"
        :style="{ background: item.color }"
      ></i>
      <div>
        <span>￥{{ item.value }}</span
        ><span>{{ item.name }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HomeCount',

  data() {
    return {
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]
    }
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
$fontcolor: rgb(170, 168, 168);
.main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  .box-card {
    width: 32%;

    margin-bottom: 5px;

    i {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    div {
      flex: 3;
      display: flex;
      flex-flow: column;
      justify-content: center;
      padding: 3px;
      span {
        &:last-child {
          color: $fontcolor;

          transform: scale(0.6);
          transform-origin: 0 8px;
        }
      }
    }
  }
}
</style>