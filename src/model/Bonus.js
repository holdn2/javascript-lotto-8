import {
  validateBonusDuplicatedWithLotto,
  validateNumberRange,
} from '../service/validator/validators.js';

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, lotto) {
    this.#bonusNumber = bonusNumber;
    validateNumberRange(bonusNumber);
    validateBonusDuplicatedWithLotto(bonusNumber, lotto);
  }

  // TODO: 숫자 배열을 받아 보너스 번호를 포함하는지 여부 반환하는 함수 반환
}

export default Bonus;
