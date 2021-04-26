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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const passport_jwt_guard_1 = require("../../../client/service/auth/passport.jwt-guard");
const CreatePaymentDto_1 = require("../../dtos/CreatePaymentDto");
const GetPaymentDto_1 = require("../../dtos/GetPaymentDto");
const payment_service_1 = require("../../service/payment/payment.service");
const swagger_1 = require("@nestjs/swagger");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createPayment(req, input, res) {
        try {
            const client = req.user;
            const transaction = this.paymentService.createPayment(Object.assign(Object.assign({}, input), { clientId: client.id }));
            res.status(common_1.HttpStatus.OK).send({ data: transaction });
        }
        catch (e) {
            console.log(e);
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error. Please try again later' });
        }
    }
    async getPayment(req, input, res) {
        try {
            const transaction = this.paymentService.getPayment(input.id);
            res.status(common_1.HttpStatus.OK).send({ data: transaction });
        }
        catch (e) {
            console.log(e);
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error. Please try again later' });
        }
    }
};
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_jwt_guard_1.JwtAuthGuard),
    common_1.Post('create'),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreatePaymentDto_1.CreatePaymentDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createPayment", null);
__decorate([
    common_1.Get('/id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Query()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetPaymentDto_1.GetPaymentDto, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPayment", null);
PaymentController = __decorate([
    swagger_1.ApiTags('payment'),
    common_1.Controller('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map