import {IAdventureData} from 'types';
import Hashing = require('./Hashing');

const storage: Adventure[] = [];

class Adventure {
    static find(title?: string): Adventure | undefined {
        return storage
            .find((adventure: Adventure) => adventure.title === title);
    }

    static findTags(tags?: string): Adventure[] {
         const t: Adventure[] = [];

         storage.forEach((el) => {
             if (el.hashings.find((hs: Hashing) => hs.containsTags(tags))) {
                t.push(el);
             }
         });

         return t;
    }

    static findAll(): Adventure[] {
        return storage;
    }

    numberAction: string;

    title: string;

    description: string;

    id: number;

    hashings: Hashing[];

    constructor({numberAction, title, description, id}: IAdventureData) {
        this.numberAction = numberAction;
        this.title = title;
        this.description = description;
        this.id = id;
        this.hashings = [];
    }

    save(): void {
        storage.push(this);
    }
}

export = Adventure;
