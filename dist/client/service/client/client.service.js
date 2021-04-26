"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
let ClientService = class ClientService {
    validatePassword(username, password) {
        console.log('user name', username, 'password', password);
        const value = config_1.ClientInfo.filter(client => client.username === username && client.password === password);
        console.log(value, 'in service');
        if (value.length === 0) {
            throw new Error(config_1.Errors.Unauthorized);
        }
        return value[0];
    }
};
ClientService = __decorate([
    common_1.Injectable()
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map