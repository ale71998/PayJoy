import { Entity } from "../../../core/domain/Entity";

type VerificationProps = {
  verifiedType: string;
  verifiedStatus: string;
  verifiedAt: Date;
};

export class Verification extends Entity<VerificationProps> {
  private constructor(props: VerificationProps, id?: string) {
    super(props, id);
  }

  public static create(props: VerificationProps, id?: string) {
    const verification = new Verification(props, id);

    return verification;
  }
}
