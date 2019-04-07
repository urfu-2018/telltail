import {IActionData} from 'types';

const storage: Action[] = [];

class Action {
    static find(action?: string): Action | undefined {
        return storage
            .find((act: Action) => act.action === action);
    }

    static findAll(): Action[] {
        return storage;
    }

    adventure: string;

    action: string;

    nextAction: string;

    constructor({adventure, action, nextAction}: IActionData) {
        this.adventure = adventure;
        this.action = action;
        this.nextAction = nextAction;
    }

    save(): void {
        storage.push(this);
    }
}

export = Action;
