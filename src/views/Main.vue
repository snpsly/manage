<template>
  <el-container>
    <el-aside width="auto"><tab-nav></tab-nav></el-aside>

    <el-container class="right">
      <el-header height="44px"><tab-header></tab-header></el-header>
      <common-tag></common-tag>
      <el-main> <router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import TabNav from '@/components/nav/TabNav.vue'
import TabHeader from '@/components/header/TabHeader.vue'
import CommonTag from '@/components/commontag/CommonTag.vue'

export default {
  name: 'Main',
  components: {
    TabNav,
    TabHeader,
    CommonTag
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}
.el-header {
  padding: 0;
  margin: 0;
}
.el-aside {
  margin: 0;
}
.el-main {
  padding: 0;
  padding: 0 10px;
  overflow: hidden;
}
.right {
  height: 100vh;
}
</style>