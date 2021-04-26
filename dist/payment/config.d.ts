export interface IPaymentType {
    clientId: number;
    buyer: IBuyer;
    payment: IPayment;
}
interface IBuyer {
    name: string;
    email: string;
    cpf: string;
}
interface IPayment {
    amount: number;
    type: string;
    card?: ICard;
}
interface ICard {
    cardHolderName: string;
    cardNumber: string;
    cardExpirationDate: string;
    cardCVV: string;
}
export interface ITransaction {
    transactionId: string;
    sentTo: string;
    sentFrom: string;
    amount: number;
    time?: string;
    status: string;
    type: string;
    expiryDate?: string;
    boleto?: string;
}
export declare const TransactionStatus: string[];
export declare const CardIssuers: {
    name: string;
    length: number[];
    prefixes: string[];
}[];
export {};
