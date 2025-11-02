import { ERROR_MESSAGE } from '../../constant/error.js';
import { validatePurchaseAmount } from './PurchaseValidator.js';
import { validateNumberRange } from './rangeValidator.js';
import {
  validateInputWinningNumbers,
  validateLottoNumbersLength,
  validateLottoNumberDuplication,
} from './lottoValidator.js';
import {
  validateInputBonusNumber,
  validateBonusDuplicatedWithLotto,
} from './bonusValidator.js';
import Lotto from '../../model/Lotto.js';

describe('purchaseValidator 로또 구매 금액 입력에 대한 검증 테스트', () => {
  test.each([
    // given
    {
      desc: '숫자가 아닌 문자가 포함되면 에러를 발생시킨다.',
      input: '1231000a',
      expected: ERROR_MESSAGE.NOT_A_NUMBER,
    },
    {
      desc: '음수라면 에러를 발생시킨다.',
      input: '-5000',
      expected: ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT,
    },
    {
      desc: '0이라면 에러를 발생시킨다.',
      input: '0',
      expected: ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT,
    },
    {
      desc: '1,000원 단위가 아니라면 에러를 발생시킨다.',
      input: '1500',
      expected: ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT,
    },
  ])('$desc', ({ input, expected }) => {
    // when & then
    expect(() => validatePurchaseAmount(input)).toThrow(expected);
  });
});

describe('rangeValidator 당첨 로또 번호와 보너스 번호 범위에 대한 테스트', () => {
  test('번호가 45보다 크면 예외가 발생한다.', () => {
    // given
    const number = 60;

    // when & then
    expect(() => validateNumberRange(number)).toThrow(
      ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE,
    );
  });
});

describe('lottoValidator 당첨 로또 번호 입력에 대한 검증 테스트', () => {
  test.each([
    // given
    {
      desc: '숫자 또는 쉼표 외의 문자를 포함하면 에러를 발생시킨다.',
      input: '12,31,10,a',
      func: validateInputWinningNumbers,
      expected: ERROR_MESSAGE.INVALID_CHARACTER,
    },
    {
      desc: '쉼표가 연속으로 왔을 때 에러를 발생시킨다.',
      input: '10,,15,1,2,3',
      func: validateInputWinningNumbers,
      expected: ERROR_MESSAGE.INVALID_CONSECUTIVE_COMMAS,
    },
    {
      desc: '숫자가 양끝에 있지 않으면 에러를 발생시킨다.',
      input: '10,1,2,3,',
      func: validateInputWinningNumbers,
      expected: ERROR_MESSAGE.NUMBER_START_END,
    },
    {
      desc: '로또 번호가 6개가 아니면 에러를 발생시킨다.',
      input: '1,2,3,4,5',
      func: validateLottoNumbersLength,
      expected: ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH,
    },
    {
      desc: '중복 숫자가 있으면 에러를 발생시킨다.',
      input: '1,1,2,3,4,5',
      func: validateLottoNumberDuplication,
      expected: ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER,
    },
  ])('$desc', ({ input, func, expected }) => {
    // when & then
    expect(() => func(input)).toThrow(expected);
  });
});

describe('bonusValidator 보너스 번호 입력에 대한 테스트', () => {
  test('숫자가 아니면 예외가 발생한다.', () => {
    // given
    const input = '10a';

    // when & then
    expect(() => validateInputBonusNumber(input)).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('로또 번호 중 보너스 번호와 중복되는 것이 있다면 예외가 발생한다.', () => {
    // given
    const bonusNumber = 10;

    // when
    const lotto = new Lotto([1, 2, 3, 4, 5, 10]);

    // then
    expect(() => validateBonusDuplicatedWithLotto(bonusNumber, lotto)).toThrow(
      ERROR_MESSAGE.BONUS_DUPLICATED_WITH_LOTTO,
    );
  });
});
