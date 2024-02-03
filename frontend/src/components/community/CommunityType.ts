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
  imageExistence: boolean;
}

export interface ImageUrl {
  fileName: string;
  fileNameExtension: string;
  key: string;
  url: string;
}

export interface ImageUrlSend {
  fileName: string;
  fileNameExtension: string;
  key: string;
}

export interface ArticleDetailType {
  articleId: number;
  grade: Grade;
  name: string;
  isMine: boolean;
  date: string;
  images: ImageUrl[];
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

// 새로 등록은 file, 이미 있는 이미지면 src (수정을 위해)
export interface ImageInfo {
  file?: File;
  src: string;
}

export interface CommunityWriteForm {
  title: string;
  content: string;
  image: ImageInfo[];
}
