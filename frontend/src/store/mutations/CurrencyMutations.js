import {CurrencyMutationTypes} from "./types";

const mutations = {};

mutations[CurrencyMutationTypes.CHANGE_CURRENT_CURRENCY] =  (state, code) => {
    state.currentCurrency = state.currencies.find((currency) => code === currency.code);
};

mutations[CurrencyMutationTypes.CHANGE_SUGGESTION] =  (state, sum) => {

    if (isNaN(sum) || typeof (sum) !== 'number' || sum <= 0) {
        sum = 1;
    }

    state.suggestion = parseInt(sum);
};

export default mutations;