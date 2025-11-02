import { ERROR_MESSAGE } from '../../constant/error.js';

export function validateInputBonusNumber(inputBonusNumber) {
  // 보너스 번호 입력이 숫자가 아닐 때 에러 발생
  if (isNaN(inputBonusNumber)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
}

export function validateBonusDuplicatedWithLotto(bonusNumber, lotto) {
  // 로또 번호 중 보너스 번호와 중복되는 것이 있다면 에러 발생
  if (lotto.containBonus(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_DUPLICATED_WITH_LOTTO);
  }
}
