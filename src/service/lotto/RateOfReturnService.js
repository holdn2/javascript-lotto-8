import { NUMBER, WINNIING_AMOUNT } from '../../constant/number.js';

export function calculateRateOfReturn(purchaseQuantity, statistics) {
  const purchaseAmount = purchaseQuantity * NUMBER.UNIT;
  const totalWinningAmount =
    statistics.sixMatches * WINNIING_AMOUNT.FIRST_PLACE +
    statistics.fiveMatchesWithBonus * WINNIING_AMOUNT.SECOND_PLACE +
    statistics.fiveMatches * WINNIING_AMOUNT.THIRD_PLACE +
    statistics.fourMatches * WINNIING_AMOUNT.FOURTH_PLACE +
    statistics.threeMatches * WINNIING_AMOUNT.FIFTH_PLACE;

  return ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
}
