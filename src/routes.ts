import {Application} from 'express';

import {filterTags, list} from 'controllers/adcentures';
import {error404} from 'controllers/errors';

export = (app: Application) => {
    app.get('/', list);

    app
        .route('/tags')
        .get(list);

    app.get('/tags/:name', filterTags);

    // Если роутер не выбрал подходящий для запроса маршрут – используется этот
    app.all('*', error404);
};
