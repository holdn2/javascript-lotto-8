import { Console } from '@woowacourse/mission-utils';
import { REGEX } from '../constant/regex.js';
import { MARK } from '../constant/mark.js';

const inputView = {
  async readLineInput(inputMessage) {
    const input = await Console.readLineAsync(inputMessage);
    return input.replace(REGEX.ALL_SPACES, MARK.EMPTY);
  },
};

export default inputView;
