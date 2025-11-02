import inputView from '../view/InputView.js';
import { INPUT_MESSAGE } from '../constant/inform.js';
import Lotto from '../model/Lotto.js';
import { parseNumbers, sortAscending } from '../utils/utils.js';
import Bonus from '../model/Bonus.js';
import {
  validateInputBonusNumber,
  validateInputWinningNumbers,
} from '../service/validator/validators.js';

export default class WinningNumberController {
  async run() {
    const inputWinningNumbers = await inputView.readLineInput(
      INPUT_MESSAGE.WINNING_NUMBERS,
    );
    validateInputWinningNumbers(inputWinningNumbers);

    const inputWinningNumbersArray = sortAscending(
      parseNumbers(inputWinningNumbers),
    );

    const winningLotto = new Lotto(inputWinningNumbersArray);

    const inputBonusNumber = Number(
      await inputView.readLineInput(INPUT_MESSAGE.BONUS_NUMBER),
    );
    validateInputBonusNumber(inputBonusNumber);

    const bonus = new Bonus(Number(inputBonusNumber), winningLotto);

    return { winningLotto, bonus };
  }
}
