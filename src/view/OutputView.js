import { Console } from '@woowacourse/mission-utils';
import { MARK } from '../constant/mark.js';
import { OUTPUT_MESSAGE } from '../constant/inform.js';

const outputView = {
  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printPurchaseQuantity(purchaseQuantity) {
    Console.print(
      `${MARK.NEW_LINE}${purchaseQuantity}${OUTPUT_MESSAGE.PURCHASE_QUANTITY}`,
    );
  },

  printDrawLottos(drawnLottos) {
    drawnLottos.forEach((lotto) => {
      const lottoString = `[${lotto.join(', ')}]`;
      Console.print(lottoString);
    });
  },

  printResultInform() {
    Console.print(OUTPUT_MESSAGE.WINNING_STATISTICS);
  },

  printMatchesInform(statistics) {
    const matchesInform = [
      `${OUTPUT_MESSAGE.THREE_MATCHES}${statistics.threeMatches}${OUTPUT_MESSAGE.COUNTER}`,
      `${OUTPUT_MESSAGE.FOUR_MATCHES}${statistics.fourMatches}${OUTPUT_MESSAGE.COUNTER}`,
      `${OUTPUT_MESSAGE.FIVE_MATCHES}${statistics.fiveMatches}${OUTPUT_MESSAGE.COUNTER}`,
      `${OUTPUT_MESSAGE.FIVE_MATCHES_WITH_BONUS}${statistics.fiveMatchesWithBonus}${OUTPUT_MESSAGE.COUNTER}`,
      `${OUTPUT_MESSAGE.SIX_MATCHES}${statistics.sixMatches}${OUTPUT_MESSAGE.COUNTER}`,
    ].join('\n');

    Console.print(matchesInform);
  },

  printTotalRateOfReturn(totalRateOfReturn) {
    Console.print(OUTPUT_MESSAGE.TOTAL_RATE_OF_RETURN(totalRateOfReturn));
  },
};

export default outputView;
