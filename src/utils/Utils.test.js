import { sortAscending, parseNumbers } from './utils';

describe('utils', () => {
  test('sortAscending 배열을 오름차순으로 정렬한다', () => {
    const result = sortAscending([5, 2, 9, 1]);
    expect(result).toEqual([1, 2, 5, 9]);
  });

  test('기본 구분자(,)로 숫자 문자열을 파싱한다', () => {
    const input = '1,2,3,4,5,6';
    const result = parseNumbers(input);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
