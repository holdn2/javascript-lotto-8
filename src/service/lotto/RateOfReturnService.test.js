import { calculateRateOfReturn } from './RateOfReturnService';

describe('calculateRateOfReturn', () => {
  test('구매 수량과 통계를 비교하여 계산 후 수익률을 알맞게 반환한다.', () => {
    // given
    const purchaseAmount = 8000;
    const statistics = {
      sixMatches: 0,
      fiveMatchesWithBonus: 0,
      fiveMatches: 0,
      fourMatches: 1,
      threeMatches: 2,
    };

    // when
    const result = calculateRateOfReturn(purchaseAmount, statistics);

    // then
    expect(result).toEqual('750.0');
  });
});
