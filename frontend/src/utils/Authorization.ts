import { Grade } from '@components/type/CommonType';

class Authorization {
  static isMoreThanExecutive(grade: Grade) {
    return grade === 'PRESIDENT' || grade === 'EXECUTIVE';
  }

  static isPresident(grade: Grade) {
    return grade === 'PRESIDENT';
  }
}

export default Authorization;
