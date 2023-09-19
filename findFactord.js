function factors(x){
  arr = []
  if(x<0 || !Number.isInteger(x)){
    return -1
  }
  for (i=1; i<=x; i++){
    if (x % i === 0){
      arr.push(i)
    }
  }
  console.log(arr.reverse())
  return arr.reverse()
}
factors(54);
