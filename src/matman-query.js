import MatmanItem from './matman-item';

export default class MatmanQuery {
    constructor() {
        this.list = [];
    }

    addOne(name, target, shouldDisableMatman) {
        // TODO 也许这里应该要加一个去重判断
        this.list.push(new MatmanItem(name, target, shouldDisableMatman));
    }

    getQueryString() {
        return '_matman=' + JSON.stringify(this.list);
    };
}