import { Entity } from "../../../core/domain/Entity";

type AccountProps = {
  accountType: string;
  balance: number;
  currency: number;
};

export class Account extends Entity<AccountProps> {
  private constructor(props: AccountProps, id?: string) {
    super(props, id);
  }

  public static create(props: AccountProps, id?: string) {
    const account = new Account(props, id);

    return account;
  }
}
