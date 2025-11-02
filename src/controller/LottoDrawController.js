import outputView from '../view/OutputView.js';
import { drawManyLottos } from '../service/lotto/LottoDrawService.js';

export default class LottoDrawController {
  #purchaseQuantity;

  constructor(purchaseQuantity) {
    this.#purchaseQuantity = purchaseQuantity;
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
