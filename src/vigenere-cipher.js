const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt(m, k) {
    if (m === undefined || k === undefined||m === "" || k === "") {
      throw new Error('Incorrect arguments!');
    }
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let message = m.toUpperCase();
    let key = k.toUpperCase();
    var wordMaxlength = message.length; //maxlength равен более длинному из сообщения или ключа
    var result = '';
    let c = '';
    for (let i = 0, j = 0; i < wordMaxlength; i++, j++) {
      let mi = abc.indexOf(
        message[i >= message.length ? i % message.length : i]
      ); //определяем индекс буквы из сообщения В АЛФАВИТЕ с учетом подгона длины сообщения - к ключу (если меньше, но обычно нет)
      let ki = abc.indexOf(key[j >= key.length ? j % key.length : j]); //буква ИЗ КЛЮЧА с учетом подгона длины ключа к сообщению (если короткий, а обычно так и есть)

      ki =
        typeof mode !== 'undefined' && mode.indexOf('decrypt') !== -1
          ? -ki
          : ki;
      if (
        abc.indexOf(message[i >= message.length ? i % message.length : i]) ===
        -1
      ) {
        c = message[i >= message.length ? i % message.length : i];
        j--;
      } else {
        c = abc[(abc.length + (mi + ki)) % abc.length]; //символ по таблице Виженера.
      }

      result += c; //Добавить символ к результату.
    }
    if (this.reverse === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
  decrypt(m, k) {
    if (m === undefined || k === undefined||m === "" || k === "") {
      throw new Error('Incorrect arguments!');
    }
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let message = m.toUpperCase();
    let key = k.toUpperCase();
    var wordMaxlength = message.length; //maxlength равен более длинному из сообщения или ключа
    var result = '';
    let c = '';
    for (let i = 0, j = 0; i < wordMaxlength; i++, j++) {
      let mi = abc.indexOf(
        message[i >= message.length ? i % message.length : i]
      ); //определяем индекс буквы из сообщения В АЛФАВИТЕ с учетом подгона длины сообщения - к ключу (если меньше, но обычно нет)
      let ki = abc.indexOf(key[j >= key.length ? j % key.length : j]); //буква ИЗ КЛЮЧА с учетом подгона длины ключа к сообщению (если короткий, а обычно так и есть)
      if (
        abc.indexOf(message[i >= message.length ? i % message.length : i]) ===
        -1
      ) {
        c = message[i >= message.length ? i % message.length : i];
        j--;
      } else {
        c = abc[(abc.length + (mi - ki)) % abc.length]; //символ по таблице Виженера.
      }
      result += c; //Добавить символ к результату.
    }
    if (this.reverse === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
