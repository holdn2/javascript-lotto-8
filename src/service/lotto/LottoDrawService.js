import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../../constant/number.js';
import { sortAscending } from '../../utils/utils.js';

function drawOneLotto() {
  const drawnLotto = Random.pickUniqueNumbersInRange(
    NUMBER.MIN,
    NUMBER.MAX,
    NUMBER.LOTTO_LENGTH,
  );
  return sortAscending(drawnLotto);
}

export function drawManyLottos(purchaseQuantity) {
  const totalDrawnLottos = [];
  for (let i = NUMBER.ZERO; i < purchaseQuantity; i++) {
    totalDrawnLottos.push(drawOneLotto());
  }

  return totalDrawnLottos;
}
