import { InMemoryCustomersRepository } from "../../../tests/repositories/in-memory-customers-repository";
import { InMemoryPaymentsRepository } from "../../../tests/repositories/in-memory-payments-repository";
import { Customer } from "../../domain/entities/customer";
import { Payment } from "../../domain/entities/payment";
import { CreatePaymentTransaction } from "./create-payment-transaction";

describe("Create a Payment Transaction", () => {
  it("should be able to create a new payment transaction", async () => {
    const customerRepository = new InMemoryCustomersRepository();
    const paymentRepository = new InMemoryPaymentsRepository();
    const sut = new CreatePaymentTransaction(
      customerRepository,
      paymentRepository
    );

    const customer = Customer.create({
      name: "any_name",
      email: "any_email",
      address: "any_address",
      phone: "any_phone",
      accountId: "any_account_id",
    });

    const payment = Payment.create({
      paymentAmount: 100,
      paymentMethod: "credit_card",
      paymentStatus: "pending",
    });

    customerRepository.items.push(customer);
    paymentRepository.items.push(payment);

    const transaction = await sut.execute({
      amount: 100,
      status: "pending",
      description: "Payment",
      customerId: customer.id,
      paymentId: payment.id,
    });

    expect(transaction).toBeTruthy();
  });
});
