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
exports.PassportLocalService = void 0;
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const common_1 = require("@nestjs/common");
const client_service_1 = require("../client/client.service");
let PassportLocalService = class PassportLocalService extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(clientService) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        });
        this.clientService = clientService;
    }
    async validate(username, password) {
        try {
            console.log('in pp local', username, password);
            const client = this.clientService.validatePassword(username, password);
            return {
                name: client.name,
                id: client.id
            };
        }
        catch (e) {
            console.log(e, 'error here');
            throw new common_1.UnauthorizedException(e.message);
        }
    }
};
PassportLocalService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], PassportLocalService);
exports.PassportLocalService = PassportLocalService;
//# sourceMappingURL=local.service.js.map