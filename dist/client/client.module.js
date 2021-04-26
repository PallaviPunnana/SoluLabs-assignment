"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("./config");
const client_controller_1 = require("./controller/client/client.controller");
const auth_service_1 = require("./service/auth/auth.service");
const jwt_service_1 = require("./service/auth/jwt.service");
const local_service_1 = require("./service/auth/local.service");
const client_service_1 = require("./service/client/client.service");
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: config_1.SECRET_KEY,
                signOptions: {
                    expiresIn: '7days'
                }
            }),
        ],
        controllers: [client_controller_1.ClientController],
        providers: [client_service_1.ClientService, auth_service_1.AuthService, jwt_service_1.PassportJwtService, local_service_1.PassportLocalService]
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map