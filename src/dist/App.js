"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
function App() {
    var value = react_redux_1.useSelector(function (state) { return state.value; });
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("p", null, value)));
}
exports["default"] = App;
