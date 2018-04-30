'use strict';

exports.__esModule = true;

var _matmanItem = require('./matman-item');

var _matmanItem2 = _interopRequireDefault(_matmanItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatmanQuery = function () {
    function MatmanQuery() {
        _classCallCheck(this, MatmanQuery);

        this.list = [];
    }

    MatmanQuery.prototype.addOne = function addOne(name, target, shouldDisableMatman) {
        // TODO 也许这里应该要加一个去重判断
        this.list.push(new _matmanItem2.default(name, target, shouldDisableMatman));
    };

    MatmanQuery.prototype.getQueryString = function getQueryString() {
        return '_matman=' + JSON.stringify(this.list);
    };

    return MatmanQuery;
}();

exports.default = MatmanQuery;