import { NUMBER } from '../constant/number.js';
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

  #checkLottos(drawnLottos, { lotto, bonus }) {
    drawnLottos.forEach((drawnLotto) => {
      let matchesCount = lotto.countMatches(drawnLotto);
      if (matchesCount === 6) this.#statistics.sixMatches++;
      if (matchesCount === 5 && bonus.checkBonus(drawnLotto))
        this.#statistics.fiveMatchesWithBonus++;
      if (matchesCount === 5 && !bonus.checkBonus(drawnLotto))
        this.#statistics.fiveMatches++;
      if (matchesCount === 4) this.#statistics.fourMatches++;
      if (matchesCount === 3) this.#statistics.threeMatches++;
    });
  }

  #calculateTotalRateOfReturn() {
    const purchaseAmount = this.#purchaseQuantity * NUMBER.UNIT;
    const winningAmount =
      this.#statistics.sixMatches * NUMBER.FIRST_PLACE +
      this.#statistics.fiveMatchesWithBonus * NUMBER.SECOND_PLACE +
      this.#statistics.fiveMatches * NUMBER.THIRD_PLACE +
      this.#statistics.fourMatches * NUMBER.FOURTH_PLACE +
      this.#statistics.threeMatches * NUMBER.FIFTH_PLACE;

    return ((winningAmount / purchaseAmount) * 100).toFixed(1);
  }
}
