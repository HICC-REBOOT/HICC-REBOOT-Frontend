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
  article_id: number;
  grade: Grade;
  name: string;
  date: string;
  board: Board;
  subject: string;
}

export type Image = [string, string][];

export interface ArticleDetailType {
  grade: Grade;
  name: string;
  date: string;
  appendices: Image;
  board: Board;
  subject: string;
  content: string;
}

export interface ParentComment {
  article_id: number;
  comment_id: number;
  grade: Grade;
  name: string;
  date: string;
  content: string;
}
