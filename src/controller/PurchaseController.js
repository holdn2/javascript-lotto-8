import inputView from '../view/InputView.js';
import { INPUT_MESSAGE } from '../constant/inform.js';
import { validatePurchaseAmount } from '../utils/validator.js';
import { NUMBER } from '../constant/number.js';

export default class PurchaseController {
  #purchaseAmount;

  async run() {
    this.#purchaseAmount = Number(
      await inputView.readLineInput(INPUT_MESSAGE.PURCHASE_AMOUNT),
    );

    this.#validate();

    return this.#purchaseAmount / NUMBER.UNIT;
  }

  #validate() {
    validatePurchaseAmount(this.#purchaseAmount);
  }
}
