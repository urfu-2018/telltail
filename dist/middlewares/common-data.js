"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
exports.default = (_req, res, next) => {
    const meta = {
        charset: 'utf-8',
        description: 'Awesome notes'
    };
    // Хранение в res.locals – рекомендованный способ
    // Не перезаписываем, а дополняем объект
    res.locals.meta = meta;
    res.locals.title = 'Awesome notes';
    res.locals.staticBasePath = config_1.default.get('staticBasePath');
    next();
};
//# sourceMappingURL=common-data.js.map