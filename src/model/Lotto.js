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

  contains(number) {
    return this.#numbers.includes(number);
  }

  // TODO: 숫자 배열을 받아서 일치하는 개수를 반환하는 함수
}

export default Lotto;
