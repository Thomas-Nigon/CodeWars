function binaryAgent() {
    var whoTookTheCarKey = ['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010'];
    var stringed = whoTookTheCarKey.toString();
    console.log("stringed:",stringed)
    var newBin = stringed.split(",");
    console.log(newBin.length)
    var binCode = [];
    
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
      }
    return binCode.join("");
    }
    console.log(binaryAgent())



