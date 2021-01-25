"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db.service");
let UserRepository = class UserRepository {
    constructor(db) {
        this.db = db;
    }
    async user(userWhereUniqueInput) {
        return this.db.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
    async users(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.db.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createUser(data) {
        return this.db.user.create({
            data,
        });
    }
    async updateUser(params) {
        const { where, data } = params;
        return this.db.user.update({
            data,
            where,
        });
    }
    async deleteUser(where) {
        return this.db.user.delete({
            where,
        });
    }
};
UserRepository = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map