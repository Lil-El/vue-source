import Vue from "vue";
import App from "./App.vue";
import { configure } from "@storybook/vue";
import HelloWorld from "./components/HelloWorld.vue";

Vue.config.productionTip = false;

configure(require.context("../src", true, /\.stories\.js$/), module);

//全局组件注册
let h = function install(Vue) {
  Vue.component("HelloWorld", HelloWorld);
};

Vue.use(h);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
