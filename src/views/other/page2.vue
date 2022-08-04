<template>
  <div>页面2</div>
</template>

<script>
export default {
  name: 'Vue2projectPage2',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
  created() {
    this.$store.commit('Page_Index', 4)
  }
}
</script>

<style lang="sass" scoped>
</style>