"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
react_dom_1["default"].render(react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
    react_1["default"].createElement(App_1["default"], null)), document.getElementById('root'));
