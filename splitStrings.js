function solution(str){
    console.log('longueur str:', str.length)
   let arr1 = []
   let arr2 = []
   arr1 = str.split('')
   console.log('arr1',arr1)
    if (str.length % 2 !== 0){
      // console.log('impair')
       arr1.push('_')
      console.log('impair array:',arr1)
       }for (i=1; i<arr1.length; i+=2){
     arr2.push(arr1[i-1]+arr1[i])
     console.log(arr2)
   
   }
    
   return arr2
}