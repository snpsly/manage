<template>
  <div>商品管理</div>
</template>

<script>
export default {
  name: 'shop',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
  created() {
    this.$store.commit('Page_Index', 1)
  }
}
</script>

<style lang="scss" scoped>
</style>