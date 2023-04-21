import { Entity } from "../../../core/domain/Entity";

type TransactionProps = {
  amount: number;
  status: string;
  description: string;
  paymentId: string;
  customerId: string;
  createdAt?: Date;
};

export class Transaction extends Entity<TransactionProps> {
  private constructor(props: TransactionProps, id?: string) {
    super(props, id);
  }

  public static create(props: TransactionProps, id?: string) {
    const transaction = new Transaction(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return transaction;
  }
}
