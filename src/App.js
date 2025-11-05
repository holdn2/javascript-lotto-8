import PurchaseController from './controller/PurchaseController.js';
import LottoDrawController from './controller/LottoDrawController.js';
import WinningNumberController from './controller/WinningNumberController.js';
import ResultController from './controller/ResultController.js';
import BonusNumberController from './controller/BonusNumberController.js';
import outputView from './view/OutputView.js';

class App {
  #purchaseAmount;
  #lotto;
  #bonus;

  async run() {
    await this.#runPurchaseController();
    const drawnLottos = new LottoDrawController(this.#purchaseAmount).run();
    await this.#runWinningNumberController();
    await this.#runBonusNumberController();
    new ResultController(this.#purchaseAmount, drawnLottos, {
      lotto: this.#lotto,
      bonus: this.#bonus,
    }).run();
  }

  async #runPurchaseController() {
    while (true) {
      try {
        this.#purchaseAmount = await new PurchaseController().run();
        break;
      } catch (e) {
        outputView.printError(e.message);
      }
    }
  }

  async #runWinningNumberController() {
    while (true) {
      try {
        this.#lotto = await new WinningNumberController().run();
        break;
      } catch (e) {
        outputView.printError(e.message);
      }
    }
  }

  async #runBonusNumberController() {
    while (true) {
      try {
        this.#bonus = await new BonusNumberController(this.#lotto).run();
        break;
      } catch (e) {
        outputView.printError(e.message);
      }
    }
  }
}

export default App;
