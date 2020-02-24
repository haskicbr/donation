const state = {
};

state.currencies = [
    {name: "US Dollar", code: "USD", symbol: "$", rate: 1},
    {name: "Euro", code: "EUR", symbol: "€", rate: 0.897597},
    {name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755},
    {name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993}
];

state.currentCurrency = state.currencies[0];

state.presetSums = [
    40, 100, 200, 1000, 2500, 5000
];

state.suggestion = state.presetSums[0];
state.donationIsLoaded = false;

export default state;
