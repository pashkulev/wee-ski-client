import {UserModel} from '../../users/models/user.model';

export class CommentModel {

  id: string;
  author: UserModel;
  createdAt: string;
  content: string;
  entityId: string;

  constructor(content: string, entityId: string) {
    this.content = content;
    this.entityId = entityId;
  }
}
