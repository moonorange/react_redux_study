"use strict";
exports.__esModule = true;
exports.decrementAction = exports.incrementAction = void 0;
;
exports.incrementAction = function () {
    return {
        type: "INCREMENT"
    };
};
exports.decrementAction = function () {
    return {
        type: "DECREMENT"
    };
};
