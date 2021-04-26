"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../../client/config");
const config_2 = require("../../config");
const uuidv4_1 = require("uuidv4");
const moment = require("moment");
let PaymentService = class PaymentService {
    constructor() {
        this.paymentArray = [];
    }
    createPayment(transaction) {
        let transactionData = {};
        let result = {};
        transactionData.transactionId = uuidv4_1.uuid();
        result.transactionId = transactionData.transactionId;
        transactionData.sentTo = (config_1.ClientInfo.filter(client => client.id === transaction.clientId)[0]).name;
        transactionData.sentFrom = transaction.buyer.name;
        transactionData.type = transaction.payment.type;
        transactionData.amount = transaction.payment.amount;
        if (transaction.payment.type === 'boleto') {
            transactionData.status = 'pending';
            transactionData.boleto = this.generateBoleto();
            transactionData.expiryDate = moment().add(3, 'days').format('DD-MM-YYYY');
            result.boleto = transactionData.boleto;
        }
        if (transaction.payment.type === 'card') {
            transactionData.status = config_2.TransactionStatus[Math.floor(Math.random() * 2)];
            transactionData.time = moment(new Date()).format('DD-MM-YYYY HH:MM:SS');
            result.status = transactionData.status;
        }
        this.paymentArray.push(transactionData);
        return result;
    }
    generateBoleto() {
        return Math.floor(10000 + Math.random() * 90000).toString() + '.' +
            Math.floor(10000 + Math.random() * 90000).toString() + ' ' +
            Math.floor(10000 + Math.random() * 90000).toString() + '.' +
            Math.floor(100000 + Math.random() * 900000).toString() + ' ' +
            Math.floor(10000 + Math.random() * 90000).toString() + '.' +
            Math.floor(10000 + Math.random() * 90000).toString() + ' ' +
            Math.floor(1 + Math.random() * 9).toString() + ' ' +
            Math.floor(Math.pow(10, 14) + Math.random() * 9).toFixed().toString();
    }
    getPayment(id) {
        console.log(this.paymentArray, 'payment array');
        return this.paymentArray.filter(payment => payment.transactionId === id)[0];
    }
};
PaymentService = __decorate([
    common_1.Injectable()
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map