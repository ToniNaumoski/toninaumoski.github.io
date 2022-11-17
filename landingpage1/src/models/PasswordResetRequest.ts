export class PasswordResetRequest {
  constructor(
    private token: string,
    private password: string,
    private password_confirm: string
  ) {
  }
}
