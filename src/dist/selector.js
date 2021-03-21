"use strict";
exports.__esModule = true;
exports.getCounterValue = void 0;
var reselect_1 = require("reselect");
var counterSelector = function (state) { return state.counter; };
exports.getCounterValue = reselect_1.createSelector([counterSelector], function (state) { return state.value; });
