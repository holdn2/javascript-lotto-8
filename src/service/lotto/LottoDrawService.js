import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../../constant/number.js';

function drawOneLotto() {
  const drawnLotto = Random.pickUniqueNumbersInRange(
    NUMBER.MIN,
    NUMBER.MAX,
    NUMBER.LOTTO_LENGTH,
  );
  return drawnLotto.sort((prev, next) => prev - next);
}

export function drawManyLotto(purchaseQuantity) {
  const totalDrawnLottos = [];
  for (let i = 0; i < purchaseQuantity; i++) {
    totalDrawnLottos.push(drawOneLotto());
  }

  return totalDrawnLottos;
}
