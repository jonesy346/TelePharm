import { numberToWords } from './index';
import t from 'tap';

t.test('numberToWords', (t) => {
  t.equal(numberToWords(1), 'one', 'one');
  t.equal(numberToWords(20), 'twenty', 'twenty');
  t.equal(numberToWords(31), 'thirty one', 'thirty one');
  t.equal(numberToWords(99), 'ninety nine', 'ninety nine');
  t.equal(numberToWords(15), 'fifteen', 'fifteen');
  t.equal(numberToWords(18), 'eighteen', 'eighteen');
  t.equal(numberToWords(11), 'eleven', 'eleven');
  t.equal(numberToWords(45), 'forty five', 'forty five');

  t.end();
});
