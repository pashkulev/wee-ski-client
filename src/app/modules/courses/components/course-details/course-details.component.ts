import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {CourseModel} from '../../models/course.model';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommentModel} from '../../../shared/models/CommentModel';
import {CommentsService} from '../../../shared/services/comments.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: string;
  course: CourseModel;
  isUserEnrolled: boolean;
  participantsCount: number;
  commentForm: FormGroup;
  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              public authenticationService: AuthenticationService,
              private commentsService: CommentsService,
              private coursesService: CoursesService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadCourse();
    if (this.authenticationService.isAuthenticated()) {
      this.loadComments();
    }

    this.commentForm = new FormGroup({
      content: new FormControl("", [Validators.required])
    });
  }

  enroll() {
    this.coursesService.enrollParticipant(this.id)
      .subscribe(response => {
        this.toastrService.success(response['message'], "Success");
        this.loadCourse();
      });
  }

  leaveComment() {
    let comment = new CommentModel(this.commentForm.get("content").value, this.id);
    this.commentsService.createComment(comment)
      .subscribe(response => {
        console.log(response);
        this.loadComments();
        this.commentForm.reset();
      })
  }

  deleteComment(commentId) {
    this.commentsService.deleteComment(commentId)
      .subscribe(() => {
        console.log("comment deleted");
        this.loadComments();
      });
  }

  private loadCourse() {
    this.coursesService.getCourseById(this.id)
      .subscribe(response => {
        this.course = response;

        if (response._embedded) {
          let participantsIds = response._embedded['participants'].map(p => p.id);
          this.participantsCount = participantsIds.length;
          this.isUserEnrolled = participantsIds.includes(this.authenticationService.getUserId());
        } else {
          this.participantsCount = 0;
          this.isUserEnrolled = false;
        }
      });
  }

  private loadComments() {
    this.commentsService.getCommentsByEntityId(this.id)
      .subscribe(comments => {
        this.comments = comments;
        console.log(this.comments);
      })
  }
}
