# javascript-lotto-precourse

## ❓ 기능 요구 사항

간단한 로또 발매기를 구현한다.

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

## ❓ 입출력 요구 사항

### 입력

- 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

```
14000
```

- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.

```
1,2,3,4,5,6
```

- 보너스 번호를 입력 받는다.

```
7
```

### 출력

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

- 당첨 내역을 출력한다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

- 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

```
총 수익률은 62.5%입니다.
```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

```
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```

### 실행 결과 예시

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

## 추가 결정 요구사항

- 입력에 포함된 모든 공백은 제거 후 판정한다.
- 로또 구입 금액, 보너스 번호 입력 시 숫자 외의 문자가 입력되면 에러를 발생시킨다.
- 당첨 번호 입력 시 숫자 또는 쉼표(`,`) 외의 문자가 입력되면 에러를 발생시킨다.
- 당첨 번호들과 보너스 번호 중 중복되는 숫자가 있다면 에러를 발생시킨다.
- 당첨 번호 입력 시 쉼표(`,`)는 연속으로 올 수 없다.
- 당첨 번호 입력 문자열의 맨 앞과 뒤는 숫자여야 한다.

## 👉 프로그램 흐름

### 1. **로또 구입 금액 입력 (`PurchaseController`)**

- 로또 구입 금액을 입력 받고 구매 수량(`purchaseQuantity`)을 반환한다.
- 입력 받은 문자열을 검증하여 아래 조건에 따라 에러를 발생시킨다. (`validatePurchaseAmount`)
  - 숫자가 아닌 경우
  - 0 이하로 입력한 경우
  - 1000 단위로 입력하지 않은 경우

### 2. **입력한 수량만큼의 로또 발행 및 출력 (`LottoDrawController`)**

- 구매 수량을 출력하고 수량만큼의 로또 배열을 생성한다. (`drawLottos`)
- 발행한 로또(`drawnLottos`)를 출력하고 반환한다.

### 3. **로또 당첨 번호 입력 (`WinningNumberController`)**

- **로또 당첨 번호**를 입력받고 문자열을 파싱, 정렬하여 배열(`inputWinningNumbersArray`)로 만든다.
- 당첨 번호 입력 시 아래 조건에 따라 에러를 발생시킨다.
  - 숫자 또는 쉼표(`,`) 외의 문자를 포함할 경우
  - 쉼표가 연속으로 왔을 경우
  - 문자열 맨 앞과 뒤의 문자가 숫자가 아닌 경우
- 당첨 번호 배열을 매개변수로 `Lotto` 클래스를 생성하고 아래 조건에 따라 에러를 발생시킨다.
  - 배열의 길이가 6이 아닌 경우 (= 번호가 6개가 아닌 경우)
  - 각 숫자가 범위(1~45)에 포함되는 않는 경우
  - 중복된 숫자가 있을 경우

### 4. **보너스 번호 입력 (`WinningNumberController`)**

- **보너스 번호**를 입력 받아 숫자 형태로 변환하고 아래 조건에 따라 에러를 발생시킨다.
  - 숫자가 아닐 경우
- 보너스 번호를 매개변수로 `Bonus` 클래스를 생성하고 아래 조건에 따라 에러를 발생시킨다.
  - 숫자가 범위(1~45)에 포함되는 않는 경우
  - 로또 번호에 중복되는 숫자가 있는 경우(`Lotto`의 `containBonus` 사용)

- 이 후, 생성된 `Lotto`와 `Bonus` 클래스를 반환한다.

### 5. **당첨 결과 계산 및 출력**

- 발행한 로또와 당첨 및 보너스 번호를 비교하여 당첨 통계를 구하고 이를 출력한다. (`checkLottos`)
- 통계를 통해 총 수익률을 계산하고 이를 출력한다. (`calculateTotalRateOfReturn`)

## 📍 함수

### Model

- **`Lotto`**
  - `containBonus` : 당첨 번호 중 보너스 번호와 중복되는 숫자가 있는지 여부를 반환한다.
  - `countMatches` : 발행한 로또 번호와 당첨 번호 중 일치하는 개수를 반환한다.
- **`Bonus`**
  - `checkBonus` : 발행한 로또 번호 중 5개가 일치한 경우, 보너스 번호와 일치하는지 여부를 반환한다.

### View

- **`InputView`**
  - `readLineIpnut` : 문자열을 입력받아 공백을 모두 제거하고 반환한다.
- **`OutputView`**
  - `printPurchaseQuantity` : 구매 수량을 출력한다.
  - `printDrawLottos` : 발행한 로또 배열을 포맷에 맞춰 출력한다.
  - `printResultInform` : 당첨 통계 안내 문구를 출력한다.
  - `printMatchesInform` : 당첨 통계를 일치 개수에 맞춰 출력한다.
  - `printTotalRateOfReturn` : 총 수익률을 출력한다.

### Controller

- **`PurchaseController`**
  - `validate` : 구매 금액을 검증한다.
- **`LottoDrawController`**
  - `drawLottos` : 구매 수량에 맞춰 로또를 발행한다.
- **`ResultController`**
  - `checkLottos` : 발행한 로또와 당첨 번호를 비교하여 통계를 업데이트한다.
  - `calculateTotalRateOfReturn` : 구매 금액과 당첨 통계를 통해 총 수익률을 계산하여 반환한다.

### Service

