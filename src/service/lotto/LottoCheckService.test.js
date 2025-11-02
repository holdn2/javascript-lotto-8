import { checkLottoMatch } from './LottoCheckService.js';
import Lotto from '../../model/Lotto.js';
import Bonus from '../../model/Bonus.js';

describe('checkLottoMatch', () => {
  test('일치 개수에 따라 통계(statistics)가 올바르게 증가한다', () => {
    // given
    const statistics = {
      sixMatches: 0,
      fiveMatchesWithBonus: 0,
      fiveMatches: 0,
      fourMatches: 0,
      threeMatches: 0,
    };

    const drawnLottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 8, 10],
    ];

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonus = new Bonus(7, lotto);
    const winningLotto = { lotto, bonus };

    // when
    checkLottoMatch(statistics, drawnLottos, winningLotto);

    // then
    expect(statistics).toEqual({
      sixMatches: 1,
      fiveMatchesWithBonus: 1,
      fiveMatches: 0,
      fourMatches: 1,
      threeMatches: 0,
    });
  });
});
