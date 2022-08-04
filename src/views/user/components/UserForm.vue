<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      top="10vh"
      :before-close="handleClose"
      :destroy-on-close="true"
    >
      <el-form ref="form" :model="form" label-width="80px" size="mini">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="22">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birth"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="form.addr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ yes }}</el-button>
          <el-button @click.native="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addUser, updateUser } from '@/api/user'
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  created() {},
  computed: {
    form: {
      get() {
        return this.updateItem
      },
      set(v) {
        this.name = v
      }
    }
  },
  props: {
    yes: {
      type: String,
      default: ''
    },
    updateItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    cancel() {
      this.dialogVisible = false
    },

    onSubmit() {
      if (this.yes !== '立即创建') {
        updateUser(this.form)
        this.cancel()
      } else {
        addUser(this.form)
        this.$emit('add')
        this.cancel()
      }
    },
    handleClose(done) {
      this.form = {
        name: '',
        age: '',
        sex: '',
        date: '',
        address: ''
      }
      done()
    }
  }
}
</script>

<style lang="sass" scoped>
</style>