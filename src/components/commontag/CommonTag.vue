<template>
  <div>
    <el-tag
      v-for="(item, index) in buttonList"
      size="mini"
      type="primary"
      :effect="item === createdindex ? 'dark' : 'plain'"
      :closable="index !== 0"
      @close="cli(item)"
      @click="to(item)"
      >{{ item }}</el-tag
    >
  </div>
</template>

<script>
export default {
  name: 'Vue2projectCommonTag',

  data() {
    return {
      buttonList: []
    }
  },

  mounted() {
    this.buttonList = this.$store.state.indexList
  },
  computed: {
    createdindex() {
      return this.$store.state.createdindex
    }
  },
  methods: {
    cli(index) {
      if (this.createdindex === index) {
        if (this.buttonList.length <= 2) {
          this.$router.push('/home')
        } else {
          let f = this.buttonList.findIndex((e) => e === index)
          if (f === this.buttonList.length - 1) {
            let path = ''
            switch (this.buttonList[this.buttonList.length - 2]) {
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
            this.$router.push(path)
          } else {
            let path = ''
            switch (this.buttonList[f + 1]) {
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
            this.$router.push(path)
          }
        }
      }

      index !== '首页' && this.$store.dispatch('navbuttonClick', index)
    },
    to(item) {
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
div {
  height: 25px;
  padding: 0 7px;
  .el-tag {
    margin-left: 3px;
  }
}
</style>