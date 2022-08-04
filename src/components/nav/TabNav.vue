<template>
  <div class="tabnav">
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      :collapse="getTabNavCollapse"
      active-text-color="#FFD04B"
      background-color="#545C64"
      text-color="#FFFFFF"
    >
      <div class="title" v-show="!getTabNavCollapse">通用后台管理系统</div>

      <el-menu-item
        :index="item.path"
        v-for="(item, index) in menuparent"
        :key="item.path"
        @click.native="clickMenu(item.path, index)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu
        :index="index + ''"
        v-for="(item, index) in menuchild"
        :key="index + ''"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item
          :index="childitem.path"
          v-for="(childitem, index) in item.children"
          :key="childitem.path"
          @click.native="clickMenu(childitem, index + 3)"
          >{{ childitem.label }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Nav',

  mounted() {},

  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: '/home',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'home/index'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'mall/index'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'User/index'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'other/pageOne.vue'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'other/pageTwo.vue'
            }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu(path, index) {
      if (!this.$route.path.includes(path)) {
        this.$router.push(path)
        this.$store.dispatch('TabClick', index)
      }
    }
  },
  computed: {
    menuparent() {
      return this.menu.filter((e) => {
        return !e.children
      })
    },
    menuchild() {
      return this.menu.filter((e) => {
        return e.children
      })
    },
    ...mapGetters(['getTabNavCollapse']),
    createdindex() {
      return this.$$store.state.createdindex
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 130px;
  min-height: 400px;
  font-size: 10px;
}
.title {
  text-align: center;
  padding: 20px 0;
  color: #ffffff;
}
.el-menu {
  height: 100vh;
  border: none;
}
</style>
