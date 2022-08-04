<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><add-selet-form @addform="addform" ref="select"></add-selet-form
      ></el-col>
    </el-row>
    <user-form
      ref="userform"
      :yes="yes"
      :updateItem="updateItem"
      @add="add"
    ></user-form>
    <el-row>
      <el-col :span="24">
        <user-table
          @update="update"
          @del="del"
          @changePage="changePage"
        ></user-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AddSeletForm from './components/AddSeletForm.vue'
import UserTable from './components/UserTable.vue'
import UserForm from './components/UserForm.vue'
import { DeleteUser } from '@/api/user'
export default {
  name: 'user',

  data() {
    return {
      yes: '',
      updateItem: {}
    }
  },
  components: { AddSeletForm, UserTable, UserForm },
  mounted() {},
  created() {
    this.$store.commit('Page_Index', 2)
  },
  computed: {},

  methods: {
    addform() {
      this.yes = '立即创建'
      this.updateItem = {
        name: '',
        age: '',
        sex: '',
        date: '',
        address: ''
      }
      this.$refs.userform.dialogVisible = true
    },
    update(data) {
      this.yes = '更新'
      this.updateItem = data
      this.$refs.userform.dialogVisible = true
    },
    del(row) {
      const iid = row.id
      DeleteUser({ id: iid })
      this.$refs.select.select()
    },
    add() {
      this.$refs.select.select()
    },
    changePage(page) {
      this.$refs.select.select(page)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>