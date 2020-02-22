import {CurrencyMutationTypes} from "./types";

const mutations = {};

mutations[CurrencyMutationTypes.CHANGE_CURRENT_CURRENCY] = (state, {code}) => {

    state.currentCurrencie = state.currencies.find((currency) => code === currency.code);
};

export default mutations;
