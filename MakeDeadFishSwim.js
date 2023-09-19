// Return the output array, and ignore all non-op characters
data = 'iiisxxxdoso'
function parse( data ){  
    result = 0
    const solution =[]
    let arr = data.split('')
/*     console.log(data)
    console.log(data.split('')) */
    for (i=0; i<data.length; i++){
        switch (arr[i]) {
            case 'i': result += 1;
             console.log('i:',result);
            break;

            case 's': result = result*result;
            console.log('s:',result);
            break;

            case 'd': result -= 1;
            console.log('d:',result);
            break;

            case 'o': solution.push(result);
            break;
            }
    } 
    console.log(solution)
  }
parse(data)  
  