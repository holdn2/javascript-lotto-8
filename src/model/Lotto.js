import { validateNumberRange } from '../service/validator/rangeValidator.js';
import {
  validateLottoNumberDuplication,
  validateLottoNumbersLength,
} from '../service/validator/lottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    validateLottoNumbersLength(numbers);
    numbers.forEach((number) => validateNumberRange(number));
    validateLottoNumberDuplication(numbers);
  }

  containBonus(number) {
    return this.#numbers.includes(number);
  }

  countMatches(drawnLotto) {
    let count = 0;
    drawnLotto.forEach((drawnNumber) => {
      if (this.#numbers.includes(drawnNumber)) count++;
    });

    return count;
  }
}

export default Lotto;
