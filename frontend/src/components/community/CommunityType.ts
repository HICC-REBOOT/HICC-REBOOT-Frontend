import { Grade } from '@components/type/CommonType';

export const BOARD = {
  FREE: 'FREE',
  ACTIVITY_PICTURE: 'ACTIVITY_PICTURE',
  EMPLOYMENT_INFORMATION: 'EMPLOYMENT_INFORMATION',
  HICCS_PICK: 'HICCS_PICK',
} as const;

type Union<T> = T[keyof T];

export type Board = Union<typeof BOARD>;

export interface Article {
  articleId: number;
  grade: Grade;
  name: string;
  date: string;
  board: Board;
  subject: string;
}

export type Image = [string, string][];

export interface ArticleDetailType {
  articleId: number;
  grade: Grade;
  name: string;
  isMine: boolean;
  date: string;
  urls: Image;
  board: Board;
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
}
