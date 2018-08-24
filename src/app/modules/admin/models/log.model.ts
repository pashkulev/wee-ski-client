export class LogModel {
  constructor(
    public id: string,
    public requestMethod: string,
    public uri: string,
    public statusCode: number,
    public identity: string,
    public timestamp: string,
    public selfLink: string
  ) {}
}
