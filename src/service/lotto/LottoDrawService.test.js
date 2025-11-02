import { Random } from '@woowacourse/mission-utils';
import { drawManyLottos } from './LottoDrawService.js';
import { NUMBER } from '../../constant/number.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe('LottoDrawService', () => {
  test('구매 개수만큼 로또 배열을 생성한다', () => {
    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([3, 1, 2, 5, 4, 6])
      .mockReturnValueOnce([10, 7, 8, 9, 11, 12]);

    const result = drawManyLottos(2);

    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(2);

    result.forEach((lotto) => {
      expect(lotto).toHaveLength(NUMBER.LOTTO_LENGTH);
      expect([...lotto]).toEqual([...lotto].sort((a, b) => a - b));
    });
  });
});
