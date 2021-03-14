const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(word, key) {
    if(word.length > key.length) {
      key += key;
    }
      let alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'.split(', ').join('');
      
      let chyper = [];
      for(let i = 0; i < word.length; i++) {
        chyper[i]  = alphabet[(alphabet.indexOf(word[i]) + alphabet.indexOf(key[i])) % 26];
      }
      return chyper.join('').toUpperCase();
    }
  decrypt(chyper, key) {
    let word = [];
    let alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'.split(', ').join('');
    for(let i = 0; i < chyper.length; i++) {
      word[i]  = alphabet[(alphabet.indexOf(chyper[i]) - alphabet.indexOf(key[i]) + 26) % 26];
    }
    return word.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
