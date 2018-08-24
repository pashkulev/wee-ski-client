export class AdminUserModel {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public country: string,
    public enabled: boolean,
    public createdAt: string,
    public updatedAt: string,
    public selfLink: string,
    public authorities: string[]
  ) {}
}
