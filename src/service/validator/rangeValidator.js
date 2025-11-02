import { ERROR_MESSAGE } from '../../constant/error.js';
import { NUMBER } from '../../constant/number.js';

export function validateNumberRange(number) {
  // 로또 번호와 보너스번호가 범위(1~45)에서 벗어날 때 에러 발생
  if (number < NUMBER.MIN || number > NUMBER.MAX) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
  }
}
