import {DonationFormMutationsTypes} from "./types";

const mutations = {};

mutations[DonationFormMutationsTypes.CHANGE_LOADED_DONATION_FORM] =  (state, isLoaded) => {
    state.donationIsLoaded = isLoaded;
};

export default mutations;