import { Transaction } from "../../domain/entities/transaction";
import { CustomersRepository } from "../repositories/CustomersRepository";
import { PaymentsRepository } from "../repositories/PaymentsRepository";

type CreatePaymentTransactionRequest = {
  amount: number;
  status: string;
  description: string;
  customerId: string;
  paymentId: string;
};

export class CreatePaymentTransaction {
  constructor(
    private customersRepository: CustomersRepository,
    private paymentsRepository: PaymentsRepository
  ) {}
  async execute({
    amount,
    status,
    description,
    customerId,
    paymentId,
  }: CreatePaymentTransactionRequest) {
    const customer = await this.customersRepository.findById(customerId);

    if (!customer) {
      throw new Error("Customer not found");
    }

    const payment = await this.paymentsRepository.findById(paymentId);

    if (!payment) {
      throw new Error("Payment not found");
    }

    const transaction = Transaction.create({
      amount,
      status,
      description,
      customerId,
      paymentId,
    });
    return transaction;
  }
}
