import { WINNING_AMOUNT } from '../../constant/number.js';

export function calculateRateOfReturn(purchaseAmount, statistics) {
  const totalWinningAmount =
    statistics.sixMatches * WINNING_AMOUNT.FIRST_PLACE +
    statistics.fiveMatchesWithBonus * WINNING_AMOUNT.SECOND_PLACE +
    statistics.fiveMatches * WINNING_AMOUNT.THIRD_PLACE +
    statistics.fourMatches * WINNING_AMOUNT.FOURTH_PLACE +
    statistics.threeMatches * WINNING_AMOUNT.FIFTH_PLACE;

  return ((totalWinningAmount / purchaseAmount) * 100).toFixed(1);
}