- **`LottoDrawService`**
  - `drawOneLotto` : `Random.pickUniqueNumbersInRange`을 사용하여 랜덤한 로또 1개를 발행하고 오름차순으로 정렬하여 반환한다.
  - `drawManyLottos` : 구매 수량만큼 `drawOneLotto`를 호출한 후 배열로 만들어 반환한다.
- **`LottoCheckService`**
  - `checkLottoMatch` : 발행한 로또와 당첨 번호를 비교하여 통계를 업데이트한다.
- **`RateOfReturnService`**
  - `calculateRateOfReturn` : 총 수익률을 계산한다.

### Utils

- `sortAscending` : 숫자 배열을 오름차순 정렬하여 배열로 반환한다.
- `parseNumbers` : `delimiter`를 기준으로 파싱하여 숫자 배열로 반환한다.

## 🔥 예외 처리

- [ERROR] 로또 구입 금액은 1,000원 단위로만 입력 가능합니다. (`validatePurchaseAmount`)
- [ERROR] 구입 금액은 양의 정수로 입력해야 합니다. (`validatePurchaseAmount`)
- [ERROR] 로또 당첨 번호와 보너스 번호는 범위 내 정수로만 입력 가능합니다. (범위: 1 ~ 45) (`validateNumberRange`)
- [ERROR] 로또 당첨 번호는 6개여야 합니다. (`validateLottoNumbersLength`)
- [ERROR] 구입 금액과 보너스 번호는 양의 정수로만 입력 가능합니다. (`validatePurchaseAmount`, `validateInputBonusNumber`)
- [ERROR] 로또 당첨 번호는 양의 정수 또는 쉼표(',')로만 입력 가능합니다. (`validateInputWinningNumbers`)
- [ERROR] 로또 당첨 번호 입력 시 쉼표(',')가 연속으로 올 수 없습니다. (`validateInputWinningNumbers`)
- [ERROR] 로또 당첨 번호 입력 시 맨 앞과 뒤는 숫자여야 합니다. (`validateInputWinningNumbers`)
- [ERROR] 로또 당첨 번호는 중복되는 숫자가 포함되지 않아야 합니다. (`validateLottoNumberDuplication`)
- [ERROR] 보너스 번호는 로또 당첨 번호와 중복되지 않아야 합니다. (`validateBonusDuplicatedWithLotto`)

## 📁 디렉토리 구조

```
src/
 ├─ 📄 index.js
 ├─ 📄 App.js                                # 전체 실행 흐름
 ├─ 📁 constant/
 │   ├─ 📄 error.js                          # 에러 메시지 상수
 │   ├─ 📄 inform.js                         # 입출력 메시지 상수
 │   ├─ 📄 mark.js                           # 기호
 │   ├─ 📄 number.js                         # 숫자 관련 상수
 │   └─ 📄 regex.js                          # 입력 검증 정규식
 ├─ 📁 controller/
 │   ├─ 📄 LottoDrawController.js            # 로또 추첨 흐름 제어
 │   ├─ 📄 PurchaseController.js             # 구입 금액 입력 및 유효성 검증
 │   ├─ 📄 ResultController.js               # 결과 계산 및 출력 제어
 │   └─ 📄 WinningNumberController.js        # 당첨 번호 입력 및 검증 제어
 ├─ 📁 model/
 │   ├─ 📄 Bonus.js                          # 보너스 번호 객체 정의
 │   ├─ 📄 Bonus.test.js                     # Bonus 클래스 테스트
 │   └─ 📄 Lotto.js                          # 당첨 로또 객체 정의
 │   └─ 📄 Lotto.test.js                     # Lotto 클래스 테스트
 ├─ 📁 service/
 │   ├─ 📁 lotto/
 │   │   ├─ 📄 LottoCheckService.js          # 로또 당첨 확인 로직
 │   │   ├─ 📄 LottoCheckService.test.js     # LottoCheckService 테스트
 │   │   ├─ 📄 LottoDrawService.js           # 랜덤 로또 번호 생성 로직
 │   │   ├─ 📄 LottoDrawService.test.js      # LottoDrawService 테스트
 │   │   └─ 📄 RateOfReturnService.js        # 수익률 계산 로직
 │   │   └─ 📄 RateOfReturnService.test.js   # RateOfReturnService 테스트
 │   └─ 📁 validator/
 │       ├─ 📄 bonusValidator.js             # 보너스 번호 유효성 검증
 │       ├─ 📄 lottoValidator.js             # 로또 번호 유효성 검증
 │       ├─ 📄 purchaseValidator.js          # 구입 금액 유효성 검증
 │       ├─ 📄 rangeValidator.js             # 번호 범위 검증
 │       └─ 📄 Validator.test.js             # 각 validator 테스트
 ├─ 📁 utils/
 │   └─ 📄 utils.js                          # 순수 유틸 함수
 │   └─ 📄 Utils.test.js                    # utils 테스트
 └─ 📁 view/
     ├─ 📄 InputView.js                      # 입력
     └─ 📄 OutputView.js                     # 출력
```

## 💻 참고자료

- [JavaScript Style Guide](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript?tab=readme-ov-file#table-of-contents)
- [Airbnb JavaScript Style Guide(번역)](https://github.com/ParkSB/javascript-style-guide)
- [우테코 mission-utils 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils?tab=readme-ov-file)
- [Using Matchers](https://jestjs.io/docs/using-matchers) / [Testing Asynchronous Code](https://jestjs.io/docs/asynchronous) / [Jest로 파라미터화 테스트하기](https://www.daleseo.com/jest-each/)
