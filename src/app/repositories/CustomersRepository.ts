import { Customer } from "../../domain/entities/customer";

export interface CustomersRepository {
  findById(id: string): Promise<Customer | null>;
}
