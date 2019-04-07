"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const sequelize_typescript_1 = require("sequelize-typescript");
const Actions_1 = __importDefault(require("./Actions"));
const Adventure_1 = __importDefault(require("./Adventure"));
const Hashing_1 = __importDefault(require("./Hashing"));
let AdvenAction = class AdvenAction extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => Adventure_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], AdvenAction.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Actions_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], AdvenAction.prototype, "adventure", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Hashing_1.default),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING)
], AdvenAction.prototype, "hashing", void 0);
AdvenAction = __decorate([
    sequelize_typescript_1.Table
], AdvenAction);
module.exports = AdvenAction;
//# sourceMappingURL=AdvenAction.js.map