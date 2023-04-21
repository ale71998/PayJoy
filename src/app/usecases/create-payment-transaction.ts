import { Transaction } from "../../domain/entities/transaction";

type CreatePaymentTransactionRequest = {
  amount: number;
  status: string;
  description: string;
  customerId: string;
  paymentId: string;
};

class CreatePaymentTransaction {
  execute({
    amount,
    status,
    description,
    customerId,
    paymentId,
  }: CreatePaymentTransactionRequest) {
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
