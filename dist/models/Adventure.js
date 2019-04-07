"use strict";
const storage = [];
class Adventure {
    static find(title) {
        return storage
            .find((adventure) => adventure.title === title);
    }
    static findTags(tags) {
        const t = [];
        storage.forEach((el) => {
            if (el.hashings.find((hs) => hs.containsTags(tags))) {
                t.push(el);
            }
        });
        return t;
    }
    static findAll() {
        return storage;
    }
    constructor({ numberAction, title, description, id }) {
        this.numberAction = numberAction;
        this.title = title;
        this.description = description;
        this.id = id;
        this.hashings = [];
    }
    save() {
        storage.push(this);
    }
}
module.exports = Adventure;
//# sourceMappingURL=Adventure.js.map