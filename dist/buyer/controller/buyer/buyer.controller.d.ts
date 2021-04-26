import { CardDto } from 'src/payment/dtos/CreatePaymentDto';
export declare class BuyerController {
    createPayment(input: CardDto, res: any): Promise<void>;
}
