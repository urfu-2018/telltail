"use strict";
const Adventure = require("./Adventure");
const storage = [];
class Hashing {
    static findAll() {
        return storage;
    }
    constructor({ hash, hashEN, title }) {
        this.hashRu = hash.split(';');
        this.hashEN = hashEN.split(';');
        this.hash = [];
        this.title = title;
    }
    save() {
        for (let i = 0; i < this.hashRu.length; i++) {
            const t = {
                ru: this.hashRu[i],
                // tslint:disable-next-line:object-literal-sort-keys
                en: this.hashEN[i]
            };
            this.hash.push(t);
            storage.push(t);
        }
        const f = Adventure.find(this.title);
        if (f) {
            f.hashings.push(this);
        }
    }
    containsTags(tags) {
        if (tags) {
            return this.hashEN.includes(tags);
        }
        return false;
    }
}
module.exports = Hashing;
//# sourceMappingURL=Hashing.js.map