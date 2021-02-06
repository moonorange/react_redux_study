"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var CharacterList_1 = require("./CharacterList");
var constants_1 = require("./constants");
require("./App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("h1", null, "\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC")),
            react_1["default"].createElement(CharacterList_1["default"], { school: "A\u5B66\u5712", characters: constants_1["default"] })));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
