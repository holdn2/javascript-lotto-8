import { ERROR_MESSAGE } from '../../constant/error.js';
import { NUMBER } from '../../constant/number.js';
import { REGEX } from '../../constant/regex.js';

export function validatePurchaseAmount(purchaseAmount) {
  // 구매 금액 입력이 숫자가 아닐 때 에러 발생
  if (isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

  // 0 이하로 입력 시 에러 발생. 아무것도 입력하지 않았을 때도 발생
  if (purchaseAmount <= NUMBER.ZERO)
    throw new Error(ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT);

  // 1000 단위로 입력하지 않았을 때 에러 발생
  if (purchaseAmount % NUMBER.UNIT !== NUMBER.ZERO)
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
}

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

export function validateInputBonusNumber(inputBonusNumber) {
  // 보너스 번호 입력이 숫자가 아닐 때 에러 발생
  if (isNaN(inputBonusNumber)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
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

export function validateNumberRange(number) {
  // 로또 번호와 보너스번호가 범위(1~45)에서 벗어날 때 에러 발생
  if (number < NUMBER.MIN || number > NUMBER.MAX) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
  }
}

export function validateBonusDuplicatedWithLotto(bonusNumber, lotto) {
  // 로또 번호 중 보너스 번호와 중복되는 것이 있다면 에러 발생
  if (lotto.containBonus(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_DUPLICATED_WITH_LOTTO);
  }
}
