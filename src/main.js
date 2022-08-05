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
function getCookie (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';'); //把cookie分割成组    
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]; //取得字符串    
    while (c.charAt(0) == ' ') { //判断一下字符串有没有前导空格    
      c = c.substring(1, c.length); //有的话，从第二位开始取    
    }
    if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name    
      return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值    
    }
  }
  return false;
}
if (!getCookie('Token')) {
  //清除

  localStorage.clear();
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
