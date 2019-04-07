"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Adventure = require("models/Adventure");
// Каждый контроллер (controller) обычно экспортирует
// несколько функций-действий (actions)
function list(_req, res) {
    const adventures = Adventure.findAll();
    console.info('adventures[0]');
    // Объединяем данные специфичные для контроллера с общими данными
    const data = {
        adventures
    };
    res.render('index', data);
}
exports.list = list;
function item(req, res) {
    const { name } = req.params;
    const note = Adventure.find(name);
    if (note) {
        const numberAction = note.numberAction;
        const title = note.title;
        const description = note.description;
        const data = {
            numberAction,
            title,
            // tslint:disable-next-line:object-literal-sort-keys
            description
        };
        res.render('index', data);
    }
    else {
        // Код «404 Not Found» отправляют в ответ на отсутствующий http-ресурс,
        // в нашем случае отсутствующую заметку
        res.sendStatus(404);
    }
}
exports.item = item;
//# sourceMappingURL=Adcenture.js.map