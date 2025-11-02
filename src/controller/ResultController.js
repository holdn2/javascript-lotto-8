import { MATCH_COUNT, NUMBER, WINNIING_AMOUNT } from '../constant/number.js';
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
      if (matchesCount === MATCH_COUNT.SIX) this.#statistics.sixMatches++;
      if (matchesCount === MATCH_COUNT.FIVE && bonus.checkBonus(drawnLotto))
        this.#statistics.fiveMatchesWithBonus++;
      if (matchesCount === MATCH_COUNT.FIVE && !bonus.checkBonus(drawnLotto))
        this.#statistics.fiveMatches++;
      if (matchesCount === MATCH_COUNT.FOUR) this.#statistics.fourMatches++;
      if (matchesCount === MATCH_COUNT.TRHEE) this.#statistics.threeMatches++;
    });
  }

  #calculateTotalRateOfReturn() {
    const purchaseAmount = this.#purchaseQuantity * NUMBER.UNIT;
    const totalWinningAmount =
      this.#statistics.sixMatches * WINNIING_AMOUNT.FIRST_PLACE +
      this.#statistics.fiveMatchesWithBonus * WINNIING_AMOUNT.SECOND_PLACE +
      this.#statistics.fiveMatches * WINNIING_AMOUNT.THIRD_PLACE +
      this.#statistics.fourMatches * WINNIING_AMOUNT.FOURTH_PLACE +
      this.#statistics.threeMatches * WINNIING_AMOUNT.FIFTH_PLACE;

    return ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
  }
}
