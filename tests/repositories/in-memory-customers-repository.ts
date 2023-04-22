import { CustomersRepository } from "../../src/app/repositories/CustomersRepository";
import { Customer } from "../../src/domain/entities/customer";

export class InMemoryCustomersRepository implements CustomersRepository {
  public items: Customer[] = [];
  async findById(id: string): Promise<Customer | null> {
    const customer = this.items.find((customer) => customer.id === id);

    if (!customer) {
      return null;
    }

    return customer;
  }
}
