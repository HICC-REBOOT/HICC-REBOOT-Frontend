import { Grade } from '@components/type/CommonType';

export interface Article {
  articleId: number;
  grade: Grade;
  name: string;
  date: string;
  board: string;
  subject: string;
  imageExistence: boolean;
}

export interface ImageUrl {
  fileName: string;
  fileNameExtension: string;
  key: string;
  url: string;
}

export type NewImageUrl = Omit<ImageUrl, 'url'>;

export interface ArticleDetailType {
  articleId: number;
  grade: Grade;
  name: string;
  isMine: boolean;
  date: string;
  images: ImageUrl[];
  board: string;
  subject: string;
  content: string;
}

export interface ParentComment {
  articleId: number;
  commentId: number;
  grade: Grade;
  name: string;
  isMine: boolean;
  date: string;
  content: string;
  isDeleted: boolean;
}

export interface NestedCommentType {
  articleId: number;
  commentId: number;
  parentCommentId: number;
  grade: Grade;
  name: string;
  isMine: boolean;
  date: string;
  content: string;
  isDeleted: boolean;
}

export interface CommunityWriteForm {
  title: string;
  content: string;
}
