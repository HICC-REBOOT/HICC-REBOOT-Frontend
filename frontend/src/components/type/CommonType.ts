type Union<T> = T[keyof T];

export const GRADE = {
  PRESIDENT: 'PRESIDENT',
  EXECUTIVE: 'EXECUTIVE',
  NORMAL: 'NORMAL',
  APPLICANT: 'APPLICANT',
} as const;

export type Grade = Union<typeof GRADE>;

export const GRADE_ENUM: Record<Grade, string> = {
  PRESIDENT: '회장',
  EXECUTIVE: '운영진',
  NORMAL: '일반',
  APPLICANT: '승인대기자',
};
