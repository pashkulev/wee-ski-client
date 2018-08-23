export class CourseModel {
  constructor(
    public id: string,
    public title: string,
    public level: string,
    public discipline: string,
    public description: string,
    public price: number,
    public image: string,
    public startDate: string,
    public endDate: string
  ) {}
}
