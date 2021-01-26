import Vue from 'vue'
import App from './App.vue'

//importando plugin do firestore.
import {firestorePlugin} from 'vuefire';

import vuetify from './plugins/vuetify';

//indicando a utilizaçao do plugin.
Vue.use(firestorePlugin);


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
