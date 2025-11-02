import { validateNumberRange } from '../service/validator/rangeValidator.js';
import { validateBonusDuplicatedWithLotto } from '../service/validator/bonusValidator.js';

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, lotto) {
    this.#bonusNumber = bonusNumber;
    validateNumberRange(bonusNumber);
    validateBonusDuplicatedWithLotto(bonusNumber, lotto);
  }

  checkBonus(drawnLotto) {
    return drawnLotto.includes(this.#bonusNumber);
  }
}

export default Bonus;
