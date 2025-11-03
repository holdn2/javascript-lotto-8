import outputView from '../view/OutputView.js';
import { drawManyLottos } from '../service/lotto/LottoDrawService.js';
import { NUMBER } from '../constant/number.js';

export default class LottoDrawController {
  #purchaseQuantity;

  constructor(purchaseAmount) {
    this.#purchaseQuantity = purchaseAmount / NUMBER.UNIT;
  }

  run() {
    outputView.printPurchaseQuantity(this.#purchaseQuantity);

    const drawnLottos = this.#drawLottos();

    outputView.printDrawLottos(drawnLottos);

    return drawnLottos;
  }

  #drawLottos() {
    return drawManyLottos(this.#purchaseQuantity);
  }
}
