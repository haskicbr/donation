<script>

    export default {
        name: "DonationButton",

        computed: {

            currentSuggestion() {
                return this.$store.state.suggestion;
            },

            activeSuggestionColor() {
                if (this.currentSuggestion === this.presetSum) {
                    return 'primary';
                }
            },

            presetLabel() {
                return this.$store.state.currentCurrency.symbol + Intl.NumberFormat('en-US').format(this.presetSum);
            },

            presetSum() {

                let preset = this.$props.preset;

                let presetSum = preset * this.$store.state.currentCurrency.rate;

                presetSum = parseInt(presetSum);

                let remainder = presetSum % 10;

                return presetSum + (10 - remainder);
            }
        },

        methods: {
            changeSuggestion() {
                this.$emit('changeSuggestion', this.presetSum)
            },
        },

        props: [
            'preset'
        ]
    }
</script>

<template>
    <v-btn :color="activeSuggestionColor" class="mx-auto"
           v-on:click="changeSuggestion"
           style="margin-left: 10px !important; margin-top: 10px !important;">
        {{presetLabel}}
    </v-btn>
</template>


