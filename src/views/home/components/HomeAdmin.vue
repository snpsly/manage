<template>
  <div>
    <el-card class="box-card" body-style="padding:10px">
      <div slot="header" class="header">
        <div>
          <img src="@/assets/images/admin.webp" alt="" />
        </div>
        <div><span>Admin</span><span>管理员</span></div>
      </div>
      <div>
        <div><span>上次登录时间:</span><span>2021-7-19</span></div>
        <div><span>上次登录地点:</span><span>上海</span></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HomeAdmin',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
  .header {
    height: 50px;
    display: flex;
    align-items: center;
    div {
      &:last-child {
        display: flex;
        flex-flow: column;
        padding: 0 20px;
        span {
          &:last-child {
            font-size: 1px;
            font-weight: 50;
            color: rgb(170, 168, 168);
          }
        }
      }
    }
  }
  > div {
    &:last-child {
      div {
        font-size: 1px;
        font-weight: 50;
        &:last-child {
          span {
            &:first-child {
              color: rgb(170, 168, 168);
            }
            &:last-child {
              padding: 0 20px;
            }
          }
        }
        &:first-child {
          span {
            &:first-child {
              color: rgb(170, 168, 168);
            }
            &:last-child {
              padding: 0 20px;
            }
          }
        }
      }
    }
  }
}
img {
  width: 75px;
  border-radius: 100%;
}
</style>