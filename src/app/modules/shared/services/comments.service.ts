import { Injectable } from '@angular/core';
import {CommentModel} from '../models/CommentModel';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const COMMENTS_BASE_URL = "http://localhost:8080/api/comments";
const SEARCH_BY_ENTITY_ID = "/search/findByEntityIdOrderByCreatedAtDesc?entityId=";

@Injectable()
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  createComment(comment: CommentModel) {
    return this.httpClient.post(`${COMMENTS_BASE_URL}/create`, comment);
  }

  editComment(commentId: string, comment: CommentModel) {
    return this.httpClient.patch(`${COMMENTS_BASE_URL}/${commentId}`, comment);
  }

  deleteComment(commentId: string) {
    return this.httpClient.delete(`${COMMENTS_BASE_URL}/${commentId}`);
  }

  getCommentsByEntityId(entityId: string) : Observable<CommentModel[]> {
    return this.httpClient.get(`${COMMENTS_BASE_URL}${SEARCH_BY_ENTITY_ID}${entityId}`)
      .pipe(map(response => response['_embedded']['comments']));
  }
}
