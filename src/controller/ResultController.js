import { NUMBER } from '../constant/number.js';
import { checkLottoMatch } from '../service/lotto/LottoCheckService.js';
import { calculateRateOfReturn } from '../service/lotto/RateOfReturnService.js';
import outputView from '../view/OutputView.js';

export default class ResultController {
  #statistics;
  #purchaseQuantity;

  constructor(purchaseQuantity, drawnLottos, winningLotto) {
    this.#purchaseQuantity = purchaseQuantity;
    this.#statistics = {
      threeMatches: NUMBER.ZERO,
      fourMatches: NUMBER.ZERO,
      fiveMatches: NUMBER.ZERO,
      fiveMatchesWithBonus: NUMBER.ZERO,
      sixMatches: NUMBER.ZERO,
    };
    this.#checkLottos(drawnLottos, winningLotto);
  }

  run() {
    outputView.printResultInform();
    outputView.printMatchesInform(this.#statistics);
    outputView.printTotalRateOfReturn(this.#calculateTotalRateOfReturn());
  }

  #checkLottos(drawnLottos, winningLotto) {
    checkLottoMatch(this.#statistics, drawnLottos, winningLotto);
  }

  #calculateTotalRateOfReturn() {
    return calculateRateOfReturn(this.#purchaseQuantity, this.#statistics);
  }
}
