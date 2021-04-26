import { IPaymentType } from '../../config';
export declare class PaymentService {
    private paymentArray;
    createPayment(transaction: IPaymentType): any;
    generateBoleto(): string;
    getPayment(id: string): any;
}
