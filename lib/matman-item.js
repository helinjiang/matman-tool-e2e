"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatmanItem = function MatmanItem(name, target, shouldDisableMatman) {
    _classCallCheck(this, MatmanItem);

    this._m_name = name;
    this._m_target = target;
    this._m_disable = shouldDisableMatman ? 1 : 0;
};

exports.default = MatmanItem;