export interface Option {
  id: string;
  value: string;
}

export const PET_TYPE: Option[] = [
  { id: 'dog', value: '강아지' },
  { id: 'cat', value: '고양이' },
];

export const NEUTER_STATUS: Option[] = [
  { id: 'true', value: '완료' },
  { id: 'false', value: '미완료' },
];

export const DIET_STATUS: Option[] = [
  { id: 'true', value: '필요함' },
  { id: 'false', value: '필요 없음' },
];
