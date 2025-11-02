import { ERROR_MESSAGE } from '../../constant/error.js';
import { NUMBER } from '../../constant/number.js';
import { REGEX } from '../../constant/regex.js';

export function validatePurchaseAmount(purchaseAmount) {
  if (isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

  if (purchaseAmount <= NUMBER.ZERO)
    throw new Error(ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT);

  if (purchaseAmount % NUMBER.UNIT !== NUMBER.ZERO)
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
}

export function validateInputWinningNumbers(inputWinningNumbers) {
  if (!REGEX.VALID_CHARACTER.test(inputWinningNumbers)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }
  // TODO: 쉼표 연속이나 앞뒤가 숫자가 아니면 에러
}

export function validateInputBonusNumber(inputBonusNumber) {
  if (isNaN(inputBonusNumber)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
}
