import Bonus from './Bonus.js';
import Lotto from './Lotto.js';

describe('Bonus 클래스 테스트', () => {
  test('checkBonus 발행한 로또 번호 중 보너스 번호와 일치하는 숫자가 있는지 여부를 반환한다.', () => {
    // given
    const drawnLotto1 = [1, 2, 3, 4, 5, 6];
    const drawnLotto2 = [1, 2, 3, 4, 5, 15];

    // when
    const lotto = new Lotto([7, 8, 9, 10, 11, 12]);
    const bonus = new Bonus(6, lotto);

    // then
    const hasBonus = bonus.checkBonus(drawnLotto1);
    const noBonus = bonus.checkBonus(drawnLotto2);

    expect(hasBonus).toEqual(true);
    expect(noBonus).toEqual(false);
  });
});
