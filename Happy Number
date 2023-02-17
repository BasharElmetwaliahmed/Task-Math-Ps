/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
let sum=0;
let rem=0;
let flag=true
let arr=[]
while(sum!=1){
while(n!=0 ){
   rem=n%10;
  sum+=Math.pow(rem,2);
  n=Math.floor(n/10)
   
}
if(arr.includes(sum)){
  flag=false
  break
}
  n=sum
  arr.push(sum);
  if(sum!=1){
  sum=0;
  }
}

    return flag
};
