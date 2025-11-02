import inputView from '../view/InputView.js';
import { INPUT_MESSAGE } from '../constant/inform.js';
import { parseNumbers, sortAscending } from '../utils/utils.js';

import Lotto from '../model/Lotto.js';
import Bonus from '../model/Bonus.js';
import { validateInputWinningNumbers } from '../service/validator/lottoValidator.js';
import { validateInputBonusNumber } from '../service/validator/bonusValidator.js';

export default class WinningNumberController {
  async run() {
    const inputWinningNumbers = await inputView.readLineInput(
      INPUT_MESSAGE.WINNING_NUMBERS,
    );
    validateInputWinningNumbers(inputWinningNumbers);

    const inputWinningNumbersArray = sortAscending(
      parseNumbers(inputWinningNumbers),
    );

    const lotto = new Lotto(inputWinningNumbersArray);

    const inputBonusNumber = Number(
      await inputView.readLineInput(INPUT_MESSAGE.BONUS_NUMBER),
    );
    validateInputBonusNumber(inputBonusNumber);

    const bonus = new Bonus(Number(inputBonusNumber), lotto);

    return { lotto, bonus };
  }
}
