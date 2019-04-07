"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Удобно разделять зависимости на три группы
// В первой – встроенные модули Node.js в алфавитном порядке
const path_1 = __importDefault(require("path"));
// Во второй – сторонние модули
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("config"));
const express_1 = __importDefault(require("express"));
const hbs_1 = __importDefault(require("hbs"));
const morgan_1 = __importDefault(require("morgan"));
const sequelize_typescript_1 = require("sequelize-typescript");
// В третьей – собственные модули
const Adventure_1 = __importDefault(require("models/Adventure"));
const Hashing_1 = __importDefault(require("models/Hashing"));
const routes_1 = __importDefault(require("routes"));
const Actions = require("tables/Actions");
const Adventure = require("tables/Adventure");
const Hashing = require("tables/Hashing");
// import addDateInBD = require('./writeBD');
// Подключаемся к БД
const sequelizeOptions = {
    // connection
    host: 'isilo.db.elephantsql.com',
    port: 5432,
    username: 'xucpaxul',
    // tslint:disable-next-line:object-literal-sort-keys
    password: 'UmRhmYnfS9va7rW5dUuyh-aka1nf6Azw',
    database: 'xucpaxul',
    // db options
    dialect: 'postgres'
};
const sequelize = new sequelize_typescript_1.Sequelize(sequelizeOptions);
// создаем таблицы
sequelize.addModels([Adventure, Actions, Hashing]);
// sequelize.sync({ force: true });
// addDateInBD();
Adventure.findAll().then((res) => {
    res.forEach((el) => {
        new Adventure_1.default(el.dataValues).save();
    });
});
Hashing.findAll().then((res) => {
    res.forEach((el) => {
        new Hashing_1.default(el.dataValues).save();
    });
});
// Создаём экземпляр приложения
const app = express_1.default();
// Определяем директорию для хранения шаблонов
// Для работы с директориями всегда используем модуль «path»
// и преобразуем относительные пути в абсолютные
const viewsDir = path_1.default.join(__dirname, '../views');
// Определяем директорию для хранения отдельных частей шаблонов
const partialsDir = path_1.default.join(viewsDir, '/partials');
// Определяем директорию для статичных файлов (изображений, стилей и скриптов)
const publicDir = path_1.default.join(__dirname, '../public');
// Подключаем шаблонизатор
app.set('view engine', 'hbs');
// Подключаем директорию с шаблонами
app.set('views', viewsDir);
// Логируем запросы к приложению в debug-режиме
if (config_1.default.get('debug')) {
    app.use(morgan_1.default('dev'));
}
// Отдаём статичные файлы из соответствующей директории
app.use(express_1.default.static(publicDir));
// Разбираем тело POST запроса, чтобы сохранить заметку
// Запрос приходит в urlencoded формате (обычный для HTML форм)
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// Выводим ошибку, если не смогли разобрать POST запрос, и продолжаем работу
app.use((err, _req, _res, next) => {
    console.error(err.stack);
    next();
});
// Подключаем маршруты
routes_1.default(app);
// Фиксируем фатальную ошибку и отправляем ответ с кодом 500
app.use((err, _req, res) => {
    console.error(err.stack);
    res.sendStatus(500);
});
// Подключаем директорию с отдельными частями шаблонов
// Этот метод асинхронный и мы запускаем сервер только после того,
// как все частичные шаблоны будут прочитаны
hbs_1.default.registerPartials(partialsDir, () => {
    const port = config_1.default.get('port');
    app.listen(port, () => {
        console.info(`Server started on ${port}`);
        console.info(`Open http://localhost:${port}/`);
    });
});
//# sourceMappingURL=index.js.map