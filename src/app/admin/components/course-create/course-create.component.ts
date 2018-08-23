import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CoursesService} from '../../../courses/service/courses.service';
import {HttpEventType} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {

  courseForm: FormGroup;
  levels: string[];
  disciplines: string[];
  selectedImage: File;
  uploadProgress: number;

  constructor(private toastrService: ToastrService,
              private coursesService: CoursesService,
              private router: Router) {
    this.initForm();
    this.levels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
    this.disciplines = ["ALPINE SKIING", "FREE RIDE", "FREE STYLE", "TOURING"];
    this.selectedImage = null;
    this.uploadProgress = -1;
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

    if (!this.selectedImage) {
      this.toastrService.error("Course Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("title", this.title.value);
    formData.append("level", this.level.value);
    formData.append("discipline", this.discipline.value.split(" ").join("_"));
    formData.append("description", this.description.value);
    formData.append("price", this.price.value);
    formData.append("imageFile", this.selectedImage, this.selectedImage.name);
    formData.append("startDate", this.formatDate(this.startDate.value));
    formData.append("endDate", this.formatDate(this.endDate.value));

    this.coursesService.createCourse(formData)
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

  private initForm() {
    this.courseForm = new FormGroup({
      title: new FormControl("", [
        Validators.required
      ]),
      level: new FormControl("", [
        Validators.required
      ]),
      discipline: new FormControl("", [
        Validators.required
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(20)
      ]),
      price: new FormControl("", [
        Validators.required
      ]),
      startDate: new FormControl("", [
        Validators.required
      ]),
      endDate: new FormControl("", [
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
