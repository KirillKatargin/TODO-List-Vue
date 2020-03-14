// * Global
import Vue from "vue";
import App from "@project_src/App.vue";
// * Assets
import "@project_src/assets/styles/theme.scss";

new Vue({
  render: h => h(App)
}).$mount("#app");
