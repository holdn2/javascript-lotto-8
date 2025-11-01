import PurchaseController from './PurchaseController.js';
import inputView from '../view/InputView.js';
import { ERROR_MESSAGE } from '../constant/error.js';

jest.mock('../../src/view/InputView.js');

describe('로또 구매 금액에 관련된 PurchaseController 테스트', () => {
  let purchaseContoller;

  beforeEach(() => {
    purchaseContoller = new PurchaseController();
  });

  test('구입 금액이 숫자가 아니면 예외를 발생시킨다.', async () => {
    inputView.readLineInput.mockResolvedValue('abc12000');

    await expect(purchaseContoller.run()).rejects.toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('구입 금액이 0 이하이면 예외를 발생시킨다.', async () => {
    inputView.readLineInput.mockResolvedValue('-15000');

    await expect(purchaseContoller.run()).rejects.toThrow(
      ERROR_MESSAGE.NEGATIVE_OR_ZERO_PURCHASE_AMOUNT,
    );
  });

  test('구입 금액이 천원 단위가 아니면 예외를 발생시킨다.', async () => {
    inputView.readLineInput.mockResolvedValue('2500');

    await expect(purchaseContoller.run()).rejects.toThrow(
      ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT,
    );
  });

  test('올바른 구입 금액이면 구매 수량을 반환한다.', async () => {
    inputView.readLineInput.mockResolvedValue('3000');

    await expect(purchaseContoller.run()).resolves.toEqual(3);
  });
});
