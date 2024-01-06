export type ValueOptionType = {
  id: number;
  label: string;
};

export type CategoryOptionType = {
  id: number;
  label: string;
  values: ValueOptionType[];
};

const categoryOptions: CategoryOptionType[] = [
  {
    id: 1,
    label: '공과대학',
    values: [
      { id: 11, label: '기초과학과' },
      { id: 12, label: '건설환경공학과' },
      { id: 13, label: '전자전기공학부' },
      { id: 14, label: '컴퓨터공학과' },
      { id: 15, label: '산업데이터공학과' },
      { id: 16, label: '신소재공학전공' },
      { id: 17, label: '화학공학전공' },
      { id: 18, label: '기계시스템디자인공학과' },
    ],
  },
  {
    id: 2,
    label: '건축도시대학',
    values: [
      { id: 21, label: '건축학전공' },
      { id: 22, label: '실내건축학전공' },
    ],
  },
  {
    id: 3,
    label: '경영대학',
    values: [{ id: 31, label: '경영학전공' }],
  },
  {
    id: 4,
    label: '문과대학',
    values: [
      { id: 41, label: '영어영문학과' },
      { id: 42, label: '독어독문학과' },
      { id: 43, label: '불어불문학과' },
      { id: 44, label: '국어국문학과' },
    ],
  },
  {
    id: 5,
    label: '법과대학',
    values: [{ id: 51, label: '법학부' }],
  },
  {
    id: 6,
    label: '사범대학',
    values: [
      { id: 61, label: '수학교육과' },
      { id: 62, label: '국어교육과' },
      { id: 63, label: '영어교육과' },
      { id: 64, label: '역사교육과' },
      { id: 64, label: '교육학과' },
    ],
  },
  {
    id: 7,
    label: '미술대학',
    values: [
      { id: 71, label: '동양학과' },
      { id: 72, label: '회화과' },
      { id: 73, label: '판화과' },
      { id: 74, label: '조소과' },
      { id: 75, label: '목조형가구학과' },
      { id: 76, label: '예술학과' },
      { id: 77, label: '금속조형디자인과' },
      { id: 78, label: '도예유리과' },
      { id: 79, label: '섬유미술패션디자인과' },
      { id: 791, label: '자율전공' },
      { id: 792, label: '시각디자인전공' },
      { id: 793, label: '산업디자인전공' },
    ],
  },
  {
    id: 8,
    label: '기타단과대학',
    values: [
      { id: 81, label: '경제학전공' },
      { id: 82, label: '뮤지컬전공' },
      { id: 83, label: '실용음악전공' },
      { id: 84, label: '디자인경영융합학부' },
      { id: 85, label: '캠퍼스자율전공(서울)' },
      { id: 86, label: '교양교육원' },
    ],
  },
];

export default categoryOptions;
