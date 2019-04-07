"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Adventure = class Adventure extends sequelize_typescript_1.Model {
};
__decorate([
    AutoIncrement,
    PrimaryKey,
    Column(DataType.INTEGER)
], Adventure.prototype, "id", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING)
], Adventure.prototype, "name", void 0);
__decorate([
    AllowNull(false),
    Column(DataType.STRING)
], Adventure.prototype, "description", void 0);
Adventure = __decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
        paranoid: true,
        underscored: true,
        tableName: 'Adventure'
    })
], Adventure);
//# sourceMappingURL=tables.js.map