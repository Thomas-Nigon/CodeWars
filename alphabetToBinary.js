function alphToBin(){
    var a = "a";
    var b = "b"
   var  missingLetter =''
    console.log(a.charCodeAt(0))
    console.log(b.charCodeAt(0))
    console.log(String.fromCharCode(97))
}
alphToBin()

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }