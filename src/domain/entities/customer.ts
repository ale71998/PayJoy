import { Entity } from "../../../core/domain/Entity";

type CustomerProps = {
  name: number;
  address: string;
  email: string;
  phone: string;
  accountId: string;
};

export class Customer extends Entity<CustomerProps> {
  private constructor(props: CustomerProps, id?: string) {
    super(props, id);
  }

  public static create(props: CustomerProps, id?: string) {
    const customer = new Customer(props, id);

    return customer;
  }
}
