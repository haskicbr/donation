import {DonationActionTypes} from "./types";
import axios from "axios";
import {DonationFormMutationsTypes} from "../mutations/types";

const actions = {};

actions[DonationActionTypes.SEND_FORM_DONATION] = function ({commit, state}, service) {

    commit(DonationFormMutationsTypes.CHANGE_LOADED_DONATION_FORM, true);

    return axios.post('/api/donation', {
        amount : state.suggestion,
        currency: state.currentCurrency.code
    })
};

export default actions;
