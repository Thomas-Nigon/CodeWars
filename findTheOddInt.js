let A = [1,2,2,3,3,3,4,3,3,2,2,1,4]

function findOdd(A) {
    console.log(A)
    console.log(A.sort())
    let j = 1
    for (i=1; i<A.length+1; i++){
        if (A[i-1]=== A[i]){
        
            console.log('identique, on compte les itérations')
            j ++
            console.log(j)
        } else{
            console.log(' different on recommence zero et J=1')

            if (j%2 !== 0){
                 console.log('chiffre a trouver:',A[i-1])
            }
            j = 1
         }
    }
    return 0;
  }
  findOdd(A)
