const urlHandler =  require('url-handle');

function MatmanItem(name, target, shoudDisableMatman) {
    this._m_name = name;
    this._m_target = target;
    this._m_disable = shoudDisableMatman ? 1 : 0;
}

function MatmanQuery() {
    this.list = [];
}

MatmanQuery.prototype.addOne = function (name, target, shouldDisableMatman) {
    // TODO 也许这里应该要加一个去重判断
    this.list.push(new MatmanItem(name, target, shouldDisableMatman));
};

MatmanQuery.prototype.getQueryString = function () {
    return urlHandler.param({
        _matman: this.list
    });
};

module.exports = {
    MatmanQuery: MatmanQuery
};