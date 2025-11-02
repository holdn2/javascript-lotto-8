export const ERROR_MESSAGE = Object.freeze({
  INVALID_PURCHASE_AMOUNT:
    '[ERROR] 로또 구입 금액은 1,000원 단위로만 입력 가능합니다.',
  NEGATIVE_OR_ZERO_PURCHASE_AMOUNT:
    '[ERROR] 구입 금액은 양의 정수로 입력해야 합니다.',
  INVALID_LOTTO_NUMBER_RANGE:
    '[ERROR] 로또 당첨 번호와 보너스 번호는 범위 내 정수로만 입력 가능합니다. (범위: 1 ~ 45)',
  INVALID_LOTTO_NUMBER_LENGTH: '[ERROR] 로또 당첨 번호는 6개여야 합니다.',
  NOT_A_NUMBER:
    '[ERROR] 구입 금액과 보너스 번호는 양의 정수로만 입력 가능합니다.',
  INVALID_CHARACTER:
    "[ERROR] 로또 당첨 번호는 양의 정수 또는 쉼표(',')로만 입력 가능합니다.",
  INVALID_CONSECUTIVE_COMMAS:
    "[ERROR] 로또 당첨 번호 입력 시 쉼표(',')가 연속으로 올 수 없습니다.",
  NUMBER_START_END:
    '[ERROR] 로또 당첨 번호 입력 시 맨 앞과 뒤는 숫자여야 합니다.',
  DUPLICATE_LOTTO_NUMBER:
    '[ERROR] 로또 당첨 번호는 중복되는 숫자가 포함되지 않아야 합니다.',
  BONUS_DUPLICATED_WITH_LOTTO:
    '[ERROR] 보너스 번호는 로또 당첨 번호와 중복되지 않아야 합니다.',
});
