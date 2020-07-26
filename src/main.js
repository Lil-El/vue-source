import Vue from "vue";
import App from "./App.vue";
import { configure } from '@storybook/vue';

Vue.config.productionTip = false;

configure(require.context('../src', true, /\.stories\.js$/), module);

new Vue({
  render: h => h(App)
}).$mount("#app");
