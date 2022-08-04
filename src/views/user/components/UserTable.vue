<template>
  <div class="usertable">
    <el-table
      :data="userlist"
      border
      style="width: 100%"
      size="mini"
      height="330"
    >
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="100"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="100"> </el-table-column>
      <el-table-column prop="birth" label="出生日期" width="120">
      </el-table-column>
      <el-table-column prop="addr" label="地址" width="303"> </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="110"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Vue2projectForm',

  data() {
    return {
      tableData: [
        {
          name: '123',
          age: 23,
          sex: 'nan',
          date: '2000-01-01',
          address: '上海'
        }
      ],
      config: {
        page: 1
      }
    }
  },

  mounted() {},
  computed: {
    userlist() {
      return this.$store.state.userList
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(row)
      this.$emit('update', row)
    },
    handleDelete(row) {
      this.$emit('del', row)
    },
    changePage(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="scss" scoped>
.usertable {
  margin-top: 10px;
}
.el-pagination {
  text-align: center;
}
</style>