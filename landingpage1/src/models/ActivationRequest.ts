import {ActivationType} from "./ActivationType";

export class ActivationRequest {
  constructor(private activation_secret: string,
              private activation_type: ActivationType,
              private email_address: string) {
  }
}
