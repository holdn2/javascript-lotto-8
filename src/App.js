import { Console } from '@woowacourse/mission-utils';
import PurchaseController from './controller/PurchaseController.js';
import LottoDrawController from './controller/LottoDrawController.js';
import WinningNumberController from './controller/WinningNumberController.js';
import ResultController from './controller/ResultController.js';

class App {
  async run() {
    try {
      const purchaseAmount = await new PurchaseController().run();
      const drawnLottos = new LottoDrawController(purchaseAmount).run();
      const winningLotto = await new WinningNumberController().run();
      new ResultController(purchaseAmount, drawnLottos, winningLotto).run();
    } catch (e) {
      Console.print(e.message);
    }
  }
}

export default App;
