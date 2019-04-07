import {IHashingData, IHashingTranslate} from 'types';
import Adventure = require('./Adventure');

const storage: IHashingTranslate[] = [];

class Hashing {
    static findAll(): IHashingTranslate[] {
        return storage;
    }

    title: string;

    hash: object[];

    hashRu: string[];

    hashEN: string[];

    constructor({hash, hashEN, title}: IHashingData) {
        this.hashRu = hash.split(';');
        this.hashEN = hashEN.split(';');
        this.hash = [];
        this.title = title;
    }

    save(): void {
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

     containsTags(tags?: string): boolean {
        if (tags) {
        return this.hashEN.includes(tags);
        }
        return false;
    }
}

export = Hashing;
