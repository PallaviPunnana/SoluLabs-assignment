export declare class CardDto {
    cardHolderName: string;
    cardName: string;
    cardNumber: string;
    cardExpirationDate: string;
    cardCVV: string;
}
declare class Buyer {
    name: string;
    email: string;
    cpf: string;
}
declare class Payment {
    amount: number;
    type: string;
    card: CardDto;
}
export declare class CreatePaymentDto {
    buyer: Buyer;
    payment: Payment;
}
export {};
