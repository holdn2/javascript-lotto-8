import Lotto from './Lotto.js';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('containBonus 보너스 번호와 중복되는 숫자가 있는지 여부를 반환한다.', () => {
    // given
    const bonusNumber1 = 5;
    const bonusNumber2 = 15;

    // when
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // then
    const contained = lotto.containBonus(bonusNumber1);
    const nonContained = lotto.containBonus(bonusNumber2);

    expect(contained).toEqual(true);
    expect(nonContained).toEqual(false);
  });
});
