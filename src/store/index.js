import Vue from "vue";
import Vuex from "vuex";
import Cookie from 'js-cookie'
Vue.use(Vuex);
const state = {
  TabNavCollapse: false,
  indexList: ['首页'],
  createdindex: '',
  tagpathto: '',
  userList: [],
  userId: '',

}
const store = new Vuex.Store({
  state,
  getters: {
    getTabNavCollapse (state) {
      return state.TabNavCollapse
    },

  },
  mutations: {
    Delete_User (state, payload) {
      state.userId = payload
    },
    Select_User (state, payload) {

      payload.forEach(k => k.sex === 0 ? k.sex = '女' : k.sex = '男')
      state.userList = payload

    },
    SET_TAB_NAV_COLLAPSE (state) {
      state.TabNavCollapse = !state.TabNavCollapse;
    },
    ADD_List (state, payload) {
      state.indexList.push(payload);
    },
    Delete_List (state, payload) {
      state.indexList.splice(state.indexList.indexOf(payload), 1);
    },
    Page_Index (state, payload) {

      if (typeof payload === "number") {

        let cli = '首页'
        switch (payload) {
          case 1: cli = '商品管理'

            break;
          case 2: cli = '用户管理'
            break;
          case 3: cli = '其他1'
            break;
          case 4: cli = '其他2'
            break;
        }
        state.createdindex = cli
      } else {
        state.createdindex = payload
      }


    },
  },
  actions: {
    TabClick (context, action) {
      let cli = '首页'
      switch (action) {
        case 1: cli = '商品管理'

          break;
        case 2: cli = '用户管理'
          break;
        case 3: cli = '其他1'
          break;
        case 4: cli = '其他2'
          break;
      }
      const f = context.state.indexList.find(e => {
        return e === cli
      })
      if (f === undefined) {
        context.commit('ADD_List', cli);
      }
    },
    navbuttonClick (context, action) {

      if (action !== '') {
        context.commit('Delete_List', action);
      }
    }
  },
  modules: {},
});

export default store;