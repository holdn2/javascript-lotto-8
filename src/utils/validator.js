import { ERROR_MESSAGE } from '../constant/error.js';
import { NUMBER } from '../constant/number.js';

export function validatePurchaseAmount(purchaseAmount) {
  if (isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

  if (purchaseAmount <= NUMBER.ZERO)
    throw new Error(ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT);

  if (purchaseAmount % NUMBER.UNIT !== NUMBER.ZERO)
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
}
