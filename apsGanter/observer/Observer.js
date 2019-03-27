export default class Observer {
    scope = null

    constructor(scope) {
        this.scope = scope;
    }

    setUpdate(fn) {
        let self = this;
        this.update = function (...args) {
            fn.apply(self.scope ? self.scope : self, args);
        }
    }
}