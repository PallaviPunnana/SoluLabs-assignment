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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const auth_service_1 = require("../../service/auth/auth.service");
const passport_jwt_guard_1 = require("../../service/auth/passport.jwt-guard");
const passport_local_guard_1 = require("../../service/auth/passport.local-guard");
const swagger_1 = require("@nestjs/swagger");
let ClientController = class ClientController {
    constructor(authService) {
        this.authService = authService;
    }
    async verifyPassword(req, res) {
        try {
            const client = req.user;
            const accessToken = await this.authService.generatePayload(client);
            res.status(common_1.HttpStatus.OK).send({ data: accessToken });
        }
        catch (e) {
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error. Please try again later' });
        }
    }
};
__decorate([
    common_1.UseGuards(passport_local_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "verifyPassword", null);
ClientController = __decorate([
    swagger_1.ApiTags('client'),
    common_1.Controller('client'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map