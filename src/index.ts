// Удобно разделять зависимости на три группы
// В первой – встроенные модули Node.js в алфавитном порядке
import path from 'path';

// Во второй – сторонние модули
import bodyParser from 'body-parser';
import config from 'config';
import express, {NextFunction as Next, Request, Response} from 'express';
import hbs from 'hbs';
import morgan from 'morgan';
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

// В третьей – собственные модули
import Adv from 'models/Adventure';
import Hash from 'models/Hashing';
import routes from 'routes';
import Actions = require('tables/Actions');
import Adventure = require('tables/Adventure');
import Hashing = require('tables/Hashing');
// import addDateInBD = require('./writeBD');

// Подключаемся к БД
const sequelizeOptions: SequelizeOptions = {
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

const sequelize = new Sequelize(sequelizeOptions);

// создаем таблицы
sequelize.addModels([Adventure, Actions, Hashing]);

// sequelize.sync({ force: true });

// addDateInBD();

Adventure.findAll().then( (res: any) => {
    res.forEach((el: any) => {
        new Adv(el.dataValues).save();
    });
});

Hashing.findAll().then( (res: any) => {
    res.forEach((el: any) => {
        new Hash(el.dataValues).save();
    });
});

// Создаём экземпляр приложения
const app = express();

// Определяем директорию для хранения шаблонов
// Для работы с директориями всегда используем модуль «path»
// и преобразуем относительные пути в абсолютные
const viewsDir = path.join(__dirname, '../views');

// Определяем директорию для хранения отдельных частей шаблонов
const partialsDir = path.join(viewsDir, '/partials');

// Определяем директорию для статичных файлов (изображений, стилей и скриптов)
const publicDir = path.join(__dirname, '../public');

// Подключаем шаблонизатор
app.set('view engine', 'hbs');

// Подключаем директорию с шаблонами
app.set('views', viewsDir);

// Логируем запросы к приложению в debug-режиме
if (config.get('debug')) {
    app.use(morgan('dev'));
}

// Отдаём статичные файлы из соответствующей директории
app.use(express.static(publicDir));

// Разбираем тело POST запроса, чтобы сохранить заметку
// Запрос приходит в urlencoded формате (обычный для HTML форм)
app.use(bodyParser.urlencoded({
    extended: true
}));

// Выводим ошибку, если не смогли разобрать POST запрос, и продолжаем работу
app.use((err: Error, _req: Request, _res: Response, next: Next) => {
    console.error(err.stack);

    next();
});

// Подключаем маршруты
routes(app);

// Фиксируем фатальную ошибку и отправляем ответ с кодом 500
app.use((err: Error, _req: Request, res: Response) => {
    console.error(err.stack);

    res.sendStatus(500);
});

// Подключаем директорию с отдельными частями шаблонов
// Этот метод асинхронный и мы запускаем сервер только после того,
// как все частичные шаблоны будут прочитаны
hbs.registerPartials(partialsDir, () => {
    const port = config.get('port');

    app.listen(port, () => {
        console.info(`Server started on ${port}`);
        console.info(`Open http://localhost:${port}/`);
    });
});
