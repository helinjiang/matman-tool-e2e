import MatmanItem from './matman-item';
import urlHandle from 'url-handle';

export default class MatmanQuery {
    constructor() {
        this.list = [];
    }

    addOne(name, target, shouldDisableMatman) {
        // TODO 也许这里应该要加一个去重判断
        this.list.push(new MatmanItem(name, target, shouldDisableMatman));
    }

    getQueryString() {
        return urlHandle.param({
            _matman: this.list
        });
    };
}