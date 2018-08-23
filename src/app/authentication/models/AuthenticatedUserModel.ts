export class AuthenticatedUserModel {
  constructor(
    public username: string,
    public token: string,
    public profilePicture: string,
    public authorities: string[]
  ) {}
}
