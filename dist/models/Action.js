"use strict";
const storage = [];
class Action {
    static find(action) {
        return storage
            .find((act) => act.action === action);
    }
    static findAll() {
        return storage;
    }
    constructor({ adventure, action, nextAction }) {
        this.adventure = adventure;
        this.action = action;
        this.nextAction = nextAction;
    }
    save() {
        storage.push(this);
    }
}
module.exports = Action;
//# sourceMappingURL=Action.js.map