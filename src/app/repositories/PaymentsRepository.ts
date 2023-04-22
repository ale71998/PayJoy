import { Payment } from "../../domain/entities/payment";

export interface PaymentsRepository {
  findById(id: string): Promise<Payment | null>;
}
