import { Transaction } from "../../domain/entities/transaction";

export interface TransactionsRepository {
  findById(id: string): Promise<Transaction | null>;
}
