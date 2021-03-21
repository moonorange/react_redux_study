"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var counterAction_1 = require("./counterAction");
var selector_1 = require("./selector");
function App() {
    var dispatch = react_redux_1.useDispatch();
    var selector = react_redux_1.useSelector(function (state) { return state; });
    var value = selector_1.getCounterValue(selector);
    // console.log(selector);
    // console.log(value);
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("p", null, value),
        react_1["default"].createElement("button", { onClick: function () { return dispatch(counterAction_1.incrementAction()); } }, "Add"),
        react_1["default"].createElement("button", { onClick: function () { return dispatch(counterAction_1.decrementAction()); } }, "Subtract")));
}
exports["default"] = App;
