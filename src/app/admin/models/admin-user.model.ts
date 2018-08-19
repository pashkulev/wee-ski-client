export class AdminUserModel {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public country: string,
    public enabled: boolean,
    public selfLink: string,
    public authorities: string[]
  ) {}
}
