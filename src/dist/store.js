"use strict";
exports.__esModule = true;
exports.initialState = void 0;
var redux_1 = require("redux");
var counterReducer_1 = require("./counterReducer");
exports.initialState = {
    counter: {
        value: 0
    }
};
function createStore() {
    return redux_1.createStore(redux_1.combineReducers({
        counter: counterReducer_1.counterReducer
    }));
}
exports["default"] = createStore;
