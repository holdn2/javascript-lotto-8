import { MATCH_COUNT } from '../../constant/number.js';

export function checkLottoMatch(statistics, drawnLottos, winningLotto) {
  const { lotto, bonus } = winningLotto;
  drawnLottos.forEach((drawnLotto) => {
    let matchesCount = lotto.countMatches(drawnLotto);
    if (matchesCount === MATCH_COUNT.SIX) statistics.sixMatches++;
    if (matchesCount === MATCH_COUNT.FIVE && bonus.checkBonus(drawnLotto))
      statistics.fiveMatchesWithBonus++;
    if (matchesCount === MATCH_COUNT.FIVE && !bonus.checkBonus(drawnLotto))
      statistics.fiveMatches++;
    if (matchesCount === MATCH_COUNT.FOUR) statistics.fourMatches++;
    if (matchesCount === MATCH_COUNT.TRHEE) statistics.threeMatches++;
  });
}
