"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Adventure = require("models/Adventure");
const Hashing = require("models/Hashing");
// Каждый контроллер (controller) обычно экспортирует
// несколько функций-действий (actions)
function list(_req, res) {
    const adventures = Adventure.findAll();
    const { meta, staticBasePath, title } = res.locals;
    // Объединяем данные специфичные для контроллера с общими данными
    const data = {
        adventures,
        meta,
        staticBasePath,
        title
    };
    res.render('index', data);
}
exports.list = list;
function filterTags(req, res) {
    const { name } = req.params;
    const { meta, staticBasePath } = res.locals;
    const hash = Hashing.findAll();
    const adventures = Adventure.findTags(name);
    const hashEN = hash.find((el) => el.en === name);
    let title = "";
    if (hashEN) {
        title = hashEN.ru;
    }
    if (adventures) {
        const data = {
            adventures,
            meta,
            staticBasePath,
            title
        };
        res.render('tags', data);
    }
    else {
        // Код «404 Not Found» отправляют в ответ на отсутствующий http-ресурс,
        // в нашем случае отсутствующую заметку
        res.sendStatus(404);
    }
}
exports.filterTags = filterTags;
//# sourceMappingURL=adcentures.js.map