import { ERROR_MESSAGE } from '../../constant/error.js';
import { NUMBER } from '../../constant/number.js';

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
