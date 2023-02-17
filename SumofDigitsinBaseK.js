/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let rem=0,sum=0;
    while(n!=0){
  rem=n%k;
  sum+=rem
  n=Math.floor(n/k)


}
return sum
};
