import {
  validateLottoNumberDuplication,
  validateLottoNumbersLength,
  validateNumberRange,
} from '../service/validator/validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    validateLottoNumbersLength(this.#numbers);
    this.#numbers.forEach((number) => validateNumberRange(number));
    validateLottoNumberDuplication(this.#numbers);
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
