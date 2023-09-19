var number = 13
var j = 0
function divisors() {
    console.log("inside")
    var divisors = [];
    for (i=2 ; i<number ; i++){
        console.log("loop i=", i)
        var div = number/i
      if(Number.isInteger(div) == true){
       console.log("divisable")

       divisors[j] = i
       j++
 
      }     
    } if (divisors.length == 0){
        console.log(number, "is prime")
      }  else {
        console.log(divisors)
      }    
  }
  divisors()
/*   console.log(divisors(number)) */



function divisors(integer) {
  var diviseurs = []
  for (i=2; i<integer-1 ; i++){
    if(integer % i === 0){
    diviseurs.push(i)    
    } 
  } if (diviseurs.length ==0){
    return (`${integer} is prime`)
  }else return diviseurs
 }