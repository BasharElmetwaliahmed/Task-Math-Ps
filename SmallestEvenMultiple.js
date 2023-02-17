/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let k=n;
let num=0;
while(true){
  
  if(k%2==0 && k%n==0){
 num=k;
 break
  }
  k++;
}
return num
};
