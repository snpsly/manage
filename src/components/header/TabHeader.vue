<template>
  <div class="header">
    <div>
      <el-button
        icon="el-icon-menu"
        size="mini"
        @click.native="TabNavCollapse"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbList"
          @click.native="cli(item)"
          >{{ item }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <el-dropdown size="mini" placement="top">
      <span class="el-dropdown-link">
        <i class="el-icon-user"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      breadcrumbList: []
    }
  },
  computed: {},
  mounted() {
    this.breadcrumbList = this.$store.state.indexList
  },

  methods: {
    toHome() {
      if (!this.$route.path.includes('/home')) {
        this.$router.push('/home')
      }
    },
    TabNavCollapse() {
      this.$store.commit('SET_TAB_NAV_COLLAPSE')
    },
    cli(item) {
      let path = ''
      this.$store.commit('Page_Index', item)
      switch (item) {
        case '首页':
          path = '/home'
          break

        case '商品管理':
          path = '/mall'
          break
        case '用户管理':
          path = '/user'
          break
        case '其他1':
          path = '/page1'
          break
        case '其他2':
          path = '/page2'

          break
      }
      if (!this.$route.path.includes(path)) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: black;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  > div {
    color: white;
    font-size: 13px;
    display: flex;
    align-items: center;
    .el-button {
      flex: 0.01;
    }
    div {
      flex: 1;
      padding: 0 10px;
    }
  }
  .el-dropdown {
    margin-right: 10px;
  }
}
.el-breadcrumb__item {
  &:hover {
    cursor: pointer;
  }
}
</style>