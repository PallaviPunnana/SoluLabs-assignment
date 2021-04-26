import { CreatePaymentDto } from 'src/payment/dtos/CreatePaymentDto';
import { GetPaymentDto } from 'src/payment/dtos/GetPaymentDto';
import { PaymentService } from 'src/payment/service/payment/payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    createPayment(req: any, input: CreatePaymentDto, res: any): Promise<void>;
    getPayment(req: any, input: GetPaymentDto, res: any): Promise<void>;
}
