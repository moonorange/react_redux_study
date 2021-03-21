"use strict";
exports.__esModule = true;
exports.store = exports.initialState = void 0;
var redux_1 = require("redux");
var counterReducer_1 = require("./counterReducer");
exports.initialState = {
    value: 0
};
exports.store = redux_1.createStore(exports.initialState, counterReducer_1.counterReducer);
