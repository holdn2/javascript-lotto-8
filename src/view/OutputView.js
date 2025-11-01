import { Console } from '@woowacourse/mission-utils';
import { MARK } from '../constant/mark.js';
import { OUTPUT_MESSAGE } from '../constant/inform.js';

const outputView = {
  printPurchaseQuantity(purchaseQuantity) {
    Console.print(
      `${MARK.NEW_LINE}${purchaseQuantity}${OUTPUT_MESSAGE.PURCHASE_QUANTITY}`,
    );
  },
};

export default outputView;
