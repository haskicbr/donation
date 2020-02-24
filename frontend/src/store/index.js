import {CurrencyMutations, DonationFormMutations} from './mutations';
import {DonationActions} from './actions';

import state from "./state";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

let mutations = {
    ...CurrencyMutations,
    ...DonationFormMutations
};

let actions = {
    ...DonationActions
};


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters: {}
});

export default store;
