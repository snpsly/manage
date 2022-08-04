<template>
  <div class="main">
    <el-button
      type="primary"
      icon="el-icon-plus"
      size="mini"
      @click.native="add"
      >新增</el-button
    >
    <div>
      <el-input placeholder="请输入内容" v-model="input" clearable size="mini">
      </el-input
      ><el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click.native="selects"
        >搜索</el-button
      >
    </div>
  </div>
</template>

<script>
import { getUser } from '@/api/user.js'
export default {
  name: 'AddSeletForm',

  data() {
    return {
      input: ''
    }
  },

  mounted() {
    this.select()
  },

  methods: {
    add() {
      this.$emit('addform')
    },
    selects() {
      this.select()
    },
    select(page = 1) {
      if (this.input === '') {
        getUser({ page }).then((res) => {
          this.$store.commit('Select_User', res.data.list)
        })
      } else {
        getUser({ page, name: this.input }).then((res) => {
          this.$store.commit('Select_User', res.data.list)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div {
    display: flex;
    margin: 0 10px;
  }
}
.el-button {
  padding: 0 10px;
}
</style>