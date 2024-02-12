import { KeyboardEvent } from 'react';

class KeyboardUtils {
  static onPressEnterByInput(event: KeyboardEvent<HTMLInputElement>, func: () => void) {
    if (func === undefined) return;

    if (event.key === 'Enter') {
      func();
    }
  }
}

export default KeyboardUtils;
