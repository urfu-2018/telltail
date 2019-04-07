import {Request, Response} from 'express';

import Adventure = require('models/Adventure');
import Hashing = require('models/Hashing');
import {IAdventureDataArr, IHashingTranslate} from 'types';

// Каждый контроллер (controller) обычно экспортирует
// несколько функций-действий (actions)

export function list(_req: Request, res: Response) {
    const adventures = Adventure.findAll();
    const {meta, staticBasePath, title} = res.locals;
    // Объединяем данные специфичные для контроллера с общими данными
    const data: IAdventureDataArr = {
        adventures,
        meta,
        staticBasePath,
        title
    };

    res.render('index', data);
}

export function filterTags(req: Request, res: Response) {
    const {name} = req.params;
    const {meta, staticBasePath} = res.locals;
    const hash = Hashing.findAll();
    const adventures = Adventure.findTags(name);
    const hashEN = hash.find((el: IHashingTranslate) => el.en === name);
    let title: string = "";
    if (hashEN) {
        title = hashEN.ru;
    }
    if (adventures) {
    const data: IAdventureDataArr = {
        adventures,
        meta,
        staticBasePath,
        title
    };
    res.render('tags', data);
    } else {
        // Код «404 Not Found» отправляют в ответ на отсутствующий http-ресурс,
        // в нашем случае отсутствующую заметку
        res.sendStatus(404);
    }
}
