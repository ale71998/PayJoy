import { Entity } from "./../../core/domain/Entity";

type CustomerProps = {
  name: string;
  address: string;
  email: string;
  phone: string;
  accountId: string;
};

export class Customer extends Entity<CustomerProps> {
  private constructor(props: CustomerProps, id?: string) {
    super(props, id);
  }

  get id() {
    return this._id;
  }

  static create(props: CustomerProps, id?: string) {
    const customer = new Customer(props, id);

    return customer;
  }
}
