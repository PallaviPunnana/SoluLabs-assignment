"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardValidator = void 0;
const class_validator_1 = require("class-validator");
const config_1 = require("../config");
let CardValidator = class CardValidator {
    validate(value, validationArguments) {
        const input = validationArguments.object;
        const prefix1 = value.slice(0, 1);
        const prefix2 = value.slice(0, 2);
        const prefix3 = value.slice(0, 4);
        const length = value.length;
        const cardName = config_1.CardIssuers.filter(card => card.prefixes.includes(prefix1) && card.length.includes(length) ||
            card.prefixes.includes(prefix2) && card.length.includes(length) ||
            card.prefixes.includes(prefix3) && card.length.includes(length));
        if (cardName.length === 0) {
            return false;
        }
        else {
            let checkSum = 0;
            let isSecond = false;
            for (let i = length - 1; i >= 0; i--) {
                let d = parseInt(value.charAt(i));
                if (isSecond == true)
                    d = d * 2;
                checkSum += Math.floor(d / 10);
                checkSum += d % 10;
                isSecond = !isSecond;
            }
            if ((checkSum % 10 == 0)) {
                input.cardName = cardName[0].name;
                return true;
            }
            else {
                return false;
            }
        }
    }
};
CardValidator = __decorate([
    class_validator_1.ValidatorConstraint()
], CardValidator);
exports.CardValidator = CardValidator;
//# sourceMappingURL=card.validation.js.map