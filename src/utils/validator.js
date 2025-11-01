import { ERROR_MESSAGE } from '../constant/error.js';

export function validatePurchaseAmount(purchaseAmount) {
  if (isNaN(purchaseAmount)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);

  if (purchaseAmount <= 0)
    throw new Error(ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT);

  if (purchaseAmount % 1000 !== 0)
    throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
}
