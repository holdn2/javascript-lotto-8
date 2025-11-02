import { ERROR_MESSAGE } from '../../constant/error.js';
import { NUMBER } from '../../constant/number.js';
import { REGEX } from '../../constant/regex.js';

export function validateInputWinningNumbers(inputWinningNumbers) {
  // 당첨 번호 입력이 숫자 또는 쉼표 외의 문자를 포함하면 에러 발생
  if (!REGEX.VALID_CHARACTER.test(inputWinningNumbers)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }

  // 쉼표가 연속으로 왔을 때 에러 발생
  if (REGEX.CONSECUTIVE_COMMAS.test(inputWinningNumbers)) {
    throw new Error(ERROR_MESSAGE.INVALID_CONSECUTIVE_COMMAS);
  }

  // 숫자가 양끝에 있지 않을 때 에러 발생
  if (!REGEX.NUMBER_START_END.test(inputWinningNumbers)) {
    throw new Error(ERROR_MESSAGE.NUMBER_START_END);
  }
}
export function validateLottoNumbersLength(numbers) {
  // 로또 번호가 6개가 아니면 에러 발생
  if (numbers.length !== NUMBER.LOTTO_LENGTH) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
  }
}

export function validateLottoNumberDuplication(numbers) {
  // 로또 번호에 중복 숫자가 있으면 에러 발생
  const hasDuplication = new Set(numbers).size !== numbers.length;
  if (hasDuplication) throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
}
