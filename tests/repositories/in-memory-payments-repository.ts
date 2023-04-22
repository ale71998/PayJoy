import { PaymentsRepository } from "../../src/app/repositories/PaymentsRepository";
import { Payment } from "../../src/domain/entities/payment";

export class InMemoryPaymentsRepository implements PaymentsRepository {
  public items: Payment[] = [];
  async findById(id: string): Promise<Payment | null> {
    const payment = this.items.find((payment) => payment.id === id);

    if (!payment) {
      return null;
    }

    return payment;
  }
}
