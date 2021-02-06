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
var semantic_ui_react_1 = require("semantic-ui-react");
var CharacterList = /** @class */ (function (_super) {
    __extends(CharacterList, _super);
    function CharacterList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterList.prototype.render = function () {
        var _a = this.props, schools = _a.schools, characters = _a.characters;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(semantic_ui_react_1.Item.Group, null, characters.map(function (c, i) { return (
            /* eslint-disable react/jsx-key */
            react_1["default"].createElement(semantic_ui_react_1.Item, { key: i },
                react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "user circle", size: "huge" }),
                react_1["default"].createElement(semantic_ui_react_1.Item.Content, null,
                    react_1["default"].createElement(semantic_ui_react_1.Item.Header, null, c.name),
                    react_1["default"].createElement(semantic_ui_react_1.Item.Meta, null,
                        c.age,
                        "\u6B73"),
                    react_1["default"].createElement(semantic_ui_react_1.Item.Meta, null,
                        c.height ? c.height : '???',
                        "cm"),
                    react_1["default"].createElement(semantic_ui_react_1.Item.Meta, null, schools ? schools[i].name : '???')))
            /* eslint-enable */
            ); }))));
    };
    return CharacterList;
}(react_1.Component));
exports["default"] = CharacterList;
