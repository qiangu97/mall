import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
//import { Swipe, SwipeItem } from 'mint-ui';

import 'vant/lib/index.css'
import { Swipe, SwipeItem } from 'vant'
import { Image as VanImage } from 'vant';
import { Grid, GridItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { Card } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { SubmitBar } from 'vant';
import { Toast } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Toast);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);

//事件总线
Vue.prototype.$bus=new Vue()
//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
