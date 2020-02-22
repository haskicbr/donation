
import {SystemMutationTypes} from "./store/mutations/types";

import Vue from 'vue'
import App from './App.vue'

import store  from "./store";

Vue.config.productionTip = false;

import vuetify from './plugins/vuetify';

new Vue({
    vuetify,
    store,
    beforeCreate() {
        this.$store.commit(SystemMutationTypes.INITIAL_STORE);
    },

    render: h => h(App),
}).$mount('#app');
