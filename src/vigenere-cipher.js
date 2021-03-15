const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('');
    key = key.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    let cipher = '';
  
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        
        cipher += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(j % key.length) - 130) % 26 + 65);
        j++;
      }
      else cipher += message[i];
    }
    if (this.direction) return cipher;   
    else return cipher.split('').reverse().join('');
  }  

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('');
    key = key.toUpperCase();
    message = message.toUpperCase();
    let j = 0;
    let dCrypt = '';
    for (let i = 0; i < message.length; i++){
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        dCrypt += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(j % key.length)) % 26 + 65);
        j++;
      }
      else dCrypt += message[i];
    }
    if (this.direction) return dCrypt;   
    else return dCrypt.split('').reverse().join('');
  }
  }

module.exports = VigenereCipheringMachine;
