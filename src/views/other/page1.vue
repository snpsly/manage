<template>
  <div>页面1</div>
</template>

<script>
export default {
  name: 'Vue2projectPage1',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
  created() {
    this.$store.commit('Page_Index', 3)
  }
}
</script>

<style lang="sass" scoped>
</style>