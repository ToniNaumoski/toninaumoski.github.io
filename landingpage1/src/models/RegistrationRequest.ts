import {ActivationType} from "./ActivationType";

export class RegistrationRequest {
  constructor(private consent_approved: boolean,
              private full_name: string,
              private email_address: string,
              private activation_type: ActivationType,
              private mobile_number: string,
              private password: string) {
  }
}
