import PurchaseController from './controller/PurchaseController.js';
import LottoDrawController from './controller/LottoDrawController.js';
import WinningNumberController from './controller/WinningNumberController.js';
import ResultController from './controller/ResultController.js';
import BonusNumberController from './controller/BonusNumberController.js';
import outputView from './view/OutputView.js';

class App {
  async run() {
    const purchaseAmount = await this.#runController(new PurchaseController());
    const drawnLottos = new LottoDrawController(purchaseAmount).run();
    const lotto = await this.#runController(new WinningNumberController());
    const bonus = await this.#runController(new BonusNumberController(lotto));
    new ResultController(purchaseAmount, drawnLottos, {
      lotto,
      bonus,
    }).run();
  }

  async #runController(controller) {
    while (true) {
      try {
        const value = await controller.run();
        return value;
      } catch (e) {
        outputView.printError(e.message);
      }
    }
  }
}

export default App;
