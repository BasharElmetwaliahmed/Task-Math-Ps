/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1){
  return true
}
if(n<=0){
  return false
}
if(n==2){
    return true
}
for(let i=2;i<n;i++){
    if(Math.pow(2,i)==n){
      return true
    }
    if(Math.pow(2,i)>=n){
    return false;
    }

}

    
};
