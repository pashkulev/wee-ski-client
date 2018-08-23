import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseModel} from '../../models/course.model';
import {CoursesService} from '../../../courses/service/courses.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  id: string;
  course: CourseModel;
  courseForm: FormGroup;
  levels: string[];
  disciplines: string[];
  selectedImage: File;
  uploadProgress: number;

  constructor(private toastrService: ToastrService,
              private coursesService: CoursesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.levels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
    this.disciplines = ["ALPINE SKIING", "FREE RIDE", "FREE STYLE", "TOURING"];
    this.selectedImage = null;
    this.uploadProgress = -1;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.coursesService.getCourseById(this.id)
      .subscribe(response => {
        console.log(response);
        this.initForm(<CourseModel>response);
      })
  }

  get title() {
    return this.courseForm.get("title");
  }

  resetTitle() {
    this.courseForm.controls['title'].setValue("");
  }

  get level() {
    return this.courseForm.get("level");
  }

  get discipline() {
    return this.courseForm.get("discipline");
  }

  get description() {
    return this.courseForm.get("description");
  }

  resetDescription() {
    this.courseForm.controls['description'].setValue("");
  }

  get price() {
    return this.courseForm.get("price");
  }

  get startDate() {
    return this.courseForm.get("startDate");
  }

  get endDate() {
    return this.courseForm.get("endDate");
  }

  publish() {
    if (this.courseForm.invalid) {
      this.toastrService.info("Don't skip required fields!", "Oops");
      return;
    }

    const formData = new FormData();
    if (this.selectedImage) {
      formData.append("imageFile", this.selectedImage, this.selectedImage.name);
    }

    formData.append("title", this.title.value);
    formData.append("level", this.level.value);
    formData.append("discipline", this.discipline.value.split(" ").join("_"));
    formData.append("description", this.description.value);
    formData.append("price", this.price.value);
    formData.append("startDate", this.formatDate(this.startDate.value));
    formData.append("endDate", this.formatDate(this.endDate.value));

    console.log(formData);
    console.log(this.courseForm.value);

    this.coursesService.updateCourse(this.id, formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(event.loaded / event.total * 100);
        } else if (event.type === HttpEventType.Response) {
          this.toastrService.success(event.body['message'], "Success");
          setTimeout(() => this.router.navigate(["/admin/courses"]), 2000);
        }
      });
  }

  onFileChange(event) {
    this.selectedImage = <File>event.target.files[0];
  }

  private initForm(courseModel: CourseModel) {
    this.courseForm = new FormGroup({
      title: new FormControl(courseModel.title, [
        Validators.required
      ]),
      level: new FormControl(courseModel.level, [
        Validators.required
      ]),
      discipline: new FormControl(courseModel.discipline.split("_").join(" "), [
        Validators.required
      ]),
      description: new FormControl(courseModel.description, [
        Validators.required,
        Validators.minLength(20)
      ]),
      price: new FormControl(courseModel.price, [
        Validators.required
      ]),
      startDate: new FormControl(courseModel.startDate, [
        Validators.required
      ]),
      endDate: new FormControl(courseModel.endDate, [
        Validators.required
      ])
    });
  }

  private formatDate(dateString: string) : string {
    let date = new Date(dateString);
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }
}
