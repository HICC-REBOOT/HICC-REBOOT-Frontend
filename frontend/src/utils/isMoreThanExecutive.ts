import { Grade } from '@components/type/CommonType';

function isMoreThanExecutive(grade: Grade) {
  return grade === 'PRESIDENT' || grade === 'EXECUTIVE';
}

export default isMoreThanExecutive;
