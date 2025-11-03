import { WINNING_AMOUNT } from './number.js';

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_QUANTITY: '개를 구매했습니다.',
  WINNING_STATISTICS: '\n당첨 통계\n---',
  THREE_MATCHES: `3개 일치 (${WINNING_AMOUNT.FIFTH_PLACE.toLocaleString()}원) - `,
  FOUR_MATCHES: `4개 일치 (${WINNING_AMOUNT.FOURTH_PLACE.toLocaleString()}원) - `,
  FIVE_MATCHES: `5개 일치 (${WINNING_AMOUNT.THIRD_PLACE.toLocaleString()}원) - `,
  FIVE_MATCHES_WITH_BONUS: `5개 일치, 보너스 볼 일치 (${WINNING_AMOUNT.SECOND_PLACE.toLocaleString()}원) - `,
  SIX_MATCHES: `6개 일치 (${WINNING_AMOUNT.FIRST_PLACE.toLocaleString()}원) - `,
  COUNTER: '개',
  TOTAL_RATE_OF_RETURN: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
});
