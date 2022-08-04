<template>
  <el-card class="box-card" body-style="padding:10px">
    <el-table :data="tableData" style="width: 320px" size="mini">
      <el-table-column prop="phone" label="品牌" width="80"> </el-table-column>
      <el-table-column prop="prices" label="总购买" width="80">
      </el-table-column>
      <el-table-column prop="price" label="本月购买"> </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          phone: 'oppo',
          prices: '22020',
          price: '3520'
        },
        {
          phone: '苹果',
          prices: '30400',
          price: '4500'
        },
        {
          phone: '小米',
          prices: '28100',
          price: '3220'
        },
        {
          phone: '三星',
          prices: '78632',
          price: '2554'
        },
        {
          phone: 'vivo',
          prices: '28974',
          price: '3521'
        },
        {
          phone: '华为',
          prices: '28474',
          price: '3111'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
}
</style>