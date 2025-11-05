import inputView from '../view/InputView.js';
import { INPUT_MESSAGE } from '../constant/inform.js';
import { parseNumbers, sortAscending } from '../utils/utils.js';
import Lotto from '../model/Lotto.js';
import { validateInputWinningNumbers } from '../service/validator/lottoValidator.js';

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

    return lotto;
  }
}
