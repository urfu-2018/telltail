"use strict";
const adcentures_1 = require("controllers/adcentures");
const errors_1 = require("controllers/errors");
module.exports = (app) => {
    app.get('/', adcentures_1.list);
    app
        .route('/tags')
        .get(adcentures_1.list);
    app.get('/tags/:name', adcentures_1.filterTags);
    // Если роутер не выбрал подходящий для запроса маршрут – используется этот
    app.all('*', errors_1.error404);
};
//# sourceMappingURL=routes.js.map