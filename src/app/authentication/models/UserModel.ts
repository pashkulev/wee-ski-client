export class UserModel {
  constructor(
    public username: string,
    public token: string,
    public imageUrl: string,
    public authorities: string[]
  ) {}
}
