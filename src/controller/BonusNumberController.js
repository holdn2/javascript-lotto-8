import inputView from '../view/InputView.js';
import { INPUT_MESSAGE } from '../constant/inform.js';
import Bonus from '../model/Bonus.js';
import { validateInputBonusNumber } from '../service/validator/bonusValidator.js';

export default class BonusNumberController {
  #lotto;
  constructor(lotto) {
    this.#lotto = lotto;
  }
  async run() {
    const inputBonusNumber = Number(
      await inputView.readLineInput(INPUT_MESSAGE.BONUS_NUMBER),
    );
    validateInputBonusNumber(inputBonusNumber);

    const bonus = new Bonus(Number(inputBonusNumber), this.#lotto);

    return bonus;
  }
}
