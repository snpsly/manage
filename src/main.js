import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import store from "./store";
import './api/mock.js'
import {
  Button, Radio, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown,
  DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Dialog, Input, Select, Switch, DatePicker, Option, Pagination,

} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container),
  Vue.use(Main),
  Vue.use(Header),
  Vue.use(Aside),
  Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(TableColumn)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
