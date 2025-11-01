import { ERROR_MESSAGE } from '../src/constant/error.js';
import { validatePurchaseAmount } from '../src/utils/validator.js';

describe('로또 구매 금액 입력에 대한 검증 테스트', () => {
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
