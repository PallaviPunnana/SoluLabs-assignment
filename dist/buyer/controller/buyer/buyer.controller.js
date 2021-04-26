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
exports.BuyerController = void 0;
const common_1 = require("@nestjs/common");
const CreatePaymentDto_1 = require("../../../payment/dtos/CreatePaymentDto");
const swagger_1 = require("@nestjs/swagger");
let BuyerController = class BuyerController {
    async createPayment(input, res) {
        try {
            res.status(common_1.HttpStatus.OK).send({ cardIssuedBy: input.cardName });
        }
        catch (e) {
            console.log(e);
            res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error. Please try again later' });
        }
    }
};
__decorate([
    common_1.Post('checkCard'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePaymentDto_1.CardDto, Object]),
    __metadata("design:returntype", Promise)
], BuyerController.prototype, "createPayment", null);
BuyerController = __decorate([
    swagger_1.ApiTags('buyer'),
    common_1.Controller('buyer')
], BuyerController);
exports.BuyerController = BuyerController;
//# sourceMappingURL=buyer.controller.js.map