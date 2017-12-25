export default class MatmanItem {
    constructor(name, target, shouldDisableMatman) {
        this._m_name = name;
        this._m_target = target;
        this._m_disable = shouldDisableMatman ? 1 : 0;
    }
}