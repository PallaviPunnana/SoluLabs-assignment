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
exports.CreatePaymentDto = exports.CardDto = void 0;
const class_validator_1 = require("class-validator");
const card_validation_1 = require("./card.validation");
const class_transformer_1 = require("class-transformer");
const date_validation_1 = require("./date.validation");
const swagger_1 = require("@nestjs/swagger");
class CardDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CardDto.prototype, "cardHolderName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    class_validator_1.MinLength(13),
    class_validator_1.MaxLength(19),
    class_validator_1.Validate(card_validation_1.CardValidator, {
        message: 'Please enter valid card number'
    }),
    __metadata("design:type", String)
], CardDto.prototype, "cardNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Validate(date_validation_1.DateValidator, {
        message: 'The card has reached its expiry date'
    }),
    __metadata("design:type", String)
], CardDto.prototype, "cardExpirationDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    class_validator_1.MaxLength(3),
    class_validator_1.MinLength(3),
    __metadata("design:type", String)
], CardDto.prototype, "cardCVV", void 0);
exports.CardDto = CardDto;
class Buyer {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Buyer.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], Buyer.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    class_validator_1.MaxLength(11),
    class_validator_1.MinLength(11),
    __metadata("design:type", String)
], Buyer.prototype, "cpf", void 0);
class Payment {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: ['boleto', 'card'] }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Payment.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.ValidateNested(),
    class_validator_1.IsOptional(),
    class_transformer_1.Type(() => CardDto),
    __metadata("design:type", CardDto)
], Payment.prototype, "card", void 0);
class CreatePaymentDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.ValidateNested(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Buyer),
    __metadata("design:type", Buyer)
], CreatePaymentDto.prototype, "buyer", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.ValidateNested(),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => Payment),
    __metadata("design:type", Payment)
], CreatePaymentDto.prototype, "payment", void 0);
exports.CreatePaymentDto = CreatePaymentDto;
//# sourceMappingURL=CreatePaymentDto.js.map