export function numberToWords(input: number) {
  const strInput = input.toString();
  let ans = '';
  if (input <= 20) {
    return numSet[input];
  }

  ans += numSet[Number(strInput[0]) * 10];
  ans += ' ';
  ans += numSet[Number(strInput[1])];

  return ans;
}

const numSet: any = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

/* Create a function in JavaScript or TypeScript to convert a number to words. */
