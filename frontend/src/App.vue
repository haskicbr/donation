<script>

    import {CurrencyMutationTypes, DonationFormMutationsTypes} from "./store/mutations/types";
    import {DonationActionTypes} from "./store/actions/types";

    import DonationButton from "./components/DonationButton";

    export default {

        components: {
            DonationButton
        },
        watch: {
            currencyCodeModel(newCurrencyCode) {
                this.changeCurrentCurrency(newCurrencyCode);
            },
            suggestionModel(newSuggestion) {
                this.changeSuggestion(parseInt(newSuggestion));
            }
        },

        methods: {

            changeLoadForm(isLoad) {
                this.$store.commit(DonationFormMutationsTypes.CHANGE_LOADED_DONATION_FORM, isLoad);
            },

            changeCurrentCurrency(currencyCode) {


                let oldCode = this.$store.state.currentCurrency.code;
                let newCode = currencyCode;

                this.$store.commit(CurrencyMutationTypes.CHANGE_CURRENT_CURRENCY, currencyCode);

                this.suggestionModel = this.getConvertSum(this.suggestionModel, oldCode, newCode);
            },

            changeSuggestion(sum) {

                this.$store.commit(CurrencyMutationTypes.CHANGE_SUGGESTION, sum);
                this.suggestionModel = this.$store.state.suggestion;
            },


            getCurrencyByCode(code) {
                return this.$store.state.currencies.find((currency) => { return currency.code === code })
            },

            getConvertSum(sum, oldCode, newCode) {

                let oldCurrency = this.getCurrencyByCode(oldCode);
                let newCurrency = this.getCurrencyByCode(newCode);

                return sum / oldCurrency.rate * newCurrency.rate;
            },

            sendDonation() {

                this.changeLoadForm(true);

                this.$store.dispatch(DonationActionTypes.SEND_FORM_DONATION).then((response) => {

                    if (response.data.ok) {
                        alert("Thank you for your donation!");
                    } else {
                        alert("Something went wrong");
                    }

                }).catch(() => {
                    alert("Something went wrong");
                }).finally(() => {

                   this.changeLoadForm(false);

                })
            },
        },

        computed: {
            donationIsLoaded() {
                return this.$store.state.donationIsLoaded
            },
        },

        data() {

            let currentCurrency = this.$store.state.currentCurrency;

            return {
                presetSums: this.$store.state.presetSums,
                currencies: this.$store.state.currencies,
                currencyCodeModel: currentCurrency.code,
                defaultCurrencyCode: currentCurrency.code,

                suggestionModel: this.$store.state.suggestion,
            }
        }
    }
</script>

<template>
    <v-app id="inspire">
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col ols="12" sm="6" md="3">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Donation form</v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>

                            <v-card-text class="text-center">
                                <template v-for="(preset, key) in presetSums">
                                    <DonationButton :key="key" :preset="preset" v-on:changeSuggestion="changeSuggestion" />
                                </template>
                            </v-card-text>

                            <v-card-text>
                                <v-col class="d-flex" cols="12">
                                    <v-text-field type="number" v-model="suggestionModel"></v-text-field>

                                    <v-select style="text-align: right"
                                              item-value="code"
                                              item-text="symbol"
                                              :items="currencies"
                                              label=""
                                              :value="defaultCurrencyCode"
                                              v-model="currencyCodeModel"
                                    ></v-select>
                                </v-col>
                            </v-card-text>

                            <v-card-text>
                                <v-btn v-on:click="sendDonation" :disabled="donationIsLoaded" color="primary"
                                       style="width: 100%">DONATION
                                </v-btn>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer/>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>


